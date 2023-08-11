const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
{
	username: {
		type: String,
		require: true,
		index: true,
		unique: true,
	},

	password: {
		type: String,
		require: true,
	},

	deposit: {
		type: Number,
		require: true,
		default: 0,
	},

	role: {
		type:Number,
		require: true,
		default: "seller",
		enum: ["seller","buyer"],
	},

	refreshToken: {
		type: String,
	},
},
{timestamps:true}
);

const UserModel = model("users", UserSchema);

module.exports = UserModel