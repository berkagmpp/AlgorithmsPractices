'use strict';

// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. 
// Return YES if they are or NO if they are not.

const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
// abcde
// fghij
// klmno
// pqrst
// uvwxy

// Output: YES

function gridChallenge(grid) {
    let arr = [];

    for (let i = 0; i < grid.length; i++) {
        arr.push(grid[i].split('').sort().join(''));
    }

    let num = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (num > arr[j][i]) {
                return 'NO';
            } else {
                num = arr[j][i];
                if (j === arr.length - 1) {
                    num = arr[0][i + 1];
                }
            }
        }
    }
    
    return 'YES';
}

console.log(gridChallenge(grid));