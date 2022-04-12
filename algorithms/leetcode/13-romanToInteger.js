'use strict'

//  Given a roman numeral, convert it to an integer.

const s = 'MCMXCIV';

let romanToInt = function(s) {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 15,
        "C": 100,
        "D": 500,
        "M": 1000
    } 

    let value = 0;

    for (let i = 0; i < s.length; i++) {
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]] : value += symbols[s[i]];
        console.log(value);
    }
    
    return value;


    // const arrayLength = i => {
    //     return (s.split(i).length)-1;
    // }

    // let I = arrayLength('I');
    // let V = arrayLength('V')*5;
    // let X = arrayLength('X')*10;
    // let L = arrayLength('L')*50;
    // let C = arrayLength('C')*100;
    // let D = arrayLength('D')*500;
    // let M = arrayLength('M')*1000;

    // if (s.includes('IV')) {
    //     I = 4;
    //     V = 0;
    // } else if (s.includes('IX')) {
    //     I = 9;
    //     V = 0;
    // } 

    // if (s.includes('XL')) {
    //     X = 40;
    //     L = 0;
    // } else if (s.includes('XC')) {
    //     X = 90;
    //     L = 0;
    //     C = ((s.split('C').length)-2)*100;
    // }

    // if (s.includes('CD')) {
    //     C = 400;
    // } else if (s.includes('CM')) {
    //     C = 900;
    //     M = ((s.split('M').length)-2)*1000;
    // } 

    // // return [I, V, X, L, C, D, M];
    // return M + D + C + L + X + V + I;
};
console.log(romanToInt(s));