'use strict';

const s = [1, 2, 1, 3, 3];
const d = 3;
const m = 2;

function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i <= s.length; i++) {
        let arr = (s.slice(i, m + i));
        if (arr.length === m && arr.reduce((acc, cur) => acc + cur) === d) {
            count++;
        }
    }
    
    return count;
}

console.log(birthday(s, d, m));