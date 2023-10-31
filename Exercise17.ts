let guestList: string[] = ["Maha", "Noman", "nadia", "Iqra"];
const maxGuests: number = 2;  // Maximum number of guests the table can accommodate

// Print a message about the limitation
console.log(`Due to table constraints, we can only invite ${maxGuests} people for dinner.`);

// Remove guests until only two names remain
while (guestList.length > maxGuests) {
  const removedGuest = guestList.pop();  // Remove the last guest
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two remaining guests
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are still invited to dinner. We'd be honored to have you join us.`);
}

// Remove the last two names to have an empty list
guestList.splice(0, guestList.length);

// Print the list to confirm it's empty
console.log("Remaining guests:", guestList);  // Output: Remaining guests: []
export{};