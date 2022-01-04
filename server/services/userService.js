const pool = require('../../db/pool');
const userQuery = require('../queries/userQuery');

exports.getUsers = async password => {
    try {
        let data = await pool.query(userQuery.getUsers, [password]);
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}