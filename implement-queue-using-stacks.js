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