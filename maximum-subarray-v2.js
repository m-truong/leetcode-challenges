/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = () => {
    // get length of array, store in variable
    let lengthArray = nums.length;

    // declare 2 variables inline for the running sum
    // another for the maximum sum

    // let's assume that the very first element in the dynamic-array is the current running sum, and the maximum sum at the same time
    let currSum = nums[0], maxSum = nums [0];

    // start a for-iterative loop, and since we know we want to iterate through all the elements in the array, until the end, let's have it stop at the total length of the nums[] array
    // start from second element since assuming first element is the maxSum
    for (let k = 1; k < nums.length; k++) {

    }
}