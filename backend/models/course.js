const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({

  courseName: [
    {
      lang: {
        type: String,
        required: true
       },
       name: {
         type: String,
         required: false
       },
    },
  ],
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson"
    }
  ]
});

module.exports = mongoose.model("Course", courseSchema);
