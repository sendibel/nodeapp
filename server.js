'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');

const server = new Hapi.Server();
server.connection({ port: Settings.port });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Hello, world!');
  }
});

// Import the index.js file inside the models directory
const Models = require('./lib/models/');


server.start((err) => {
  Hoek.assert(!err, err);

  console.log(`Server running at: ${server.info.uri}`);
});
const Routes = require('./lib/routes');
server.route(Routes);

Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  });
});
const Path = require('path');
server.register([
  require('vision'),
   require('inert')
], (err) => {
  Hoek.assert(!err, err);

  // View settings
  server.views({
    engines: { pug: require('pug') },
    path: Path.join(__dirname, 'lib/views'),
    compileOptions: {
      pretty: false
    },
    isCached: Settings.env === 'production'
  });

  // Add routes
  server.route(Routes);
});
