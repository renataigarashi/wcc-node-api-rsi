//regra de negocio do sistema de artigos
const database = require("../models");
const tabelaArtigos = database.artigos;


//Cria um novo artigo
exports.create = (req, res) => {
    const { titulo, descricao, publicado } = req.body //desestruturado
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

//retorna todos os artigos
exports.findAll = (req, res) => {

     tabelaArtigos.findAll().then(function(data){
        res.send(data);
    })
    .catch(function(){
        res.status(500).send("Ocorreu um erro obtendo os artigos");
    })
}

//retorna itens publicados
exports.findPublished = (req, res) => {
    tabelaArtigos.findAll({where: { publicado: true} })
    .then(dados => {
        res.send(dados);
    })
    .catch(function (err) {
        res.status(500).send(
            {
                message: "Ocorreu um erro ao encontrar artigos publicados."
            }
        );
    });
}

//busca por ID
exports.findById = (req, res) => {
    const { id : idArtigo } =  req.query; // fiz o destructuring do ide renomeei para idArtigo

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

//busca por titulo
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


// Atualiza nome pelo id

exports.updateById = (req, res) => {

    const { body: updates } = req;
    const { id: idArtigo } = req.params;
    const query = { where: { id: idArtigo }, returning: true } //returning: true - se der tudo certo, retorna o artigo


    tabelaArtigos
        .update(updates, query)
        .then(function (data){
           
            const linhasAtualizadas = data[0];
            
            if (linhasAtualizadas === 0){
                res.status(404).send("Nao foi encontrado artigo para ser atualizado a partid do ID " + idArtigo);

            } else {
                const artigoAtualizados = data[1];
                res.send(artigoAtualizados);
            }
        })
        .catch(function(err){
            res.status(500).send("Ocorreu um erro ao atualizar artigo")
            });
}   
 
//DELETAR TODOS

exports.deleteAll = (req, res) => {
    tabelaArtigos.destroy({ where: {}, truncate: false }) //truncate vai preservar estrutura da tabela
        .then(function(itensDeletados) {
            res.send("Foram deletados " + itensDeletados + " artigos")
        })
        .catch(function(err){
            res.status(500).send("Ocorreu um erro ao deletar os artigos")
        })
}

//DELETAR POR ID
exports.deleteByID = (req, res) => {
    const { id: idArtigo} = req.params;

    tabelaArtigos.destroy ({ where:  { id: idArtigo}})

    .then(function(itemDeletado) {
        if (itemDeletado === 0){
        res.send("O item " +  idArtigo + "nao foi encontrado");
    } else {
        res.send("Artigo " + idArtigo + "deletado com sucesso");
    }
})
    .catch(function(err){
        res.status(500).send("Ocorreu um erro ao deletar o artigos")
    })
}


//Atualizar muitos

// exports.updateMany = (req, res) => {
//     const { body: updates} = req;

//     const query = {
//         returning: true, 
//         where: {descricao: "Descricao o artigo"}/

//     }
// }


//promise - "promete que vai acontecer algo", mas isso pode ou não acontecer
// a promise pode ser resolvida ou rejeitada (Ex: Ocorreu um erro ao tentar salvar);
