'use strict';

const Hapi = require('hapi'),
      server = new Hapi.Server();


server.connection({port: 3000});


//Route Defintions
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {

  }
});

//Starts the server
server.start( (err) => {
  if(err) {
    throw err;
  }

  console.log('Server running at: ', server.info.uri);
});
