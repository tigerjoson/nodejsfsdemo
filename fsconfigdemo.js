var fs = require('fs');
const fswriteconfig ={encoding:'utf-8',flag:'w+'}
fs.writeFile("xxx.txt",data,fswriteconfig,(e=>console.error(e)))
