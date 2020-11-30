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
