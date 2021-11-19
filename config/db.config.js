//Configuração do banco de dados

const dotenv = require("dotenv"); //biblioteca pra interpretar arquivos salvos no .env
dotenv.config();

module.exports = {
    connectionStringUrl: process.env.DB_CONNECTION_STRING_URL,
    dialect: "postgres",
}

