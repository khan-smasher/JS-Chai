"use strict";

// alert(3 + 3); we are using nodejs, not browser

console.log(3 + 3); // 6

console.log("Hello, World!"); // Hello, World!

// Data Types in JavaScript

// 1. Number
let age = 25; // Number

// 2. String
let name = "John Doe"; // String

// 3. Boolean
let isStudent = true; // Boolean

// 4. Undefined
let address; // Undefined (not assigned)

// 5. Null
let phoneNumber = null; // Null (intentionally empty)

// 6. Symbol (ES6 feature)
let uniqueId = Symbol("id"); // Symbol (unique identifier)

// 7. BigInt (ES11 feature)
let bigNumber = BigInt(123456789012345678901234567890); // BigInt (large integers)

// 8. Object
let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
}; // Object (key-value pairs)

// 9. Array (a special type of object)
let colors = ["red", "green", "blue"]; // Array (ordered list of values)

// 10. Function (a special type of object)
function greet() {
  console.log("Hello!");
} // Function (block of reusable code)
console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof address); // "undefined"
console.log(typeof phoneNumber); // "object" (null is considered an object in JS)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof person); // "object"
console.log(typeof colors); // "object" (arrays are objects in JS)
console.log(typeof greet); // "function"
console.log(Array.isArray(colors)); // true (check if colors is an array)
console.log(greet instanceof Function); // true (check if greet is a function)
console.log(greet()); // "Hello!" (calling the function)
console.log(greet.name); // "greet" (function name)
console.log(greet.length); // 0 (number of parameters the function takes)
console.log(greet.toString()); // function code as a string
console.log(person.name); // "Alice" (accessing object property)
console.log(person["age"]); // 30 (accessing object property using bracket notation)
console.log(colors[0]); // "red" (accessing array element)
console.log(colors.length); // 3 (length of the array)
console.log(colors.push("yellow")); // 4 (adding an element to the array)
console.log(colors); // ["red", "green", "blue", "yellow"] (updated array)
console.log(colors.pop()); // "yellow" (removing the last element)
console.log(colors); // ["red", "green", "blue"] (updated array after pop)
console.log(colors.join(", ")); // "red, green, blue" (joining array elements into a string)
console.log(colors.includes("green")); // true (checking if "green" is in the array)
console.log(colors.indexOf("blue")); // 2 (index of "blue" in the array)
console.log(colors.slice(1, 3)); // ["green", "blue"] (slicing the array)
console.log(colors.splice(1, 1)); // ["green"] (removing one element at index 1)
console.log(colors); // ["red", "blue"] (updated array after splice)
console.log(colors.reverse()); // ["blue", "red"] (reversing the array)
console.log(colors.sort()); // ["blue", "red"] (sorting the array)
console.log(colors.map(color => color.toUpperCase())); // ["BLUE", "RED"] (mapping array elements)
console.log(colors.filter(color => color.startsWith("b"))); // ["blue"] (filtering array elements)
console.log(colors.reduce((acc, color) => acc + color, "")); // "bluered" (reducing array to a single value)
console.log(colors.every(color => color.length === 3)); // true (checking if every color has length 3)
console.log(colors.some(color => color.startsWith("r"))); // true (checking if some color starts with "r")
console.log(colors.find(color => color.startsWith("b"))); // "blue" (finding first color that starts with "b")
console.log(colors.findIndex(color => color.startsWith("r"))); // 1 (index of first color that starts with "r")
console.log(colors.forEach(color => console.log(color))); // "blue" "red" (iterating over array elements)
console.log(colors); // ["blue", "red"] (final state of the array)
console.log(typeof colors); // "object" (arrays are objects in JS)
console.log(typeof greet); // "function" (functions are objects in JS)
console.log(typeof person); // "object" (objects are of type "object" in JS)
console.log(typeof uniqueId); // "symbol" (symbols are of type "symbol" in JS)
console.log(typeof bigNumber); // "bigint" (bigints are of type "bigint" in JS)
console.log(typeof null); // "object" (null is a special case in JS)
console.log(typeof undefined); // "undefined" (undefined is of type "undefined" in JS)
console.log(typeof NaN); // "number" (NaN is of type "number" in JS)
console.log(Number.isNaN(NaN)); // true (checking if value is NaN)
console.log(Number.isFinite(123)); // true (checking if value is finite)
console.log(Number.isInteger(123)); // true (checking if value is an integer)
console.log(Number.isSafeInteger(123)); // true (checking if value is a safe integer)
console.log(Number.parseFloat("3.14")); // 3.14 (parsing string to float)
console.log(Number.parseInt("42", 10)); // 42 (parsing string to integer with base 10)
console.log(String(123)); // "123" (converting number to string)
console.log(Boolean(1)); // true (converting number to boolean)
console.log(Boolean(0)); // false (converting number to boolean)
console.log(Boolean("Hello")); // true (converting string to boolean)
console.log(Boolean("")); // false (empty string is falsy)
console.log(Boolean(null)); // false (null is falsy)
console.log(Boolean(undefined)); // false (undefined is falsy)
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)
console.log(Boolean(function() {})); // true (function is truthy)
console.log(Boolean(Symbol("id"))); // true (symbol is truthy)
console.log(Boolean(BigInt(0))); // false (BigInt zero is falsy)
console.log(Boolean(BigInt(1))); // true (BigInt non-zero is truthy)



