'use strict';

// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

const n = 99;    //  the number of pages in the book
const p = 93;    //  the page number to turn to
// output: 3

function pageCount(n, p) {
    let res = 0;

    if (p === 1 || n === p) return res;

    n - p >= p ? res = Math.floor(p / 2) : res = Math.floor(n / 2) - Math.floor(p / 2);

    return res;
}

console.log(pageCount(n, p));
