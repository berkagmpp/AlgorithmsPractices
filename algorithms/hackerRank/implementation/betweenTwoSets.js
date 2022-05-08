'use strict';

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

const a = [2, 4];
const b = [16, 32, 96];
// a -> 4, 8, 16
// b -> 2, 4, 8, 16
// a & b -> 4, 8, 16
// Output: 3

function getTotalX(a, b) {
    let count = 0;

    for (let x = 1; x <= 100; x++) {
        if (a.every(num => x % num == 0)) {     // Common Multiple
            if (b.every(num => num % x == 0)) {     // Common Divider
                count++;
            }
        }
    }
    
    return count;
}

console.log(getTotalX(a, b));
