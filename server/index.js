const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data/jocs_bcn.csv')
  .pipe(csv())
  .on('data', (row) => {
    // do something with the row
    console.log(row.Codi_Districte);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });