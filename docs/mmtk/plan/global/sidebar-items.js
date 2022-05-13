initSidebarItems({"enum":[["AllocationSemantics","Allocation semantics that MMTk provides. Each allocation request requires a desired semantic for the object to allocate."],["GcStatus",""]],"fn":[["create_gc_worker_context","Create thread local GC worker."],["create_mutator",""],["create_plan",""],["create_vm_space",""]],"struct":[["BasePlan","BasePlan should contain all plan-related state and functions that are fundamental to all plans.  These include VM-specific (but not plan-specific) features such as a code space or vm space, which are fundamental to all plans for a given VM.  Features that are common to many (but not intrinsically all) plans should instead be included in CommonPlan."],["CommonPlan","CommonPlan is for representing state and features used by many plans, but that are not fundamental to all plans.  Examples include the Large Object Space and an Immortal space.  Features that are fundamental to all plans must be included in BasePlan."]],"trait":[["Plan","A plan describes the global core functionality for all memory management schemes. All global MMTk plans should implement this trait."],["PlanTraceObject","A plan that uses `PlanProcessEdges` needs to provide an implementation for this trait. Generally a plan does not need to manually implement this trait. Instead, we provide a procedural macro that helps generate an implementation. Please check `macros/trace_object`."]]});