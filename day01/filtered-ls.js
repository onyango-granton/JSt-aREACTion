'use strict'
const { strict } = require('assert')
const fs = require('fs')

fs.readdir(process.argv[2], function callback(err,list){
    if (err) {
        console.log(err)
    } else {
        list.forEach((file) => {
            let splitFileExt = file.split(".")
            if (splitFileExt.length == 2 && splitFileExt[1] == process.argv[3]){
                console.log(file)
            }
        })
    }
})