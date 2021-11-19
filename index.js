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
    res.send("DASA Educa - Artigos");
});


const database = require("./models"); //importar o banco
database.sequelizeDatabase.sync(); //fazer a sincronizacao
//database.sequelizeDatabase.sync({force: true}).then(() => console.log("Drop and re-sync db"))

const router = require("./routes/artigos.routes");
router(app);

// Ouvindo a porta - 
app.listen(port, function(){
    console.log("Ouvindo a porta:", port);
});

