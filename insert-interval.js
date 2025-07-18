/**
 *You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is
 * sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 * Note that you don't need to modify intervals in-place. You can make a new array and return it.
 */

//  Q: counter questions:
// 1. are the nested lists limited to 2 elements max? A: Yes
// are start(i) and end(i) exclusively number primitive data types

//  constraints:
// length of outer list can be 0 (so edgecase of empty matrix)
// max length is 10k inner arrays
// max length of each individual array is 2 (i.e. a tuple)
// the start(i) is used as the sorting for the rest of the elements in the nested array
// the [newInterval] array has a length of 2

// psuedo:
// the key is to understand what 'overlaps' means in the context of the algo question
// looking at the example test cases it seems like I can visualize these intervals more like a [range]
// It's not just a start number and end number, it's more like a range determined by the start and end number primitives inside the JS tuple
// the priority and trick to remember is that I want to insert the new start and end values of the newInterval, in such a way, that it's inclusive of the entire range that's specified by the overlapping intervals

// Goal:
// To achieve this, we take the maximum of the end of the first interval and the end of the new interval, as well as the minimum of the start of the first interval and the start of the new interval.

// javascript function declaration
/**
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function solveInsertInterval(intervals, newInterval) {
    // If the intervals vector is empty, return an array containing the newInterval
    // this covers the edgecase for an empty intervals outer array
    // so just return an array literal with the newInterval nested inside it
    // create a number variable to store the intervals length
    let n = intervals.length;
    if (n === 0) {
        return [newInterval];
    }

    // I need to store the beginning start value for the new interval that needs to be inserted
    // this is crucial because in the InsertIntervals problem this determines if there's any overlap and where it should be inserted into the existing 2D array
    let target = newInterval[0];
    let left = 0,
    right = n - 1;

    // approach is to use binary search; but note that finding the middle index of any list-like structure depeneds on if it's odd or even length
    // always remember, that an odd-length list-like structure, will always give me the exact midpoint since arrays are (zero-based index)
    // but an even length array will be different
    // calculating the midIndex of an even-length array will result in 2 midpoints
    // ...one either a leftMid or a rightMid

    // Binary search to find the position to insert newInterval
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (intervals[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Insert newInterval at the found position
    intervals.splice(left, 0, newInterval);

    // Merge overlapping intervals
    // first, instantiate new array using the array literal shorthand[] version of new Array()
    let res = [];

    for (let interval of intervals) {
        // If res is empty or there is no overlap, add the interval to the result
        if (res.length === 0 || res[res.length - 1][1] < interval[0]) {
            res.push(interval);
            // If there is an overlap, merge the intervals by updating the end of the last interval in res
        } else {
            res[res.length - 1][1] = Math.max(
                res[res.length - 1][1],
                interval[1],
            );
        }
    }

    return res;
}