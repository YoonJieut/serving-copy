const pokemonArray = require("./source/pokemon-array");


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