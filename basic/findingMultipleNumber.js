'use strict'

//  print 'Three:' multiple number of 3
//  print 'Five:' multiple number of 5
//  print 'Three & Five:' multiple number of 3 and 5
//  1 to 100

for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log('Three & Five');
    } else if (i % 3 === 0) {
        console.log('Three');
    } else if (i % 5 === 0) {
        console.log('Five');
    } else {
        console.log(i);
    }
}