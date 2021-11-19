//rotas do sistema de artigos
/*
    GET 
        - Obter todos os artigos
        - Obter um artigo especifico
        - Obter todos os artigos publicados

    POST
        - Criar um novo artigo

    PUT 
        - Publicar artigo
        (Alteracoes também seriam aqui)
    
    DELETE 
        - Deletar um artigo
*/

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller");
    let router = require("express").Router();

    /**
     implementacao equivalente (e mais verbosa)
    router.post("/", function(req, res){i
        artigosController.create(req, res);
    })
     */

    router.post("/", artigosController.create);
    router.get("/", artigosController.findAll);

    app.use("/artigos", router);
}