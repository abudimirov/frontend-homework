'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
   console.log(request.method, request.url);
   if (request.url == '/styles/style.css') {
      const css = fs.readFileSync('styles/style.css', 'utf8');
      response.end(css);
   } else if (request.url == '/media/tower-logo.svg')  {
      const logo = fs.readFileSync('media/tower-logo.svg', 'utf8');
      response.end(logo);
   } else if (request.url == '/profile')  {
      const profile = fs.readFileSync('profile.html', 'utf8');
      response.end(profile);
   } else if (request.url == '/login')  {
      const login = fs.readFileSync('login.html', 'utf8');
      response.end(login);
   }
   else if (request.url == '/registration')  {
      const registration = fs.readFileSync('registration.html', 'utf8');
      response.end(registration);
   }
   else if (request.url == '/leaders')  {
      const leaders = fs.readFileSync('leaders.html', 'utf8');
      response.end(leaders);
   }
   else if (request.url == '/about')  {
      const about = fs.readFileSync('about.html', 'utf8');
      response.end(about);
   }
   else if (request.url == '/')  {
      const index = fs.readFileSync('index.html', 'utf8');
      response.end(index);
   }

});

console.log('port = ', process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log('Server started');