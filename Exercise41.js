"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
const magicianNames = ['Hamid', 'Danial', 'Rehman', 'Tahir'];
// Calling the function to show magicians
show_magicians(magicianNames);
