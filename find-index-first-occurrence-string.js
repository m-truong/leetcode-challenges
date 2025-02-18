// puzzle: Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Q: does only lowercase Engilish characters mean only 26chars?
// CQ: that constraint means between 1 and 10,000 chars for both 'needle' and 'haystack' input length

// inputs:
// both must be strings
// min-length is at least one-char length
//

// 1 <= haystack.length, needle.length <= 104


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    // plan:
    // MAINTAIN that order of 2nd substring inside the 1st string
    // short-circuit ==> if 1ndparam is ALREADY shorter than 1stparam --> Then return (-1)


    // output: {integer}
    // return either INDEX of the location of 2ndparam(string) inside the 1stparam(string)
    //  ==> must be 1st occurrence
    // if reach the end of the search ...
    // then ALWAYS return hard-coded (-1)

    return haystack.substring(needle);
    // return integer
};


// use the terminal to run the code
const input = process.argv.slice(2);

if (input.length === 2) {
    const haystack = input[0];
    const needle = input[1];
    const output = strStr(haystack, needle);
    console.log(`The index of the first occurrence is ${output}`);
} else {
    console.log('Please provide two strings as parameters.');
}