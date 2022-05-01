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
    let fail = 0;

    fail += (password.match(/[0-9]/) || []).length;
    fail += (password.match(/[a-z]/) || []).length;
    fail += (password.match(/[A-Z]/) || []).length;
    fail += (password.match(/[\!@#\$%^&\*\(\)\-\+]/) || []).length;

    return Math.max(4-fail, 6-n);
}

console.log(minimumNumber(n, password));

