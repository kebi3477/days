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
        let dataArr = [], data;
        if(user.u_img) {
            dataArr = [user.u_name, user.u_birth, user.u_img.filename, user.u_id];
            data = await pool.query(userQuery.updateUserImage, dataArr)
        } else {
            dataArr = [user.u_name, user.u_birth, user.u_id];
            data = await pool.query(userQuery.updateUser, dataArr)
        }
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