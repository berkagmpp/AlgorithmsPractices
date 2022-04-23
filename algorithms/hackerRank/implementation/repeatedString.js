'use strict';

// There is a string, s, of lowercase English letters that is repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first  letters of the infinite string.

const s = 'a';
const n = 10; 
// abadabadab : repeat n times of s
// 'a' is 7th in 'a's
// Output: 7

function repeatedString(s, n) {

    const arr = [...s];
    let count = 0;

    if (!arr.includes('a')) return 0;

    arr.filter(x => {
        if (x === 'a') count++;
    });

    let remainder = 0;

    for (let j = n % s.length - 1; j >= 0; j--) {
        if (arr[j] === 'a') {
            remainder++;
        }
    }

    return Math.floor(n / s.length) * count + remainder;
}

console.log(repeatedString(s, n));

