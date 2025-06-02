// q:

// constraints:
// must have equal # of brackets of same type
// cannot have extra brackets
// min length is single bracket

/**
 * @param {string} s
 * @return {boolean}
 */

const validParentheses = (s) => {

    // edgecase: single bracket
    if (s.length === 1) return false;
    // Loop through the string
    let symbStack = []
    // Create object with key/value pairs '({[]})'
    let symbTracker = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    // Add first instance of open brace
    // If find closing brace - immediately return false
    if (s.charAt(0) === '}' || s.charAt(0) === ')' || s.charAt(0) === ']')
        return false
    // This assumes that very first 'char' is at least '{', '(', or '['
    for ( let k = 0 ; k < s.length ; k++ ) {
        const symb = s[k]
        console.log('current symb is', symb);
        if (symb === '{' || symb === '(' || symb === '[') {
            symbStack.push(symb)
            continue;
        }
        // Must add the open parentheses in the correct order as they appear
        // Can only POP-OFF from the stack
            // if THE CURRENT SYMBOL matches THE MOST RECENT ON THE STACK
            // Assumes it's a closing '],},)'
            // ENTIRE STACK IS ONLY opening braces!
        let mostRecentSymb = symbStack[symbStack.length-1]
        console.log('most recent on stack is', mostRecentSymb)
        // '{' to '}'
        if (mostRecentSymb === symbTracker[symb] ) {
            symbStack.pop()
        } else {
            return false;
        }
    }

    // if empty, then it's valid string
    if (symbStack.length === 0) return true
    // if not completely empty, then it's not valid string
    if (symbStack.length > 0) return false
}