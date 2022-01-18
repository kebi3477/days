const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/:password', roomController.getRoom);
router.post('/', roomController.setRoom);
router.put('/:password', roomController.updateRoom);

module.exports = router;