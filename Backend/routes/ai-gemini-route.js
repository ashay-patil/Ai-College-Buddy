const express = require('express');
const getResponse = require('../controllers/getResponse');
const router = express.Router();


router.route('/get-response').post(getResponse);


module.exports = router;