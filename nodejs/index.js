const http = require('http');
const port = 3000;

const server = http.createServer((req, res)=>{
  console.log('dsd');
  res.end('VNTALKING: Xin chào node.js');
})
server.listen(port);
