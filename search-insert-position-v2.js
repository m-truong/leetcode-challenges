// Task:
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// O(logn)
// min [1] element in array
// can have large neg. numbers
// no dups (removes edgecase (ordered))
// target (integer) WILL exist in nums[i] (removes EC)

// Pseudo:
// binary search
// is always just splitting in the middle
// and then just search the left half of a group
// then search the right half
// but we cut the search in half

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};