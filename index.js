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

let x = 5;
let y = 10;

console.log(x % y);
