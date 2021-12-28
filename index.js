const express = require('express');
const app = express();
const PORT = 80;
const roomRouter = require('./server/routes/roomRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/room", roomRouter);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
});