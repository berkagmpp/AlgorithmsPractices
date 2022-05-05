'use strict';

// Given a sorted list with an unsorted number e in the rightmost cell, can you write some simple code to insert e into the array so that it remains sorted?
// Since this is a learning exercise, it won't be the most efficient way of performing the insertion. 
// It will instead demonstrate the brute-force method in detail.
// Assume you are given the array arr=[1, 2, 4, 5, 3]; indexed 0...4. Store the value of arr[4]. 
// Now test lower index values successively from 3 to 0 until you reach a value that is lower than arr[4], at arr[1] in this case. 
// Each time your test fails, copy the value at the lower index to the current index and print your array. 
// When the next lower indexed value is smaller than arr[4], insert the stored value at the current index and print the entire array.

const n = 5;
let arr = [2, 4, 6, 8, 3];
// Output: 
// 2 4 6 8 8
// 2 4 6 6 8
// 2 4 4 6 8
// 2 3 4 6 8

function insertionSort1(n, arr) {
    const num = arr[n - 1];
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i - 1] > num) {
            arr.splice(i, 1, arr[i - 1]);       // splice(position, remove num, add thing)
            console.log(arr.toString().split(',').join(' '));
        } else {
            arr.splice(i, 1, num);
            console.log(arr.toString().split(',').join(' '));      //arr.toString().splite(',).join(' ') : removing array comma 
            break;
        }
    }
}

console.log(insertionSort1(n, arr));

