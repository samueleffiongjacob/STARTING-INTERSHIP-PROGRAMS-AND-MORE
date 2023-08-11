const { parse } = require('csv-parse');
const fs = require('fs');

/**
*creating and empty arrays that would store the results of the csv to 
*/ 
const results = [];

// reading data
try {
  fs.createReadStream('kepler_data.csv')
  // using the parse function and pipe to arrange data from csv
    .pipe(
      parse({
        comment: '#',
        columns: true,
      })
    )

    // pushing the csv data into the empty result arrays
    .on('data', (data) => {
      results.push(data);
    })

    // checking to see if there error on data
    .on('error', (err) => {
      console.log(err);
    })

    // result of data  
    .on('end', () => {
      console.log(results);
      console.log("done");
    });
} catch (error) {
  console.log(error);
}
