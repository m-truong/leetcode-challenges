// solve two-sum (easy)

// Given an array of integers nums and an integer target, ✅ return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Questions: negative numbers?
// // does solution work w negative edge-cases?
// 9(target) - (-2) is 11(diff)
// -2(target) - 9 is -11(diff)
// solution would still work because target is the first number in the subtraction
// Q: duplicate numbers
// Questions: what if empty array

const helperSum = () => {};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    console.log(nums, target);
    // Create a hash map to store the indices of previously visited numbers
    const seen = new Map();
    // Iterate through the array
    for (let index = 0; index < nums.length; index++) {
        const value = nums[index];
        const searchDiff = target - value; // Calculate the difference
        // Check if the difference exists in the map (means we've seen the other number before)
        // note: this is the if-short-circuit technique.
        if (seen.has(searchDiff)) {
            // If the pair is found, return the indices
            return [seen.get(searchDiff), index];
        }
        // Otherwise, store the current number and its index in the map
        seen.set(value, index);
    }
    // Return an empty array if no pair is found (although the problem assumes there's always a solution)
    return [];

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

    // let searchDiff;
    // let searchDiffIndex;
    // const returnIndicesArray = [];
    // Final array methods used are .forEach() and .indexOf()

    // O(n) time complexity.
    // O(1) space complexity ~ since modifies elements in-place
    // nums.forEach((elem, index) => { });

    // To access elements of an array in JavaScript, use the for...of loop.
    // but advances technique is using .entries() method.
    // returns a new Iterator Object containing the key/value pairs for each INDEX and VALUE in the array.
    // const iteratorEngine = nums.entries();
    // for (const [index, value] of iteratorEngine) {
    //     console.log(index, value);
    //     searchDiff = target-value;
    //     // since only one possible answer, break out of loop.
    //     searchDiffIndex = nums.indexOf(searchDiff);
    //     // then check if that difference exists in the array.
    //     // Just to Avoid O(n^2) time complexity.
    //     if (searchDiffIndex !== (-1)) {
    //         console.log('entered');
    //         returnIndicesArray.push(index, searchDiffIndex);
    //         break;
    //     }

    // }

    // requires explicit return statement.
    // return returnIndicesArray;

    // subtract from the target sum.

    // if (searchDiffIndex !== -1) {
    //     // only enters if valid searchDiffIndex
    //     returnIndicesArray.push(index, searchDiffIndex);
    // }

    // .find() ~ since doesn't create new array (O(1)) constant time
    // .find() ~ best-case O(1) if found in the first element, O(n) if found at end of array

    // .findLast() ~ starts from the end.

};