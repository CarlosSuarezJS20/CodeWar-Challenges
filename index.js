// ===============================
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

// ===============================

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

const litres = (time) => Math.floor(time * 0.5);

console.log(litres(11.8));

// ===============================

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
