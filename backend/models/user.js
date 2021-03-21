const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = Schema({

  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: false //password is not required with social logins
  },
  lessons: [
    {
      lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        required: true
      },
      isFinished: {
        type: Boolean,
        default: false
      },
      secondsWatched: {
        type: Number,
        default: 0
      }
    }
  ]
});


userSchema.methods.setPassword = function (password){
  return bcrypt.hash(password, 10)
  .then(hash => {
    console.log("password seteada");
    this.password = hash;
    console.log(this);
  }
 )
}

userSchema.methods.validatePassword = function (password) {
  bcrypt.compare(password, this.password)
  .then(isEqual => {
    return isEqual;
  })
}


userSchema.methods.toAuthJSON = function() {
   const token = jwt.sign({
    email: this.email,
    userId: this._id,
  }, process.env.SECRET_JWT, {expiresIn:"1h"});

  const payload = {
    userId: this._id,
    email: email,
    token: token,
    expiresIn: 3600
  };

  return payload;
};

module.exports = mongoose.model('User', userSchema);
