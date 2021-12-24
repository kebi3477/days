const db = require('./config/db.json');
const express = require('express');
const mysql = require("mysql");
const app = express();
const PORT = 80;
const connection = mysql.createConnection(db);

connection.connect();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
});