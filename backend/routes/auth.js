const express = require("express");
const router = express.Router();

const googleAuthUrl = require("../util/googleauthurl");
const facebookAuthUrl = require("../util/facebookauthurl");
const authController = require("../controllers/auth")

router.get('/google', (req, res, next)=>{
  res.redirect(googleAuthUrl);
});

router.get("/google/redirect", authController.fromGoogle);

router.get('/facebook', (req, res, next)=>{
  console.log(facebookAuthUrl);
  res.redirect(facebookAuthUrl);
});

router.get("/facebook/redirect", authController.fromFacebook);

router.post("/singup", authController.singupWithPassword)

router.post("/login", authController.loginWithPassword)

module.exports = router;
