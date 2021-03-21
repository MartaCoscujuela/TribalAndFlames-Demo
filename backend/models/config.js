const Mongoose = require("mongoose");


const configSchema = Mongoose.Schema({
  englishReady: Boolean
});


module.exports = Mongoose.model("Config", configSchema);
