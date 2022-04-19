'use strict';

// On the first day, the advertisement  reached to 5 people on social media.
// Half of those people( floor(2/5) = 2 ) like the advertisement and each shares it with 3 of their friends. 
// At the beginning of the second day, 2 x 3 = 6 people receive the advertisement.
// Determine how many people have liked the ad by the end of a given day.

const n = 5;    // 5 day after
// Output: 24

function viralAdvertising(n) {
    let likes = 0;
    let shared = 5;
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        likes = Math.floor(shared / 2);
        shared = likes * 3;
        sum += likes;
    }

    return sum;
}

console.log(viralAdvertising(n));
