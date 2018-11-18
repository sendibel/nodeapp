'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
  Models.Note
    .findAll({
      order: [['date', 'DESC']]
    })
    .then((result) => {
      reply({
        data: {
          notes: result
        },
        page: 'Home—Notes Board',
        description: 'Welcome to my Notes Board'
      });
    });
};
reply.view('home', {
  data: {
    notes: result
  },
  page: 'Home—Notes Board',
  description: 'Welcome to my Notes Board'
});
// Generate a new note with the 'result' data
const newNote = Pug.renderFile(
  Path.join(__dirname, '../views/components/note.pug'),
  {
    note: result
  }
);

reply(newNote);
reply.view('note', {
  note: result,
  page: `${result.title}—Notes Board`,
  description: result.description
});

// Generate a new note with the updated data
const updatedNote = Pug.renderFile(
  Path.join(__dirname, '../views/components/note.pug'),
  {
    note: result
  }
);

reply(updatedNote);