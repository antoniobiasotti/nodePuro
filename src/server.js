import http from 'node:http'
import { json } from '../middlewares/json.js';
// import fastify from 'fastify

const users = []


const server = http.createServer(async (req, res) => {
     const { method, url } = req;

     await json(req, res)

   /*   body = JSON.parse(Buffer.concat(buffers).toString())

     console.log(body.name);

     console.log(req.headers);

     console.log(body); */

     if (method === 'GET' && url === '/users') {
          return res
          .end(JSON.stringify(users))
     }

     if (method === 'POST' && url === '/users') {

          const { name, email } = req.body

          users.push({
               id: 1,
               name,
               email,
          })

          return res.writeHead(201).end();
     }

     return res.writeHead(404).end('Not Found')
})

server.listen(3333)
console.log('Server On!')

// localhost: 3333