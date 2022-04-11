'use strict';

// Alice and Bob each created one problem for HackerRank. 
// A reviewer rates the two challenges, 
// awarding points on a scale from 1 to 100 for three categories: 
// problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), 
// and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points 
// by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

const a = [50,7,77];
const b = [3,60,10];

function compareTriplets(a, b) {
    if (101 < a || a < 0 ) return;
    let x = 0;
    let y = 0;

    for (let i = 0; i < 3; i++) {
        // if (a[i] === b[i]) {
        //     x = y = 0;
        // }
        if (a[i] > b[i]) {
            x++;
        }
        if (a[i] < b[i]) {
            y++;
        }
        // console.log(`x: ${x} / ${a[i]}`);
        // console.log(`y: ${y} / ${b[i]}`);
    }
    // console.log(xSum, ySum, sum);
    return [x, y];
}

console.log(compareTriplets(a, b));