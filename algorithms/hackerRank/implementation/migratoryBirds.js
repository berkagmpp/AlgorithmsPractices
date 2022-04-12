'use strict';

// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
// If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

const arr = [1, 4, 3, 4, 5, 4, 3, 3];

function migratoryBirds(arr) {
    let value = [];

    for (let x = 1; x <= 5; x++) {
        value.push(
            (arr.filter(i => x === i)).length
        );

    }
    return value.indexOf(Math.max(...value)) + 1;

    // let value = arr.sort((a, b) => a-b);
    // let num = value[0];
    // let count = 0;

    // for(let i = 0; i < arr.length; i++) {
    //     if (1 === arr[i]) {
    //         value.push(
    //             (arr.filter(
    //                 i => 1 === arr[i]).length));
    //     }
    // };
    
    // return value;
}

console.log(migratoryBirds(arr));
