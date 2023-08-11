const apps = require("./src/app");
const { mongoConnect } = require("./src/services/mongodb");
// require("dotenv").config();
const { LoadPlanetsData } = require("./src/models/planets.models");
const { loadLaunchDate } = require("./src/models/launches.model");
const http = require("http");

const PORT = process.env.PORT || 8000;

const server = http.createServer(apps);

// CRREATNG AN ASYNC FUNCTION THAT WAIT FOR DB IN COMMONJS
async function startServer() {
  await mongoConnect();
  await LoadPlanetsData();
  // consuming other persons api
  await loadLaunchDate();

  server.listen(PORT, () => {
    console.log(`NASA SERVER IS RUNNING ON PORT ${PORT}....`);
  });
}
startServer();
