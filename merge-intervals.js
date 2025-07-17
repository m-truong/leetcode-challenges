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
    // A negative value indicates that a should come before b. (i.e. 4-5 = -1)
    // A positive value indicates that a should come after b. (i.e. 4 > 5)
    // Zero or NaN indicates that a and b are considered equal. (i.e. 4 - 4 = 0)
    intervals.sort((a, b) => a[0] - b[0]);

    // create a dynamic array called merged
    // since original problem doesn't require returning the original 2D array
    // I can now just create a new array and iterate over the original 2D array and push each nested interval
    // ...into the new dynamic array, but after 'merging' or reassigning the the end(i) number
    // ...if an overlap in the range of numbers is detected
    let merged = [];

    // because the original intervals 2D array is now already sorted
    // i can now just compare the latest pushed
    for (let interval of intervals) {
        // using an || expression, I can catch the first iteration edgecase of pushing the very first interval when the new dynamic merged array is empty
        // then after the first iteration, this guarantees there's at least one tuple interval inside the new dynamic merged array
        // ...then compare if the end(i) range number of the latest pushed interval is less than the current tuple interval's start number
        // then there's NO overlap, so simple push it into the new dynamic 'merged' array
        if (merged.length === 0 || merged[merged.length-1][1] < interval[0]) {
            merged.push(interval);
        } else {
            // this is an interesting else statement
            // so this else-block will handle the OVERLAP scenario of when the 'end' number of the current interval is >= the 'start' of the next intervals range
            // but since the else block is automatically enterered since it's part of the if-block, then we can assume that it's greater than or equal
            // in that scenario, then I would want to replace the end ranger number of the latest interval inside the 'merged' new dynamic array with the maximum between the 'end' numbers of the current tuple in the new dynamic array, and the current interval
            // by doing that, then I've expanded the interval range, essentially merging the current interval
            // and then i return a 'merged' 2D array with non-overlapping tuples
            // Note: always indent for readability!
            merged[merged.length-1][1] = Math.max(
                merged[merged.length-1][1],
                interval[1]
            );
        }
    }
    // at the very end, return an array of the non-overlapping intervals that cover all the intervals in the input.
    return merged;
}