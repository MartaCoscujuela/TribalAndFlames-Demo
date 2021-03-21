const mongoose = require("mongoose");

const textSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    eng: {
      type: String,
      required: false
    },
    esp: {
      type: String,
      required: false
    }
  }
);

module.exports = mongoose.model("Text", textSchema);
