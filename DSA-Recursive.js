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
console.log(powerCalculator(base, exp)); // 10000

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

console.log(reverseString("hello")); // 'olleh'

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

console.log(calculateTriNum(8)); // 36

//5. STRING SPLITTER
const strSplitter = function (str, split) {
	const i = str.indexOf(split) === -1 ? str.length : str.indexOf(split);
	// Base case
	if (str.length < 1) {
		return "";
	}
	// General case
	else {
		return [
			str.slice(0, i),
			...strSplitter(str.slice(i + 1, str.length), split),
		];
	}
};

console.log(strSplitter("02/20/2020", "/")); // ['02', '20', '2020']

//6. FIBONACCI
const fibiNum = function (n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return fibiNum(n - 1) + fibiNum(n - 2);
};

console.log(fibiNum(13)); // 233

//7. FACTORIAL
const factorial = function (n) {
	if (n <= 0) return 0;
	if (n === 1) return n;
	return n * factorial(n - 1);
};

console.log(factorial(4)); // 24

//8. A WAY OUT OF THE MAZE
const getOut = function (
	maze,
	currentPosition = [0, 0],
	visited = [],
	path = ""
) {
	// currentPosition=[Y,X]
	// maze[Y][X]
	const positionY = currentPosition[0];
	const positionX = currentPosition[1];

	if (maze[positionY][positionX] === "e") return path;

	// define each position around the currentPosition
	const posToTop = positionY - 1 > 0 ? positionY - 1 : 0;
	const posToRight = positionX + 1 < maze[0].length ? positionX + 1 : positionX;
	const posToBottom = positionY + 1 < maze.length ? positionY + 1 : positionY;
	const posToLeft = positionX - 1 > 0 ? positionX - 1 : positionX;

	// push currentPosition to visited
	visited.push(currentPosition);

	maze[positionY][positionX] = "X";

	// check top, right, bottom and left for any available and unvisited positions
	if (posToTop !== positionY) {
		const checkTop = [posToTop, positionX];
		if (
			visited.findIndex((a) => a[0] === checkTop[0] && a[1] === checkTop[1]) ===
			-1
		) {
			if (
				maze[checkTop[0]][checkTop[1]] === " " ||
				maze[checkTop[0]][checkTop[1]] === "e"
			) {
				path += "T";
				return getOut(maze, checkTop, visited, path);
			}
		}
	}
	if (posToRight !== positionX) {
		const checkRight = [positionY, posToRight];
		if (
			visited.findIndex(
				(a) => a[0] === checkRight[0] && a[1] === checkRight[1]
			) === -1
		) {
			if (
				maze[checkRight[0]][checkRight[1]] === " " ||
				maze[checkRight[0]][checkRight[1]] === "e"
			) {
				path += "R";
				return getOut(maze, checkRight, visited, path);
			}
		}
	}
	if (posToBottom !== positionY) {
		const checkBottom = [posToBottom, positionX];
		if (
			visited.findIndex(
				(a) => a[0] === checkBottom[0] && a[1] === checkBottom[1]
			) === -1
		) {
			if (
				maze[checkBottom[0]][checkBottom[1]] === " " ||
				maze[checkBottom[0]][checkBottom[1]] === "e"
			) {
				path += "D";
				return getOut(maze, checkBottom, visited, path);
			}
		}
	}
	if (posToLeft !== positionX) {
		const checkLeft = [positionY, posToLeft];
		if (
			visited.findIndex(
				(a) => a[0] === checkLeft[0] && a[1] === checkLeft[1]
			) === -1
		) {
			if (
				maze[checkLeft[0]][checkLeft[1]] === " " ||
				maze[checkLeft[0]][checkLeft[1]] === "e"
			) {
				path += "L";
				return getOut(maze, checkLeft, visited, path);
			}
		}
	}

	return path;
};

let mySmallMaze1 = [
	["S", " ", " "],
	[" ", "*", " "],
	[" ", " ", "e"],
];
let maze1 = [
	[" ", " ", " ", "*", " ", " ", " "],
	["*", "*", " ", "*", " ", "*", " "],
	[" ", " ", " ", " ", " ", " ", " "],
	[" ", "*", "*", "*", "*", "*", " "],
	[" ", " ", " ", " ", " ", " ", "e"],
];

console.log(getOut(mySmallMaze1));
console.log(getOut(maze1));

//9. ALL OF THE WAYS OUT OF THE MAZE

//10. ANAGRAMS

//11. ORGANIZATION CHART

//12. BINARY REPRESENTATION
