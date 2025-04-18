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

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const ransomNoteFn = (ransomNote, magazine) => {
    // Edge case: If ransomNote is longer than magazine, return false
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // Create a frequency map for the magazine
    const magazineHash = new Map();
    for (const letter of magazine) {
        magazineHash.set(letter, (magazineHash.get(letter) || 0) + 1);
    }

    // Check if ransomNote can be constructed
    for (const letter of ransomNote) {
        if (!magazineHash.has(letter) || magazineHash.get(letter) === 0) {
            return false; // Letter is missing or not enough occurrences
        }
        magazineHash.set(letter, magazineHash.get(letter) - 1); // Use one occurrence of the letter
    }

    return true; // All letters in ransomNote are accounted for
};

