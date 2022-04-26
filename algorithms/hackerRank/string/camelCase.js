'use strict';

// There is a sequence of words in CamelCase as a string of letters.
// Determine how many words contain in a string.

const s = 'saveChangesInTheEditor';
//  Output: 5

function camelcase(s) {
    // 1. for of
    let count = 1;
    for (const x of s) {
        if (x.toLowerCase() != x) {     // toLowerCase() fn does NOT change variable's value, only returns. if the original value of x.toLowerCase() is different with x's value, count++ 
            count++;
        }
    }
    return count;

    // 2. for loop
    // const low = s.toLowerCase();
    // let count = 1;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] != low[i]) {
    //         count++;
    //     }
    // }
    // return count;

    // 3. regular expression
    // const arr = s.match(/[A-Z]*[^A-Z]+/g);
    // return arr.length;
}

console.log(camelcase(s));



