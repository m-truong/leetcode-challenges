// brain-teaser:
// return true if string param 'ransomNote' can be constructed using the letters from string param 'magazine'
// return false if otherwise cannot be constructed

// constraints:
// 1 <= ransomNote.length, magazine.length <= 10^5
// ransomNote, magazine ONLY ALLOWABLE lowercase English letters

// edge questions:
// can lengths of 'ransomNote' and 'magazine' DIFFER?
// -> Yes
// can we have empty string input arguments for the canConstruct function?
// -> No (min 1 char)
// each 'char' in string-param 'magazine' can ONLY be USED ONCE, inside 'ransomNote'
// -> handle this scenario by ensuring that 'ransomNote' key-values is (<=) (less than or equal to) the 'magazine' key-values

// edgecases
// if single-char, just compare if the same, then return boolean
// saves trouble of running whole function

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

    // iterate over 'ransomNote' string
    // split the string into array of 'chars'
    // count the #occurences of each char
    // map them to a hashmap

    // first check if ALL the keys of 'ransomNote' map
    // exist
};