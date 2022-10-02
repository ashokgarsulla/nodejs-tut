const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.end("<h1> This is Home page </h1> ");
    }
    if(req.url==="/about"){
        res.end("<h1> This is about page </h1> ");
    }
    if(req.url==="/contact"){
        res.end("<h1> This is contact page </h1> ");
    }
    else {

        res.end("<h1>404 not Found </h1>")
    }
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
