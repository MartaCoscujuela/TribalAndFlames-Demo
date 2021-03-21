const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema(
  {
    sectionname: [

      {
        lang: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true,
        }
      }
    ],
    texts: [
      {
        textname: {
          type: String,
          required: true
        },
        languages: [
          {
            lang: {
              type: String,
              required: true
            },
            text: {
              type: String,
              required: false
            }
          }
        ]
      }
    ]

  }
);


module.exports = mongoose.model("Section", sectionSchema);
