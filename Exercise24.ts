let string1: string = 'hello';
let string2: string = 'HELLO';
let number1: number = 10;
let number2: number = 5;
let arr: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);

// Tests using the lower case function
console.log("Is string1 (lowercased) equal to string2 (lowercased)? I predict True.");
console.log(string1.toLowerCase() === string2.toLowerCase());

// Numerical tests
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2);

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is (number1 > 3) and (number2 < 7)? I predict True.");
console.log(number1 > 3 && number2 < 7);

console.log("Is (number1 > 3) or (number2 < 3)? I predict True.");
console.log(number1 > 3 || number2 < 3);

// Test whether an item is in an array
console.log("Is 4 in the array? I predict True.");
console.log(arr.includes(4));

// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!arr.includes(6));
export{};