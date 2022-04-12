'use strict';

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const arr = [32, 5, 1, 66, 47];

function miniMaxSum(arr) {
    // let arr2 = [...arr.sort((a,b) => a - b)];
    // let x = 0;
    // let y = 0;

    // for (let i = 0; i < arr2.length-1; i++) {
    //     x += arr2[i];    // min sum
    // }

    // for (let i = 1; i < arr2.length; i++) {
    //     y += arr2[i];    // max sum
    // }

    // return [x, y];

    const sum = arr.reduce((sum, current) => sum + current);
    const max = sum - Math.min(...arr);
    const min = sum - Math.max(...arr);

    return [min, max];
}

console.log(miniMaxSum(arr));