const mongoose = require("mongoose");

module.exports = () => {
    // link to connect to online database
    return mongoose.connect(`mongodb+srv://saidhakshan4:saidhakshan4@cluster0.eijeayg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}
