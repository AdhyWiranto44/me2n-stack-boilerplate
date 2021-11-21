const mongoose = require('mongoose');


const exampleSchema = mongoose.Schema({
    name: String,
    expertise: String
});
const Example = mongoose.model("Example", exampleSchema);


module.exports = Example;