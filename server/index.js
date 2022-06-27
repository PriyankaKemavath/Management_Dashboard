// Section 1
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors')

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});


app.get('/employee', (req, res) => {
    let rawdata = fs.readFileSync('./data/employeeRecords.json');
    let student = JSON.parse(rawdata);
    //console.log(student);
    res.send(student);
});

app.get('/projects', (req, res) => {
    let rawData = fs.readFileSync('./data/projectDetails.json');
    let projects = JSON.parse(rawData);
    console.log(projects);
    res.send(projects);
})

// Section 4
app.listen(3001, () => {
    console.log('server started on port 3001');
});