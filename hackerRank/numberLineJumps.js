'use strict';

const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;
// Yes
0 


function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2) {
        return 'NO';
    } else {
        if ((x2 - x1) % (v1 - v2) === 0) {
            return 'YES';
        } else {
            return 'NO';
        }
    }

    // x1 + (v1 x i) = x2 + (v2 x i)
    // (v1 x i) - (v2 x i) = x2 - x1
    // (v1 - v2) x i  = x2 - x1 
    // i x (v1 - v2) = x2 - x1 
    // i = (x2 - x1) / (v1 - v2)
    // i = intiger and %: no redidue so, if % === 0 {return 'Yes';}
    

    // let x1Array = [];
    // let x2Array = [];

    // for (let i = 1; i <= 10000; i++) {
    //     x1Array.push(x1 + (v1 * i));
    //     x2Array.push(x2 + (v2 * i));
    //     console.log(x1Array[i-1]);
    //     console.log(x2Array[i-1]);
    //     if (x1Array[i-1] === x2Array[i-1]) {
    //         return 'YES';
    //     } 
    // }
    // return 'NO';
}

kangaroo(x1, v1, x2, v2);