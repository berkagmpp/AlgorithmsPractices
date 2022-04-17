'use strict';

// Each spring, The Utopian Tree doubles in height. 
// Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. 
// How tall will the tree be after n growth cycles?

const n = 5;
// Output: 14


function utopianTree(n) {
    let height = 0;

    for (let i = 0; i < n + 1; i++) {
        i % 2 === 0 ? height += 1 : height *= 2;
    }

    return height;
}

console.log(utopianTree(n));