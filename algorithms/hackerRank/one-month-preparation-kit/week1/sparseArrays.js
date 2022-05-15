'use strict';

// There is a collection of input strings and a collection of query strings. 
// For each query string, determine how many times it occurs in the list of input strings. 
// Return an array of the results.

const strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
const queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];
// Output: [1, 3, 4, 3, 2]


function matchingStrings(strings, queries) {
    let res = [];

    queries.forEach((query) => {
        res.push(strings.filter((string) => string === query).length);
    })

    // let count = 0;

    // for (let query of queries) {
    //     for (let string of strings) {
    //         if (query === string) {
    //             count++;
    //         }
    //     }
    //     res.push(count);
    //     count = 0;
    // }

    return res;
}

console.log(matchingStrings(strings, queries));

// function running time check
console.time(matchingStrings);
matchingStrings(strings, queries);
console.timeEnd(matchingStrings); 