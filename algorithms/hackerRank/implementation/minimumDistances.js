'use strict';

// The distance between two array values is the number of indices between them. Given a, 
// find the minimum distance between any pair of equal elements in the array. 
// If no such value exists, return -1.


const a = [7, 1, 3, 4, 1, 7];
// a[0] === a[5], |5-0|=5
// a[1] === a[4], |4-1|=3
// Output: 3;

function minimumDistances(a) {
    let res = a.length;
    let position = 0;

    for (let i = 0; i < a.length; i++) {
        position = a.indexOf(a[i], i+1);    // indexOf(value, fromIndex)
        if (position > 0 && position - i < res) {
            res = position - i;
            if (res === 1) {
                return res;
            }
        }
    }

    if (res === a.length) {
        return -1;
    }

    return res;
}

console.log(minimumDistances(a));
