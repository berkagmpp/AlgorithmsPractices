'use strict';

// Hurdles are of varying heights, and the characters have a maximum height they can jump. 
// There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. 
// How many doses of the potion must the character take to be able to jump all of the hurdles. 
// If the character can already clear all of the hurdles, return 0.

const k = 4;    // the height the character can jump naturally
const height = [1, 6, 3, 5, 2];     // the heights of each hurdle

function hurdleRace(k, height) {
    return Math.max(0, Math.max(...height) - k);

    // return Math.max(...height) >= k ? Math.max(...height) - k : 0;
}

console.log(hurdleRace(k, height));