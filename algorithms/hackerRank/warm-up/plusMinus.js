'use strict';
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    let posi = 0;
    let nega = 0;
    let zero = 0;
    let length = arr.length;
    
    arr.forEach( i => {
        if (i === 0 ) {
            zero++;
        } else if (i < 0) {
            nega++;
        } else {
            posi++;
        }
    }); 
    
    // for (let i = 0; i < arr.length; i++) {
    //     if (i === 0 ) {
    //         zero.push(arr[i])
    //     } else if (arr[i] < 0) {
    //         nega.push(arr[i]);
    //     } else {
    //         posi.push(arr[i]);
    //     }
    // }

    return (posi/length).toFixed(5) + '\n' + (nega/length).toFixed(5) + '\n' + (zero/length).toFixed(5);
}

console.log(plusMinus(arr)); 