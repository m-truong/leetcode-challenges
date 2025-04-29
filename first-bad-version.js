// task:
// find WHICH n (integer) is the bad version
// every version after n will be a 'bad' version

// constraints:
// bad && n are both only between 1~2,147,483,647

// psuedo:
// logic wiould be that every version have the bad version would be bad
// this is cause only version get incremented from 1+

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // TODO: write return function to solve.
        // is this a loop of calling isBadVersion
        // this has to be Math; use modulo and round up
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};