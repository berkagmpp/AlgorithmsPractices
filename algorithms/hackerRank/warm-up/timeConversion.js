'use strict';

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const s34 = '07:05:45PM'
// return '19:05:45'
const s = '12:01:00AM'
//return '00:01:00'
const s3 = '12:01:00PM'
//return '12:01:00'

function timeConversion(s) {
    // let time = s.split(':')[0];
    // console.log(time);
    // let ampm = s.includes('A') ? 'am' : 'pm'; 
    // console.log(ampm);
    // ampm === 'am' && time === '12' ? time = '00' : time = s.split(':')[0];
    // ampm === 'pm' && time === '24' ? time = '12' : time = (parseInt(time) + 12).toString();
    // console.log(time.concat(s.slice(2, 8)));
    // return time.concat(s.slice(2, 8));

    let oclock = s[0] + s[1];
    let s2 = s;

    if (s.includes('P')) {
        oclock = (parseInt(oclock) + 12).toString()
        if (oclock === '24') {
            oclock = '12';
        };
        s2 = oclock.concat(s.slice(2, 8));
    }

    if (s.includes('A')) {
        oclock === '12' ? oclock = '00' : oclock = s[0] + s[1];
        s2 = oclock.concat(s.slice(2, 8));
    }

    return s2;
}

console.log(timeConversion(s));