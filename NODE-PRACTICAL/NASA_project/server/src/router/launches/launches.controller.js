const {
  getAllLaunches,
  // addNewLaunch,
  scheduleNewLaunch,
  existLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

// function getAllLaunches(req, res) {
//   return res.status(200).json(Array.from(launches.values()));
// }

/**
 * the above we are giving the controller much work
 *
 * now let simplify thing to give the controller more power to work
 *
 * for him self faster
 */

async function httpGetAllLaunches(req, res) {
  return res.status(200).json(await getAllLaunches());
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch Property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (launch.launchDate.toString() === "Invalid Date") {
    // if (isNaN(lauch.launchDate))
    return res.status(400).json({
      error: "Invalid Launch date",
    });
  }

  // old way of serving to memory now we want to use db
  // addNewLaunch(launch);
  // return res.status(201).json(launch);

  // db code.
  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = +req.params.id; // or Number(req.params.id)

  // if launch doesn't exit
  // if (!existLaunchWithId(launchId)) {
  //   return res.status(404).json({
  //     error: "Launch not found",
  //   });
  // }

  /**
   * above old way with server
   */

  //if launch doesn't exit
  const existsLaunch = existLaunchWithId(launchId);
  if (!existsLaunch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  //if launch does exit
  const aborted = abortLaunchById(launchId);
  //only this for db cases
  if (!aborted) {
    return res.status(400).json({
      error: "Launch not aborted",
    });
  }
  // return res.status(200).json(aborted);
  /**
   * the above is the old way
   *
   * below is the new way with db
   */

  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  //old way
  // getAllLaunches,
  // new way
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
