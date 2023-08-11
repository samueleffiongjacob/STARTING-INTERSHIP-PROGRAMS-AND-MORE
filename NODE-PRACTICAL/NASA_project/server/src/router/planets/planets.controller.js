const { getAllplanets } = require("../../models/planets.models");

// function httpGetAllplanets(req, res) {
//   return res.status(200).json(planets);
// }

/***
 *
 * the above is the old way
 * refer to lunches for more
 */

// function httpGetAllplanets(req, res) {
//   return res.status(200).json(getAllplanets( ));
// } old way of using server without db

//now with db
async function httpGetAllplanets(req, res) {
  return res.status(200).json(await getAllplanets());
}

module.exports = {
  // getAllplanets,
  httpGetAllplanets,
};
