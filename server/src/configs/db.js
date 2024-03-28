const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false); // me
module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017",{ useNewUrlParser: true, useUnifiedTopology: true });
};

