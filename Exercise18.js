"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const placesToVisit = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("Original Order (after alphabetical sort):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Original Order (after reverse alphabetical sort):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
console.log("Original Order (after reversing again):", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
