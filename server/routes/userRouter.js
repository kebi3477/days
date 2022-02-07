const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const upload = multer({ dest: 'public/user_image/' })

router.get('/:id', userController.getUser);
router.put('/:id', upload.single('u_img'), userController.updateUser);
router.get('/all/:password', userController.getUsers);
router.post('/all/:password', userController.setUsers);

module.exports = router;