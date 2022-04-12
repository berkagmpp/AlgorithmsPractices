'use strict';

// Two cats and a mouse are at various positions on a line.
// You will be given their starting positions.
// Your task is to determine which cat will reach the mouse first, 
// assuming the mouse does not move and the cats travel at equal speed.
// If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
// Complete the function  to return the appropriate answer to each query, which will be printed on a new line.
// - If cat  catches the mouse first, print Cat A.
// - If cat  catches the mouse first, print Cat B.
// - If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

const x = 10;   // cat A position
const y = 1;    // cat B position
const z = 6;    // mouse C position

function catAndMouse(x, y, z) {
    return Math.abs(x - z) = Math.abs(y - z) ? "Mouse C" : Math.abs(x - z) < Math.abs(y - z) ? "Cat A" : "Cat B";

    // let a = Math.abs(x - z);
    // let b = Math.abs(y - z);

    // if (a === b) {
    //     return 'Mouse C';
    // } else {
    //     if ( a > b) {
    //         return 'Cat B';
    //     } else {
    //         return 'Cat A';
    //     }
    // }
}

console.log(catAndMouse(x, y, z));

