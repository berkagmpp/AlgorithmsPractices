'use strict';

const grades = [73,67,38,33];
// output= 75,67,40,33
// const grades = [99,64,37,25];

function gradingStudents(grades) {
    let res = [];
    for (let i = 0; i < grades.length; i++) {
        let diff = 5-(grades[i] % 5);
        // console.log(diff);
        grades[i] < 38 || diff >= 3 ? res.push(grades[i]) : res.push(grades[i]+diff);
    }
    // let nextMulti = [];
    // let res = [];
    // for (let i = 0; i < grades.length; i++) {

    //     if (grades[i] > 37) {
    //         nextMulti.push((Math.ceil(grades[i]/5))*5);
    //         // console.log(nextMulti);
    //         nextMulti[i]-grades[i] >= 3 ? res.push(grades[i]) : res.push((Math.ceil(grades[i]/5))*5);
    //     } else {
    //         res.push(grades[i]);
    //     }
    // }
    return res;
    // console.log(res);
}

gradingStudents(grades);
