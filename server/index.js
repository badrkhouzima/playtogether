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
    data.push(row);
  })
  .on("end", () => {
    let selectedData = _.map(_.uniqBy(data, "Adreca"), (row) =>
      _.pick(row, [
        "Adreca",
        "Area_Joc_Id",
        "Codi_Districte",
        "Codi_Barri",
        "Longitud",
        "Latitud",
      ])
    );
   // console.log(selectedData);
    app.get("/api/selectedData", (req, res) => {
      res.json(selectedData);
    });
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
