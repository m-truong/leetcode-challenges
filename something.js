/**
 * @param {number[]} nums
 * @return {number}
 */

// edgecases:
// no edgecase for empty []
// will ALWAYS have majority-element present
// REPEATING NUMBERS

// pseudocode:
// best-approach is freq-counter
// that's a hashmap data-structure
// ECMA6 has built-in Map() constructor
// let's intialize new Map
// ... then iterate over the numbers[]
// and if we encounter a number number, then we add as a key
// ... otherwise increment the frequency of that number in the nums[]
// .. and once we're all done, let's find the key in that Map, that has the largest value

var majorityElement = function(nums) {
    // hashmap
    const majorityCounter = new Map();

    for (let k = 0; k < nums.length; k++) {
        // if new number, add to map
            if (majorityCounter.has(nums[k])) {
                majorityCounter.set(nums[k], majorityCounter.get(nums[k])+1)
        // otherwise, increment counter for existing number in my map
            } else {
                majorityCounter.set(nums[k], 1);
            }
    }

    console.log('here', majorityCounter);

    let majorityElemCount = 0, majorityElemKey;
    const majorityComparsionFn = (value, key) => {
        if (value > majorityElemCount) {
            majorityElemCount = value;
            majorityElemKey = key;
        }
    };
    majorityCounter.forEach(majorityComparsionFn);
    return majorityElemKey;
};