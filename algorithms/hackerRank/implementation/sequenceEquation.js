'use strict';

// Given a sequence of n integers, p(1),p(2), ..., p(n) where each element is distinct and satisfies 1 <= p(x) <+n. 
// For each x where 1 <= x <= n, that is x increments from 1 to n, 
// find any integer y such that p(p(y)) =  x and keep a history of the values of y in a return array.

const p = [2, 3, 1];

function permutationEquation(p) {
    let arr = [];

    for (let x = 1; x <= p.length; x++){
        arr.push(p.indexOf((p.indexOf(x) + 1)) + 1);
    }
    return arr;

    // let arr = [];
    // let arr2 = [];

    // for (let x = 1; x <= p.length; x++){
    //     arr.push(p.indexOf(x) + 1);
    // }

    // for (let i of arr) {
    //     arr2.push(p.indexOf(i) + 1);
    // }
    
    // return arr2;
}

console.log(permutationEquation(p));