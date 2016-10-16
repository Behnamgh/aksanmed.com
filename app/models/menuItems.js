// load the things we need
var mongoose = require("mongoose");

var menuItemsSchema = mongoose.Schema({

  name: String
});

module.exports = mongoose.model("menuItems", menuItemsSchema);
