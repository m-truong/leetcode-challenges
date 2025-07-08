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
    // this outer logic should setup everything for the inner function
    // edgecase for a falsy string expression
    if (!expression) { return 0 };

    // turn the string expression into an array
    const tokens = expression.split(" ").reverse();

    // declare a nested inner JS function to be returned & invoked as the return of the current calculator() outer function
    // the inner recursive function will handle the actual computation

    function evaluate() {
        // firstly, pop each character off the stack
        const token = tokens.pop();

        // since we need to know the identity of the character, we need to setup a base-case that'll trigger an early return when the char is a number (i.e. operand)
        if (!isNaN(token)) {
            return parseFloat(token);
        }

        // ** recusrive call of calling the same evaluate() function itself, within the evaluate() function
        // this will pop off each char off the stack and store their values in a 'left' and 'right' variable
        // when these recursive calls return, they'll store the values (when it's a number) into the left-right variables to be used in the computation of the addition, subtraction, multiplication, and division action-steps
        const left = evaluate();
        const right = evaluate();

        // action step
        // so if the characters are numbers then they'll return, and the call stack will go back to the earliest call to evaluate(), and it'll take those numbers to be used in the action-step
        // which is to either add, subtract, divide, or multiple depending on the identity of the token (when it's an operator)

        switch (token) {
            case "+":
                return left + right;
            case "-":
                return left - right;
            case "*":
                return left * right;
            case "/":
                return left / right;
            default:
                throw new Error(`Unsupported operator: ${token}`);
        }
    }

    // finally, return the evaluate() recursive function
    return evalute();
};