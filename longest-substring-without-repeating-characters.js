// constraints:
// input is string
// return a number
// s.length can be 0
// can also be digits, symbols, or spaces

// pseudo:
// intuition that core idea behind our solution is to use a sliding window approach combined with character indexing
// This allows us to efficiently scan through the string once while keeping track of the longest valid substring we've encountered so far.

// We store the length of the input string in n for easy reference.
// maxLength will keep track of the longest valid substring we've seen so far.
// lastIndex is an array used to store the last seen position of each character. We use 128 as the size because it covers all ASCII characters. Each index in this array represents a character, and the value at that index represents the last position where we saw that character.
// start is initialized to 0, representing the start of our sliding window.



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLength = 0;
    let lastIndex = new Map();

    let start = 0;
    for (let end = 0; end < n; end++) {
        let currentChar = s[end];
        start = Math.max(start, lastIndex.get(currentChar) || 0);
        maxLength = Math.max(maxLength, end - start + 1);
        lastIndex.set(currentChar, end + 1);
    }

    return maxLength;
};