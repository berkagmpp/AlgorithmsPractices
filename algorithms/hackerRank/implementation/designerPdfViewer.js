'use strict';

// Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide.

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]; // The height of each 26 character
const word = 'abc';
// 'abc' => [1, 3, 1]
//  3(the heightst) * 1(mm) * 3(the number of charactors) = 9 mm2
// Output: 9

function designerPdfViewer(h, word) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let words = word.split('').map(char => chars.indexOf(char));
    let nums = [];

    for (word of words) {
        nums.push(h[word]);
    }

    let num = Math.max(...nums) * words.length;

    return num;
}

console.log(designerPdfViewer(h, word));
