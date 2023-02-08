window.SIDEBAR_ITEMS = {"struct":[["FixedHeapSizeTrigger","A simple GC trigger that uses a fixed heap size."],["GCTrigger","GCTrigger is responsible for triggering GCs based on the given policy. All the decisions about heap limit and GC triggering should be resolved here. Depending on the actual policy, we may either forward the calls either to the plan or to the binding/runtime."],["MemBalancerStats",""],["MemBalancerTrigger","An implementation of MemBalancer (Optimal heap limits for reducing browser memory use, https://dl.acm.org/doi/10.1145/3563323) We use MemBalancer to decide a heap limit between the min heap and the max heap. The current implementation is a simplified version of mem balancer and it does not take collection/allocation speed into account, and uses a fixed constant instead."]],"trait":[["GCTriggerPolicy","This trait describes a GC trigger policy. A triggering policy have hooks to be informed about GC start/end so they can collect some statistics about GC and allocation. The policy needs to decide the (current) heap limit and decide whether a GC should be performed."]]};