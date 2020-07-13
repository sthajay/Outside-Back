const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Sales = sequelize.define('sale', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category: Sequelize.STRING,
    product: Sequelize.STRING,
    quantity: Sequelize.STRING,
    price: Sequelize.STRING,
    payment: Sequelize.STRING
});

module.exports = Sales;

