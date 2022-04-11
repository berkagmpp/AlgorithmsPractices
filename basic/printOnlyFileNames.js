'use strict'

//  print only file names

const fileNames = ['filename.txt',
                  'file_name.csv',
                  'qwerty.txt',
                  'my.name.txt',
                  'my.name.is.derek.park.csv'];

for (let fileName of fileNames) {
    console.log(
        fileName.slice(0, fileName.lastIndexOf('.')),
        fileName.substring(0, fileName.lastIndexOf('.'))
    );
}
