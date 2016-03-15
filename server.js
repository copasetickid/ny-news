'use strict';

const Hapi = require('hapi'),
      Path = require('path'),
      Inert = require('inert'),
      Request = require('request');




const server = new Hapi.Server({
        connections: {
        routes: {
          files: {
                relativeTo: Path.join(__dirname, 'public/..')
              }
            }
        }
      });


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
      layout: true,
      helpersPath: './src/templates/helpers',
  });
});


//Route Defintions
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {

    Request('http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion2.js', function(error, response, body) {
      var jsonResponse = JSON.parse(body);
      //console.log(jsonResponse.page);
      reply.view('articles/index', { title: 'Articles', body: 'Article Body', pageParameters: jsonResponse.page.parameters});
    })



      //reply.view('articles/index', { title: 'Articles', body: 'Article Body' });
    }
  });

  server.register(Inert, (err) => {

    if (err) {
        throw err;
    }

    server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
      }
    });
  });


  //Starts the server
  server.start( (err) => {
    if(err) {
      throw err;
    }

    console.log('Server running at: ', server.info.uri);
  });


