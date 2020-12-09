// Task 1

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// 1 Penny === 1 cent
// 1 Nickle === 5 cent
// 1 dime === 10 cent
// 1 quarter === 25 cent

// coins[0] = pennies === 1 cent
// coins[1] = nickles === 5 cent
// coins[2] = dimes === 10 cent
// coins[3] = quarters === 25 cent

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]
// coinCombo(3) --> [3, 0, 0, 0]
// coinCombo(10) --> [0, 0, 0, 1]
// coinCombo(14) --> [0, 0, 1, 4]

const coinCombo = (cents) => {
	const coins = [];

	let quarters = parseInt(cents / 25);
	cents = cents % 25;
	let dimes = parseInt(cents / 10);
	cents = cents % 10;
	let nickels = parseInt(cents / 5);
	cents = cents % 5;
	let pennies = parseInt(cents / 1);

	coins.push(pennies, nickels, dimes, quarters);

	return coins;
};

console.log(coinCombo(3));

console.log('==============================');

// Task 2

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

const litres = (time) => Math.floor(time * 0.5);

console.log(litres(11.8));

// Task 3

const longestBestAnswer = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

const longest = (s1, s2) => {
	const string = [...s1.split(''), ...s2.split('')];
	const result = string
		.filter((letter, index) => string.indexOf(letter) === index)
		.sort()
		.join('');

	return result;
};

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

//  Task 4

// This time no story, no theory. The examples below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// a b c d
// A(toUpperCase) 1
// B(toUpperCase) 2
// C(toUpperCase) 3
// D(toUpperCase) 4

// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	const sArray = s.split('');
	const stringArr = [];
	let times = 0;

	for (let letter of sArray) {
		if (letter !== letter.toUpperCase()) {
			stringArr.push(`${letter.toUpperCase()}${letter.repeat(times++)}-`);
		} else {
			stringArr.push(`${letter}${letter.toLowerCase().repeat(times++)}-`);
		}
	}
	let string = stringArr.join('');

	return string.substring(0, string.length - 1);
}

console.log(accum('qwertyuiopasdfghjklzxcvbnm'));

// Best Practice:

// function accum(s) {
// 	return s
// 		.split('')
// 		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
// 		.join('-');
// }

// Task 5

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const string = 'This website is for losers LOL!';

function disemvowel(str) {
	return str
		.split('')
		.filter((l) => !/^[aeiou]$/i.test(l))
		.join('');
}

console.log(disemvowel(string));

// Best Practices
// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, '');
// }

// Task 5
// Now you have to write a function that takes an argument and returns the square of it.

function squared(num) {
	return num * num;
}

console.log('==============================');

console.log(squared(4));

// Task 6

// A person's Life Path Number is calculated by adding each individual number in that person's date of birth, untill it is reduced to a single digit number.

// For example, Albert Einstein's birthday is March 14, 1879. The calculation of his Life Path Number would look like this:

// year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
// month: 0 + 3 = 3
// day: 1 + 4 = 5
// final result: 7 + 3 + 5 = 15; 1 + 5 = 6
// Einstein's Life Path Number is therefore: 6

// Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the following format: "yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day. The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

// You do not need to check that the input to the lifePathNumber()-function is correct format. You can assume that the input to the function will always be a valid date (as a string) with the format: "yyyy-mm-dd".

// Note: If the month or day is a single digit number, then it shall be preceeded by a 0 (zero). For example, in Einstein's case the month of March is 3; which is a single digit number. The function shall in this case be called with the following parameter: lifePathNumber("1879-03-14").

function lifePathNumber(dateOfBirth) {
	let lifenum = dateOfBirth.replace(/-/g, '');
	while (lifenum.length > 1) {
		let lifenumArray = lifenum.split('').map((c) => +c);

		lifenum = lifenumArray.reduce((c, p) => c + p).toString();
	}

	return +lifenum;
}

console.log(lifePathNumber('1879-03-14'));

console.log('==============================');

// Task 7

// Description
// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

// Example
//   sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) => "product"
// Explanation
// The sum of the 3 highest numbers is 41 + 36 + 20 = 97

// The product of the lowest 3 numbers is 8 x 9 x 10 = 720

// The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"

