'use strict';

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const s3 = '07:05:45PM'
// return '19:05:45'
const s = '12:01:00AM'
//return '00:01:00'
const s2 = '12:01:00PM'
//return '12:01:00'

function timeConversion(s) {
    let time = parseInt(s[0] + s[1]);
    let string = s[8] + s[9];
    let ss = '';

    if (time === 12 && string === 'AM') {
        time = '00';
        ss = ss.concat(time, s.substr(2, 6));
    } else if (time < 12 && string === 'PM') {
        time = (time + 12).toString();
        ss = ss.concat(time, s.substr(2, 6));
    } else {
        ss = s.substr(0, 8)
    }

    return ss;
}

console.log(timeConversion(s));

// function running time check
// console.time(timeConversion);
// timeConversion(s);
// console.timeEnd(timeConversion); 