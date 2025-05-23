// task: implement a queues using 2 stacks in JavaScript
// the MyQueue class will need to have 4 built-in methods
// these methods will support the standard operations of 'Queue'
// 1] void push (int x) ~ pushes an integer to the BACK of the queue
// 2] int pop() ~ this will return+remove the first integer in the queue
// 3] int peek() ~ this just returns the integer value at the front
// 4] boolean empty() ~ determines if queue IS/ISN'T empty

// constraints:
// the ONLY allowable values inside the QUEUE are positive integers from 1-9
// "At Most 100 calls will be made to push, pop, peek, empty."
// -> this means that the automated-unit-tests will BE LIMITED to 100 calls
// "All pop, peek calls are VALID."
// -> this means that pop() and peek() will ONLY be called with integers inside the QUEUE

// edge-corner-cases (i.e. gotchas)
// so pop() and peek() will never be called first
// push() and empty() will be called BEFORE pop() and peek()
//

// psuedo:
// since it's a MyQueue class,
// in javascript, a dynamic-array is used to implement a stack
// so a 2 stacks would be 2 dynamic-arrays
// stacks are (FILO) "first-in-last-out"
// if using 2 arrays, then have to move integer elements from one array to the other array
// this'll be the core functionality
// need to initialize 2 separate arrays within scope of the MyQueue class
// then every method call push(), pop(), peek(), empty() will be called and mutate the
// ... 2 internal dynamic arrays
// maybe call one array Enqueue? other array dequeue()


// requires mastery of 'this' and 'new' keywords
var MyQueue = function() {
    // create 2 separate dynamic-array-stacks

    // one is for enqueue'ing new integers when invoking push()
    this.enqueueStack = [];

    // second if for dequeue'ing the integers when pop() is invoked. the second array-stack is used to retain the FIFO rule for queues.
    this.dequeueStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // very straightforward just enqueue the integer arguments into the enqueue stack
    this.enqueueStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // little more complicated
    // in order to properly retain the FIFO order of elements for the queue, then this requires popping off the dequeueStack
    // check if the dequeueStack contains elements, if so, then return them
    if (this.dequeueStack.length) return this.dequeueStack.pop();
    // now introduce the iterative-loop that'll transfer and depopulate the enqueueStack and populate the dequeueStack, while retaining the FIFO proper-order
    while (this.enqueueStack.length) this.dequeueStack.push(this.enqueueStack.pop());

    // after the above loop, then the dequeueStack MUST have at least one element to be returned as the first in the Queue, thus return it
    return this.dequeueStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // little more complicated
    // peeking still relies on the dequeueStack()
    // thus, slice the dequeueStack to make a shallcopy, and return the first and ONLY element of that array
    // this is new trick, whereby slicing a JS array with a negative index INCLUSIVELY creates a shallow copy from the end of that array
    if (this.dequeueStack.length) return this.dequeueStack.slice(-1)[0];
    // if the dequeuStack is empty, we can assume that the dequeue stack should HAVE AT LEAST one integer element pushed inside of it already, since the CONSTRAINTS mention that both pop() and peek() have to be valid calls
    return this.enqueueStack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // straightforward; just return boolean determing if both arraystacks are empty
    // which means that the order of the calls for the tests didn't populate the 2 array-stacks
    return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */