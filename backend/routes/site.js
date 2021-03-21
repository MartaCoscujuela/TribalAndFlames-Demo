const express = require('express');
const checkAuth = require('../middelware/checkauth');
const router = express.Router();
const siteController = require('../controllers/site');
const sliderController = require('../controllers/slider');
const imageController = require('../controllers/image');

const extractFile = require('../middelware/file');

router.get('/section', (req, res, next) => {
  //devolvemos toda la info de la seccion
});

router.get('/text/:name', siteController.getText);

router.post('/text', siteController.postText);

router.get('/img/:ref', imageController.getImg);

router.post(
  '/img',
  (req, res, next) => {
    req.destination = '';
    next();
  },
  extractFile.languages,
  imageController.postImg
);

router.post('/list', siteController.postList);

router.post(
  '/slider',
  (req, res, next) => {
    req.slider = true;
    next();
  },
  extractFile.slider,
  sliderController.postSlider
);

router.get('/slider/:ref', sliderController.getSlider);

router.post('lesson');

/* router.get("/course", (req, res, next) => {
  //devolvemos la info del curso con sus clases
});

router.post("unlockLesson", checkAuth, (req, res, next) => {
  //un usuario añade una nueva lección
});
 */
module.exports = router;
