const http = require('http')

const server = http.createServer((req, res) => {
            res.write("Hello")
            res.end()
})

const port = 3000
server.listen(port, () => {
    console.log(`listen to port ${port}`)
})

