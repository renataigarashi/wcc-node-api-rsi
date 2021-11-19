const databaseConfig = require("../config/db.config.js"); 
const Sequelize = require("sequelize"); //classe sempre declara com letra maiscula

const sequelizeOptions = { dialect: databaseConfig.dialect };
const sequelizeDatabase = new Sequelize(databaseConfig.connectionStringUrl, sequelizeOptions);  //usar o postgres configurado pra usar o sequelize

const database = {
    Sequelize: Sequelize, //em js se chave = valor entao não precisa declarar Sequelize: Sequelize vira só Sequelize
    sequelizeDatabase: sequelizeDatabase,

};

const artigosModel = require("./artigos.models");
database.artigos = artigosModel(sequelizeDatabase, Sequelize);

module.exports = database;
