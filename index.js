const express = require('express');
const app = express();
const port = 8080;

app.get("/", function(req, res){
    res.send("Minha primeira requisição");
});

app.get("/segunda-req", function(req,res){
    res.send("Minha SEGUNDA requisição");
})

app.get("/com-parametros", function(req, res){
    req.query
    res.send("Com parametros funciona! Sabadou " + req.query.nome);
})

app.listen(port, function(){
    console.log("Ouvindo a porta:", port);
});
