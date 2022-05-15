'use strict';

// Given an array of integers, where all elements but one occur twice, find the unique element.

const a = [1, 2, 3, 4, 3, 2, 1];
// Output: 4

function lonelyinteger(a) {

    for (let num of a) {
        const leng = a.filter(chNum => chNum === num).length;
        if (leng === 1) {
            return num;
        } 
    }

}

console.log(lonelyinteger(a));