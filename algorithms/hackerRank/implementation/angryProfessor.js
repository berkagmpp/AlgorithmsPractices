'use strict';

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

const k = 3;    //  The professor wants at least k students in attendance
const a = [-1, -3, 0, 4, 2];   // the arrival times of the n students ((a[i] <= 0) indicate the student arrived early or on time)

function angryProfessor(k, a) {
    return a.filter(i => i <= 0).length >= k ? "NO" : "YES";


    // let count = 0;

    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] <= 0) {
    //         count++;
    //         if (count === k) return "NO";
    //     }
    // }

    // return "YES";
}

console.log(angryProfessor(k, a));