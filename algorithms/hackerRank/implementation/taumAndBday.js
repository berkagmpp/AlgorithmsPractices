'use strict';

// Taum is planning to celebrate the birthday of his friend, Diksha. 
// There are two types of gifts that Diksha wants from Taum: one is black and the other is white. 
// To make her happy, Taum has to buy b black gifts and w white gifts.

// - The cost of each black gift is bc units.
// - The cost of every white gift is wc units.
// - The cost to convert a black gift into white gift or vice versa is z units.

// Determine the minimum cost of Diksha's gifts.

const b = 7;    // the number of black gifts
const w = 7;    // the number of white gifts
const bc = 4;   // the cost of a black gift
const wc = 2;   // the cost of a white gift
const z = 1;    // the cost to convert one color gift to the other color
// w => 7 * 2 = 14
// b => 7 * (2 + 1) = 21
// Ourput: 35

function taumBday(b, w, bc, wc, z) {

    bc = BigInt(bc);
    wc = BigInt(wc);
    b = BigInt(b);
    w = BigInt(w);
    z = BigInt(z);

    if (bc > wc + z) {
        bc = wc + z;
    }
    if (wc > bc + z) {
        wc = bc + z;
    }

    let sum = b * bc + w * wc;

    return sum;
}

console.log(taumBday(b, w, bc, wc, z));

