const http = require('http')
const fs = require('fs')
const map = require('through2-map')

let port = process.argv[2]

http.createServer(function callback(request, response){
    if (request.method == 'POST'){
        response.writeHead(200, ({"content-type":"text/plain"}))
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }
}).listen(port)