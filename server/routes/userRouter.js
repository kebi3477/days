const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);
router.get('/all/:password', userController.getUsers);

module.exports = router;