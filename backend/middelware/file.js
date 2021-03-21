const multer = require('multer');
const fs = require('fs');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('invalid mime type');
    if (isValid) {
      error = null;
    }
    const folder = process.env.FOLDER_IMAGES;
    console.log('FOLDER IMG');
    console.log( process.env.FOLDER_IMAGES);
    let destination = folder;
    if (req.slider) {
      destination = destination + req.body.ref;
    }
    req.destination = destination;
    fs.mkdir(destination, () => {
      cb(null, destination);
    });
  },
  filename: (req, file, cb) => {
    const name = file.originalname;
    const ext = MIME_TYPE_MAP[file.mimetype];
    file.ext = ext;
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

module.exports.languages = multer({ storage: storage }).fields([
  { name: 'esp', maxCount: 1 },
  { name: 'eng', maxCount: 8 },
]);
module.exports.slider = multer({ storage: storage }).fields([{ name: 'image', maxCount: 20 }]);
