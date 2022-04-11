'use strict';

const scores =[10, 5, 20, 20, 4, 5, 2, 25, 1];
//best = [10, 10, 20, 20, 20, 20, 20, 25, 25]
//worst = [10, 5, 5, 5, 4, 4, 2, 2, 1]

// const scores =[10, 15, 20, 20, 4, 5, 2, 25, 1];



function breakingRecords(scores) {
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
breakingRecords(scores);
