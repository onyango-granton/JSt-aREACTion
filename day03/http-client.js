const http = require('http')

let url = process.argv[2]

http.get(url, function callback(response){
    response.setEncoding("utf8")
    response.on('data', function(data){
        console.log(data)
    })
    response.on('error', function(error){
        console.log("Error: ",error)
    })

    response.on('end', function(){
        console.log("")
    })

})