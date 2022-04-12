'use strict';

// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

const n = 9;    // number of sock in the ar
const ar = [10, 20, 20, 10, 10, 30, 50, 60, 20];
// Output: 3

function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    let count = 0;

    for(let i = 0; i < n; i++) {
        if(ar[i] === ar[i + 1]) {
            count++;
            i++;
        }
    }

    return count;

    // for(let i = 0; i < n; i++) {
    //     if(res.i === ar[i].toString()) {
    //         res.i++;
    //         console.log(`yes: ${res.i}`);
    //     } else {
    //         res.'ar[i]' = 1;
    //         console.log(`no: ${res[i]}`);
    //     }
    // }


    // let map = new Map();
    // let count = 0;

    // for(let i = 0; i < n; i++) {
    //     if (map.has(ar[i])) {
    //         map.set(ar[i], map.get(ar[i]) + 1);
    //     } else {
    //         map.set(ar[i], 1);
    //     }
    // }

    // for(let pair of map.values()) {
    //     count += Math.floor(pair / 2);
    // }

    // return count; 
}

console.log(sockMerchant(n, ar));