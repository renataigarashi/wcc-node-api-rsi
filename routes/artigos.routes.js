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

    router.post("/", artigosController.create);
    router.get("/", artigosController.findAll);
    router.get("/findByTitle/titulo", artigosController.findByTitle);
    router.get("/findById/id", artigosController.findById); //usa o : pq pode ser um valor dinamico
    router.get("/findPublished", artigosController.findPublished);
   
    router.put("/:id", artigosController.updateById);
    
    router.delete("/", artigosController.deleteAll);
    router.delete("/:id", artigosController.deleteByID);

    app.use("/artigos", router);
        /**
     implementacao equivalente (e mais verbosa)
    router.post("/", function(req, res){
        artigosController.create(req, res);
    })
     */
}