/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// edge-cases:
// are there any repeating ListNode.val values?
// like <N1-01> => <N2-01>

// constraints:
// The number of nodes in both lists is in the range [0, 50].
// both initial nodes (Both list1 and list2 are sorted in non-decreasing order) are in ascending order.
// the node.val properties are number (integers) (and not floating-point)
// ... they're between -100 and 100 (INCLUSIVE)

// plan: write me an algorithm that'll peak into the next ListNodes value
// ...and the compare them to each other!
// ...then after comparing to see which value is smaller,
// ...then it'll change the pointers and reassign them to the New ListNode created
// ... by running the ListNode function constructor, within the same file!

// Then add them as next values to the new sorted array of the ListNodes after merging to other lists of LinkedList Nodes


// should use JS ES6 class syntax 'class' keyword
class ListNode {
    constructor (value, next) {
        this.value = value === undefined ? 0 : value; // constructor defaults to value=0
        this.next = next === undefined ? null : value; // contrsuctor defaults to next=head or tail node
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    console.log('starting here', list1.next, list2.val)
    // outputs: { list2 } , {1}}}


    console.log('TODO: print inside of nodes');
};