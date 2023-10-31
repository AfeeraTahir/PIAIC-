"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10;
let y = 5;
// Test 1
console.log("Is x equal to y? I predict False.");
console.log(x === y);
// Test 2
console.log("Is x not equal to y? I predict True.");
console.log(x !== y);
// Test 3
console.log("Is x greater than y? I predict True.");
console.log(x > y);
// Test 4
console.log("Is y less than or equal to x? I predict True.");
console.log(y <= x);
// Test 5
console.log("Is x multiplied by y equal to 50? I predict True.");
console.log(x * y === 50);
// Test 6
console.log("Is 'hello' equal to 'Hello'? I predict False.");
console.log('hello'.toLowerCase() === 'Hello'.toLowerCase());
;
// Test 7
console.log("Is true equal to 1? I predict False.");
console.log(true === true);
// Test 8
console.log("Is null equal to undefined? I predict True.");
console.log(null === undefined);
// Test 9
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log("Are two arrays with the same elements equal? I predict False.");
console.log(arr1 === arr2);
// Test 10
let num = null;
console.log("Is a variable with null equal to null? I predict True.");
console.log(num === null);
