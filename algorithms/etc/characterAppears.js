'use strict';

const word = 'avvXxyag'
//Output: yyyyyxyx

function changeWord(word) {
    const low_word = word.toLowerCase(); 
    let result = '';
    
    low_word.split("").forEach(
        char => {
            result += low_word.split(char).length - 1 > 1 ? 'y' : 'x';
        }
    );
    
    return result;

    // const getKeyByValue = (object, value) => {
    //     return Object.keys(object).map(key => object[key] = value);
    // }

    // array.forEach(x => {
    //     obj[x] = (obj[x] || 0) + 1;
    // });
}

console.log(changeWord(word));
