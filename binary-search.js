// problem:
// Implement a binary search algorithm.
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// Complexity Analysis
// Let n be the size of the input array nums.

// Time complexity: O(logn)

// nums is divided into half each time. In the worst-case scenario, we need to cut nums until the range has no element, and it takes logarithmic time to reach this break condition.
// Space complexity: O(1)

// During the loop, we only need to record three indexes, left, right, and mid, they take constant space.