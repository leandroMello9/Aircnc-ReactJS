const express= require('express');
const mongoose = require('mongoose');
const App= express();
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
mongoose.connect('mongodb+srv://oministack:oministack@cluster0-kwoxj.mongodb.net/oministack9?retryWrites=true&w=majority',{useNewUrlParser:true})


//req.query = Acesso aos query params(Para Filtros);
//req.params = Acesso route params (para edição , delete);

//GET, POST, PUT, DELETE
//req.body = Acessar o corpo da requisação (para criação e edição);
App.use(express.json());
App.use(cors());
App.use('/files', express.static(path.resolve(__dirname,'..','uploads')))

App.use(routes);




const port= 3333;
App.listen(port, console.log("Rodando na Porta 3333"))