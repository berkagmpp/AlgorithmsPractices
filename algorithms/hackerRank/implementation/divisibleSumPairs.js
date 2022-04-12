'use strict'

// Given an array of integers and a positive integer k, 
// determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
// output: 5 
// ([1, 2], [1, 2], [3, 6], [2, 1], [2, 1])

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if(i < j && (ar[i] + ar[j]) % k === 0) {
                count++;
            } 
        }

    }
    return count;
}

console.log(divisibleSumPairs(n, k, ar));

