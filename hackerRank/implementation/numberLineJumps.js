'use strict';

// You are choreographing a circus show with various animals. 
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
// If it is possible, return YES, otherwise return NO.

const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 1;
// output: Yes

function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2) {
        return 'NO';
    } else {
        if ((x2 - x1) % (v1 - v2) === 0) {
            return 'YES';
        // x1 + (v1 x i) = x2 + (v2 x i)
        // (v1 x i) - (v2 x i) = x2 - x1
        // (v1 - v2) x i  = x2 - x1 
        // i x (v1 - v2) = x2 - x1 
        // i = (x2 - x1) / (v1 - v2)
        // i = intiger and %: no residue so, if % === 0 {return 'Yes';}
        } else {
            return 'NO';
        }
    }

    // let x1Array = [];
    // let x2Array = [];

    // for (let i = 1; i <= 10000; i++) {
    //     x1Array.push(x1 + (v1 * i));
    //     x2Array.push(x2 + (v2 * i));
    //     console.log(x1Array[i-1]);
    //     console.log(x2Array[i-1]);
    //     if (x1Array[i-1] === x2Array[i-1]) {
    //         return 'YES';
    //     } 
    // }
    // return 'NO';
}

console.log(kangaroo(x1, v1, x2, v2));