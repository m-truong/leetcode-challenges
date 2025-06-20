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