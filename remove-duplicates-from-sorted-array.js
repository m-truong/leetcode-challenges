// task: number (non-floating-point array)
// sorted, in ASCENDING order
// REMOVE any DUPLICATES

// edge:
// without creating new array (in-place)
// remove from an array (appears ONCE)
// ORIGINAL sorted ORDER kept the same
// after removal of all duplicates ~ HOW MANY DIFF INTEGERS are there?

// beware:
// remaining elements of nums NOT Important
// size of nums[] array IS UNIMPORTANT

// complexity:
// keep it O(n)


// plan:
// create hashMap of each number(integer) encountered
// if it's not already encountered ~ then add it
// if it's encountered already ~ then remove it
// using HashMap ~ call prototype method to get number of unique keys
// how many repeating duplciates?

// using a list/array --> iterate through O(n)
// once reached removal ---> will be O(n) since need to shift

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    console.log('first', nums);

    // NOTE: important NEW keyword
    const uniqueNumMap = new Map();

    // NOTE: Use the for-of loop
    // go through entire array
    for (let current of nums) {
        console.log('current number', current);
        // if integer NEVER ENCOUNTERED YET, then SET IT
        !uniqueNumMap.has(current)
        ? uniqueNumMap.set(current, '1')
        : uniqueNumMap.set(current, uniqueNumMap.get(current) + 1);
    }

    console.log(uniqueNumMap.size);
    // ....... if already there then remove from array
    // splice requires use of the Index
    for (let i = 0 ; i < nums.length ; i++) {
        // Array.splice() is the de-facto JS method fo removing an element IN-place
        uniqueNumMap.has(nums[i]) && nums.splice(i, 1);
    }

    return uniqueNumMap.size;
};