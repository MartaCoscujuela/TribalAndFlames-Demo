const coursesController = require('../controllers/courses');
const extractFile = require('../middelware/file');
const express = require('express');
const checkAuth = require('../middelware/checkauth');
const router = express.Router();

router.post(
  '/lesson',
  (req, res, next) => {
    req.slider = false;
    next();
  },
  extractFile.languages,
  coursesController.postLesson
);

router.get('/lesson/:id', coursesController.getLesson);
module.exports = router;
