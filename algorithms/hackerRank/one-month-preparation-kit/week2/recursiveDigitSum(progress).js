'use strict';

// We define super digit of an integer x using the following rules:
// Given an integer, we need to find the super digit of the integer.
// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

const n = '9875';
const k = 4;
// 9875987598759875
// 9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
// 1+1+6 = 8
// Output: 8

function superDigit(n, k) {
    n = parseInt(n);

    if (n < 10) {
        return n;
    }

    return superDigit(
        n.toString()
            .split('')
            .reduce(
                (acc, cur) => acc + (cur | 0), 0
            )
        * k, 1
    );
}

console.log(superDigit(n, k));
