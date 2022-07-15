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

    console.log(filenames)
})