'use strict';

// Two children, Lily and Ron, want to share a chocolate bar. 
// Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// - The length of the segment matches Ron's birth month, and,
// - The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// [4]
// 4
// 1


const s = [1, 2, 1, 3, 3];
const d = 3;    // sum 
const m = 2;    // length
// [1, 2]
// [2, 1]
// Output: 2

function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let arr = (s.slice(i, m + i));
        if (arr.length === m && arr.reduce((acc, cur) => acc + cur) === d) {
            count++;
        }
    }

    return count;
}

console.log(birthday(s, d, m));