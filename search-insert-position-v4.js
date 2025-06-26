/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @m-truong
 */

const searchInsert = (nums, target) => {
    // in order to implement binary search window
    // add two pointers
    let lowPointer = 0, highPointer = nums.length;
    // keep redetermining the middle index of the sorted array
    // until the target is found
    // and move the sliding window, based on if the target is probably located either to the right or the left of the calculated middle index
    while (lowPointer < highPointer) {

    }

}