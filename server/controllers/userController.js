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

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.u_id = id;
    user.u_img = req.file;
    try {
        const result = await userService.updateUser(user);
        return res.send(result);
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

exports.setUsers = async (req, res) => {
    const { password } = req.params;
    try {
        const rows = await userService.setUsers(password);
        return res.json(rows);
    } catch(err) {
        return res.status(500).json(err);
    }
}