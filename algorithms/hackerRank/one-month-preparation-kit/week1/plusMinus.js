'use strict';
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let num of arr) {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        } else if (num === 0) {
            zero++;
        }
    }
    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

console.log(plusMinus(arr));
