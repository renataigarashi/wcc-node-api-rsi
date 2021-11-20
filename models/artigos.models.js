//model da tabela de artigos
module.exports = (sequelizeDatabase, Sequelize) => {
    const Artigo = sequelizeDatabase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING,
            defaultValue: "Artigo em construção"
        },
        publicado: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        }
    });
    return Artigo;
}    

