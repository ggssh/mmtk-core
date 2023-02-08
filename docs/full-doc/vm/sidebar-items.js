window.SIDEBAR_ITEMS = {"constant":[["DEFAULT_LOG_MAX_ALIGNMENT",""],["DEFAULT_LOG_MIN_ALIGNMENT",""]],"enum":[["GCThreadContext","Thread context for the spawned GC thread.  It is used by spawn_gc_thread."]],"mod":[["active_plan",""],["collection",""],["edge_shape",""],["object_model",""],["reference_glue",""],["scanning",""]],"struct":[["VMGlobalLogBitSpec",""],["VMLocalForwardingBitsSpec",""],["VMLocalForwardingPointerSpec",""],["VMLocalLOSMarkNurserySpec",""],["VMLocalMarkBitSpec",""],["VMLocalPinningBitSpec",""]],"trait":[["ActivePlan","VM-specific methods for the current plan."],["Collection","VM-specific methods for garbage collection."],["EdgeVisitor","Callback trait of scanning functions that report edges."],["Finalizable","A finalizable object for MMTk. MMTk needs to know the actual object reference in the type, while a binding can use this type to store some runtime information about finalizable objects. For example, for bindings that allows multiple finalizer methods with one object, they can define the type as a tuple of `(object, finalize method)`, and register different finalizer methods to MMTk for the same object. The implementation should mark theird method implementations as inline for performance."],["ObjectModel","VM-specific methods for object model."],["ObjectTracer","Callback trait of scanning functions that directly trace through edges."],["ObjectTracerContext","An `ObjectTracerContext` gives a GC worker temporary access to an `ObjectTracer`, allowing the GC worker to trace objects.  This trait is intended to abstract out the implementation details of tracing objects, enqueuing objects, and creating work packets that expand the transitive closure, allowing the VM binding to focus on VM-specific parts."],["ReferenceGlue","VM-specific methods for reference processing, including weak references, and finalizers. We handle weak references and finalizers differently:"],["RootsWorkFactory","Root-scanning methods use this trait to create work packets for processing roots."],["Scanning","VM-specific methods for scanning roots/objects."],["VMBinding","The `VMBinding` trait associates with each trait, and provides VM-specific constants."]]};