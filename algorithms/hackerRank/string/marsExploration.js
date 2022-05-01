'use strict';

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
// Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.
// s will contain only uppercase English letters, ascii[A-Z].

const s ="SOSSPSSQSSOR";
//Output: 3;

function marsExploration(s) {
    let count = 0;
    for (let i = 0; i < s.length; i+=3) {
        s[i] != 'S' ? count++ : count;
        s[i + 1] != 'O' ? count++ : count;
        s[i + 2] != 'S' ? count++ : count;
    };
    return count;
};

console.log(marsExploration(s));