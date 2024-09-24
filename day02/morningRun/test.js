const exportFunc = require('./mymodule')


exportFunc(process.argv[2], process.argv[3], function(err, files){
    if (err){
        console.log(err)
        return
    }
    files.forEach(function(file){
        console.log(file)
    })
})