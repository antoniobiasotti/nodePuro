import http from 'node:http'
// import fastify from 'fastify

const users = []

const server = http.createServer((req, res) => {
     const { method, url } = req;

     console.log(req.headers);

     if (method === 'GET' && url === '/users') {
          return res
          .setHeader('Content-type', 'application/json')
          .end(JSON.stringify(users))
     }

     if (method === 'POST' && url === '/users') {
          users.push({
               id: 1,
               name: 'John Doe',
               email: 'johndoe@example.com',
          })
          return res.end('Criação de usuário')
     }

     return res.end('Hello World')
})

server.listen(3333)

// localhost: 3333