//regra de negocio do sistema de artigos
const database = require("../models");
const tabelaArtigos = database.artigos;


//Cria um novo artigo
exports.create = (req, res) => {
    const artigo = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        publicado: req.body.publicado
    };

    tabelaArtigos.create(artigo)
    .then(() => res.send("Artigo criado com sucesso"))
    .catch((error) => {
        console.log(error);
        res.status(500).send("Ocorreu um erro ao salvar o artigo");
})
};

exports.findAll = (req, res) => {

     tabelaArtigos.findAll().then(function(data){
        res.send(data);
    })
    .catch(function(){
        res.status(500).send("Ocorreu um erro obtendo os artigos");
    })
}

exports.findById = (req, res) => {
    let id = req.query.id;
    tabelaArtigos.findByPk(id).then(function(data){
        if (data){
            res.send(data);
        } else {
            res.status(404).send({message: `Não foi possível encontrar o artigo com o id: ${id}`});
        }
    }).catch(function(){
        res.status(500).send({message: `Erro obtendo artigo id= ${id}`});
    });
}

exports.findByTitle = (req, res) => {
    let tituloArtigo = req.query.titulo;
    tabelaArtigos.findOne({ where: {titulo: tituloArtigo}}).then(function(data){
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({message: `Não foi possível encontrar o titulo: ${tituloArtigo}`});
        }
    }).catch(function() {
        res.status(500).send({message: "Erro obtendo titulo:", tituloArtigo});
    })
}



//promise - "promete que vai acontecer algo", mas isso pode ou não acontecer
// a promise pode ser resolvida ou rejeitada (Ex: Ocorreu um erro ao tentar salvar);
