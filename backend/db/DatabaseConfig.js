const mongoose = require('mongoose');


async function connecttodb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/CRUD_USERS");
        console.log("Connected to MongoDB");
    }
    catch (e) {
        console.log("Error connecting to MongoDB");
    }

}

module.exports = connecttodb;