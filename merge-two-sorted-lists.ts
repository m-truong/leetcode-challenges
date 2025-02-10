/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// input: 2 ListNodes that are the head-nodes

// edge-cases:
// is this a single-linked list?
// ...(i.e. final ListNode will have this.next = nnull)
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
// this is the best-practice for writing a class constructor in a single JS file (newer JS version environment)
// type ListNode = {
//     value: number;
//     next: ListNode;
// }

class ListNode {
    value: number;
    next: ListNode | null;

    constructor (value?: number, next?: ListNode | null) {
        // constructor defaults to value=0
        this.value = value === undefined ? 0 : value;
        // contrsuctor defaults to next=head or tail node
        this.next = next === undefined ? null : next;
    }

}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1: ListNode, list2: ListNode): ListNode {

    // Create the head of the new merged linked-list
    // ...by combining all the ListNodes from the original two <LLs>-<LLs>.
    // problem:
    const combinedList3 = new ListNode();

    // create main-logic of comparing the two Node values
    // i.e. >>>> <<<<<<

    // separate block for logic for if less than
    // ==============>

    // other seperate logic for comparing if greater than
    // <==============

    // create secondary logic for changing the node values

    // create tertiary logic for checking if the end tail-node is ever reached.

    // Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    console.log('TODO: print inside of nodes');


    // return the new merged linked-list


    return combinedList3;
};

// const input = process.argv[2];
// console.log('input', input);