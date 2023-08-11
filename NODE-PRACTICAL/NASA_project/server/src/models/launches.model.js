const  axios = require("axios");
const launchesDb = require("./launches.mongo");
const planets = require("./planets.mongo");

// CONSTANT FOR FLIGHTNUMBER
const DEFAULT_flight_NUMBER = 1;

//const launches = new Map();

// let latestFlightNumber = 100;
/**
 * the above is store in memory now we need to the db
 * getLatestFlightNumber
 */
const launch = {
  flightNumber: 1, // flight_number
  mission: "Kepler Exploration X", //name
  rocket: "Explorer IS1", // rocket.name
  launchDate: new Date("October 1, 2030"), // date_local
  target: "Kepler-442 b", // not applicabe
  customers: ["ZTM", "NASA"], //payload.customers for each payload
  upcoming: true, //upcoming
  success: true, //success
};

// note: all comment in lauches would be use to map they api we are consuming

// saving above to database
saveLaunch(launch);

// consuming space x api to populate our own
const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches/query";
async function loadLaunchDate() {
  console.log("Downloading launch data...");

  // using axios
  const response = await axios.post(SPACEX_API_URL, {
    query: {},
    options: {
      populate: [
        {
          path: "rocket",
          select: {
            name: 1,
          },
        },
        {
          path: "payloads",
          select: {
            name: 1,
          },
        },
      ],
    },
  });

  const launchDocs = response.data.docs;
  for (const launchDoc of launchDocs) {
    const payloads = launchDoc[payloads];
    const customers = payloads.flatMaps((payload) => {
      return payload["customers"];
    });
    const launch = {
      flightNumber: launchDoc["flight_number"],
      mission: launchDoc["name"],
      rocket: launchDoc["rocket"]["name"],
      launchDate: launchDoc["date_local"],
      upcoming: launchDoc["upcoming"],
      success: launchDoc["success"],
      customers: customers,
    };
    console.log(`${launch.flightNumber} ${launch.mission}`);
  }
}
// launches.set(launch.flightNumber, launch);
/**
 * the above was use for pratical when only saving in file memory
 */

//for  deleting  lauches
// function existLaunchWithId(launchId) {
//   return launches.has(launchId);
// }
/***
 * the above is the old way of doing things
 */

async function existLaunchWithId(launchId) {
  return await launchesDb.findOne({
    flightNumber: launchId,
  });
}
async function getLatestFlightNumber() {
  const latestLauch = await launchesDb.findOne().sort("-flightNumber");

  if (!latestLauch) {
    return DEFAULT_flight_NUMBER;
  }

  return latestLauch.flightNumber;
}

// new way of exporting
// this would let db process everthing before controller see it
async function getAllLaunches() {
  // the below line was use before we created database and started working with it
  // return Array.from(launches.values());
  return await launchesDb.find(
    {},
    {
      __id: 0,
      __v: 0,
    }
  );
}

async function saveLaunch(launch) {
  try {
    const planet = await planets.findOne({
      keplerName: launch.target,
    });

    if (!planet) {
      throw new Error("No matching planet");
    }
    await launchesDb.findOneAndUpdate(
      {
        flightNumber: launch.flightNumber,
      },
      launch,
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(`Could not save launches ${err}`);
  }
}

// A FUNCTION FOR DB SAVE FUNTION LIKE THE MEMORY OWN BELOW
async function scheduleNewLaunch(launch) {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ["Zero to Mastery", "NASA"],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
}

//allowing a post requst
// function addNewLaunch(launch) {
//   latestFlightNumber++;
//   launches.set(
//     latestFlightNumber,
//     Object.assign(launch, {
//       success: true,
//       upcoming: true,
//       customers: ["Zero to Mastery", "NASA"],
//       flightNumber: latestFlightNumber,
//     })
//   );
// }

/**
 *
 * THE ABOVE FUNCTION WORK WITH MAP WITH SERVER MEMORY
 * NOW WE NEED TO START USING DB
 */

// function abortLaunchById(launchId) {
//   //launches.delete(launchId);
//   const aborted = launches.get(launchId);
//   aborted.upcoming = false;
//   aborted.success = false;
//   return aborted;
// }
/**
 * the above is the old way with server
 *
 * below is the new new with db
 */

async function abortLaunchById(launchId) {
  const aborted = await launchesDb.updateOne(
    {
      flightNumber: launchId,
    },
    {
      upcoming: false,
      success: false,
    }
  );

  return aborted.ok === 1 && aborted.nModified === 1;
}

module.exports = {
  loadLaunchDate,
  //old way launches,
  existLaunchWithId,
  getAllLaunches,
  // addNewLaunch,// old way with server memory
  scheduleNewLaunch,
  abortLaunchById,
};
