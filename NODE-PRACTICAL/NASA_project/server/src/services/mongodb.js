const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Techathon-Group-2-Team-4:9Hc1erNrpAByumnJ@cluster0.8euwu.mongodb.net/teetree_db?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MONGODB CONNECTED READY");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
