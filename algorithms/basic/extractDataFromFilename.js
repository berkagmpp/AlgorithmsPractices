'use strict'

// change fileName(derek_park_male-20220402.txt) like belows
// Name: Derek Park 
// Gender: Male 
// DOB: 2022-04-02

const fileName = "derek_park_male-20220402.txt";

const toCapital = (name) => {
    return name.charAt(0).toUpperCase() + name.substring(1, name.length);
}

// let firstName = fileName[0].toUpperCase() + fileName.slice(1, fileName.indexOf('_'));
let firstName = toCapital(fileName.slice(0, fileName.indexOf('_')));

// let lastName = fileName.slice(fileName.indexOf('_') + 1, fileName.indexOf('_') + 2).toUpperCase() + fileName.slice(fileName.indexOf('_') + 2, fileName.lastIndexOf('_'));
let lastName = toCapital(fileName.slice(fileName.indexOf('_') + 1, fileName.lastIndexOf('_')));

let Gender = fileName.slice(fileName.lastIndexOf('_') + 1, fileName.lastIndexOf('_') + 2).toUpperCase() + fileName.slice(fileName.lastIndexOf('_') + 2, fileName.indexOf('-'));

let date = fileName.slice(fileName.indexOf('-') + 1, fileName.indexOf('.'));
let dob = date.substring(0,4) + '-' + date.substring(4,6) + '-' + date.substring(6,8);

console.log(`
    Name: ${firstName} ${lastName}
    Gender: ${Gender}
    DOB: ${dob}
`);