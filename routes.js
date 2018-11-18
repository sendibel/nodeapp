const Note = require('./controllers/note');
'use strict';

module.exports = [
  // We're going to define our routes here
];
{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('All the notes will appear here');
  },
  config: {
    description: 'Gets all the notes available'
  }
},
{
  method: 'POST',
  path: '/note',
  handler: (request, reply) => {
    reply('New note');
  },
  config: {
    description: 'Adds a new note'
  }
},
{
  method: 'GET',
  path: '/note/{slug}',
  handler: (request, reply) => {
    reply('This is a note');
  },
  config: {
    description: 'Gets the content of a note'
  }
},
{
  method: 'PUT',
  path: '/note/{slug}',
  handler: (request, reply) => {
    reply('Edit a note');
  },
  config: {
    description: 'Updates the selected note'
  }
},
{
  method: 'GET',
  path: '/note/{slug}/delete',
  handler: (request, reply) => {
    reply('This note no longer exists');
  },
  config: {
    description: 'Deletes the selected note'
  }
},
const Home = require('./controllers/home');
{
  method: 'GET',
  path: '/',
  handler: Home,
  config: {
    description: 'Gets all the notes available'
  }
},
{
  method: 'POST',
  path: '/note',
  handler: Note.create,
  config: {
    description: 'Adds a new note'
  }
},
{
  method: 'GET',
  path: '/note/{slug}',
  handler: Note.read,
  config: {
    description: 'Gets the content of a note'
  }
},
{
  method: 'PUT',
  path: '/note/{slug}',
  handler: Note.update,
  config: {
    description: 'Updates the selected note'
  }
},
{
  method: 'GET',
  path: '/note/{slug}/delete',
  handler: Note.delete,
  config: {
    description: 'Deletes the selected note'
  }
},
{
  // Static files
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '../static/public')
    }
  },
  config: {
    description: 'Provides static resources'
  }
}