// constraints:
// min length is [1]
// cannot be empty
// elements can be negative (-)

// questions:
// what's a subarray?
// does it have to be contiguous?

// pseudo:
// take a running sum
// divide & conquer requires finding the mid-point?

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = () => {
    console.log('printing', nums);
    // Get length of array
    let lengthOfNumberArray = nums.length

    // Initialize multiple var-names on same line
    // Since non-fixed size subarray
    // Assume largest sum is subArraySize of = 1
    let currSum = nums[0], maxSum = nums[0]

    // prefix vs. postfix
    //
    for (let k = 1 ; k < lengthOfNumberArray ; ++k) {
        currSum = Math.max(nums[k], currSum + nums[k])
        // accounts for (first number being a negative integer!)
        // that's why you're constantly comparing!
        // THERE IS NOT CONTIGUOUS SUBARRAY
        // JUST FIND THE LARGEST SUM between two INDICES!
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum;
}