/**
 * 1. Sliding Window
 * useful for processing 'subarray/substrings' and calculating the 'maximum' or 'sum'
 */
function slidingWindow() {
    let windowStart = 0;
    let maxSum = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // expand window, maybe shrink if needed
    }
}

/**
 * 2. Two Pointers
 * using two variables, and useful when comparing both elements at both ends of a sorted array
 */

function twoPointers() {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      // compare and move pointers
    }
}

/**
 * 3. Fast & Slow Pointers
 * useful for detecting cycles in a linked list
 */
function fastAndSlowPointers() {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
}

/**
 * 4. HashMap ~ Frequency counter
 * useful for 'counting'
 * useful to memorize the MDN Map() static methods
 */
function frequencyCounter() {
    const map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
}

/**
 * 5. Binary Search
 * useful for cutting down search in a 'sorted' array in half
 * especially if it has 'monotonic' properties of increasing/decreasing in certain direction
 */
function binarySearch() {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // adjust boundaries
    }
}

/**
 * 6. Recursion // Backtracking
 * useful for problems requiring finding 'all solutions' to a problem
 */
function backtrack(path, choices) {
    if (goal === reached) result.push(path);
    for (let choice of choices) {
        backtrack(path + choice, updatedChoices);
    }
}

/**
 * 7. 'Greedy' Algorithm
 * useful for when 'local' optimal solution is best global solution
 */

/**
 * 8. 'Dynamic Programming'
 * useful for 'overlapping subproblems'
 * think 'memoization'
 */
function dynamicProgramming() {
    const dp = new Array(n).fill(0);
    dp[0] = base;
    for (let i = 1; i < n; i++) {
        // dp[i] = some_relation(dp[i - 1], ...);
    }
}

/**
 * 'Graph Traversal' (via DFS/BFS)
 * DFS: use recursion or stack
 * BFS: use queue
 */