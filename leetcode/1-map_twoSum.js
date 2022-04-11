'use strict'

// find two numbers' index that add up to target from array nums

let nums = [2,7,11,15];
let target = 18;

// const twoSum = (nums, target) => {

//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i.toString(), j.toString()].map(Number);
//             }
//         }
//     }
// }

const twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            map.get(target - nums[i]), i;
            // console.log('map has: ' + (target - nums[i]));
            // console.log(map);
        } else {
            map.set(nums[i], i);
            // console.log("map doesn't has: " + (target - nums[i]) + " / " + target + '(target) - ' + nums[i] + ' (num['+ i + '])');
            // console.log(map);
        }
    }
	return [];
};

console.log(twoSum(nums, target)); 