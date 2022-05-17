'use strict';

// Rhe counting sort, does not require comparison, 
// you create an integer array whose index range covers the entire range of values in your array to sort. 
// Each time a value occurs in the original array, you increment the counter at that index. 
// At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

const arr = [1, 1, 3, 2, 1];
// i	arr[i]	result
// 0	1	    [0, 1, 0, 0]
// 1	1	    [0, 2, 0, 0]
// 2	3	    [0, 2, 0, 1]
// 3	2	    [0, 2, 1, 1]
// 4	1	    [0, 3, 1, 1]


function countingSort(arr) {
    let count = new Array(100).fill(0);

    arr.forEach(e => {
        count[e]++;
    });

    return count;
}

console.log(countingSort(arr));