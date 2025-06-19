// let score = 33;
// let score = "33";
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
// let score = false;
// let score = [1, 2, 3];
// let score = { name: "John" };
// let score = function() { return "Hello"; };
//let score = Symbol("unique"); // Symbol is not convertible to a number
// let score = BigInt(12345678901234567890); // BIGINT is not convertible to a number
// let score = new Date(); // Date is not directly convertible to a number
// let score = /abc/; // Regular expressions are not directly convertible to a number

// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// ************ Operation ************
let value = 3;
let negValue = -value;
console.log(negValue); // -3

let str1 = "Hello";
let str2 = "Khan";

let str3 = str1 + " " + str2;
console.log(str3); // Hello Khan

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + true); // "1true"
console.log(true + "1"); // "true1"
// same goes with null ,undefined and NaN and other types
// The + operator is overloaded in JavaScript for both addition and string concatenation.
console.log("1" + "1"); // "11"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

console.log(true); // true
console.log(+true); // 1
// console.log(true+); // SyntaxError: Unexpected token '+'

console.log(+""); // 0

// let n1 , n2, n3

// n1 = n2 = n3 = 10;
// console.log(n1, n2, n3); // 10 10 10



