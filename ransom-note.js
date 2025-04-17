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
// if the magazine string is less than the ransomNow string; then return false

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

    // handle edge1: ransomNote.length > magazine.length;
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // iterate over 'ransomNote' string
    // split the string into array of 'chars'
    // =====================================>
    const ransomArray = ransomNote.split('');
    console.log('ransom array', ransomArray);
    // sort
    ransomArray.sort(); // On(logn) // returns mutated OG array
    console.log('sorted ransom array', ransomArray);

    // =====================================>
    // map them to a hashmap, using a 2-dimentional array, arrays w two elements, each key-value pair is added to the new Map()
    const ransomHash = new Map();
    // now iterate over ransomArray, and populate the hashMap w count the #occurences of each char
    for (const letter of ransomArray) {
        // !! unnecessary since Map.has() already returns boolean
        // if ransomHash doesn't have the letter, then initialize value to 1
        if (!ransomHash.has(letter)) {
            ransomHash.set(letter, 1);
        } else {
            ransomHash.set(letter, ransomHash.get(letter) + 1);
        }
    }
    console.log('ransom hashmap', ransomHash);

    // =====================================>
    // take the 'magazine' string and split into array of 'chars'
    const magazineArray = magazine.split('');
    console.log('magazine array', magazineArray);
    // sort
    magazineArray.sort();
    console.log('sorted magazine array', magazineArray);

    // =====================================>
        // iterate over magazine's char-array
    // map them into a hashmap, using arrays w two elements, each key-value pair is added to the new Map()
    const magazineHash = new Map();
    // and count the #occurrences of each char
    for (const letter of magazineArray) {
        if (!magazineHash.has(letter)) {
            magazineHash.set(letter, 1);
        } else {
            magazineHash.set(letter, magazineHash.get(letter) + 1);
        }
    }
    console.log('magazine hashmap', magazineHash);

    // TODO: try implementation of Map.has();

    // deliverable:
    // first check if ALL the keys of 'ransomNote' hashmap
    // exist inside the keys of 'magazine' hashmap
    // -> if not return FALSE
    // const ransomKeys = [...ransomHash.keys()];
    // console.log('all the ransom letters', ransomKeys);
    // const magazineKeys = [...magazineHash.keys()];
    // console.log('all the magazine letters', magazineKeys);

    // must used fixed-iterable-counter loop
    // just checking the letters of ransomKeys UP TO it's length
    // just checking if THE NECESSARY LETTERS of ransomNote exist
    // inside magazineKeys
    // for (let k = 0; k < ransomKeys.length; k++) {
    //     if (ransomKeys[k] !== magazineKeys[k]) {
    //         // TODO: this fails the edgecase of "bg"
    //         return false;
    //     }
    // }

    // 'magazine' hashmap's values
    // repeat converting the Map() into an Iterator-object()
    // const ransomVals = [...ransomHash.values()];
    // console.log('all the ransom letter counts', ransomVals);
    // const magazineVals = [...magazineHash.values()];
    // console.log('all the magazine letter counts', magazineVals);

    // after checking the keys, then compare the values
    // ensure that the values of 'ransomNote' hashmap are LESS THAN or EQUAL to
    // for (let k = 0; k < ransomVals.length; k++) {
    //     if (ransomVals[k] > magazineVals[k]) {
    //         // -> IF NOT, return false
    //         return false;
    //     }
    // }

    // THIS ASSUMES that after catching all the false edgecases
    // like the above for having not enough occurrences of each unique letter inside magazine string
    // -> if YES, return TRUE
    return true;
    // blah
};