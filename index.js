#!/usr/bin/env node

//fs is filesystem
const fs = require('fs');
const util = require('util');

//Method #2
// const lstat = util.promisify(fs.lstat);


//Method #3
const {lstat} = fs.promises;

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        // error handling code here
        console.log(err)
    }

})

// Method #1

// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err,stats) => {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats);
//         })
//     })
// }