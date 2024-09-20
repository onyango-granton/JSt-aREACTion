const fs = require('fs')

fs.readFile(process.argv[2],'utf-8', function callback (err, data) {
    if (err){
        console.log(err)
    } else {
        console.log(data.split('\n').length - 1)
    }
})
