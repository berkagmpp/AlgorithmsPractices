'use strict';

// In this challenge, print the array after each iteration of the insertion sort, 
// i.e., whenever the next element has been inserted at its correct position.
// Since the array composed of just the first element is already sorted, begin printing after placing the second element.

const n = 6;
const arr = [4, 2, 3, 5, 6, 1];
// 0: 2 4 3 5 6 1
// 1: 2 3 4 5 6 1
// 2: 1 2 3 4 5 6


function insertionSort2(n, arr) {
    // let lastNum = array[0];
    // const min = Math.min(...array);
    // let minIndex = 0;
    // console.log(minIndex);
    let array = [...arr];
    let num = array[0];

    for (let i = 0; i < n - 1; i++) {
        if (array[i + 1] < num) {
            // array.find(x => x <= i);
            let po = array.find(x => x <= array[i + 1]) - 1;
            console.log('i: '+i+' / po: '+po);
            // array.splice(i, 2);
            array.splice(po, 0, array[i + 1]);
            console.log(array);
            // num = array[i + 1];
            // array.splice(array.indexOf(num) + 1, 0, num);
        } else {
            console.log('i: '+i+' / a: '+array.find(x => x <= array[i + 1]));
        }
    };

    // for (let j = n - 1; j >= 0; j--) {
    //     if (array[j - 1] > num) {
    //         array.splice(j, 1, array[j - 1]);       // splice(position, remove num, add thing)
    //         console.log(array.toString().split(',').join(' '));
    //     } else {
    //         array.splice(j, 1, num);
    //         console.log(array.toString().split(',').join(' '));      //arr.toString().splite(',).join(' ') : removing array comma 
    //         break;
    //     }
    // }




    //143562
    // for (let i = 1; i < n; i++) { //2
    //     let position = array[i] - min;  //3-1
    //     console.log('array[i]: '+array[i]);//3
    //     console.log('position: '+position); //2
    //     if (lastNum > array[i]) {  // 1>3
    //         array.splice(position, 1, lastNum); //144562
    //         lastNum = array[i];
    //         array.splice(i, 1, array[i]);    //144562
    //         console.log(i + ' / ' + array);
    //     } else {
    //         lastNum = array[i];
    //         console.log(i + ' / ' +array);
    //     }
    // }
    // console.log(array);
}

console.log(insertionSort2(n, arr));