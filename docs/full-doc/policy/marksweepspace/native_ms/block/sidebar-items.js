window.SIDEBAR_ITEMS = {"enum":[["BlockState","The block allocation state."]],"struct":[["Block","A 64KB region for MiMalloc. This is also known as MiMalloc page. We try to avoid getting confused with the OS 4K page. So we call it block. This type always holds a non-zero address to refer to a block. The underlying `NonZeroUsize` type ensures the size of `Option<Block>` is the same as `Block` itself."]]};