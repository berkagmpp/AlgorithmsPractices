'use strict';

const year = 1918;

// const theDay = new Date().toISOString().slice(0, 10);
function dayOfProgrammer(year) {
    // let day = 13;
    // if (year === 1918) {
    //     day = 26;
    //     console.log( `${day}.09.${year}`);
    // } else if (year > 1917 && ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)) {
    //     day = 12;
    //     console.log( `${day}.09.${year}`);
    // } else if (year < 1918 && year % 4 === 0) {
    //     day = 12;
    //     console.log( `${day}.09.${year}`);
    // } else console.log( `${day}.09.${year}`);



    const theDay = {
        yyyy: year,
        mm: '09',
        dd: 13
    }

    if (year === 1918) {
        theDay.dd = 26;
    } else if (year < 1918 && year % 4 === 0) {
        theDay.dd = 12;
    } else if (year > 1917 && ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)) {
        theDay.dd = 12;
    }
    console.log(`${theDay.dd}.${theDay.mm}.${theDay.yyyy}`);
    // return `${theDay.dd}.${theDay.mm}.${theDay.yyyy}`;
}

dayOfProgrammer(year); 