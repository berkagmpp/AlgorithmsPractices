'use strict';
const arr = [1, 4, 3, 4, 5, 4, 3, 3];

function migratoryBirds(arr) {
    // let value = arr.sort((a, b) => a-b);
    // let num = value[0];
    // let count = 0;



    let value = [];
    for (let x = 1; x <= 5; x++) {
        value.push(
            (arr.filter(i => x === i)).length
        );

    }
    console.log(value.indexOf(Math.max(...value))+1);

    // for(let i = 0; i < arr.length; i++) {

    //     if (1 === arr[i]) {
    //         value.push(
    //             (arr.filter(
    //                 i => 1 === arr[i]).length));
    //     }
    // };
    // console.log(value);
}

migratoryBirds(arr);
