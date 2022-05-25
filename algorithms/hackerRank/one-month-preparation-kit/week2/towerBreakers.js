'use strict';

// Player 1 always moves first, and both players always play optimally.
// The rules of the game are as follows:

// - Initially there are n towers.
// - Each tower is of height m.
// - The players move in alternating turns.
// - In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
// - If the current player is unable to make a move, they lose the game.

// Given the values of n and m, determine which player will win. 
// If the first player wins, return 1. Otherwise, return 2.

const n = 1;    // the number of towers
const m = 4;    // the height of each tower

function towerBreakers(n, m) {

    if (n % 2 === 0 || m === 1) {
        return 2;
    }
    return 1;

}

console.log(towerBreakers(n, m));

// function running time check
// console.time(towerBreakers);
// towerBreakers(n, m);
// console.timeEnd(towerBreakers); 
