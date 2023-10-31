const programmingLanguages: string[] = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Print the array in its original order
console.log("Original Order:", programmingLanguages);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...programmingLanguages].sort());

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...programmingLanguages].sort().reverse());
export{};