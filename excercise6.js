"use strict";
function stripNames(name) {
    return name.trim();
}
const nameWithWhitespace = ' \t\nJohn Doe\t\n ';
console.log('Original name with whitespace:', nameWithWhitespace);
const strippedName = stripNames(nameWithWhitespace);
console.log('Stripped name:', strippedName);
