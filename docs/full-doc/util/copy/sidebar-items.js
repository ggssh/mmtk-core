window.SIDEBAR_ITEMS = {"constant":[["MAX_COPYSPACE_COPY_ALLOCATORS",""],["MAX_IMMIX_COPY_ALLOCATORS",""],["MAX_IMMIX_HYBRID_COPY_ALLOCATORS",""]],"enum":[["CopySelector",""],["CopySemantics","CopySemantics describes the copying operation. It depends on the kinds of GC, and the space. For example, in a mature/major GC in a generational plan, the nursery should have `PromoteToMature` while the mature space should have `Mature`. This enum may be expanded in the future to describe more semantics."]],"struct":[["CopyConfig","A configuration for GCWorkerCopyContext. Similar to a `MutatorConfig`, We expect each copying plan to provide a CopyConfig."],["GCWorkerCopyContext","The thread local struct for each GC worker for copying. Each GC worker should include one instance of this struct for copying operations."]],"type":[["CopySpaceMapping",""]]};