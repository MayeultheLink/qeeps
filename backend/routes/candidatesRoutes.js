const express = require('express');
const router = express.Router();
const { getCandidatesController } = require('../controllers/candidatesController');

router.get('/getcandidates', getCandidatesController);

module.exports = router;