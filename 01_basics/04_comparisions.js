// console.log( 2 > 1 ); // true
// console.log( 2 < 1 ); // false
// console.log( 2 >= 1 ); // true
// console.log( 2 <= 1 ); // false
// console.log( 2 == 1 ); // false
// console.log( 2 != 1 ); // true
// console.log( 2 === 1 ); // false
// console.log( 2 !== 1 ); // true

// console.log( null > 0); // false
// console.log( null == 0); // false

// console.log( null >= 0); // true

// Here’s the weird part:

// JS converts null to 0

// So: 0 >= 0 → true

// 🔁 This shows how comparisons (>=, >) and equality (==) follow different coercion rules.


// console.log( undefined > 0); // false
// console.log( undefined == 0); // false
// console.log( undefined >= 0); // false

// console.log( null == undefined ); // true
// console.log( null === undefined ); // false

console.log('2' == 2); // true, because '2' is coerced to a number
console.log('2' === 2); // false, because '2' is a string and 2 is a number 