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

app.get("/", function(req,res){
    res.send("DASA Educa - Artigos")
})

// Ouvindo a porta - 
app.listen(port, function(){
    console.log("Ouvindo a porta:", port);
});
