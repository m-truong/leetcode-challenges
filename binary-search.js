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