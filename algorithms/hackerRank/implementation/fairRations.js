'use strict';

// 1. Every time you give a loaf of bread to some person i, 
//     you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons i + 1 or i - 1).
// 2. After all the bread is distributed, each person must have an even number of loaves.

const B = [2, 3, 4, 5, 6];
// Output: 4

function fairRations(B) {
    let count = 0;

    if (B.every(n => n % 2 === 0)) {
        return count;
    }

    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 === 1) {
            B[i]++;
            B[i + 1]++;
            count += 2;
        }

        if (i === B.length - 2 && B[B.length - 1] % 2 === 1) {
            return 'NO';
        }
    } 

    return count;
}

console.log(fairRations(B));