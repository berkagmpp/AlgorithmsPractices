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
    let sum;

    const strDgt = (n) => {
        return n.split("").reduce((acc, curr, i, a) => acc + parseInt(curr), 0);
    }

    strDgt(n);



    // if (parseInt(n) < 10) return parseInt(n);


    // while (cal === true) {
    //     for (let num of arr) {
    //         sum += parseInt(num);
    //         console.log(sum);
    //     }
    //     totalSum = sum * k;
    //     console.log(totalSum);

    //     if (totalSum > 9) {
    //         arr = totalSum.toString().split('');
    //         console.log(arr);
    //     } else {
    //         return totalSum;
    //     }

    // }
    // return nSum;
    // console.log(sum);
}

console.log(superDigit(n, k));
