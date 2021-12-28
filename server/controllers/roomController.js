const roomService = require('../services/roomService');

exports.getRoom = async (req, res) => {
    const rows = await roomService.getRoom();
    return res.json(rows[0]);
}