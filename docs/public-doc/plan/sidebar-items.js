window.SIDEBAR_ITEMS = {"constant":[["DEFAULT_PLAN_CONSTRAINTS",""],["GENCOPY_CONSTRAINTS",""],["GENIMMIX_CONSTRAINTS",""],["IMMIX_CONSTRAINTS",""],["MARKCOMPACT_CONSTRAINTS",""],["MS_CONSTRAINTS",""],["NOGC_CONSTRAINTS",""],["PP_CONSTRAINTS",""],["SS_CONSTRAINTS",""],["STICKY_IMMIX_CONSTRAINTS",""]],"enum":[["AllocationSemantics","Allocation semantics that MMTk provides. Each allocation request requires a desired semantic for the object to allocate."],["BarrierSelector","BarrierSelector describes which barrier to use."]],"struct":[["Mutator","A mutator is a per-thread data structure that manages allocations and barriers. It is usually highly coupled with the language VM. It is recommended for MMTk users 1) to have a mutator struct of the same layout in the thread local storage that can be accessed efficiently, and 2) to implement fastpath allocation and barriers for the mutator in the VM side."],["ObjectsClosure","A transitive closure visitor to collect all the edges of an object."],["PlanConstraints","This struct defines plan-specific constraints. Most of the constraints are constants. Each plan should declare a constant of this struct, and use the constant wherever possible. However, for plan-neutral implementations, these constraints are not constant."],["VectorQueue","An implementation of `ObjectQueue` using a `Vec`."]],"trait":[["MutatorContext","Each GC plan should provide their implementation of a MutatorContext. Note that this trait is no longer needed as we removed per-plan mutator implementation and we will remove this trait as well in the future."],["ObjectQueue","This trait represents an object queue to enqueue objects during tracing."],["Plan","A plan describes the global core functionality for all memory management schemes. All global MMTk plans should implement this trait."]],"type":[["VectorObjectQueue",""]]};