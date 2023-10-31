"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album objects using the make_album function
const album1 = make_album('Artist1', 'Album 1');
const album2 = make_album('Artist2', 'Album 2', 12);
const album3 = make_album('Artist3', 'Album 3', 8);
// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
