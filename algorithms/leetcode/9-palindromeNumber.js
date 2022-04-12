'use strict'

// Given an integer x, return true if x is palindrome integer.

let x = 121121;


const isPalindrome = x => {
//     let xLength = x.toString().length;
//     let y, z = 0;

//     if (x < 0) return false;

//     if (xLength % 2 === 0) {
//         y = x.toString().substring(0, xLength/2).split('').join();;
//         z = x.toString().substring(xLength/2, xLength).split('').reverse().join();
//     } else {
//         y = x.toString().substring(0, xLength/2).split('').join();
//         z = x.toString().substring(xLength/2+1, xLength).split('').reverse().join();
//     }
    
//     if (y == z) {
//         return true;
//     } return false;


    if (x < 0) return false;
	
    // reverse the string representation of x
    const reverse = `${x}`.split('').reverse().join('');
    // split('') -> word to chractors
    // compare the value regardless of types
    if (parseInt(reverse) === x) {
        return true;
    } else {
        return false;
    }

    // let array = x.toString().split('').map(Number);
    // if (array.length % 2 !== 0) {
    //     for(let i = 0; i < (array.length)/2-1; i++) {
    //         iArray.push(array[i]);
    //     }
    //     for(let j = array.length-1; j > (array.length)/2; j--) {
    //         jArray.push(array[j]);
    //     }
    // } else {
    //     for(let i = 0; i < (array.length)/2; i++) {
    //         iArray.push(array[i]);
    //     }
    //     for(let j = array.length-1; j > (array.length)/2-1; j--) {
    //         jArray.push(array[j]);
    //     }
    // }

    // if (iArray.join() == jArray.join()) {
    //     return true;
    // } return false;

};
console.log(isPalindrome(x));

