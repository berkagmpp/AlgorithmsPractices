'use strict';

const word = 'avvXxyag'
//yyyyyxyx

/*
 * changeWord
 * @var word
 *
 * @return STRING
 */
function changeWord(word) {
    const low_word = word.toLowerCase(); 
    let result = '';
    
    low_word.split("").forEach(
        char => {
            result += low_word.split(char).length - 1 > 1 ? 'y' : 'x';
        }
    );
    
    return result;

    // let lowerWord = word.toLowerCase();
    // let array = word.toLowerCase().split('');
    // const map = new Map();
    // const obj = {};

    // for (let i = 0; i < word.length - 1; i++) {
    //     for (let j = i + 1; j < word.length; j++) {
    //         if (array[i] === array[j]) {
    //             arr.push(1);
    //         } else {
    //             arr.push(2);
    //         }
    //     }
    // }
    // console.log(arr);

    // const getKeyByValue = (object, value) => {
    //     return Object.keys(object).map(key => object[key] = value);
    // }

    // array.forEach(x => {
    //     obj[x] = (obj[x] || 0) + 1;
    // });

    // console.log(obj);

    // const arr = [...getKeyByValue(obj, 1)];
    // console.log(getKeyByValue(obj, 1));
    // for (let i = 0; i < lowerWord.length; i++) {
    //     lowerWord[i] === getKeyByValue(obj, 1)
    // }


    // for (let i = 0; i < word.length; i++) {
    //     lowerWord[i] ob
    // }

    // array.forEach(key => {
    //     map.set(key, (map.get(key) || 0) + 1)
    // });
    // console.log(map);


    // map.forEach((value, key) => {
    //     if (value === 1 ) {
    //         array[array.indexOf(key)] = '1';
    //         console.log(array);

    //     } else {
    //         array.map(char => char = 'y');
    //         console.log(array);
    //     }
    // });
    // console.log(array);

    // for (let char of array) {
    //     console.log(char);
    //     // console.log(lowerWord[array.indexOf(char)]);
    //    if (char != 1) lowerWord.replace(char, 3);
    //    console.log(lowerWord);
    // }
    // console.log(lowerWord);

}

console.log(changeWord(word));
