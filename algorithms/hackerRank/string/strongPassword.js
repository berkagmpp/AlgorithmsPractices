'use strict';

// A password to be strong if it satisfies the following criteria:
// - Its length is at least 6.
// - It contains at least one digit.
// - It contains at least one lowercase English character.
// - It contains at least one uppercase English character.
// - It contains at least one special character. The special characters are: !@#$%^&*()-+

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

const n = 5;    // The length of password
const password = 'Ab12#';
// length is not enough
// Output: 1

function minimumNumber(n, password) {
    let count = 0;
    let special = 0;
    let num = 0;

    if (password.toLowerCase() === password) {
        count++;
    }

    if (password.toUpperCase() === password) {
        count++;
    }

    for (let s of "@#$%^&*()-+".split('')) {
        if (password.includes(s)) {
            special++;
        } 
    }
    
    for (let n of "0123456789".split('').map(Number)) {
        if (password.includes(n)) {
            num++;
        } 
    }
    
    if (special === 0) {
        count++;
    }
        
    if (num === 0) {
        count++;
    }

    if (n < 6) {
        let len = 6 - n; 
        if (len > count) {
            count = len;
        } else if (count > len) {
            count;
        }
    }

    return count;
}

console.log(minimumNumber(n, password));

