//npm install mkdirp
//npm install csv

const fs = require("fs");
const { parse } = require("csv-parse");
const mkdirp = require("mkdirp");

fs.createReadStream("./folder.csv")
  .pipe(parse({ delimiter: ";", from_line: 2 }))
  .on("data", function (row) {
    //Ignore filename last col
    row.splice(-1);

    console.log(row);
    mkdirp(row.join('/'))
});


  
