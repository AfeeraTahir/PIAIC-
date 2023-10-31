const personName = "John Doe";

// Print the name in lowercase.
console.log(personName.toLowerCase());

// Print the name in uppercase.
console.log(personName.toUpperCase());

// Print the name in titlecase.
const words = personName.split(" ");
let titleCaseName = "";

for (const word of words) {
  titleCaseName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}

console.log(titleCaseName);
export{};