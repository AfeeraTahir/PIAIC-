let guestList: string[] = ["Ahmad", "Maha", "Noman"];
const unableToAttend: string = "Ahmad";  // Guest who can't make it
const newGuestBeginning: string = "Maryam";  // New guest to add at the beginning
const newGuestMiddle: string = "Iqra";  // New guest to add in the middle
const newGuestEnd: string = "Nadia";  // New guest to add at the end

// Remove the guest who can't attend
guestList = guestList.filter(guest => guest !== unableToAttend);

// Add new guests
guestList.unshift(newGuestBeginning);  // Add at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, newGuestMiddle);  // Add in the middle
guestList.push(newGuestEnd);  // Add at the end

// Print message about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Send invitations to the updated guest list
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. We'd be honored to have you join us.`);
}
export{};