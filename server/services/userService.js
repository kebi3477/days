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

exports.getUsers = async password => {
    try {
        let data = await pool.query(userQuery.getUsers, [password]);
        return data[0];
    } catch (err) {
        throw Error(err);
    }
}