'use strict'

// Create a function called aclean(arr) that filters out the words in anagram

const arr = [
    "nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"
];


function aclean(arr) {
    let map = new Map();

    for(let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        // split('') -> word to chractors
        // sort() -> alphabet order
        // join('') -> join as a word 
        map.set(sorted, word);
        // map.set() -> sorted = key, word = value 
        console.log(map);
    }
    return Array.from(map.values());
    // map.values() -> return map's values as an iterable obj
    // Array.from() -> iterable obj make change to array
}

console.log(aclean(arr));