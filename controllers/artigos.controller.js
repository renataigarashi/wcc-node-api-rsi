//regra de negocio do sistema de artigos
const database = require("../models");
const tabelaArtigos = database.artigos;


//Cria um novo artigo
exports.create = (req, res) => {
    const { titulo, descricao, publicado } = request.body
    const artigo = {
        titulo,      // titulo: req.body.titulo,
        descricao,   // descricao: req.body.descricao,
        publicado             // publicado: req.body.publicado
    };

    if(!artigo.titulo){
        return res.status(400).send("O artigo deve conter um título definido"); //usou o return para parar nesse ponto...
    }

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
    const { id : idArtigo } =  req.query; // fiz o destructuring e atribui ao idArtigo

    if(!idArtigo){
        res.status(400).send("Não foi possivel buscar um artigo pois o ID não foi informado.")
    }

    tabelaArtigos.findByPk(idArtigo).then(function(data){
        if (data){
            res.send(data);
        } else {
            res.status(404).send({message: `Não foi possível encontrar o artigo com o id: ${idArtigo}`});
        }
    }).catch(function(){
        res.status(500).send({message: `Erro obtendo artigo id= ${idArtigo}`});
    });
}

exports.findByTitle = (req, res) => {
    const { titulo: tituloArtigo} = req.query;
    
    if(!tituloArtigo){
        res.status(400).send("Não foi possivel encontrar pois o título não foi informado.")
    }
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
