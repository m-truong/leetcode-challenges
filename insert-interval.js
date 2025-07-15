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
// looking at the

// javascript function declaration
/**
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function solveInsertInterval(intervals, newInterval) {

}