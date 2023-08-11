const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
	amountAvailable:{
		type: Number,
		require: true,
	},

	cost: {
		type: Number,
		require: true,
		default: 0,
	},

	productName: {
		type:String,
		require: true,
	},

	seller:{
		type: Schema.Types.ObjectId,
		ref: "users",
		require:true,
	},
}, {
	timestamps:true
});

const ProductModel = model("products",ProductSchema);

module.exports = ProductModel