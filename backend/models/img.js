const mongoose = require('mongoose');

const imgSchema = mongoose.Schema({
  ref: {
    type: String,
    required: true,
  },
  eng: {
    type: String,
    required: false,
  },
  esp: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Img', imgSchema);
