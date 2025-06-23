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

// Approach:
// Encapsulate bottom logic in a loop ===>
// Get length of integers array
// divide that length by 2
// take that as the middle point
// but make sure to round down using the modulus operator
// compare if the target is less than or greater than half the total numbers of elements in the array
// and then continue my search with the elements in the beginning half of the array
// compare if target is < or > than the midpoint
// then find the next half of that midpoint
// by dividing by half again
// everything above ^^^ is encapsulated in a loop

/**
 * search-insert-position
 * @param {numbers[]} nums[]
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums) => {
    // start a loop to repeat the mid-point search

    // get the middle index of the array
    let mid = Math.floor(nums.length / 2);

    // compare if the element is < or > than target
    let currentNum = nums[mid];
    // if it's less than, then re-assign mid to elem at index +1 than current mid-value
    // if it's more than, then re-assign mid to elem at index -1 than current mid-value
}