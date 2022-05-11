'use strict';

// If you saves enough chocolate wrappers, you can turn them in for a free chocolate.
// return the number of chocolates you can eat after taking full advantage of the promotion.

const n = 6;   // money to spend
const c = 2;    // cost of a chocolate
const m = 2;    // the number of wrappers you can turn in for a free chocolate
// Output: 5

function chocolateFeast(n, c, m) {
    let chocolate = Math.floor(n / c);
    let wrappers = chocolate;

    while (wrappers >= m) {
        chocolate += Math.floor(wrappers / m);
        wrappers = wrappers % m + Math.floor(wrappers / m);
    }
    
    return chocolate;
}

console.log(chocolateFeast(n, c, m));

