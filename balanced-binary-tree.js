// task

// constraints
// max number of nodes in root-traversal is 5000 nodes
// can have undefined-root TreeNode since expected input-range is [0, 5000] TreeNodes

// edge
// can have empty tree, even though given undefined-root
// handle by creating a sentinel-dummy node
// are they sorted??
// does pre-sorting?? make more efficient??

// psuedo
// work with sentinel-TreeNode
// return boolean flag
// a binary tree has only two subtrees
// a binary-[search] tree is one where all nodes are [SORTED], then possible for O(nLogn) algo
// a [balanced] binary tree ISN'T necessarily a binary-[search] tree
// balanced-binary tree means that the heights? or depths? of each left/right subtree ONLY DIFFERS AT MOST BY SINGLE NODE
// HEIGHT/LENGTH is the distance from Root node
// basically, HEIGHT is the DISTANCE or LENGTH of NETIRE subtree
// DEPTH "of a NODE", is how many NODES distance from root, think of "Depth" as "HOW DEEP is the NODE in the tree"

// if depth of a node is GREATER than one, then it's UNBALANCED!!!

/**
 * definition of binary tree node inputs. essentially ListNode * class constructor function.
 * function TreeNode (val, left, right) {
 *    this.val = (val === undefined ? 0 : val);
 *    this.left = (left === undefined ? 0 : left);
 *    this.right = (right === undefined ? 0 : right);
 * }
 */

const TreeNode =  (val, left, right) => {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? 0 : left);
    this.right = (right === undefined ? 0 : right);
}

/**
 * @param {TreeNode} givenRoot
 * @return {boolean}
 */
var isBalanced = function(root) {

    // left-tracker depth variable
    // right-tracker depth variable
    let leftDepth = 0, rightDepth = 0;

    // create pointer
    let currNode = root;

    // Example 3: check edge case for undefined input []
    if (currNode === null) {
        return true;
    }

    // left subtree while loop
    while (currNode.left !== null) {
        console.log(leftDepth, currNode.left);
        // First increment depth count
        leftDepth += 1;
        // ****** this is the ACTUAL traversal *******
        currNode = currNode.left;
    }

    // in between reset the pointer
    currNode = root;

    // right subtree while loop
    while (currNode.right !== null) {
        console.log(rightDepth, currNode.right);
        // First increment depth count
        rightDepth += 1;
        // ****** this is the ACTUAL traversal *******
        currNode = currNode.right;
    }

// recursion allows PAUSE on execution, and USE base-cases to BREAK recursion

    // checking difference in depth between left & right subtree is > than 1
    return Math.abs(leftDepth - rightDepth) <= 1;
};