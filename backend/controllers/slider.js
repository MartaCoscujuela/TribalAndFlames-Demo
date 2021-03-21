const fs = require('fs');
const Slider = require("../models/slider");


exports.postSlider = (req, res, next)=>{

  const imgs = req.body.image
  const files = req.files.image
  const ref = req.body.ref
  const sliderImgs = []

  if (imgs){
    let imgsArray = []
    imgsArray = imgsArray.concat(imgs)
    imgsArray.forEach(img => {
      img = JSON.parse(img)
      sliderImgs.push({img: img.img, order: img.order})
    });
  }

  if (files){
    files.forEach(file => {
      const path = req.body.ref +'/'+ file.filename
      sliderImgs.push({img: path, order: file.originalname})
    })
  }

  let slider = {esp: sliderImgs, eng: sliderImgs, ref: ref}

  removeOldPicturesFromSlider(req, slider)

  Slider.findOneAndUpdate({ref: ref}, slider, {
    new: true,
    upsert: true
  })
  .then(result => {
    res.status(200).json(result)
  }).catch(err => {
    console.log(err);
  })
}

const removeOldPicturesFromSlider = (req, slider)=>{
  console.log(req.body.ref);
  Slider.findOne({ref: req.body.ref}).then((oldSlider)=>{
    console.log(oldSlider)
    if (oldSlider){
       
      let imagesToDelete = oldSlider.esp.map(img => img.img)
      imagesToDelete = imagesToDelete.concat(oldSlider.eng.map(img => img.img))
        console.log(imagesToDelete);
      slider.esp.forEach(img => {
        const index = imagesToDelete.indexOf(img.img)
        if (index > -1){
          imagesToDelete.splice(index, 1)
        }          
      });

      slider.eng.forEach(img => {
        const index = imagesToDelete.indexOf(img.img)
        if (index > -1){
          imagesToDelete.splice(index, 1)
        }          
      });

      deleteFiles(imagesToDelete, (err)=>{
        if (err) {
          console.log(err);
        } else {
          console.log('all files removed');
        }
      })
    }
  });

}

const deleteFiles = (files, callback) =>{
  const imgsFolder = process.env.FOLDER_IMAGES
  var i = files.length;
  files.forEach(function(filepath){
    fs.unlink(imgsFolder + filepath, function(err) {
      i--;
      if (err) {
        callback(err);
        return;
      } else if (i <= 0) {
        callback(null);
      }
    });
  });
}

exports.getSlider = (req, res, next) => {
  const ref = req.params.ref;
  Slider.findOne({ref: ref})
  .then((result)=>{
    if (result){
      res.status(200).json(result);
    } else {
      const slider = new Slider()
      slider.ref = ref
      res.status(200).json(slider)
    }
  }).catch((err)=>{
    console.log(err);
    res.status(500).json(err)
  })
}