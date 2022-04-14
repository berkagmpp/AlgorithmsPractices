'use strict';

// During the hike, for every step it was noted if it was an uphill, U, or a downhill, D step. 
// Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. 
// - A mountain is a sequence of consecutive steps above sea level, 
// starting with a step up from sea level and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, 
// starting with a step down from sea level and ending with a step up to sea level.
// Return the number of valleys traversed.

const steps = 8;
const path = 'UDDDUDUU';
// Output: 1

function countingValleys(steps, path) {
    const arr = [];
    let level = 0;
    let count = 0;

    for(let i = 0; i < steps; i++) {
        path[i] === 'U' ? arr.push(level += 1) : arr.push(level -= 1);

        if (arr[i] === 0 && arr[i -1] === -1) {
            count++;
        }
    }
    return count;
}

console.log(countingValleys(steps, path));
