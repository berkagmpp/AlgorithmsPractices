'use strict';

// Given the expected and actual return dates for a library book, create a program that calculates the fine (if any).
// - If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
// - If the book is returned after the expected return day, 
//     but still within the same calendar month and year as the expected return date, fine = 15 x the number of days late.
// - If the book is returned after the expected return month, 
//     but still within the same calendar year as the expected return date, the fine = 500 x the number of month late.
// - If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000.

const d1 = 14;
const m1 = 7;
const y1 = 2018;    // return
const d2 = 5;
const m2 = 7;
const y2 = 2019;    // expected
// Output: 135
// 14-5 = 9day * 15 = 135

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 < y2) return 0;
    if (y1 > y2) return 10000;

    if (m1 < m2) return 0;
    if (m1 > m2) return (m1 - m2) * 500;

    if (d1 > d2) return (d1 - d2) * 15;
    
    return 0;

    // let fine = 0;

    // if (y1 === y2) {
    //     if (m1 === m2) {
    //         if (d1 > d2) {
    //             fine = (d1 - d2) * 15;
    //         }
    //     } else if (m1 > m2) {
    //         fine = (m1 - m2) * 500;
    //     }
    // } else if (y1 > y2) {
    //     fine = 10000;
    // }

    // return fine;
}

console.log(libraryFine(d1, m1, y1, d2, m2, y2));