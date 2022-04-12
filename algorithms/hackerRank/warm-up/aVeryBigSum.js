'use strict';
// return the sum of all array elements

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    let sum = ar.reduce((acc, cur) => acc + cur);
    return sum;
}

console.log(aVeryBigSum(ar));