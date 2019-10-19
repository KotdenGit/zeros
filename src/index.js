module.exports = function zeros(expression) {
  
  var exp = expression.split("*");                      // segregation, disposal *
	var n = exp.length, num2 = 0, num5 = 0;
	for (let i = 0; i < n; i++) {
		let mark = (exp[i][exp[i].length - 2] == "!") ? 2 : 1; // one ! or two !!
		exp[i] = parseInt(exp[i]);                          // rejection of exclamation marks
		for (let j = exp[i]; j > 1; j -= mark) {
			let value = j
			while (value % 5 == 0) {
				num5++;                                         // counting fives
				temp /= 5;
			}
			while (value % 2 == 0) {
				num2++;                                         // addition of twos 
				value /= 2;
			}
		}
	}
	return Math.min(num2, num5);
  
}
