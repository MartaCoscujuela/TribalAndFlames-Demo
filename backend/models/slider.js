const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema(
  {
    ref: {
      type: String,
      required: true
    },
    eng: [{
      img: {
        type: String,
        required: true
      },
      order: {
        type: Number,
        required: true
      }
    }],
    esp: [{
      img: {
        type: String,
        required: true
      },
      order: {
        type: Number,
        required: true
      }
    }],
  }
);

module.exports = mongoose.model("Slider", sliderSchema);
