import http from 'node:http'
import { json } from '../middlewares/json.js';

import { routes } from './route.js'
// import fastify from 'fastify

// const users = []

const server = http.createServer(async (req, res) => {
     const { method, url } = req;

     await json(req, res)

     const route = routes.find(route => {
          return route.method === method && route.path === url
     })

     console.log(route)

     if (route) {
          return route.handler(req, res)
     }

     return res.writeHead(404).end('Not Found')
})

server.listen(3333)
console.log('Server On!')

// localhost: 3333