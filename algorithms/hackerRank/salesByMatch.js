'use strict';

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    let result = {};
    let count = 0;
    ar.forEach(
        (i) => {
            if (result[i]) {
                result[i] = result[i] + 1;
                
            } else {
                result[i] = 0 + 1;
            }
        }
    );

    return result[i]; 
}

console.log(sockMerchant(n, ar));