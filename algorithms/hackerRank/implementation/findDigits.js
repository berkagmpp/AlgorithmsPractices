'use strict';

// An integer d is a divisor of an integer n if the remainder of n % d = 0.
// Given an integer, for each digit that makes up the integer determine whether it is a divisor.
// Count the number of divisors occurring within the integer.

const n = 1012;

function findDigits(n) {

    let count = 0;
    const array = [...n.toString()];    // const array = n.toString().split('');

    for (let num of array) {
        if (n % parseInt(num) === 0) {
            count++;
        }
    } 

    return count;
}

console.log(findDigits(n));
