'use strict';

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

function bonAppetit(bill, k, b) {
    
    let anna = (bill.reduce((acc, cur) => acc + cur) - bill[k]) / 2;

    if(anna === b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - anna);
    }
    // return anna === b ? 'Bon Appetit' : b - anna;
    // console.log(anna);

}
bonAppetit(bill, k, b);