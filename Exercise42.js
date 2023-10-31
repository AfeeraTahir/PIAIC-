"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
// Original array of magician's names
const magicianNames = ['Hamid', 'Danial', 'Rehman', 'Tahir'];
// Function to modify the magician names to include "the Great"
const greatMagicianNames = make_great(magicianNames);
// Function to display magicians with their modified names
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Calling the function to show magicians with their modified names
show_magicians(greatMagicianNames);
