const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 4000;


const home = fs.readFileSync("files/Index.html","utf-8");
const server = http.createServer((req, res) => {
    if(req.url==="/"){
         return res.end(home);
    }
    if(req.url==="/about"){
        return res.end("<h1> This is about page </h1> ");
    }
    if(req.url==="/contact"){
        return res.end("<h1> This is contact page </h1> ");
    }
    else {

        return res.end("<h1>404 not Found </h1>")
    }
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
