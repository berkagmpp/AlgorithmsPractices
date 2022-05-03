'use strict';

// a[i] - a[i-1] = 1  for any 1 < i <= n (i.e., each element in the sequence is 1 more than the previous element).
// No a[i] contains a leading zero. 
// For example, we can split s=10203 into the sequence {1, 02, 03}, but it is not beautiful because 02 and 03 have leading zeroes.
// The contents of the sequence cannot be rearranged. 
// For example, we can split s = 312 into the sequence {3, 1, 2}, but it is not beautiful because it breaks our first constraint (i.e., 1 - 3 = -2 ).
// Return YES and sum, or NO
// The first line contains an integer q, the number of strings to evaluate.
// 1 <= q <= 10

const s = '567891011121312';

function separateNumbers(s) {
    // let ss = s * 1;
    // console.log(typeof ss);
    let array = [];

    for (let i = 0; i < s.length; i++) {
        if ((s[i] > s[i + 1]) && (s[i] != 9)) {
            return 'NO';
        }

        if ((s[i] < s[i + 1]) && (s[i] < 9)) {
            array.push(s[i]);
            console.log(array);
        }

        if ((s[i] > s[i + 1]) && (s[i] == 9)) {
            array.push(s[i]);

            for (let j = 1; j <= s.length - i - 2; j += 2) {     // j is increased 2, so, j should equal or less then s.length -i - 2
                array.push(s[i + j] + s[i + j + 1]);
                console.log(array);
            }
            break;
        }
    }

    const num = array.map(str => {
        return Number(str);
    })

    // let num = array.toString();
    // num *= num;
    console.log('2: ' + num[3]);
    console.log(typeof num[3]);
    // console.log(num[1] - num[0]);
    // array = parseInt(array.toString());
    // array = array.map(Number);
    // console.log('4: ' + array[0] + array[1]);
    // parseInt(array.toString().split('').reverse().join(''))
    
    for (let k = 0; k < num.length; k++) {
        console.log('3: ' + num[k + 1] - num[k]);
        if (!num[k + 1] - num[k] === 1) {
            return 'NO';
        }
    }

    return 'YES ' + num.reduce((a, b) => a + b);    

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] < 9) {
    //         array.push(s[i]);
    //         console.log(array);
    //     }
    //     if (s[i] == 9) {
    //         array.push(s[i]);

    //         for (let j = 1; j <= s.length - i - 2; j += 2) {     // j is increased 2, so, j should less then s.length -i - 2
    //             array.push(s[i + j] + s[i + j + 1]);
    //             console.log('1: ' + array);
    //         }
    //         break;
    //     }
    // }
    // console.log('2: ' + array);

    // for (let k = 0; k < array.length; k++) {
    //     if (!array[k + 1] - array[k] === 1) {
    //         return 'NO'
    //     }
    // }
    // array = array.map(Number);

    // return 'YES ' + array.reduce((a, b) => a + b);    

        // if (s[i] < 9) {     
        //     array.push(s[i]);
        //     console.log(array);
        // } 
        
        // if (s[i] == 9) {
        //     array.push(s[i]);

        //     for (let j = 1; j < s.length -i - 2; j += 2) {     // j is increased 2, so, j should less then s.length -i - 2
        //     array.push(s[i+j] + s[i+j+1]); 
        //     console.log('1: ' + array);
        //     }
            
        // } 


    // for (let k = 0; k < array.length; k++) {
    //     if (!array[k + 1] - array[k] === 1) {
    //         return 'NO';
    //     }
    // }
    // array = array.map(Number);

    // return '2YES ' + array.reduce((a, b) => a + b);    
}

console.log(separateNumbers(s));
