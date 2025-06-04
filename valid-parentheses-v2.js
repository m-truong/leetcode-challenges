/**
 * @param {string} s
 * @return {boolean}
 */

const validParentheses = (s) => {

    // edgecase: if it starts with a closing brace then return false
    if (s.length === 1) return false; // just return boolean

    // const first = s.charAt(0);

    // if it's not an open brace, then return false
    if (s.charAt(0) === ')' || s.charAt(0) === '}' || s.charAt(0) === ']') return false;

    // store string length as a variable
    // const stringLength = s.length;

    // use a stack (dynamic array) to track order of 'open' parentheses
    const parenthesesStack = [];
    const parenthesesMap = new Map();
    parenthesesMap.set(')', '(');
    parenthesesMap.set('}', '{');
    parenthesesMap.set(']', '[');
    // optional: use hashmap key-value pair to map the 'open' brace to corresponding 'closing' brace


    // iterate through string
    for (let c of s) {

        // everytime I encounter an open brace, add it to the stack
        if (c === '(' || c === '{' || c === '[') {
            parenthesesStack.push(c); // O(1) push onto RHS end
            continue;
        }

        // check the most recent char on the stack
        // notice that the stack increases in length with every iteration
        const recentOpenBrace = parenthesesStack[parenthesesStack.length-1];
        // that means during this iteration, always checking the last most recent char on the stack

        // this if block assumes that it's always a closing-brace
        if (recentOpenBrace === parenthesesMap.get(c)) {
            // except when it's a closing brace then check the hashmap, and if there's a matching brace then pop it off the stack
            parenthesesStack.pop();
        }
    }


    // as we reach the end of the stack, if it's completely empty (i.e. the dynamic array has no opening braces left) then return true
    if (parenthesesStack.length === 0) return true;
    // if we reach the end and there's opening braces left, then it's an invalid string
    if (parenthesesStack.length > 0) return false;
}