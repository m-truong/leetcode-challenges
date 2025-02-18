// task: number (non-floating-point array)
// sorted, in ASCENDING order
// REMOVE any DUPLICATES

// edge:
// without creating new array (in-place)
// remove from an array (appears ONCE)
// ORIGINAL sorted ORDER kept the same
// after removal of all duplicates ~ HOW MANY DIFF INTEGERS are there?

// beware:
// remaining elements of nums NOT Important
// size of nums[] array IS UNIMPORTANT

// complexity:
// keep it O(n)

// plan:
// create hashMap of each number(integer) encountered
// if it's not already encountered ~ then add it
// if it's encountered already ~ then remove it
// using HashMap ~ call prototype method to get number of unique keys
// how many repeating duplciates?

// using a list/array --> iterate through O(n)
// once reached removal ---> will be O(n) since need to shift

// constraints:
// at least one integer
// elements are also negative

// ex:
// [1,1,1,1,2,2,2,2,2,3,3,3,3,4]
// [0,1,2,3,4,5]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // new TEch: JSON.stringify()
    console.log('original interger[] ==>', JSON.stringify(nums));

    // NOTE: important NEW keyword
    const uniqueNumMap = new Map();

    // NOTE: Use the for-of loop
    // go through entire array
    for (let current of nums) {
        console.log('current number', JSON.stringify(current));
        // if integer NEVER ENCOUNTERED YET, then SET IT
        !uniqueNumMap.has(current)
        ? uniqueNumMap.set(current, 1) // set to integer not 'quotes'
        : uniqueNumMap.set(current, (uniqueNumMap.get(current)) + 1);
        // utialize this counter as valuable
    }

    const resultsLogMapKeys = uniqueNumMap.keys();
    const resultsLogMapCount = uniqueNumMap.values();

    console.log('the results', resultsLogMapCount);

    console.log(`My UniqueNumsMap has ${JSON.stringify(uniqueNumMap.size)} unique number-keys.`);

    // ....... if already there then remove from array
    // splice requires use of the Index
    for (let i = 0 ; i < nums.length ; i++) {
        // Array.splice() is the de-facto JS method fo removing an element IN-place
        // this should splice/remove in place up TO one-less the get value
        uniqueNumMap.has(nums[i]) && nums.splice(i, uniqueNumMap.get(nums[i]) - 1);
    }

    console.log('My finished modified array is nums array ==>', nums.toString());

    return uniqueNumMap.size;
};


// use the terminal to run the code
const input = process.argv.slice(2).map(Number); // reads input from terminal and converts to an array of numbers

if (input.length > 0) {
    const output = removeDuplicates(input);
    console.log(`The number of unique integers in the array is ${output}`);
    console.log(`The modified array is [${input}]`);
} else {
    console.log('Please provide a valid array of integers.');
}