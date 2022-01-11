const userService = require('../services/userService');

exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const rows = await userService.getUser(id);
        return res.json(rows);
    } catch(err) {
        return res.status(500).json(err);
    }
}

exports.getUsers = async (req, res) => {
    const { password } = req.params;
    try {
        const rows = await userService.getUsers(password);
        return res.json(rows);
    } catch(err) {
        return res.status(500).json(err);
    }
}