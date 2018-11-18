const http = require('http');
http.createServer((request, response) => {
response.writeHead(200);
response.end('Hello, World!');
}).listen(3000);
 console.log('Server running on http://localhost:3000');
// const http = require('http');

// const server = http.createServer((request, response) => {
//   // magic happens here!
// });
// const server = http.createServer();
// server.on('request', (request, response) => {
//   // the same kind of magic happens here!
// });
'use strict'; const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const server = new Hapi.Server();
server.connection({ port: Settings.port });
server.route({
method: 'GET',
path: '/',
handler: (request, reply) => { reply('Hello, world!');
} });
server.start((err) => {
Hoek.assert(!err, err);
console.log(`Server running at: ${server.info.uri}`);
});
