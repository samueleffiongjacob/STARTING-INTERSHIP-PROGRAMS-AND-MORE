// let write a program that filter our csv

const { parse } = require('csv-parse');
const fs = require('fs');

/**
*creating and empty arrays that would store the resultsOfHabitablePlanets of the csv to 
*/ 
const resultsOfHabitablePlanets = [];

// code to filter the resultsOfHabitablePlanets to what we want
function isresultsOfHabitablePlanets(planet) {
	// This are what are in the csv
	return planet['koi_disposition'] === 'CONFIRMED'
		&& planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
		&& planet['koi_prad'] < 1.6;
}

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
    	if (isresultsOfHabitablePlanets(data)){
    		resultsOfHabitablePlanets.push(data);
    	}
    })

    // checking to see if there error on data
    .on('error', (err) => {
      console.log(err);
    })

    // result of data  
    .on('end', () => {
    	// printing the result of the planet.
    	console.log(resultsOfHabitablePlanets)
    	// wrappe up statement
      console.log(`${resultsOfHabitablePlanets.length} results Of Habitable Planets found!`);
      console.log("we are done filtering");

      // displaying specific names
      console.log('===========================================================================')
      console.log('let display kepler_name  only')
      console.log(resultsOfHabitablePlanets.map((planet)=>{
      	return planet['kepler_name'];
      }))
      console.log(`The above are kepler_name`)
    });
} catch (error) {
  console.log(error);
}
