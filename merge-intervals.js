/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

// Approach:
// Sorting
//

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // first sorting the input of inner nested arrays will be useful
    // sorting in place will be O(nlogn) when using the built-in Array object utility method of sorting
    // Array.sort() => O(nlogn)
    // takes a compareFn and the 2 inputs are the first and next element
    // use bracket notation to access the first elements of the first interval and the next interval
    // taking the difference, and whether
    // MDN: To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.
    intervals.sort((a, b) => a[0] - b[0]);
}