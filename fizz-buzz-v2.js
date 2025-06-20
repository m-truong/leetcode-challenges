/**
 * @param {number} n
 * @return {string[]}
 */

// EC: elements are numbers between (1 to 10k)

// P:

// T:
// given a JS number primitive as input
// divide it by 15, 5, and 3
// then each time i divide it, i check the if the remainder is 0
// it should be 0
// if it is 0, then that means it's divisible by 15, 5, 3
// so then push into my JS dynamic array the strings "Fizz", "Buzz", or "FizzBuzz"
// and then if it's not divisible by either, convert the number into
// ... a string, and then push that into the right-end of the dynamic array
// and then repeat that process a set number of times depending on the number (let's call it 'index') inside my JavaScript dynamic array
// i need to repeat these steps a set number of times until my 'index'
// ... reaches the input 'n' (the input number type) for this JavaScript function