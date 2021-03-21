const Img = require('../models/img');
const fs = require('fs');

exports.getImg = (req, res, next) => {
  const ref = req.params.ref;
  Img.findOne({ ref: ref })
    .then((result) => {
      if (result) {
        const img = {
          ref: result.ref,
          esp: result.esp,
          eng: result.eng,
        };
        res.status(200).json(img);
      } else {
        res.status(404).json('Image not found');
      }
    })
    .catch((err) => {
      console.log('get img' + err);
      res.status(500).json(err);
    });
};

const newImage = (req, res) => {
  const ref = req.body.ref;
  const esp = req.files.esp[0];
  const eng = req.files.eng[0];

  const img = new Img({
    ref: ref,
    esp: esp.filename,
    eng: eng.filename,
  });

  Img.create(img)
    .then((createdImg) => {
      const returnImg = createdImg;
      returnImg.esp = img.esp;
      returnImg.eng = img.eng;
      res.status(201).json(returnImg);
    })
    .catch((err) => {
            console.log('post img' + err);

      console.log(err);
      return res.status(500).json(err);
    });
};

const updateImage = (req, res, img) => {
  const oldEsp = img.esp;
  const oldEng = img.eng;
  const ref = req.body.ref;
  const files = req.files;

  const imgsFolder = process.env.FOLDER_IMAGES;

  let esp;
  files.esp ? (esp = files.esp[0].filename) : (esp = '');
  let eng;
  files.eng ? (eng = files.eng[0].filename) : (eng = '');

  return Promise.resolve()
    .then(() => {
      if (esp) {
        console.log(imgsFolder + oldEsp);
        return fs.promises.unlink(imgsFolder + oldEsp);
      } else {
        return Promise.resolve('forced');
      }
    })
    .then((result) => {
      if (result !== 'forced') {
        img.esp = esp;
      }
      if (eng) {
        return fs.promises.unlink(imgsFolder + oldEng);
      } else {
        return Promise.resolve('forced');
      }
    })
    .then((result) => {
      if (result !== 'forced') {
        img.eng = eng;
      }
      return Img.updateOne({ ref: ref }, img);
    })
    .then((result) => {
      const returnImg = img;
      returnImg.esp = img.esp = esp;
      returnImg.eng = img.eng = eng;
      res.status(201).json(returnImg);
    })
    .catch((err) => {
            console.log('update img' + err);

      console.log(err);
      res.status(500).json(err);
    });
};

exports.postImg = (req, res, next) => {
  console.log(req.files);
  const ref = req.body.ref;
  Img.findOne({ ref: req.body.ref }).then((img) => {
    if (img) {
      if (req.files) {
        updateImage(req, res, img);
      } else {
        res.status(200).json(img);
      }
    } else {
      if (req.files) {
        newImage(req, res);
      } else {
        console.log('error');
        res.status(500).json('No se encontraron archivos');
      }
    }
  });
  return;
};
