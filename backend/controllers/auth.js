const mongoose = require("mongoose");;
const axios = require("axios")
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const { resolve } = require("path");
const User = mongoose.model("User");

module.exports.fromGoogle =(req, res, next)=>{
  code = req.query.code
  email = "";
  axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri:  process.env.GOOGLE_CALLBACK,
      grant_type: 'authorization_code',
      code,
    },
  }).then(result => {
    const access_token = result.data.access_token;
    return axios({
      url: 'https://www.googleapis.com/oauth2/v2/userinfo',
      method: 'get',
       headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
    }).then (result => {
      email = result.data.email;
      checkIfUserExists(email)
      .then(result => {
        if (!result){
          return singUpUser(res, email)
        } else {
          return loginUser(res, email)
        }
      })
    })
    .catch(error => console.log(error))
}

module.exports.fromFacebook =(req, res, next)=>{
  code = req.query.code
  email = "";
  axios({
    url: 'https://graph.facebook.com/v4.0/oauth/access_token',
    method: 'post',
    data: {
      client_id: process.env.FACEBOOK_ID,
      client_secret: process.env.FACEBOOK_SECRET,
      redirect_uri:  process.env.FACEBOOK_CALLBACK,
      grant_type: 'authorization_code',
      code,
    },
  }).then(result => {
    const access_token = result.data.access_token;
    return axios({
      url: 'https://graph.facebook.com/me',
      method: 'get',
      params: {
        fields: ['id', 'email', 'first_name', 'last_name'].join(','),
        access_token: access_token,
      },
    })

    }).then (result => {
      email = result.data.email;
      checkIfUserExists(email)
      .then(result => {
        if (!result){
          return singUpUser(res, email)
        } else {
          return loginUser(res, email)
        }
      })
    })
    .catch(error => res.status(500).json(error))
}

module.exports.singupWithPassword =(req, res, next)=>{

  const password = req.body.password;
  const verifyPassword = req.body.verifyPassword;
  const email = req.body.mail;

  if(!email){
    throw("Email is required")
  }

  if (!password){
    throw("Password is required");
  }

  if (password !== verifyPassword){
    throw "Passwords do not match";
  }

  bcrypt.hash(password, 10)
  .then(hash => {
    singUpUser(res, email, hash)
  }).catch(error => {
    throw error;
  })
}

module.exports.loginWithPassword = (req, res, next)=>{

  email = req.body.email;
  password = req.body.password;
  if (!password){
    throw("Password is required");
  }
  loginUser(res, email, password);
}

function checkIfUserExists(email){
  return User.findOne({email: email});
}

function singUpUser(res, email, password=null) {
  checkIfUserExists(email)
  .then(result => {
    if (!result){
      const user = new User({email: email, password: password});
      return user.save()
    } else {
      throw("The user already exists")
    }
  })
  .then(user => {
    sendToken(res, user);
  })
  .catch(error => {
    res.status(500).json(error)}
    );
}

function loginUser(res, mail, password){
  user = "";
  checkIfUserExists(email)
  .then(foundUser => {
    if (!foundUser){
      throw "Ivalid user";
    }
    user = foundUser;
    if (password){
      return bcrypt.compare(password, user.password)
    } else {
     return true;
    }
  })
  .then(result => {
    if (result){
      sendToken(res, user);
    } else {
      throw("Invalid password")
    }
  })
  .catch(error => {
    res.status(500).json(error)});
}


function sendToken(res, user){
  const payload = user.toAuthJSON();
  res.status(200).json(payload)
}


