'use strict';

// We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. 
// Remeber that a subsequence maintains the order of characters selected from a sequence.
// For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.

const s = 'hhaacckkekraraannk';

function hackerrankInString(s) {

    // 1. using for loop, indexOf, slice
    const hackerrank = 'hackerrank'.split('');
    let string = s;

    for (let char of hackerrank) {
        let num = string.indexOf(char);

        if (num >= 0) {
            string = string.slice(num + 1);
        } else {
            return 'NO';
        };
    };
    return 'YES';

    // 2. using .test
    // return /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/.test(s) ? 'YES' : 'NO';

}

console.log(hackerrankInString(s));