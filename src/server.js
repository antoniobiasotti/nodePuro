import http from 'node:http'
// import fastify from 'fastify

const server = http.createServer((req, res) => {
     const { method, url } = req;

     if (method === 'GET' && url === '/users') {
          return res.end('Listagem de usuários')
     }

     if (method === 'POST' && url === '/users') {
          return res.end('Criação de usuário')
     }

     return res.end('Hello World')
})

server.listen(3333)

// localhost: 3333