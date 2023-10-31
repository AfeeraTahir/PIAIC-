"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Ahmad", "Ali", "Noman"];
const unableToAttend = "Ali"; // Guest who can't make it
const newGuest = "Maha"; // New guest to invite
// Check if the unable guest is in the list and replace with the new guest
const guestIndex = guestList.indexOf(unableToAttend);
if (guestIndex !== -1) {
    guestList[guestIndex] = newGuest;
}
else {
    console.log(`${unableToAttend} is not in the guest list.`);
}
// Print a message about the change
console.log(`${unableToAttend} can't make it. We've invited ${newGuest} instead.`);
// Send invitations to the updated guest list
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We'd be honored to have you join us.`);
}
