const express = require('express');
const data = require('./AllData');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8080;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port, (req, res) => {
    console.log(`Server is started`);
})


app.get('/', (req, res) => {
    res.json(data);
})


app.post('/', (req, res) => {

    const userTypedValue = req.body.value;
    const result = data.filter((item, index) => {
        return item.name.toLowerCase().includes(userTypedValue.toLowerCase());
    })

    res.json(result);
})