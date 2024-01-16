const express = require('express');

let portNumber = 5500;
const app = express();

app.get('/', (req, res) => {
    // console.log(req);
    console.log(__dirname);
    res.send();
});

app.listen(portNumber, ()=>{
    console.log(`Server is listening on port ${portNumber}`);
});