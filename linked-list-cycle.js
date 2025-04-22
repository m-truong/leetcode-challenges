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

// meat: determine for 2 ListNodes or More, that there's cycle present
// need to reach the Tail** node
// tail node is determined by this.next === null
// this looks like a loop
// perhaps a while-loop?
// this would be O(n)
// consider using temp variable-pointer

// i'll setup scenario for returning true for when the temp-reference-variable for tracking the current ListNode DOES end with this.next===null
// this would signal a traditional singly-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycleFn = (head) => {
    console.log('printing head node', head);

    // check the edgecase for 'undefined' head arguments
    if (!head) { // my first false-gate
        return false;
    }
    // this breaks the execution (no need for sentinel-node)

    // another edgecase-gate for single head node
    if (head && !head.next) {
        return false;
    }

    // check CC#3 for 2nodes with a third-fourth node null
    // this enters the 2 listnode scenario
    if (head && !head.next.next) {
        return false;
    }

    // to solve this, need to use the 2-pointer fast/slow approach
    let slowRefPointer = head;
    let fastRefPointer = head.next.next; // this is 2x speed in loop

    // setup iterative loop


};

// *** This wouldn't work becuz dangerous since could end up with a stack-overflow!
// solve the scenario for traditional single-linked-list
// while (currNodeRef.next) {

//     // would have to reassign currNodeRef to the next ListNode
//     // this keeps peaking into next node
//     currNodeRef = currNodeRef.next;
// }

// // if statement to return false?
// if (!currNodeRef.next) {
//     return false;
// }