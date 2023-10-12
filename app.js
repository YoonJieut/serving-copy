console.log('hi');

const http = require('http');
const fs = require('fs');
const pokemonArray = require('./source/pokemon-array');
// const pokemonArray = require('./source/pokemon-array');

const server = http.createServer((req, res)=>{
  console.log(req.method);
  console.log(req.url);
  if(req.method !== "GET") {
    throw new Error('GET 방식 아니면 안 받습니당');
  }
  if(req.url === "/"){
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.end("주소 위에 꼬북이를 작성해주세요.");
  }
  const getRoute = (requestUrl) =>{
    pokemonArray.forEach((pokemon)=>{
      let value = "/"+pokemon;
      if(requestUrl === value) {
        let responseData = value+".html";
        fs.readFile('./static/'+responseData, (err, data)=>{
          if(err){
            console.error('파일읽기 에러');
          }
          res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
          res.end(data);
        })
      }
    })
  };
  getRoute(req.url);
});

server.listen(8080, ()=>{
  console.log('서버 가동 중중중');
})

// GET
// /%EA%BC%AC%EB%B6%81%EC%9D%B4
// 파일명이 한글이면 안되는 것 같음.
