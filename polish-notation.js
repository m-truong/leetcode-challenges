// app/calculator.js

exports.calculate = function(expression) {
	if (!expression) return 0;

    // TODO: practice using the JS built-in methods
    // Need to memorize them
	const tokens = expression.split(" ").reverse();

	function evaluate() {
		const token = tokens.pop();

        // base case for a number
		if (!isNaN(token)) {
			// It's a number
			return parseFloat(token);
		}

		// if not an operand, then It's an operator
        // entering recursion
		const left = evaluate();
		const right = evaluate();

        // action step
		switch (token) {
			case "+":
				return left + right;
			case "-":
				return left - right;
			case "*":
				return left * right;
			case "/":
				return left / right;
			default:
				throw new Error(`Unsupported operator: ${token}`);
		}
	}

    // the very first invocation occurs when my evaluate() function gets returned
	return evaluate();
};