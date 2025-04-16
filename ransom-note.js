// problem
// return true if string param 'ransomNote' can be constructed using the letters from string param 'magazine'
// return false if otherwise cannot be constructed

// constraints:
// note each 'char' in string-param 'magazine' only once
// 1 <= ransomNote.length, magazine.length <= 10^5
// ransomNote, magazine ONLY ALLOWABLE lowercase English letters

// edge
// can lengths of 'ransomeNote' and 'magazine' DIFFER?
// can we have empty string input arguments for the canConstruct function?

// questions

/** takes 2 parameters
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = (ransomNote, magazine) => {
    // use ES6 library on Strings built-in operations

    // take the 'magazine' string and split into array of 'chars'
    // iterate over magazine's char-array
    // and count the #occurrences of each char
    // map them into a hashmap

    // iterate over 'ransomeNote' string
    // split the string into array of 'chars'
    // count the #occurences of each char
    // map them to a hashmap

    // first check if ALL the keys of 'ransomeNote' map
    // exist
};