window.SIDEBAR_ITEMS = {"constant":[["DEFAULT_MAX_NURSERY","The default max nursery size. This does not affect the actual space we create as nursery. It is only used in the GC trigger check."],["DEFAULT_MIN_NURSERY","The default min nursery size. This does not affect the actual space we create as nursery. It is only used in the GC trigger check."],["NURSERY_SIZE","The default nursery space size."]],"enum":[["AffinityKind","AffinityKind describes how to set the affinity of GC threads. Note that we currently assume that each GC thread is equivalent to an OS or hardware thread."],["GCTriggerSelector",""],["NurseryKind","Different nursery types."],["NurseryZeroingOptions",""],["PlanSelector",""]],"fn":[["always_valid",""]],"macro":[["options",""]],"struct":[["MMTKOption","An MMTk option of a given type. This type allows us to store some metadata for the option. To get the value of an option, you can simply dereference it (for example, *options.threads)."],["NurserySize","An option that provides a min/max interface to MMTk and a Bounded/Fixed interface to the user/VM."],["Options",""],["PerfEventOptions","MMTk option for perf events"]]};