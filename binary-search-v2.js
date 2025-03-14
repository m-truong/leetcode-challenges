// problem:
// Implement a binary search algorithm.
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} non-reserved english code-word
 */

const binaryDiscovery = (nums, target) => {
    // practice using ECMA6's built-in arithmetic libraries
    // use let to reasign in memory
    // check MDN for the Math() library static methods
    // I know about the divide operation and round-down!

    // leftBoundIndex will always be 0 (at beginning of list)
    // there is an issue of even/odd length
    // so to take care of that we just round down
    // so now we have the halfway point
    // if it's even then we get the bottom approx mid-point index
    // if it's odd then we just get the exact midpoint
    // this will take me to exactly to middle index placement of list-structure
    // now that I have a starting midpoint
    // create a loop that continues to find where the target MIGHT LIE relative to the temporary midpoint variable
    // use the LOOP to CONTINUE to REASSIGN the MIDPOINT until the target number's location is NARROWED DOWN
    // but use if-else statements to BREAKDOWN THE SWITCH into
    // A BINARY SCENARIO of where the TARGET number COULD lie in the list's sorted elements
    // use do AT LEAST ONCE to determine

    console.log(`here ${nums.length}`, JSON.stringify(nums.length));
    let leftBoundIndex = 0, rightBoundIndex = nums.length-1;
    do {
        // when writing PEMDAS in programming remember PEMDAS
        let midPointIndex = Math.floor(leftBoundIndex+(rightBoundIndex-leftBoundIndex)/2);
        if (nums[midPointIndex] === target) {
            return midPointIndex;
            // if the value is less than the target, shift the
        } else if (nums[midPointIndex] < target) {
            // so now shift the leftBoundInded UP TO THE midPointIndex
            // must shift +1 for zero-based indexing
            leftBoundIndex = midPointIndex+1;

        } else if (nums[midPointIndex] > target) {
            // then shfit the rightPointIndex to the midpoint
            midPointIndex = midPointIndex+1;
        }
        // these left and right bound indices gets reassigned as the range decreases
    } while (leftBoundIndex <= rightBoundIndex);
    // ending case:
    // this end will get reached ONLY after it finishes searching all of the list
    return -1;
};
