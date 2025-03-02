// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Q&A constraints:
// 1 <= s.length, t.length <= 5 * 104 (both min-length of 1 string)
// s and t consist of ONLY lowercase English letters.

// plan:
// count the number of charz in both string inputs
// use a HashMap (key:values)
// if both the type/number of chars are the same in the hashmap
// then 2nd input string 't' is an anagram of 's'

// edge:
// min length of 1 char
// return boolean

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// ES6 arrow expression
const isAnagram = (s, t) => {
    const charMap = new Map();

    // turn the strings into arrays of 'chars'
    // then iterate thru each, and CountFrequency of each char
    // use for of loop
    // if the count of each Char is the same, then 2nd input is anagram of the 1st

}