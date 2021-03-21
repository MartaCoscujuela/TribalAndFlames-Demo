const Lesson = require('../models/lesson');
const fs = require('fs');

exports.postLesson = (req, res, next) => {
  const files = req.files;
  const body = req.body;

  console.log(files);
  const lesson = new Lesson();
  lesson.name_esp = body.name_esp;
  lesson.name_eng = body.name_eng;
  lesson.description_esp = body.description_esp;
  lesson.description_eng = body.description_eng;
  lesson.price = body.price;
  lesson.url = body.url;
  const image_eng = files.eng[0];
  const image_esp = files.esp[0];

  let newPath;
  let newUrl;
  let newEspImg;
  let newEngImg;

  let foundLesson;

  Lesson.create(lesson)
    .then((result) => {
      foundLesson = result;
      newPath = image_esp.destination + 'courses/' + foundLesson._id;
      newUrl = 'courses/' + foundLesson._id;
      fs.promises.mkdir(newPath);
    })
    .then(() => {
      const oldPath = image_eng.destination + image_eng.filename;
      newEngImg = newPath + '/eng.' + image_eng.ext;
      fs.promises.rename(oldPath, newEngImg);
    })
    .then(() => {
      const oldPath = image_esp.destination + image_esp.filename;
      newEspImg = newPath + '/esp.' + image_esp.ext;
      fs.promises.rename(oldPath, newEspImg);
    })
    .then(() => {
      lesson.image_eng = newUrl + '/eng.' + image_eng.ext;
      lesson.image_esp = newUrl + '/esp.' + image_eng.ext;
      lesson.save();
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
      console.log(error);
    });
};

exports.getLesson = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  let lesson;
  Lesson.findById(id)
    .then((result) => {
      lesson = result;
      lesson.image_updated = false;
      res.status(200).json(lesson);
    })
    .catch((error) => {
      console.log(error);
    });
};
