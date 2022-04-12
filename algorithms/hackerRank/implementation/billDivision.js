'use strict';

// Two friends Anna and Brian, are deciding how to split the bill at a dinner. 
// Each will only pay for the items they consume. 
// Brian gets the check and calculates Anna's portion. 
// You must determine if his calculation is correct.
// If Brian did not overcharge Anna, print 'Bon Appetit' on a new line; 
// otherwise, print the difference that Brian must refund to Anna.

const bill = [3, 10, 2, 9];
const k = 1;   // Anna didn't eat bill[k]
const b = 12;   // Brian's calculation Anna contributed to the bill
// Output: 5

function bonAppetit(bill, k, b) {
    
    let anna = (bill.reduce((acc, cur) => acc + cur) - bill[k]) / 2;

    // if(anna === b) {
    //     return 'Bon Appetit';
    // } else {
    //     return b - anna;
    // }
    
    return anna === b ? 'Bon Appetit' : b - anna;

}
console.log(bonAppetit(bill, k, b));