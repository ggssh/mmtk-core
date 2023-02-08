window.SIDEBAR_ITEMS = {"enum":[["AllocationSemantics","Allocation semantics that MMTk provides. Each allocation request requires a desired semantic for the object to allocate."],["GcStatus",""]],"fn":[["create_gc_worker_context","Create thread local GC worker."],["create_mutator",""],["create_plan",""],["create_vm_space",""]],"struct":[["BasePlan","BasePlan should contain all plan-related state and functions that are fundamental to all plans.  These include VM-specific (but not plan-specific) features such as a code space or vm space, which are fundamental to all plans for a given VM.  Features that are common to many (but not intrinsically all) plans should instead be included in CommonPlan."],["CommonPlan","CommonPlan is for representing state and features used by many plans, but that are not fundamental to all plans.  Examples include the Large Object Space and an Immortal space.  Features that are fundamental to all plans must be included in BasePlan."],["CreateGeneralPlanArgs","Args needed for creating any plan. This includes a set of contexts from MMTK or global. This is passed to each plan’s constructor."],["CreateSpecificPlanArgs","Args needed for creating a specific plan. This includes plan-specific args, such as plan constrainst and their global side metadata specs. This is created in each plan’s constructor, and will be passed to `CommonPlan` or `BasePlan`. Also you can create `PlanCreateSpaceArg` from this type, and use that to create spaces."]],"trait":[["Plan","A plan describes the global core functionality for all memory management schemes. All global MMTk plans should implement this trait."],["PlanTraceObject","A plan that uses `PlanProcessEdges` needs to provide an implementation for this trait. Generally a plan does not need to manually implement this trait. Instead, we provide a procedural macro that helps generate an implementation. Please check `macros/trace_object`."]]};