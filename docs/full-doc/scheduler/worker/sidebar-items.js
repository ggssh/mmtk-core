window.SIDEBAR_ITEMS = {"constant":[["STAT_BORROWED_MSG",""],["WORKER_ORDINAL","Current worker’s ordinal"]],"fn":[["current_worker_ordinal","Get current worker ordinal. Return `None` if the current thread is not a worker."]],"struct":[["GCWorker","A GC worker.  This part is privately owned by a worker thread. The GC controller also has an embedded `GCWorker` because it may also execute work packets."],["GCWorkerShared","The part shared between a GCWorker and the scheduler. This structure is used for communication, e.g. adding new work packets."],["WorkerGroup","A worker group to manage all the GC workers (except the coordinator worker)."],["WorkerMonitor","Used to synchronize mutually exclusive operations between workers and controller, and also waking up workers when more work packets are available. NOTE: All fields are public in order to support the complex control structure in `GCWorkScheduler::poll_slow`."],["WorkerMonitorSync","The synchronized part of `WorkerMonitor`."]],"type":[["ThreadId","Represents the ID of a GC worker thread."]]};