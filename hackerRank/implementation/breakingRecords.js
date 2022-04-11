'use strict';

// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

const scores =[10, 5, 20, 20, 4, 5, 2, 25, 1];
//best = [10, 10, 20, 20, 20, 20, 20, 25, 25]
//worst = [10, 5, 5, 5, 4, 4, 2, 2, 1]

// output = 2, 4

function breakingRecords(scores) {
    // let res = new Map();
    // res.set('max', scores[0]);
    // res.set('maxTime', 0);
    // res.set('min', scores[0]);
    // res.set('minTime', 0);

    // for (let i = 1; i < scores.length; i++) {
    //     if (scores[i] > res.get('max')) {
    //         res.set('max', scores[i]);
    //         res.set('maxTime', res.get('maxTime') + 1);
    //     } 

    //     if (scores[i] < res.get('min')) {
    //         res.set('min', scores[i]);
    //         res.set('minTime', res.get('minTime') + 1);
    //     } 
    // };

    // return [res.get('maxTime'), res.get('minTime')];


    // Preparing variables
    let [ hi, lo ] = [ scores[0], scores[0] ];
    let [ max, min ] = [ 0, 0 ];
    
    // Calculating
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > hi) { hi = scores[i]; max++; }
        if (scores[i] < lo) { lo = scores[i]; min++; }
    }

    //Returning
    return [ max, min ];


    // let best = [scores[0]];
    // let worst = [scores[0]];
    
    // for (let i = 1; i < scores.length; i++) {
    //     best[i-1] === scores[i] ? best.push(scores[i]) : ( best[i-1] < scores[i] ? best.push(scores[i]) : best.push(best[i-1]) );
    //     worst[i-1] === scores[i] ? worst.push(scores[i]) : ( worst[i-1] > scores[i] ? worst.push(scores[i]) : worst.push(worst[i-1]) );
    // }

    // for (let i = scores.length-1; i >= 0; i--) {
    //     if (best[i]-best[i-1] === 0){
    //         best.splice(i, 1);
    //     }
    //     if (worst[i-1]-worst[i] === 0){
    //         worst.splice(i, 1);
    //     }
    // }
    // console.log(best.length-1, worst.length-1);
}
console.log(breakingRecords(scores));
