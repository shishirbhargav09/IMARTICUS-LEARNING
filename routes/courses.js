const express = require('express');
const { getcourse } = require('../controllers/courses');

const router = express.Router();

router.route("/courses").get(getcourse)
module.exports = router;