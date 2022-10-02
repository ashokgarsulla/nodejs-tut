const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 8000;


const home = fs.readFileSync("files/Index.html","utf-8");
const about = fs.readFileSync("files/about.html","utf-8");
const contact = fs.readFileSync("files/contact.html","utf-8");
const server = http.createServer((req, res) => {
    if(req.url==="/"){
         return res.end(home);
    }
    if(req.url==="/about"){
        return res.end(about);
    }
    if(req.url==="/contact"){
        return res.end(contact);
    }
    else {

        return res.end("<h1>404 not Found </h1>")
    }
    
});

server.listen(port,hostname, () => {
  console.log(`Server running `);
});
