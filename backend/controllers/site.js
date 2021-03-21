const Text = require("../models/text");
const List = require("../models/list")


exports.postText = (req, res, next) => {
  const filter = { name: req.body.name };
  const update = { esp: req.body.esp, eng: req.body.eng };

  Text.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  }).then((result)=>{
    res.status(200).json(result);
  }).catch((err)=>{
    res.status(500).json(err);
  })
}

exports.getText = (req, res, next) => {
  Text.findOne({ name: req.params.name })
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Text not found!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
};


exports.postList = (req, res, next) => {
  const esp = req.body.esp
  const eng = req.body.eng
  const name = req.body.name

  const filter = { name: name };
  const update = { esp:esp, eng:eng }


  List.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  }).then((result)=>{
    res.status(200).json(result);
  }).catch((err)=>{
    console.log(err);
    res.status(500).json(err);
  })
}


