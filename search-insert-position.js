/**
 * search-insert-position
 * @param {}
 * @return {}
 */

// constraints:
// O(logn)
// min [1] element in array
// can have large neg. numbers
// no dups (removes edgecase (ordered))
// target (integer) WILL exist in nums[i] (removes EC)

// task:
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Pseudo:
// binary search
// is always just splitting in the middle
// and then just search the left half of a group
// then search the right half
// but we cut the search in half

// Approach:
// Get length of integers array
// divide that length by 2
// take that as the middle point
// compare if the target is less than or greater than half the total numbers of elements in the array
// and then continue my search with the elements in the beginning half of the array
// compare if target is < or > than the midpoint
// then find the next half of that midpoint
// by dividing by half again
//

const searchInsert = () => {

}