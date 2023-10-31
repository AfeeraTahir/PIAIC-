"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Ahmad", "Ali", "Noman"];
// Print a personalized greeting message to each person
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We'd be honored to have you join us.`);
}
// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
