'use strict';

const Moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let Note = sequelize.define('Note', {
    date: {
      type: DataTypes.DATE,
      get: function () {
        return Moment(this.getDataValue('date')).format('MMMM Do, YYYY');
      }
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING
  });

  return Note;
};
'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');

module.exports = {
  // Here we're going to include our functions that will handle each request in the routes.js file.
};
create: (request, reply) => {
  Models.Note
    .create({
      date: new Date(),
      title: request.payload.noteTitle,
      slug: Slugify(request.payload.noteTitle, {lower: true}),
      description: request.payload.noteDescription,
      content: request.payload.noteContent
    })
    .then((result) => {
      // We're going to generate a view later, but for now lets just return the result.
      reply(result);
    });
},
read: (request, reply) => {
  Models.Note
    .findOne({
      where: {
        slug: request.params.slug
      }
    })
    .then((result) => {
      reply(result);
    });
},
update: (request, reply) => {
  const values = {
    title: request.payload.noteTitle,
    description: request.payload.noteDescription,
    content: request.payload.noteContent
  };

  const options = {
    where: {
      slug: request.params.slug
    }
  };

  Models.Note
    .update(values, options)
    .then(() => {
      Models.Note
        .findOne(options)
        .then((result) => {
          reply(result);
        });
    });
},
delete: (request, reply) => {
  Models.Note
    .destroy({
      where: {
        slug: request.params.slug
      }
    })
    .then(() => reply.redirect('/'));
}