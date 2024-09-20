const mymodule = require('./mymodule')

mymodule(process.argv[2],process.argv[3],(err, files) => {
    if (err){
        console.log(err)
        return
    }
    files.forEach(file => {
        console.log(file)
    })
})