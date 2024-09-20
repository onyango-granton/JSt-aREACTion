const fs = require('fs')
const exportFunc = function(directory, extension, callback){
   fs.readdir(directory, (err,files) => {
    if (err){
        return callback(err)
    }
    let fileArr = []
    files.forEach(file => {
        let splitFile = file.split(".")
        if (splitFile.length == 2 && splitFile[1] == extension){
            fileArr.push(file)
        }
    })
    callback(null, fileArr)
   })
}

module.exports = exportFunc