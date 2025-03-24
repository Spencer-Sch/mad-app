# How to handle exercise IDs when the exercise number continues to progress across multiple collections.

**Decision**
Using the collection prefix + sequential number within the collection for IDs, while maintaining the original (continuous) exercise numbers in the number field.

**Example**
If you had:

Collection 1: "Eighth Notes and Quarter Notes" (exercises 1-15)
Collection 2: "Eighth Notes and Quarter Rests" (exercises 16-30)

You would structure the IDs like:

Collection 1 exercises would have IDs: "enqn-1", "enqn-2", ..., "enqn-15"
Collection 2 exercises would have IDs: "enqr-1", "enqr-2", ..., "enqr-15"

But the number field would still contain the original exercise numbers (1-15 for the first collection, 16-30 for the second collection).
