const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  name_esp: {
    type: String,
    required: true,
  },
  name_eng: {
    type: String,
    required: true,
  },
  description_esp: {
    type: String,
    required: true,
  },
  description_eng: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  price: {
    type: String,
  },
  image_esp: {
    type: String,
  },
  image_eng: {
    type: String,
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
