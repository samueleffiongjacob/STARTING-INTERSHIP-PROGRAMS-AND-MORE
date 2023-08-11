const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  version: "1.2.3",
  canonical_url: process.env.APPLICATION_ROOT,
  api: {
    host: process.env.PORT,
    key: process.env.PORT,
    secret: process.env.PORT,
  },
  plugins: ["plugin-one", "plugin.two"],
};
