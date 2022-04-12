'use strict';

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// Returns the grades after rounding as appropriate.

const grades = [73,67,38,33];
// output= 75,67,40,33

function gradingStudents(grades) {
    let rounding = [];

    for (let i = 0; i < grades.length; i++) {
        let diff = 5-(grades[i] % 5);
        // console.log(diff);
        grades[i] < 38 || diff >= 3 ? rounding.push(grades[i]) : rounding.push(grades[i] + diff);
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

    return rounding;
}

console.log(gradingStudents(grades));
