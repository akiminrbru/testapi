const express = require('express');

const app = express();

const PORT = 5000;


app.get('/user', (req, res) => {
    res.end("Hello");
})

app.listen(PORT, () => console.log("Server has been started"));
