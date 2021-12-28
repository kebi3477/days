const db = require('./db.json');
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database,
    connectionLimit: 10
});

module.exports = pool;