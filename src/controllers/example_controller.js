const Example = require('../models/example');
const defaultData = require('../helpers/example_data');


exports.index = function(req, res) {
    Example.findOne().exec()
    .then(function(foundData) {
        if (!foundData) {
            insertDefaultData(defaultData);
            res.redirect("/");
        }
        const data = {
            name: foundData.name,
            expertise: foundData.expertise
        }
        res.render("index", data);
    })
    .catch(err => {
        console.log(err);
    });
}

const insertDefaultData = (data) => {
    Example.insertMany([data]).then(() => {
        console.log("Data added successfully");
    }).catch(err => {
        console.log(err);
    });
}