// problem: Write a function to FIND the longest common prefix string amongst an array[] of strings.
// If there is no common prefix, return an empty string "".

// constraints:
// 1 <= strs.length <= 200(elements)
// 0 <= strs[i].length <= 200(characters)
// strs[i] consists of only lower-case English letters.

// edge:
// array[] of strings
// return: string
// can be empty string
// worst-edge-case will be [""] strs.length = 1, strs[i].length = 0

// testcases:
// input: strs = ["flower","flow","flight"] => output: "fl"
// input: strs = ["dog","racecar","car"] => output: "" // no common prefix

// task:

// plan:
// create reassignable string // initialized "" empty string
// reassign at the end of algo-logic
// what's the longest possible prefix of English words?
// the prefix can be very long; so cannot pre-determine the prefix

// instead each element is a string of characters

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    console.log('starting here',strs);

    let longestCommonPrefix = "";

    // try code-strat of detecting edge-case early once
    if (strs.length === 1 && strs[0].length === 0) {
        return longestCommonPrefix;
    }



};

// use the terminal to run the code
const input = process.argv[2] // reads input from terminal

if (input) {
    const longestPrefix = longestCommonPrefix(input);
    console.log(`the longest-common-prefix ${input} is ${longestPrefix}`);
} else {
    console.log('please provide a valid array of strings to find the longest common prefix');
}