const databaseConfig = require("../config/db.config.js"); 
const Sequelize = require("sequelize"); //classe sempre declara com letra maiscula

const { dialect, connectionStringUrl } = databaseConfig;
const sequelizeOptions = { dialect};
const sequelizeDatabase = new Sequelize(connectionStringUrl, sequelizeOptions);  //usar o postgres configurado pra usar o sequelize

const database = {
    Sequelize: Sequelize, //em js se chave = valor entao não precisa declarar Sequelize: Sequelize vira só Sequelize
    sequelizeDatabase: sequelizeDatabase,

};

const artigosModel = require("./artigos.models");
database.artigos = artigosModel(sequelizeDatabase, Sequelize);

module.exports = database;
