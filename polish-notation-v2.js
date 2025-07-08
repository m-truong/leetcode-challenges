// expected inputs are string expressions
// these string expressions consist of operators and operands

// the string expressions are an alternative notation for representing arthimetic to remove the need for (parentheses)

// the expected output should be a numerical value (i.e. JavaScript primitive number-type)
// the logic needs to pass the tests that expect the same numerical value when evaluated using standard PEMDAS

// Reasoning:
// since this 'alternative' prefix notation of performing math relies on prefixing the numbers (i.e. operands) with their respective operators
// this requirement lends itself towards using a stack-approach implemented with a JS dynamic array
// so I should turn the string expression into an array of individual characters
// if I use an array, I can individually pop off each character and determine if it's an 'operator' or 'operand'
// Using a stack-approach (i.e. dynamic array) provides an efficient time-complexity way of getting the symbol, since it's only O(1) to .pop() each element off the right-end of the array

// Recursive approach:
// recursion is good here since the funcitonality of Adding, Subtracting, Multiplying, Dividing will be repeated
// since the order of operations can be sub-divided into smaller steps, I'll use recursion
// I'll implement the recursion by nesting an inner function that'll be returned at the end of the calculator function

// app/calculator.js

exports.calculate = function(expression) {
    // edgecase for a falsy string expression

};