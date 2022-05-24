'use strict';

// find median number of array

const arr = [0, 1, 2, 4, 6, 5, 3];
// Output: 3

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const i = Math.floor(arr.length / 2);
    return arr[i];
}

console.log(findMedian(arr));