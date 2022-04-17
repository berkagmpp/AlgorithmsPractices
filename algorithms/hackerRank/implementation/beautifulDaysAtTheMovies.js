'use strict';

// Given a range of numbered days, [i...j] and a number k, 
// determine the number of days in the range that are beautiful.
// Beautiful numbers are defined as numbers where |i-reserve(i)| is evenly divisible by k. 
// If a day's value is a beautiful number, it is a beautiful day. 
// Return the number of beautiful days in the range.

const i = 20;   // start number
const j = 23;   // end number
const k = 6;    // the divisor
// 20, 21, 22, 23
// |(20-2)|/6, |(21-12)|/6, |(22-22)|/6, |(23-32)|/6
// 3, 1.5, 0, 1.5
// Output: 2

function beautifulDays(i, j, k) {
    // let array = [];
    // let arr = [];
    let count = 0;
    for (let x = 0; x < j - i + 1; x++) {
        if (Math.abs((i + x) - ((parseInt((i + x).toString().split('').reverse().join(''))))) % k === 0) {
            count++;
        }

        // array.push(i + x);
        // arr.push((parseInt(array[x].toString().split('').reverse().join(''))));
        // if (Math.abs(array[x] - arr[x]) % k === 0 ) {
        //     count++;
        // }
    }
    return count;
}

console.log(beautifulDays(i, j, k));