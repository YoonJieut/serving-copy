console.log('hi');

const http = require('http');
const fs = require('fs');
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
  const getRoute = (requestUrl)=>{
    // pokemonArray.forEach((pokemon)=>{
      if(requestUrl === "/꼬북이") {
        console.log("if문 참");
        fs.readFile('./static/꼬북이.html',(err,data)=>{
          if(err){
            console.error('파일 읽기 에러')
          }
          res.writeHead(200, {"Content-Type":"text/html"});
          res.write(data)
          res.end();
        });
      }
    // });
  };
  getRoute(req.url);


});
server.listen(8080, ()=>{
  console.log('서버 가동 중중중');
})