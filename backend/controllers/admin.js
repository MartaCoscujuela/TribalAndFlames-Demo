const Course = require("../models/course");
const User = require("../models/user");
const Lesson = require("../models/lesson");

exports.getUsers = (req, res, next) => {
  //devolvemos todos los usuarios
  User.find(users => {
    res.status(200).json(users);
  }).catch(error => {
    console.log(error);
  });
}

exports.assignLesson = (req, res, next) => {

  console.log("assign");
  userId = req.body.userId;
  lesson = req.body.lesson;

  User.findById(userId)
  .then(user => {
    if (user){
      canAdd = (user.lessons.some(userLesson => usserLesson.id === lesson.id));
      user.lessons.push(lesson);
      user.save()
      .then(result => {
        res.status(200).json(result);
      }).catch(error => {
        throw error;
      });
    } else {
     throw "the user already has the lesson";
    }
  }).catch(error => {
    res.status(500).json(error);
  });
}

exports.refundLesson = (req, res, next) => {
  User.findById(req.body.userId)
  .then(user => {
    removeLesson = user.lessons.filter(function(lesson, index, arr){
      if (lesson.id == req.lessonId){
        return index;
      }
    if (removeLesson){
      user.lessons.splice(removeLesson, 1);
      user.save().then(result =>{
        req.code(400).json(result);
      }).catch(error => {
        throw error;
      });
    } else {
      throw "the user does not have this lesson"
    }
    });
  }).catch(error => {
    res.status(500).json(error);
  })
}

exports.patchSection = (req, res, next) => {
  // modificamos la seccion que toque
}

exports.addLesson = (req, res, next) => {
  bodyLesson = req.body.lesson;
  lesson = new Lesson(bodyLesson);
  console.log(lesson);
  createdLesson = ""
  lesson.save().then(result => {
    createdLesson = result;
    courseId = req.body.courseId;
    return Course.findById(courseId)
  }).then(course => {
    course.lessons.push(createdLesson);
    course.save()
  }).then(result=>{
    res.status(400).json(result);
  })
  .catch(error => {
    res.status(500).json(error)
  });
}

exports.removeLesson = (req, res, next) => {
  bodyLesson = req.body.lesson;
  Lesson.findByIdAndRemove(bodyLesson)
  .then(result => {
    res.status(400).json(result);
  }).catch(error => {
    res.status(500).json(error);
  })
}


exports.createCourses = (req, res, next) => {
  course = new Course();
  course.courseName.push({
    lang: "es",
    name: "curso de prueba"
  });

  course.save().then(result => {
    res.status(200).json(result)
  }).catch(error => {
     res.status(500).json(error)
  })
}
