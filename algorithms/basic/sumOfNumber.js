'use strict'

// sum of username's number

const username = "abcd934";

const calculator = username => {
    let nums = username.slice(username.length - 3, username.length).split('').map(Number);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; 
    }

    return sum;
}

console.log(calculator(username));