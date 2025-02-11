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

// edge:cases - if there're duplicate node values
// if smalled node-value is reached then what happens?
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
    let iterations;
    // Create the head of the new merged linked-list
    // ...by combining all the ListNodes from the original two <LLs>-<LLs>.
    // problem:
    const combinedList3 = new ListNode();
    const pointerNode = new ListNode();

    // edge-case: check for empty lists
    // if only list1 is empty, then return head of combined list but just add the head node of the 3rd list as list2
    if (!list1) {
        // then change the value
        list2.value!== -100 ? combinedList3.value = list2.value-1: -100; //O1
        // change nextnode to just point to list2
        combinedList3.next = list2; // O1
        // return new head node
        return combinedList3;
    } else if (!list2) {
        // then change the value
        list1.value!== -100 ? combinedList3.value = list1.value-1: -100;
        // change nextnode to just point to list2
        combinedList3.next = list1;
        // return new head node
        return combinedList3;
    }

    //===================================================================
    // while the edge-cases are caught, then can start the do-while loop circitry
    //===================================================================

    // create main-logic of comparing the two Node values
    // ==============>
    // separate block for logic for if less than
    // if list1 is numerically before list2

    // ALSO need a dummy POINTER-OBJECT to keep track of the reference to the "third-wheel' ListNode"
    do { // O(n)
        if (list1.value <= list2.value) {
            // and then also assign the value of the new head node
            // but must check if the list1.value is already the smaleld possible (-100) negative integer number
            list1.value !== -100 ? combinedList3.value = list1.value-1 : -100;
            // then assign the newhead
            combinedList3.next = list1;
            pointerNode.next = list1.next; // this saves the reference of the smaller node's .next
            // change dummy pointer
            // then changes pointers of head-nodes of list1 and list2
            list1.next = list2;
        } else {
            // use separate block for if the list1 is greater than list2


        }
        // not typical counter loop since i only know THE CONDITION of when to stop ~ and i don't know how many times it'll run.
        iterations++;
    } while (list1.next !== null || list2.next !== null);

    // other seperate logic for comparing if greater than
    // <==============

    // create secondary logic for changing the node values

    // looping tertiary logic for checking if the end tail-node is ever reached.
    // while (list1.next !== null)

    // Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    console.log('TODO: print inside of nodes');


    // return the new merged linked-list


    return combinedList3;
};

// const input = process.argv[2];
// console.log('input', input);