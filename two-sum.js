// solve two-sum (easy)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Questions: negative numbers?
// Questions: what if no solution?

const helperSum = () => {};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // R: Remember only 1 solution possible
    // R: each element only used once.

    // Ex: [2, 7, 11, 15], target = 9
    // Ex: [1, 3, 5, 7, 9], target = 8

    // Inputs: integer[], and sum (target).

    // A: Order doesn't matter.

    // P: use if-else blocks.
    // P: use the Array.methods
    // P: actually, just subtracting from the sum (requires 1 iteration O(n))
    // P: iterate over once using each element (and subtract from the target sum)
    // P: then call Array.method() to find if that difference exists in the array.
    // if found, then just return that element (SINCE only 1 solution possible).

    const returnIndicesArray = [];

    // Final array methods used are .forEach() and .indexOf()

    // O(n) time complexity.
    // O(1) space complexity ~ since modifies elements in-place
    nums.forEach((elem, index) => {
        // subtract from the target sum.
        const searchDiff = target-elem;
        // then check if that difference exists in the array.
        const searchDiffIndex = nums.indexOf(searchDiff);

        if (searchDiffIndex !== -1) {
            // only enters if valid searchDiffIndex
            returnIndicesArray.push(index, searchDiffIndex);
        }

    });


    // .find() ~ since doesn't create new array (O(1)) constant time
    // .find() ~ best-case O(1) if found in the first element, O(n) if found at end of array

    // .findLast() ~ starts from the end.

    // requires explicit return statement.
    return returnIndicesArray;
};