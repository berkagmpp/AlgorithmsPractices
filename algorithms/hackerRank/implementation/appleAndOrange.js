'use strict';

const s = 7;    // starting point of Sam's house location.
const t = 11;    // ending location of Sam's house location.
const a = 5;    // location of the Apple tree.
const b = 15;    // location of the Orange tree.
const apples = [-2, 2, 1];      //  location of the Apples.
const oranges = [5, -6];        //  location of the Oranges.
// house range: 7-11
// apples location: 5-2=3, 5+2=7, 5+1=6
// oranges location: 15+5=20, 15-6=9
// Output: 1 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appCount = 0;
    let oranCount = 0;

    for (let apple of apples) {
        if ((apple + a) >= s &&  (apple + a) <= t) {
            appCount++;
        }
    }

    // above 'for of' loop is same with below:
    // apples.forEach( apple => {
    //     if (apple + a >= s && apple + a <= t) {
    //         appCount++;
    //     }
    // });

    console.log(appCount);

    for (let orange of oranges) {
        if ((orange + b) >= s && (orange + b) <= t) {
            oranCount++;
        }
    } 
    console.log(oranCount);
}

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
