const http = require('http')
const fs = require('fs')

let port = process.argv[2]

http.createServer(function callback(request, response){
    response.writeHead(200, {'content-type': 'text/plain'})
    let src = fs.createReadStream(process.argv[3])
    src.pipe(response)
}).listen(port)