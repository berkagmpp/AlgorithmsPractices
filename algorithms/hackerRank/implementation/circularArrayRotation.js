'use strict';

const a = [3, 4, 5];
const k = 2;    // the rotation count
const queries = [1, 2, 3]; // the indices to report
// a => [5, 3, 4] => [4, 5, 3] (switch the last element's position as k)
// a[1] = 5, a[2] = 3
// Output: [5, 3]

function circularArrayRotation(a, k, queries) {
    let res = [];

    for (let i = 0; i < k; i++) {
        a.unshift(a.pop());
        // a.unshift();
        // a.pop();
    }
    
    for (let j of queries) {
        if (a[j]) {
            res.push(a[j]);
        }
    }

    return res;
}

console.log(circularArrayRotation(a, k, queries));

