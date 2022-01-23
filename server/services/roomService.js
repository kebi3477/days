const pool = require('../../db/pool');
const roomQuery = require('../queries/roomQuery');

exports.getRoom = async password => {
    try {
        let data = await pool.query(roomQuery.getRoom, [password]);
        if(data[0].length === 0) {
            data = [[[]]];
        }
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

exports.setRoom = async password => {
    try {
        let data = "";
        let room = await pool.query(roomQuery.getRoom, [password]);
        if(room[0].length > 0) {
            data = [[0]];
        } else {
            data = await pool.query(roomQuery.setRoom, [password]);
        }
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}

exports.updateRoom = async (password, body) => {
    try {
        const { word, date } = body;
        let data;
        
        if(word) {
            data = await pool.query(roomQuery.updateRoomWord, [word, password]);
        } else {
            data = await pool.query(roomQuery.updateRoomDate, [date, password]);
        }
        return data[0];
    } catch (err) {
        console.log(err);
        throw Error(err);
    }
}