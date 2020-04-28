const fs = require('fs');
const http = require('http');
// var data = fs.readFileSync('input.txt');
http.createServer((req, res)=>{
  res.writeHead(200, {'Conten-Type':'text/plain'});
  // using callback
  fs.readFile('input.txt', (err, data)=>{
    if (err) {
      console.error(err);
    }
    res.end(data.toString());
  });
}).listen(3000);
