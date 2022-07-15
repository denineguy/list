#!/usr/bin/env node

//fs is filesystem
const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
    //Either
    // err ===  an error object , which means something went wrong 
    //OR
    //err === null, which means everything is ok
    if (err) {
        // error handling code here
        console.log(err)
    }

    // BAD CODE HERE!!!
    for (let filename of filenames) {
        fs.lstat(filename, (err, stats) => {
            if(err) {
                console.log(err);
            }
            console.log(filename, stats.isFile());
        })
    }

})