
function stripNames(name: string): string {
    return name.trim();
}

const nameWithWhitespace = ' \t\nJohn Doe\t\n ';
console.log('Original name with whitespace:', nameWithWhitespace);

const strippedName = stripNames(nameWithWhitespace);
console.log('Stripped name:', strippedName);