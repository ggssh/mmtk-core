use std::{sync::atomic::{AtomicBool, AtomicUsize, Ordering}};
use crate::vm::*;
use crate::policy::space::Space;
use super::{ImmixSpace, block::{Block, BlockState}};


#[derive(Debug, Default)]
pub struct Defrag {
    in_defrag_collection: AtomicBool,
    defrag_space_exhausted: AtomicBool,
    // spill_mark_histograms: Vec<Vec<usize>>,
    mark_histogram: Vec<AtomicUsize>,
}

impl Defrag {
    const NUM_BINS: usize = (Block::LINES >> 1) + 1;

    pub fn new() -> Self {
        let mark_histogram = (0..Self::NUM_BINS).map(|_| Default::default()).collect();
        Self {
            mark_histogram,
            ..Default::default()
        }
    }

    #[inline(always)]
    pub fn in_defrag(&self) -> bool {
        self.in_defrag_collection.load(Ordering::SeqCst)
    }

    pub fn decide_whether_to_defrag(&self, emergency_collection: bool, collection_attempts: usize, exhausted_reusable_space: bool) {
        let in_defrag = !super::DEFRAG && (emergency_collection || (collection_attempts > 1) || !exhausted_reusable_space);
        // println!("Defrag: {}", in_defrag);
        self.in_defrag_collection.store(in_defrag, Ordering::SeqCst)
    }

    pub fn defrag_headroom_pages<VM: VMBinding>(&self, space: &ImmixSpace<VM>) -> usize {
        space.get_page_resource().reserved_pages() * 2 / 100
    }

    pub fn prepare<VM: VMBinding>(&self, space: &ImmixSpace<VM>) {
        debug_assert!(!super::BLOCK_ONLY);
        // println!("reusable blocks: {}", space.reusable_blocks.len());
        let mut available_clean_pages_for_defrag = VM::VMActivePlan::global().get_total_pages() as isize - VM::VMActivePlan::global().get_pages_reserved() as isize + self.defrag_headroom_pages(space) as isize;
        if available_clean_pages_for_defrag < 0 { available_clean_pages_for_defrag = 0 };
        // println!("available_clean_pages_for_defrag: {}", available_clean_pages_for_defrag);
        let mut available_reusable_lines = {
            let mut lines = 0usize;
            for block in &space.reusable_blocks {
                // println!("reusable block: {:?}", block);
                for line in block.lines() {
                    if !line.is_marked(space.line_mark_state.load(Ordering::SeqCst)) {
                        lines += 1;
                    }
                }
            }
            lines
        };
        // println!("available_reusable_lines: {}", available_reusable_lines);
        available_reusable_lines += (available_clean_pages_for_defrag as usize) << Block::LOG_LINES;
        available_reusable_lines = available_reusable_lines >> 1;
        // println!("total available_reusable_lines: {}", available_reusable_lines);
        self.defrag_space_exhausted.store(false, Ordering::SeqCst);

        if self.in_defrag() {
            let mut threshold = Self::NUM_BINS;
            let mut lines_left = available_reusable_lines;
            loop {
                if threshold == 0 { break }
                let lines_to_evacuate = self.mark_histogram[threshold - 1].load(Ordering::SeqCst);
                if lines_to_evacuate > lines_left { break }
                threshold -= 1;
                lines_left -= lines_to_evacuate;
            }
            // println!("threshold = {}", threshold);
            for chunk in space.chunk_map.allocated_chunks() {
                for block in chunk.blocks() {
                    if block.get_state() != BlockState::Unallocated && block.get_state() != BlockState::Reusable {
                        let holes = block.count_holes(space.line_mark_state.load(Ordering::SeqCst));
                        if holes >= threshold {
                            block.set_as_defrag_source();
                        }
                    }
                }
            }
        }
    }

    pub fn release<VM: VMBinding>(&self, space: &ImmixSpace<VM>) {
        debug_assert!(!super::BLOCK_ONLY);
        // Construct mark histogram
        for entry in &self.mark_histogram {
            entry.store(0, Ordering::SeqCst);
        }
        let line_mark_state = space.line_mark_state.load(Ordering::SeqCst);
        let mut total_used_lines = 0;
        for chunk in space.chunk_map.allocated_chunks() {
            for block in chunk.blocks() {
                if block.get_state() != BlockState::Unallocated && block.get_state() != BlockState::Unmarked {
                    debug_assert!(!block.is_defrag_source());
                    let marked_lines = {
                        let mut marked_lines = 0;
                        for line in block.lines() {
                            if line.is_marked(space.line_mark_state.load(Ordering::SeqCst)) {
                                marked_lines += 1;
                            }
                        }
                        marked_lines
                    };
                    total_used_lines += marked_lines;
                    let holes = block.count_holes(line_mark_state);
                    let old_value = self.mark_histogram[holes].load(Ordering::SeqCst);
                    self.mark_histogram[holes].store(old_value + marked_lines, Ordering::SeqCst);
                }
            }
        }
        // println!("mark_histogram: {:?}", self.mark_histogram.iter().map(|x| x.load(Ordering::SeqCst)).collect::<Vec<_>>());
        // println!("total_used_lines: {:?}", total_used_lines);
    }
}