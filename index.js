const express = require('express');
const app = express();
const PORT = 80;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
});