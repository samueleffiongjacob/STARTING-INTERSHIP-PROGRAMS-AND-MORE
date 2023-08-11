// let write a program that filter our csv
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");
const planets = require("./planets.mongo");
/**
 *creating and empty arrays that would store the resultsOfHabitablePlanets of the csv to server memory temporly
 */
// const resultsOfHabitablePlanets = [];

// code to filter the resultsOfHabitablePlanets to what we want
function isresultsOfHabitablePlanets(planet) {
  // This are what are in the csv
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

/**
 * const promise = new Promise((resolve,reject) => {
 *    resolve(42)
 * });
 * const result = await promise
 */

// reading data
try {
  function LoadPlanetsData() {
    return new Promise((resolve, rejects) => {
      fs.createReadStream(
        path.join(__dirname, "..", "..", "data", "kepler_data.csv")
      )
        // using the parse function and pipe to arrange data from csv
        .pipe(
          parse({
            comment: "#",
            columns: true,
          })
        )

        // pushing the csv data into the empty result arrays
        .on("data", async (data) => {
          if (isresultsOfHabitablePlanets(data)) {
            //insted of alway populating data we could use an upset operation
            // TODO: Replace below create with insert + update = upsert
            // resultsOfHabitablePlanets.push(data); dev testing see above now we want to save to db
            savePlanet(data);
          }
        })

        // checking to see if there error on data
        .on("error", (err) => {
          console.log(err);
          rejects(err);
        })

        // result of data
        .on("end", async () => {
          // This line came up as we want to stard using db
          const countPlanetsFound = (await getAllplanets()).length;
          console.log(`${countPlanetsFound} are kepler_name`);
          resolve();
        });
    });
  }
} catch (error) {
  console.log(error);
}

// new way refer to lunches for more
async function getAllplanets() {
  // return resultsOfHabitablePlanets; for the old behaviour above
  // now mongoose way

  return await planets.find(
    {},
    {
      __id: 0,
      __v: 0,
    }
  );

  /**
   * now finding specic object
   * 
   * return planets.find(
    {
      keplerName: "Kepler-62 f",
    },
    { keplerName: 0 }
   * 
   * now using strings directly
   * return planets.find(
    {
      keplerName: "Kepler-62 f",
    },
    ' keplerName anotherfield'

    now u want to excule the fist place a - sign before it
    ' -keplerName anotherfield'
  );
   */
}

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        keplerName: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(`Could not save planet ${err}`);
  }
}

module.exports = {
  LoadPlanetsData,
  //old below refer to launches
  // planets: resultsOfHabitablePlanets,
  getAllplanets,
};
