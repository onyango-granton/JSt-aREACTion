const fs = require('fs')
const exportFunc = function(directory, extension, callback){
    fs.readdir(directory, function(err, files){
        if (err){
            callback(err)
        }
        files.filter(function(file){
            return file.slice(-4) == extension
        })
        callback(null, files)
    })
}

module.exports = exportFunc