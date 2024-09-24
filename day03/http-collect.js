const http = require('http')

let url = process.argv[2]

http.get(url, function callback(response){
    response.setEncoding("utf8")

    let dataLength = 0
    let totalData = ""
    response.on('data', function(data){
        dataLength += data.length
        totalData += data
    })

    response.on('end', function(){
        console.log(dataLength)
        console.log(totalData)
    })
    
})