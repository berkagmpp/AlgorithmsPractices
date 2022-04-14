'use strict';

// A person wants to determine the most expensive computer keyboard and USB drive 
// that can be purchased with a give budget. 
// Given price lists for keyboards and USB drives and a budget, find the cost to buy them. 
// If it is not possible to buy both items, return -1.

const keyboards = [40, 50, 60]; 
const drives = [5, 8, 12];
const b = 60;   // budget
// Output: 58

function getMoneySpent(keyboards, drives, b) {
    let max = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let pair = keyboards[i] + drives[j];
            if (pair > max && pair <= b) {
                max = pair;
            }
        }
    }
    return max;

    // let arr = [];

    // for (let i = 0; i < keyboards.length; i++) {
    //     for (let j = 0; j < drives.length; j++) {
    //         if (b - (keyboards[i] + drives[j]) > -1) {
    //             arr.push(b - (keyboards[i] + drives[j]));
    //         }
    //     }
    // }

    // return arr.length === 0 ? -1 : b - Math.min(...arr);
}

console.log(getMoneySpent(keyboards, drives, b));