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