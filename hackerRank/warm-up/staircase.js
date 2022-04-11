'use strict';

// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .

//    #
//   ##
//  ###
// ####

const n = 6;

function staircase(n) {
    // let inputString = '#';
    // let currentLine = 0;

    // for(let i = 1; i <= n; i++)
    // {
    //     console.log(n-i);
    //     inputString.repeat(n-i);
    //     console.log(inputString);
    //     inputString.replace(' ', '#').repeat(i);
    //     // console.log(inputString);
    //     inputString.split('\n');
    // }
    // return inputString;
    for(let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "#".repeat(i))
    }
} 

staircase(n);