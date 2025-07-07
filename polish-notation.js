// app/calculator.js

exports.calculate = function(expression) {
	if (!expression) return 0;

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

	return evaluate();
};