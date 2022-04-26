'use strict';

// A string containing characters A and B only.
// Your task is to change it into a string such that there are no matching adjacent characters.
// Find the minimum number of required deletions.

const s = 'AABAAB';
// remove s[1], s[4] -> 'ABAB'
// Output: 2 

function alternatingCharacters(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) count++;
    }

    return count;
}

console.log(alternatingCharacters(s));
