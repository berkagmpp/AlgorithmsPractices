'use strict';

// Caesar's cipher shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
// Complete the caesarCipher function.

const s = 'middle-Outz';
const k = 2;    // the alphabet rotation factor
// Ourput: okffng-Qwvb

function caesarCipher(s, k) {
    let char = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let upper = char.toString().toUpperCase().split(',');
    let num = 0;
    let ss = '';

    for (let i = 0; i < s.length; i++) {
        num = char.indexOf(s[i]);
        if (num >= 0) {
            num += k;
            if (num >= 26) {
                num = num % 26;
            }
            ss = ss.concat(char[num]);

        } else {
            num = upper.indexOf(s[i]);
            if (num >= 0) {
                num += k;
                if (num >= 26) {
                    num = num % 26;
                }
                ss = ss.concat(upper[num]);
            } else {
                ss = ss.concat(s[i]);
            }
        }
    }
    
    return ss;
}

console.log(caesarCipher(s, k));
