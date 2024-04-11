const A = [2, 4, 8, 21, 3, 5, 76, 5, 8, 19];

// shift - removes and returns the item undefined from the from the left, then "shift"'s all elements over
const shift_result = A.shift();
console.log(shift_result); // 2

// unshift - inserts item from the left, returns new length of array
const unshift_result = A.unshift(2);
console.log(unshift_result); // 10

// pop - removes and returns item or undefined from the right, no shift required
const pop_result = A.pop();
console.log(pop_result); // 19

// push - inserts item from the right, returns new length of the array
const push_result = A.push(19); // 10
console.log(push_result);

// splice - removes elements from array (non-inclusive) and returns a new array
const splice_result = [0, 1, 2, 3, 4].splice(2); // i.e. "splice out the first 2 elements"
console.log(splice_result); // [2, 3, 4]

// slice - returns a subsection of the array
const slice_result_1 = [0, 1, 2, 3, 4].slice(0, 3); // i.e. "slice array by giving my the first half"
console.log(slice_result_1); // [0, 1, 2]
const slice_result_2 = [0, 1, 2, 3, 4].slice(2, undefined); // i.e. "slice array by giving my the last half"
console.log(slice_result_2); // [2, 3, 4]

// map
/**
 * You have an array of objects representing students, each with a
 * name and grades property. Write a function calculateAverageGrades
 * that takes this array as input and returns a new array of objects,
 * where each object contains the student's name and their average grade.
 * Use the map method to achieve this.
 * You can assume that each student has at least one grade in their grades array.
 */
type Student = {
	name: string;
	grades: number[];
};
const students: Array<Student> = [
	{ name: "Alice", grades: [90, 95, 88] },
	{ name: "Bob", grades: [78, 82, 80] },
	{ name: "Charlie", grades: [88, 84, 78] },
];

const calculateAverageGrades = (students: Array<Student>) => {
	return students.map(({ name, grades }) => {
		const gradesSum = grades.reduce((acc, curr) => acc + curr, 0);
		const averageGrade = Math.round(gradesSum / grades.length);

		return {
			name,
			averageGrade,
		};
	});
};

const calculateAverageGrades_result = calculateAverageGrades(students);
console.log(calculateAverageGrades_result);

/**
 * You have an array of strings, each containing a sentence. Write a function leetifySentences that takes this array as input and returns a new array of strings, where each sentence is "leetified". Leetification involves replacing certain characters with their leet (1337) equivalents:
 *     Replace all occurrences of 'e' with '3'.
 *     Replace all occurrences of 'o' with '0'.
 *     Replace all occurrences of 'l' with '1'.
 *     Replace all occurrences of 't' with '7'.
 * You should maintain the original capitalization of the letters. Use the map method to achieve this.
 */

const sentences = ["Hello, World!", "This is a test sentence."];
const leetify = (sentances: string[]) => {
	const leetMapping: Record<string, string> = {
		e: "3",
		o: "0",
		l: "1",
		t: "7",
	};

	return sentances.map((sentance) => {
		const result = sentance
			.split("")
			.map((char) => {
				if (char in leetMapping) {
					return leetMapping[char];
				}
				return char;
			})
			.join("");

		return result;
	});
};

const leetify_result = leetify(sentences);
console.log(leetify_result);

/**
 * You have an array of strings, each containing a comma-separated
 * list of numbers. Write a function calculateOddEvenSums that takes
 * this array as input and returns a new array of objects, where each
 * object contains the sum of the odd numbers and the sum of the even
 * numbers in the corresponding input string.
 */
const inputs = ["1,2,3,4,5", "6,7,8,9,10"];

const calculateOddEvenSums = (inputs: string[]) => {
	return inputs
		.map((input) => {
			const evens: Array<number> = [];
			const odds: Array<number> = [];

			console.log(input);

			const nums = input.split(",").map((numAsString) => Number(numAsString));

			for (const num of nums) {
				console.log("num", num);
				if (num % 2 === 0) {
					evens.push(num);
				}
				if (num % 2 === 1) {
					odds.push(num);
				}
			}

			return {
				evenSum: evens.reduce((acc, curr) => acc + curr, 0),
				oddsSum: odds.reduce((acc, curr) => acc + curr, 0),
			};
		})
		.reduce(
			(acc, curr) => {
				return {
					evenSum: curr.evenSum + acc.evenSum,
					oddSum: curr.oddsSum + acc.oddSum,
				};
			},
			{ evenSum: 0, oddSum: 0 },
		);
};

const calculateOddEvenSums_result = calculateOddEvenSums(inputs);
console.log(calculateOddEvenSums_result);

// filter
/**
 * You have an array of objects representing students,
 * each with a name and grades property. Write a function
 * findStudentsWithHighGrades that takes this array as input
 * and returns a new array of objects, containing only the
 * students who have grades higher than the average grade of
 * all students.
 */
const students2 = [
	{ name: "Alice", grades: [90, 95, 88] },
	{ name: "Bob", grades: [78, 82, 80] },
	{ name: "Charlie", grades: [88, 84, 78] },
];

const findStudentsWithHighGrades = (students: Student[]) => {
	const averageGrade = Math.round(
		students.reduce((acc, student) => {
			const avgStudentGrade = Math.round(
				student.grades.reduce((acc, curr) => curr + acc, 0) /
					student.grades.length,
			);

			return avgStudentGrade + acc;
		}, 0) / students.length,
	);

	return students.filter(
		(student) =>
			Math.round(
				student.grades.reduce((acc, curr) => curr + acc, 0) /
					student.grades.length,
			) >= averageGrade,
	);
};

const findStudentsWithHighGrades_result = findStudentsWithHighGrades(students2);
console.log(findStudentsWithHighGrades_result);

// reduce
/**
 * Write a function calculateTotalSalesByProduct that takes this array
 * as input and returns an object where each key is a productId and
 * the value is the total sales amount for that product (quantity * pricePerUnit).
 * 
 * input
 * const salesData = [
 *   { productId: 1, quantity: 5, pricePerUnit: 10 },
 *   { productId: 2, quantity: 10, pricePerUnit: 15 },
 *   { productId: 1, quantity: 3, pricePerUnit: 12 },
 *   { productId: 3, quantity: 7, pricePerUnit: 8 },
 *   // more objects...
 * ];

 * 
 * output
 * {
 *   1: 86,   // (5 * 10) + (3 * 12) = 50 + 36 = 86
 *   2: 150,  // 10 * 15 = 150
 *   3: 56    // 7 * 8 = 56
 * }
 */

type Product = { productId: number; quantity: number; pricePerUnit: number };
const products: Array<Product> = [
	{ productId: 1, quantity: 5, pricePerUnit: 10 },
	{ productId: 2, quantity: 10, pricePerUnit: 15 },
	{ productId: 1, quantity: 3, pricePerUnit: 12 },
	{ productId: 3, quantity: 7, pricePerUnit: 8 },
];

const calculateTotalSalesByProduct = (products: Array<Product>) => {
	return products.reduce(
		(acc, product) => {
			let totalSale = product.quantity * product.pricePerUnit;

			if (product.productId in acc) {
				totalSale = acc[product.productId] + totalSale;
			}

			acc[product.productId] = totalSale;
			return acc;
		},
		{} as Record<number, number>,
	);
};
const calculateTotalSalesByProduct_result =
	calculateTotalSalesByProduct(products);
console.log(calculateTotalSalesByProduct_result);

// includes
// forEach
