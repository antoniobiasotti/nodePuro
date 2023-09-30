import http from 'node:http'
// import fastify from 'fastify

const server = http.createServer((req, res) => {
     return res.end('Hello World')
})

server.listen(3333)

// localhost: 3333