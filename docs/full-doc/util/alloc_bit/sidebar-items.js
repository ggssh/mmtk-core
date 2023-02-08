window.SIDEBAR_ITEMS = {"constant":[["ALLOC_SIDE_METADATA_ADDR",""],["ALLOC_SIDE_METADATA_SPEC","An alloc-bit is required per min-object-size aligned address , rather than per object, and can only exist as side metadata."]],"fn":[["bzero_alloc_bit","Bulk zero the alloc bit."],["is_alloced","Check if the alloc bit is set for an object."],["is_alloced_object","Check if an address can be turned directly into an object reference using the alloc bit. If so, return `Some(object)`. Otherwise return `None`."],["is_alloced_object_unsafe","Check if an address can be turned directly into an object reference using the alloc bit. If so, return `Some(object)`. Otherwise return `None`. The caller needs to ensure the side metadata for the alloc bit for the object is accessed by only one thread."],["set_alloc_bit","Atomically set the alloc bit for an object."],["unset_alloc_bit","Atomically unset the alloc bit for an object."],["unset_alloc_bit_nocheck","Atomically unset the alloc bit for an object, regardless whether the bit is set or not."],["unset_alloc_bit_unsafe","Non-atomically unset the alloc bit for an object. The caller needs to ensure the side metadata for the alloc bit for the object is accessed by only one thread."]]};