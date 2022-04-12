'use strict';

// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.

const candles = [5,5,5,4];

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let result = candles.filter(i => i === max); 
    return result.length;
    
    // let max = 0;
    // let res = [];
    // let array = candles.sort((a, b) => b - a);
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] >= max) {
    //         max = array[i];
    //         res.push(max);
    //     }
    // }
    // console.log(res.length);
}

birthdayCakeCandles(candles);