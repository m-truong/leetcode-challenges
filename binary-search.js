// problem:
// Implement a binary search algorithm.
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// ES6 technique::
// my ES6 technique is as follows.
// since it's an array, of the JS integer data type (not a floating point number), so then we can split the array into smaller problems.
// I know searching an entire array from the start to the tail end of the array/list-data structure would be O(n) linear runtime complexity
// so instead taking O(n) linear runtime, I think an easier and faster algorithmic approach would be to divide-and-conquer
// so basically eliminiting half of the search runtime in half
// in order to find the target, let's start with the middle element, and determine if the integer number is greater than or less than the middle number
// once we do that, then we can CUT our SEARCHTIME IN half
// and proceed to only search THE PORTION of the list-structure that DOES contain INTEGERS that the TARGET could be within!
// we keep this strat until we've DETERMINED the exit or BASE CASE of the problem,
// ... which is that the TARGET integer ISN'T FOUND IN THE INPUT NUMBER[]ARRAY

// edge-cases:
// what abotu single element in the list-structure
// are there repeating nums? (could cause issues when there's a repeating instance of the target, IF SO?!
// THEN what do we do?
// just return the TARGET? or at least RETURN THE EARLIEST FIRST instance of deteting the target
// and then break the loop searching for the target
// NO empty input number[] arrays
// can be negative and positive
// ALSO ALREADY SORTED !
// (sorted is IMPORTANT) because then IT'S A BINARY SEARCH
// if NOT PRE-SORTED ALREADY then CANNOT BE BINARY SEARCH


/**
 * @param {numbers[]} nums
 * @param {number} target
 * @return {number} non-reserved english code-word
 */

const binaryDiscovery = (nums, target) => {
    // practice using ECMA6's built-in arithmetic libraries
    // use let to reasign in memory
    // check MDN for the Math() library static methods
    // I know about the divide operation and round-down!
    console.log(`here ${nums.length}`, JSON.stringify(nums.length));

    // leftBoundIndex will always be 0 (at beginning of list)
    let leftBoundIndex = 0, rightBoundIndex = nums.length-1;
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
    do {
        // when writing PEMDAS in programming remember PEMDAS
        let midPointIndex = Math.floor(leftBoundIndex+(rightBoundIndex-leftBoundIndex)/2);
        if (nums[midPointIndex] === target) {
            return midPointIndex;
            // if the value is less than the target, shift the
        } else if (nums[midPointIndex]<= target) {
            // so now shift the leftBoundInded UP TO THE midPointIndex
            // must shift +1 for zero-based indexing
            leftBountIndex = midPointIndex+1;

        } else if (nums[midPointIndex] >= target) {
            // then shfit the rightPointIndex to the midpoint
            rightPointIndex = midPointIndex+1;
        }
        // these left and right bound indices gets reassigned as the range decreases
    } while (leftBoundIndex <= rightBoundIndex);

    // ending case:
    // this end will get reached ONLY after it finishes searching all of the list
    return -1;
};

// Intuition
// We start from the most basic and elementary template.

// First, we define the search space using two boundary indexes, left and right, all possible indexes are within the inclusive range [left, right]. We shall continue searching over the search space as long as it is not empty. A general way is to use a while loop with the condition left <= right, so we can break out of this loop if we empty the range or trigger other conditions which we will discuss later.

// The next step is to find the 'pivot point', the middle index that divides the search space into two halves. We need to compare the value at the middle index nums[mid] with target, the purpose of this step is to cut one half that is guaranteed not to contain target.

// If nums[mid] = target, it means we find target, and the job is done! We can break the loop by returning mid.
// If nums[mid] < target, combined with the array is sorted, we know that all values in the left half are smaller than target, so we can safely cut this half by letting left = mid + 1.
// If nums[mid] > target, it means all values in the right half are larger than target and can be cut safely!
// alt text

// Does this loop ever stop? Yes, take the following picture as an example, suppose we are searching over an array of size 1, in this case, left, right, and mid all stand for the only index in the array. In any of the three conditions, we trigger one of the break statements and stop the loop.

// Algorithm
// Initialize the boundaries of the search space as left = 0 and right = nums.size - 1.
// If there are elements in the range [left, right], we find the middle index mid = (left + right) / 2 and compare the middle value nums[mid] with target:
// If nums[mid] = target, return mid.
// If nums[mid] < target, let left = mid + 1 and repeat step 2.
// If nums[mid] > target, let right = mid - 1 and repeat step 2.
// We finish the loop without finding target, return -1.


// Complexity Analysis
// Let n be the size of the input array nums.

// Time complexity: O(logn)
// nums is divided into half each time. In the worst-case scenario, we need to cut nums until the range has no element, and it takes logarithmic time to reach this break condition.
// Space complexity: O(1)

// During the loop, we only need to record three indexes, left, right, and mid, they take constant space.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Set the left and right boundaries
    let left = 0, right = nums.length - 1;
    // Continue searching while the left boundary is <= right boundary
    while (left <= right) {
        // Get the middle index
        let mid = Math.floor(left + (right - left) / 2);
        // Case 1: If middle element is the target, return its index
        if (nums[mid] === target) {
            return mid;
        }
        // Case 2: If middle element is smaller, search the right half
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        // Case 3: If middle element is larger, search the left half
        else {
            right = mid - 1;
        }
    }

    // If target is not found, return -1
    return -1;
};