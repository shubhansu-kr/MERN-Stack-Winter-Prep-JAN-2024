const express = require('express');

let portNumber = 5500;
const app = express();

app.get('/', (req, res) => {
    // console.log(req);
    res.send("<h1>Hello World</h1>");
});

app.listen(portNumber, ()=>{
    console.log(`Server is listening on port ${portNumber}`);
});