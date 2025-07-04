/**
 * How the Stack Works
 * Each function call is pushed onto the stack.
 * When a base case is hit (root === null), that call returns and is popped off the stack.
 * The function resumes where it left off, using the returned value.
 * This continues until all recursive calls are resolved and the original call returns the fully inverted tree.
 * Summary
 * JS executes top to bottom, but when it hits a recursive call, it "pauses" the current function, starts the new call, and only resumes the previous call when the new one finishes.
 * The stack "unwinds" as each call returns, allowing the swaps to happen in the correct order.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    // when using recrusion start with the base-case
    if (root === null) return root;
    // store pointer to the left TreeNode
    const leftNode = root.left;

    // recursive DFS function call
    root.left = invertTree(root.right);
    root.right = invertTree(root.left);

    // then Action
    return root;
}