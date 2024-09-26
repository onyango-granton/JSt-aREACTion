const net = require('net')

let port = process.argv[2]

let time = new Date()

net.createServer(function (socket) {
    socket.setEncoding("utf8")
    let year = time.getFullYear()
    let month = time.getMonth()
    let date = time.getDate()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    socket.write(`${year}-0${month+1}-${date} ${hours}:${minutes}\n`)
    socket.end()
}).listen(port)