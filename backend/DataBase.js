// This Code for Connecting to MongoDB with localhost server
const mongoose = require('mongoose')
const MongoURI = 'mongodb://127.0.0.1:27017/INoteBook'

const ConnectToMongo = async () => {
    await mongoose.connect(MongoURI);
    console.log("Connected to MongoDB Successfully");
}

module.exports = ConnectToMongo;