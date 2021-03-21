const express = require('express');
const router = express.Router();

const AdminController = require("../controllers/admin");

router.get('/users', AdminController.getUsers);

router.put('/assignLesson', AdminController.assignLesson);

router.patch('/patchSection:id', AdminController.patchSection);

router.put('/addLesson', AdminController.addLesson);

router.delete('/removeLesson', AdminController.removeLesson);

router.post('/createcourse', AdminController.createCourses);

module.exports = router;
