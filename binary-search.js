// problem:
// Implement a binary search algorithm.
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

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