/**
 * @param {number}
 * @return {string[]}
 * @m-truong
 */

var fizzBuzz = function(n) {
    // Numbers have the .toString() method attached
    console.log('printing', n.toString());
    // using a loop, push strings into an dynamic-array
    const fizzBuzzList = [];
    // k must be 1m, since it's 1-indexed-based
    for (let k = 1; k <= n; k++) {
        if (k % 15 === 0) fizzBuzzList.push('FizzBuzz');
        else if (k % 5 === 0) fizzBuzzList.push('Fizz');
        else if (k % 3 === 0) fizzBuzzList.push('Buzz');
        else fizzBuzzList.push(k.toString());
    }
    return fizzBuzzList;
}