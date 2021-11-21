const mongoose = require('mongoose');


const dbConnect = function() {
    return mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});
}


module.exports = dbConnect;