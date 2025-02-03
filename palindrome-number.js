// new technique
// always use a HashMap because it's O(1) time complexity to access elements.
// store as last seen (key value pairs)
// rubber-duck the solution using exmaple Inputs
// check edge-cases like duplicates and negative numbers or empty inputs
// had debugging console.logs


// Edge-cases: can be negative, can be single digit, can be multiple digits.
// can it have decimals?
// how big is the number?
// both floating-point numbers, and Integers are treated as "number-type" in JavaScript
// negative numbers are treated as "number-type" in JavaScript
// need to maintain the "-" and any "." decimals in the number

// Plan: can't really compare a number forwards and backwards
// would have to convert to a string, then compare the reverse-strings.
// Hint: description says "reads" forwards and backwards

/**
 * @param {number} x
 * @return {boolean}
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

var isPalindrome = function(x) {
    console.log('here', x, x.toString());
    // use string.methods()
    const intString = x.toString();
    // need to convert string to array first
    // most obvious way is String.split('') method
    // if no quote separator then just single element of the ['x'] string
    // this splits all the characters
    const arrayIntegers = intString.split('');
    console.log('check array of chars' , arrayIntegers);
    // now call reverse, and doesn't COPY into a new array, BUT MUTATES in-place.
    const reversedArray = arrayIntegers.toReversed();

    // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,

    // must use '' seperator, else it'll be a comma-separated string.
    const reversedString = reversedArray.join(''); // returns new string

    // returns true if Palindrome, false otherwise.
    return (intString === reversedString); // this comparison will return a boolean
};