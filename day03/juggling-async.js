'use strict'

const http = require('http')
var async = require('async')

let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]


http.get(url1, function callback (response) {
    response.setEncoding("utf8")

    let totalData = ""
    response.on('data', function(data){
        totalData += data
    })

    response.on('end', function(){
        totalData += "\n"
        http.get(url2, function callback (response){
            response.setEncoding("utf8")

            response.on('data', function(data){
                totalData += data 
            })

            response.on('end', function(){
                totalData += "\n"
                http.get(url3, function callback (response){
                    response.setEncoding("utf8")

                    response.on('data', function(data){
                        totalData += data
                    })

                    response.on('end', function(){
                        console.log(totalData)
                    })
                })
            })
        })
    })
})