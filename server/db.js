var Sequelize = require("sequelize");
var sequelize = new Sequelize("documentBase", "root", "root");

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;