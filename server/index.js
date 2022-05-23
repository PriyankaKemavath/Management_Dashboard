// Section 1
const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});


app.get('/employee', (req, res) => {
    let rawdata = fs.readFileSync('./data/employeeRecords.json');
    let student = JSON.parse(rawdata);
    console.log(student);
    res.send(student);
});

// Section 4
app.listen(8080, () => {
    console.log('server started on port 8080');
});