'use strict';

// You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left.
// At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length.
// When all the remaining sticks are the same length, they cannot be shortened so discard them.
// Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.

const arr = [5, 4, 4, 2, 2, 8];
// [5, 4, 4, 2, 2, 8] -> 6
// [3, 2, 2, 6] -> 4
// [1, 4] -> 2
// [3] -> 1
// Output: [6, 4, 2, 1]

// const arr = [5, 4, 4, 2, 2, 8, 8];
// // [5, 4, 4, 2, 2, 8, 8] -> 7
// // [3, 2, 2, 6, 6] -> 5
// // [1, 4, 4] -> 3
// // [3, 3] -> 2
// // Output: [7, 5, 3, 2]

function cutTheSticks(arr) {
    let array = [...arr];
    let count = [arr.length];
 
    for (let i = 0; i < array.length;) {    // array.length is reduced, so, i must stay! 
        array = array.map(x => x - Math.min(...array)).filter(y => y != 0);
        count.push(array.length);
    }

    return count.filter(y => y != 0);
}

console.log(cutTheSticks(arr));