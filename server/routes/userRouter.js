const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:password', userController.getUsers);

module.exports = router;