const Sequelize = require('sequelize');

const sequelize = new Sequelize('outside','root','',{
    dialect: 'mysql',
    host:'localhost'
});


module.exports = sequelize;