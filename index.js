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

console.log(accum('abcdeU'));

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
