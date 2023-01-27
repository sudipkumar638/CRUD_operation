const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const startDatabase = require('./db/DatabaseConfig');
const mongoose = require('mongoose');
const user = require("./modal/usermodal");


const port = 8080;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
mongoose.set('strictQuery', true);
app.use(bodyParser.urlencoded({ extended: true }))



app.listen(port, (req, res) => {
    console.log(`Server is started`);
    startDatabase()
})


app.get('/', async (req, res) => {
    const arr = await user.find({});

    res.json(arr);
})


app.post('/', async (req, res) => {
    const arr = await user.find({});
    const userTypedValue = req.body.value;
    const result = arr.filter((item, index) => {
        return item.name.toLowerCase().includes(userTypedValue.toLowerCase());
    })

    res.json(result);
})


app.post("/createusers", async (req, res) => {
    // const user = new user(req.body);
    // user.save();
    const userdata = req.body;

    try {
        await user.create({
            name: userdata.name,
            status: userdata.status,
            email: userdata.email,
            phoneno: userdata.phoneno,
            address: userdata.address
        })
        res.json({
            success: true,
            message: "User created successfully"
        });
    }
    catch (e) {
        console.log(e, "error")
    }
})




