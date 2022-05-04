'use strict';

// The first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one.
// This continues until the cost becomes less than or equal to m dollars, after which every game will cost  dollars. 
// How many games can you buy during the Halloween Sale?

const p = 20;   // the price of the first game
const d = 3;    // the discount from the previous game price
const m = 6;    // the minimum cost of a game
const s = 70;   // the starting budget
// Output: 5;
// 20 - 17 - 14 - 11 - 8 = 70

function howManyGames(p, d, m, s) {
    let count = 0;

    while (s >= p) {
        count++;
        s -= p;
        p - d > m ? p -= d : p = m;
    }
    return count;
    
    // let price = p;
    // let left = s;

    // if (left < 0) {
    //     return 0;
    // } else if (left === 0) {
    //     return 1;
    // }

    // for (let i = 1; i < s/m; i++) {
    //     left -= price;
    //     price > m ? price -= d : price = m;
    //     if (left === 0) {
    //         return i;
    //     } else if (left < 0) {
    //         return i - 1;
    //     }
    // }
}

console.log(howManyGames(p, d, m, s));