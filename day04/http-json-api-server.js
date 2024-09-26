const http = require('http')

let port = process.argv[2]

http.createServer(function callback(request, response){
    let urlSlices = request.url.split("=")
    let dateTime = urlSlices[1]
    if (request.method == 'GET' && request.url.includes('/api/parsetime')){
        
        response.writeHead(200, {'Content-Type' : 'application/json'})
        //2024-09-25T04:05:55.251Z
        let obj = {
            hour : Number(dateTime.split('T')[1].slice(0,2))+3,
            minute : Number(dateTime.split('T')[1].slice(3,5)),
            second : Number(dateTime.split('T')[1].slice(6,8)),
        }
        
        response.write(JSON.stringify(obj))
        response.end()

    }else {
        let obj2 = {
            unixtime : new Date(dateTime).getTime()
        }
        response.write(JSON.stringify(obj2))
        response.end()
    }
}).listen(port)