/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number)}
 * @m-truong
 */

// implement binary-search window algo
var searchInsert = (nums, target) => {
    // store two pointers to both the first and last element
    // we'll call them 'lowPointer' and 'highPointer'
    let lowPointer = 0, highPointer = nums.length; // tip: 'use inline multiple variables, but not very readable

    // general approach/pseudo:
    // to redetermine the mid-point between the low and high pointer variables indicating the ends of the integer array
    // i must loop the math for determining the middle index of the dynamic array
    // all while, being mindful of the odd/even lengthed edgecases scenarios ofr the nums[] dynamic array
    // so while the lo index's numerical value is less than the high index, we keep calculating the middle index of my shifting search window

    while (lowPointer < highPointer) {
        let midPointer = lowPointer + Math.floor((highPointer-lowPointer)/2);
        if (target > nums[midPointer]) {
            lowPointer = midPointer + 1
        } else {
            highPointer = midPointer
        }
    }
    return lowPointer;
}