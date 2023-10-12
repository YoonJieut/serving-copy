console.log('hi');

const http = require('http');
const fs = require('fs');
const pokemonArray = require('./source/pokemon-array');

const server = http.createServer((req, res)=>{
  if(req.method !== "GET") {
    throw new Error('GET 방식 아니면 안 받습니당');
  }
  if(req.url === "/"){
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.end("작동테스트");
  }
});
server.listen(8080, ()=>{
  console.log('서버 가동 중중중');
})