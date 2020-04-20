const http = require('http');
const port = 3000;
const app = http.createServer((req, res)=>{
  res.end('Hello world');
})
app.listen(port)
