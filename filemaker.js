const pokemonArray = require("./source/pokemon-array");
const fs = require('fs');


const fileList = [];
pokemonArray.forEach((pokemonName, index)=>{
  let template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${index+1}번 ${pokemonName}</title>
  </head>
  <body>
    <h1>나는 ${pokemonName}이다!!!!!!!!!!!</h1>
  </body>
  </html>`;
  fileList.push(template);
});

// console.log(fileList);
// console.log(fileList.length);

// ! 파일 생성 로직
for(i=0; i<fileList.length; i++){
  // fs.writeFile("파일이름","내용",'에러 화살표함수')
  fs.writeFile(`./static/${pokemonName[i]}.html`,fileList[i],(err)=>{
    console.error('에러 발생했소');
  })
  
}