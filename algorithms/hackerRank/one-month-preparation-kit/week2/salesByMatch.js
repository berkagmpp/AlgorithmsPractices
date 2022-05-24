'use strict';

// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

const n = 9;    // number of sock in the ar
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// Output: 3

function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            count++;
            i++;
        }
    }
    
    return count;
}

console.log(sockMerchant(n, ar));