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
    // turn the strings into arrays of 'chars'
    // then iterate thru each, and CountFrequency of each char
    // use for of loop
    // if the count of each Char is the same, then 2nd input is anagram of the 1st
    // remember using String.prototype.split('') String/Split
    // String split splits a string into an array by the separator
    // remember to always use the "" double-quotes as the separator

    const tCharMap = new Map();
    const sCharMap = new Map();
    const tCharArray = t.split('');
    const sCharArray = s.split('');
    console.log('print tCharArray', JSON.stringify(tCharArray));
    console.log('print sCharArray', JSON.stringify(sCharArray));

    // if the char isn't in the Map, add it
    // if it's already in there, then uptick the frequency
    // double-bang will force a VALUE into it's boolean type
    // first bang (!) converts into boolean-negation, then 2nd bang (!) converts into true-boolean-value
    for (let char of tCharArray) { // O(n)
        if (tCharMap.has(char)) {
            tCharMap.set(char, tCharMap.get(char) + 1);
        } else {
            tCharMap.set(char, 1);
        }
    }

    // now loop through the sCharArray
    for (let char of sCharArray) { // O(n)
        if (sCharMap.has(char)) {
            sCharMap.set(char, sCharMap.get(char) + 1);
        } else {
            sCharMap.set(char, 1);
        }
    }
    console.log('print charArray', JSON.stringify(tCharMap));
    console.log('print charArray', JSON.stringify(tCharMap));

    for (let key in tCharMap) {
        if (sCharMap.has(key)) {
            const sValue = sCharMap.get(key);
            const tValue = tCharMap.get(key);
            if (sValue !== tValue) {
                return false;
            }
        }
    }
    return true;
}