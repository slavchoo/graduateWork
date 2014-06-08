'use strict';

var sequelize = require('../db.js').sequelize;
var Sequelize = require('../db.js').Sequelize;

var User = sequelize.define('User', {
        name: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        company: Sequelize.STRING,
        position: Sequelize.STRING,
        createdAt: Sequelize.DATE
    }
);

module.exports = User;