'use strict';

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const arr = [32, 5, 1, 66, 47];

function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);      // if one-line, omit curly brace!
    let max = sum - Math.min(...arr);
    let min = sum - Math.max(...arr);

    return [min, max];
    // console.log(min + ' ' + max);
}

console.log(miniMaxSum(arr));