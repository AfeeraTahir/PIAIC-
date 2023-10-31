"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
// Access an invalid index to cause an error
console.log(programmingLanguages[10]); // Accessing an index that doesn't exist
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...programmingLanguages].sort());
