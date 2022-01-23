const roomService = require('../services/roomService');

exports.getRoom = async (req, res) => {
    const { password } = req.params;
    try {
        const rows = await roomService.getRoom(password);
        return res.json(rows[0]);
    } catch(err) {
        return res.status(500).json(err);
    }
}

exports.setRoom = async (req, res) => {
    const { password } = req.body;
    try {
        const rows = await roomService.setRoom(password);
        return res.json(rows[0]);
    } catch(err) {
        return res.status(500).json(err);
    }
}

exports.updateRoom = async (req, res) => {
    const { password } = req.params;
    try {
        const rows = await roomService.updateRoom(password, req.body);
        return res.json(rows[0]);
    } catch(err) {
        return res.status(500).json(err);
    }
}