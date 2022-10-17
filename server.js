const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-type', 'text/html');    
    
    if (request.url === '/home') {
        response.write('<h1>Welcome from home');
    } else if (request.url === '/contact') {
        response.write('<h1>Welcome from contact');
    } else if (request.url === '/about') {
        response.write('<h1>Welcome from about');
    }
    else {
        response.statusCode = 404;
        response.write('not found');
    }

    response.end();
})

server.listen(3000);