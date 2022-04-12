'use strict'

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. 
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

let list1 = [1,2,4];
const list2 = [1,3,4];

const mergeTwoLists = function(list1, list2) {
    let array = [];

    if (list1.length === 0 || list2.length === 0) return array;

    array = array.concat(list1,list2);

    array.sort(
        (a, b) => {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        }
    );

    return array;
};



console.log(mergeTwoLists(list1, list2));