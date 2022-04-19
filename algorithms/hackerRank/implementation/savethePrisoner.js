'use strict';

// Beginning with the prisoner in that chair, 
// one treat will be handed to each prisoner sequentially around the table until all have been distributed.
// Determine the chair number occupied by the prisoner who will receive the last treat.

const n = 24;    // the number of prisoners
const m = 22;   // The numbrt of treats
const s = 11;    // Starting seat number
// Output: 1

function saveThePrisoner(n, m, s) {
    
    return (m - 1 + s) % n || n;

    // let seat = 0;

    // if (m === n) {
    //     if (s === 1) {
    //         return n;
    //     } else {
    //         return s - 1;
    //     }
    // } 
    
    // if (m > n) {
    //     seat = (s - 1) + (m % n); 
    // } else {
    //     seat = (s - 1) + m
    // }

    // if (seat > n) {
    //     if (seat % n != 0) {
    //         return seat = seat % n;
    //     } else {
    //         return seat = s;
    //     }
    // } else {
    //     return seat;
    // }
}

console.log(saveThePrisoner(n, m, s));