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
// -> handle this scenario by ensuring that 'ransomNote' key-values is (<=) (less-than-or-equal-to) the 'magazine' key-values
// would it be easier to sort the char-arrays?
// -> after turning the char-strings into char-arrays, then sort them
// will there be any whitespace?
// -> No

// edgecases
// if single-char, just compare if the same, then return boolean
// saves trouble of running whole function

// alternative-approaches:
// solvable using a queue/stack
// queues-stacks are essentially just lists-arrays


/** takes 2 parameters
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = (ransomNote, magazine) => {
    // use ES6 library on Strings built-in operations

    // iterate over 'ransomNote' string
    // split the string into array of 'chars'
    const ransomArray = ransomNote.split('');
    console.log('ransom array', ransomArray);
    // sort
    ransomArray.sort(); // On(logn) // returns mutated OG array
    console.log('sorted ransom array', ransomArray);
    // map them to a hashmap
    // count the #occurences of each char

    // take the 'magazine' string and split into array of 'chars'
    const magazineArray = magazine.split('');
    console.log('magazine array', magazineArray);
    // sort
    magazineArray.sort();
    console.log('sorted magazine array', magazineArray);
    // iterate over magazine's char-array
    // map them into a hashmap
    // and count the #occurrences of each char


    // first check if ALL the keys of 'ransomNote' hashmap
    // exist inside the keys of 'magazine' hashmap
    // -> if not return FALSE

    // after checking the keys, then compare the values
    // ensure that the values of 'ransomNote' hashmap are LESS THAN or EQUAL to
    // 'magazine' hashmap's values
    // -> if YES, return TRUE
    // -> IF NOT, return false

    // blah

};