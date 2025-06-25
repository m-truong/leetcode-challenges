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
    let lo = 0, hi = nums.length; // tip: 'use inline multiple variables, but not very readable

    // general approach/pseudo:
    // to redetermine the mid-point between the low and high pointer variables indicating the ends of the integer array
}