const pool = require('../../db/pool');
const userQuery = require('../queries/userQuery');

exports.getUser = async id => {
    try {
        let data = await pool.query(userQuery.getUser, [id]);
        return data[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.updateUser = async user => {
    try {
        let data = await pool.query(userQuery.updateUser, [user.u_name, user.u_birth, user.u_img, user.u_id])
        return data[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.getUsers = async password => {
    try {
        let data = await pool.query(userQuery.getUsers, [password]);
        return data[0];
    } catch (err) {
        throw Error(err);
    }
}