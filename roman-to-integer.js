// problem: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX.

// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Create a Map with initial 'key-value' pairs
const subtractionRomanNumerals = new Map(
    ['IV', 4],
    ['IX', 9],
    ['XL', 50],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900]
);

// constraints:
// 1) 1 <= s.length <= 15
// TCs: 'X' = 10, 'IV' = 4, 'IX' = 9, 'LVIII' = 58, 'MCMXCIV' = 1994
// TCs: 'III' = 3 (only positive Roman numbers) // (cannot be negative)
// questions: input cannot be empty. min-length is '1' char

// 2) (s) contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// at most


// 3) It is guaranteed that 's' is a valid roman numeral in the range [1, 3999].
// between 1, and 3999
// ex: MMMCMXCIX = 3999, split would be 'M'1000, + 'M'1000, + 'M'1000, + 'CM'900, + 'XC'90, 'IX'9
// ex: I = 1

// task: Given a roman numeral 'string', convert it to an integer (i.e. not a floating-point number).
// input: string
// output: number

// questions: only positive Roman numbers?

// edge-cases: (4) and (9) are edge-cases! IV and IX.

// pseudo-plan:
// use a HashMap (very powerful data-structure)
// there are only 6 instances (where Roman number uses substraction)
// since we already know those 6 instances, we can store them in a HashMap
// taking the string, we can parse it and find the corresponding number
// Using the roman numbers, we can then "addition" them all to get the integer value.
// going from left to right

// keep it under O(n^2) time-complexity
// iterate over the string to detect the six subtraction-roman-numberal instances.
// extract those instances from the input 's'
// separate after extracting those instances
// should only be left with the 'single roman numeral' instances

// then those single roman numerals should be stored as elements in an array
// iterate of this array and add them all up to THE running sum

// might need 2 hashmaps

// Key Features of Map:
// •	Maintains the insertion order of elements.
// •	Allows any type of key (unlike objects, which convert keys to strings).
// •	Has built-in methods for easy manipulation.

// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


// Time Complexity:
// 	•	O(n) (Linear Time) → Where n is the number of elements in the input array.
// 	•	The constructor iterates over the array and inserts each key-value pair into the Map, leading to O(n) insertion cost.

// Space Complexity:
// 	•	O(n) (Linear Space) → The Map stores n key-value pairs, consuming O(n) memory.

// .set(key, value) - Adding/Updating an Entry
// •	Time Complexity: O(1) → Map uses a hash table internally, so inserting or updating a key-value pair is done in constant time.
// •	Space Complexity: O(1) per entry, but O(n) overall if multiple values are inserted.
// .get(key) - Retrieving a Value
// 	•	Time Complexity: O(1) → Uses a hash table lookup.
// •	Space Complexity: O(1) → No extra storage is allocated.
// .has(key) - Checking for Key Existence
// 	•	Time Complexity: O(1) → Constant-time lookup.
// •	Space Complexity: O(1) → No additional memory usage.
// .delete(key) - Removing a Key-Value Pair
// 	•	Time Complexity: O(1) → Removing an entry is a constant-time operation in a hash table.
// •	Space Complexity: O(1) → The key-value pair is removed, freeing up space.

//     for (let key of myMap.keys()) {
//   console.log(key);
// }
// for (let value of myMap.values()) {
//   console.log(value);
// }
// for (let [key, value] of myMap.entries()) {
//   console.log(key, value);
// }
// myMap.forEach((value, key) => {
//   console.log(key, value);
// });

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    console.log('here', s);

    // Create a Map with initial 'key-value' pairs // O(n) time-space // since using iterable
    const subtractionRomanNumerals = new Map(
        ['IV', 4],
        ['IX', 9],
        ['XL', 50],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900]
    );

    // Create another HashMap for the values for the Roman Numerals?
    const romanNumerals = new Map(
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    );

    // plan:
    // take input string
    // and split it into an array of 'character'
    // but must be split by the matching romanNumeral HashMap keys
    // then iterate over the array of roman numerals
    // as i iterate over them ~ then add them to a running sum
    // return that running sum as the converted integer value

};