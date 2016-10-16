"use strict";
var mongoose = require("mongoose");

var db;
mongoose.connect("mongodb://behnam:locked@ds041586.mlab.com:41586/menu-items", (err, database) => {
    if (err) return console.log(err);
    db = database;
});
exports.add = function(data) {
    console.log(data);

};
exports.delete = function(data) {
    console.log(data);
};
exports.edit = function(data) {
    console.log(data);
};
