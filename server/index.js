const express = require("express");
const app = express();
const csv = require("csv-parser");
const fs = require("fs");
const _ = require("lodash");

let data = [];
fs.createReadStream("data/jocs_bcn.csv")
  .pipe(csv())
  .on("data", (row) => {
    // do something with the row
    //console.log(row.Codi_Districte);
    // row["Area_Joc_Id"] = row["Area_Joc_Id"].replace(/"/g, "");
    data.push(row);
  })
  .on("end", () => {
    let selectedData = _.map(_.uniqBy(data, "Adreca"), (row) =>
      _.pick(row, [
        "Area_Joc_Id",
        "Codi_Districte",
        "Adreca",
        "Codi_Barri",
        "Longitud",
        "Latitud",
      ])
    );
    // console.log(selectedData);
    app.get("/api/selectedData", (req, res) => {
      res.json(selectedData);
      res.send("welcome to my app express www");
    });
    app.get("/", (req, res) => {
      //res.json(selectedData);
      res.send("welcome to my app express 2222");
    });
  });


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin:*");

});
