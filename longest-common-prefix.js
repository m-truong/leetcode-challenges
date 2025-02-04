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

// instead each element is a string of characters, so would have to compare the characters...
// break each element string into it's characters
// then concatenate the characters into a new prefix-string


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

    // plan:
    // assume the first string if it gets past the edge case is the longest prefix
    // then iterate over the rest of the strings, and use the substring() method
    // see if there's a substring that matches the next string in the array,
    // if ONLY a portion matches, then trim the characters so that the longest ASSUMED prefix
    // ...continues to get shorter and shorter.
    // if the next doesn't have the current prefix, then it still holds true
    // BUT WHAT IF ... in element index[30] there's a longer prefix, and it becomes MORE common through to the 200th element in the array?

};

// use the terminal to run the code
const input = process.argv[2] // reads input from terminal

if (input) {
    const longestPrefix = longestCommonPrefix(input);
    console.log(`the longest-common-prefix ${input} is ${longestPrefix}`);
} else {
    console.log('please provide a valid array of strings to find the longest common prefix');
}