function sumOrProduct(array, n) {
	let a = array.sort((a, b) => a - b);
	let s = a.slice(-n).reduce((a, b) => a + b);
	let p = a.slice(0, n).reduce((a, b) => a * b);
	return s === p ? 'same' : s < p ? 'product' : 'sum';
}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3));

console.log('==============================');

// Task 8
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note that N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
	let array = arr.filter((num) => {
		return mixArr.indexOf(num) === -1;
	});
	const [num] = array;

	return num === undefined ? 0 : num;
}

console.log(
	findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
);

// best Practice: function findDeletedNumber(arr, mixArr) {
//   return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
// }

console.log('==============================');

// Task 9
// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

//Formula is = 1024 / (4/3)

function findScreenHeight(width, ratio) {
	let tvSize;

	if (ratio.split('').length === 3) {
		const ratioInNumber = ratio
			.replace(/:/g, '')
			.split('')
			.map((elem) => +elem)
			.reduce((c, p) => c / p);

		tvSize = `${width}x${width / ratioInNumber}`;
		return tvSize;
	}
	if (ratio.split('').length === 4) {
		const ratioInNumber = ratio.split('');
		const slice1 = +ratioInNumber.slice(0, 2).join('');
		const slice2 = +ratioInNumber.slice(-1).toString();
		console.log(slice1 / slice2);
		const tvSize = `${width}x${width / (slice1 / slice2)}`;
		console.log('there');

		return tvSize;
	}
}

console.log(findScreenHeight(1600, '4:3'));

// BEST PRACTICE
// function findScreenHeight(width, ratio) {
//   const [widthRatio, heightRatio] = ratio.split(':')
//   const height = width / widthRatio * heightRatio
//   return width + 'x' + height
// }

console.log('==============================');

// Task 10

// Scenario

// Now that the competition gets tough it will Sort out the men from the boys .
// Men are the Even numbers and Boys are the odd

// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least *4*** .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .

function menFromBoys(arr) {
	const men = [];
	const boys = [];
	let line = [];

	const menAndBoys = arr.filter((person, index) => {
		return arr.indexOf(person) === index;
	});

	for (let person of menAndBoys) {
		if (person % 2 === 0) {
			men.push(person);
		} else {
			boys.push(person);
		}
	}

	line = [...men.sort((a, b) => a - b), ...boys.sort((a, b) => b - a)];

	return line;
}

console.log(menFromBoys([82, 91, 72, 76, 76, 100, 8]));

// Best Practice

// function menFromBoys(arr) {
// 	arr = Array.from(new Set(arr));
// 	let odd = arr.filter((a) => a % 2).sort((a, b) => b - a);
// 	let even = arr.filter((a) => a % 2 === 0).sort((a, b) => a - b);
// 	return even.concat(odd);
// }

console.log('==============================');

// Task 10

// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true;
// ' Hello world' = false;
// 'Hello world  ' = false;
// 'Hello  world' = false;
// 'Hello' = true;

// // Even though there are no spaces, it is still valid because none are needed

// 'Helloworld' = true;
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false;
// ' ' = false;
// '' = true;

// Note - there will be no punctuation or digits in the input string, only letters.

function validSpacing(s) {
	const string = s.toUpperCase().split('');
	let numSpaces = 0;
	let validation;
	for (let character of string) {
		if (character === ' ') {
			numSpaces += 1;
		}
	}

	if (string.lastIndexOf(' ', string.length) === 0) {
		validation = false;
	}

	if (string.lastIndexOf('', string.length) === 0) {
		validation = true;
	}

	if (numSpaces <= 1) {
		validation = true;
	}

	if (numSpaces > 1) {
		validation = false;
	}

	return validation;
}

// best practices
// function validSpacing(s) {
// 	return s.trim() == s && !s.includes('  ');
// }

console.log(validSpacing(' FbKwy'));

console.log('==============================');

// Task 11

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

const gimme = (inputArray) => {
	let clonedArray = [...inputArray];
	clonedArray.sort(function (a, b) {
		return a - b;
	});

	return inputArray.indexOf(clonedArray[1]);
};

console.log(gimme([10, 5, 14]));

// best practice =
// var gimme = function (inputArray) {
//   return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
// };
