'use strict';

const x = 10;
const y = 1;
const z = 6;

function catAndMouse(x, y, z) {
    return Math.abs(x - z) = Math.abs(y - z) ? "Mouse C" : Math.abs(x -z) < Math.abs(y -z) ? "Cat A" : "Cat B";

    // let a = Math.abs(x - z);
    // let b = Math.abs(y - z);
    // if (a === b) {
    //     console.log('Mouse C');
    //     return 'Mouse C';
    // } else {
    //     if ( a > b) {
    //         console.log('Cat B');
    //         return 'Cat B';
    //     } else {
    //         console.log('Cat A');
    //         return 'Cat A';
    //     }
    // }
}
catAndMouse(x, y, z);

