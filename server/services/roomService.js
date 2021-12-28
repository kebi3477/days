const pool = require('../../db/pool');
const roomQuery = require('../queries/roomQuery');

exports.getRoom = async () => {
    try {
        let data = await pool.query(roomQuery.getRoom);
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}