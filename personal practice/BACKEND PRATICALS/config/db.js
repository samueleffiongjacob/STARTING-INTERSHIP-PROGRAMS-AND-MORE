const { connect } = require("mongoose");

const startDB = async () => {
	await  connect(process.env.DB_URI);
	console.log("Database Connected Successsfully ....");

};

module.exports = {
	startDB
};