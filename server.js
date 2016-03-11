'use strict';

const Hapi = require('hapi'),
      server = new Hapi.Server();


server.connection({port: 3000});

//View Engine
server.register(require('vision'), (err) => {
  if (err) {
      throw err;
  }

  server.views({
      engines: { html: require('handlebars') },
      relativeTo: __dirname,
      path: './src/templates',
      layoutPath: './src/templates/layouts',
      layout: true

  });
});


//Route Defintions
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.view('articles/index', { title: 'Articles', body: 'Article Body' });
  }
});

//Starts the server
server.start( (err) => {
  if(err) {
    throw err;
  }

  console.log('Server running at: ', server.info.uri);
});
