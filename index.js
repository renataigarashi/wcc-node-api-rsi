const express = require('express');
const app = express();
const port = 8080;

//MVC
//Model, View, Controler


//GET - obter algo
//POST - criar algo
//PUT - atualizar algo
//DELETE - deletar algo

//pra aplicacao "entender" o json;
app.use(express.json());


app.get("/", function(req, res){
    res.send("Minha primeira requisição");
});

app.get("/segunda-req", function(req,res){
    res.send("Minha SEGUNDA requisição");
})

app.get("/com-parametros", function(req, res){
    if (req.query.nome === "Fulana"){
        res.send("Fulana chamou requisição");
    } else {
    res.send("Com parametros funciona! Sabadou " + req.query.nome + " " + req.query.sobrenome);
    }
})

//POST
app.post("/meu-primeiro-post", function(req, res){
    console.log(req.body);
    res.send("Meu post funciona");
})

//PUT - ATUALIZACAO
// app.put('/meu-primeiro-put', function(req,res){
//     console.log(req.body);
// });

app.put("/meu-primeiro-put/:id", function(req, res){
    console.log(req.body, req.params.id);
    res.send("Meu put funciona");
})

//DELETE - nao tem corpo de requisicao 
//passar o identificador para deletar um item especifico ou deletar "varias coisas de uma vez"
app.delete("/meu-primeiro-delete/:id", function(req, res){
    console.log(req.params.id);
    res.send("Meu delete funciona: " + req.params.id);
})

// Ouvindo a porta - 
app.listen(port, function(){
    console.log("Ouvindo a porta:", port);
});
