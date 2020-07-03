const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phone: {type: number},
  url: { type: String},
  description: {type: String, required: true},
  type: {type: String}
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;