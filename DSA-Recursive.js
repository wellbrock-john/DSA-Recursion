/**
 *
 * 	---------- RECURSIVE FUNCTION PRACTICE ----------
 *
 */

//1. COUNTING SHEEP
const countSheep = function (number) {
	// Base case
	if (number === 0) {
		return "0: All sheep jumped over the fence";
	}
	// General case
	return (
		`${number}: Another sheep jumps over the fence. ` + countSheep(number - 1)
	);
};

let num = 3;
console.log(countSheep(num));

//2. POWER CALCULATOR
const powerCalculator = function (baseInt, exponent) {
	// Base cases
	if (exponent < 0) {
		return "exponent should be >=0";
	} else if (exponent === 0) {
		return 1;
	} else if (exponent === 1) {
		return baseInt;
	}
	// General case
	else {
		return baseInt * powerCalculator(baseInt, exponent - 1);
	}
};

let base = 10;
let exp = 4;
console.log(powerCalculator(base, exp));

//3. REVERSE STRING
const reverseString = function (string) {
	// Base case
	if (string === "") {
		return "";
	}
	// General case
	else {
		return reverseString(string.substr(1)) + string.charAt(0);
	}
};

console.log(reverseString("hello"));

//4. Nth TRIANGULAR NUMBER
const calculateTriNum = function (nth) {
	// Base case
	if (nth === 1) {
		return nth;
	}
	// General case
	else {
		return nth + calculateTriNum(nth - 1);
	}
};

console.log(calculateTriNum(8));
