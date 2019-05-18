const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FruitSchema = new Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model("Fruit", FruitSchema);