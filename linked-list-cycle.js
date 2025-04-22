/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// task:
// need to detect if there's a cycle
// input is ALWAYS the head ListNode (warning: can be undefined 'head')
// internally, there's a 'pos' variable (either valid index or -1)
// unsure if can use 'pos' in some way

// constraints // edgecases // pseudo:
// looks like given head, can have a 'head' ListNode that is undefined!
// workaround for this gotcha, is to use a 'sentinel' node
// or can just check if 'head' input is undefined, then return false
// also can have asymptotic analysis as # listnodes that head is connected to tends towards 10,000 listnodes
// if i'm traversing that many listnodes to determine if there's a cycle,
// then time-complexity would be O(n) average-linear time
// the values don't matter, but the val properties of every ListNode can be negative integers

/**
 * @param
 * @param
 * @return
 */

const hasCycleFn = () => {};