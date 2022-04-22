'use strict';

// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// const arr = [3, 3, 2, 1, 3, 2, 1];
// [2, 1, 2, 1]
// Output: 4


const arr = [1, 2, 3, 1, 2, 3, 3, 3];

function equalizeArray(arr) {

    // * Using Map()
    // const map = new Map();

    // arr.forEach(key => {
    //     map.set(key, (map.get(key) || 0) + 1)
    // });

    // return arr.length - Math.max(...map.values());


    //* Using Object
    const obj = {};
    
    arr.forEach(x => {
        obj[x] = (obj[x] || 0) + 1;     // using [Square-bracket-notation] instead of .Dot-nataion. because to add the object key dynamically
    });

    return arr.length - Math.max(...Object.values(obj));
}

console.log(equalizeArray(arr));