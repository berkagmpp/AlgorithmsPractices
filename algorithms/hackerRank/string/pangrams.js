'use strict';

// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.

const s = 'The quick brown fox jumps over the lazy dog';

function pangrams(s) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    s = s.toLowerCase().replace(/ /g, '');      // string.replace(/ /g, '') -> remove all empty spaces in string

    for (let alphabet of alphabets) {
        if (!s.includes(alphabet)) {
            return 'not pangram';
        }
    }
    
    return 'pangram';
}

console.log(pangrams(s));