const express = require('express');
//Para trabalhar com cookie no servidor
const cookieParser = require('cookie-parser');
//Definir quais dominio pode consumir dados da api
const cors = require('cors');
const path =  require('path');

const app =  express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.get('/', function(req, res){
   res.json({message :'Hello world'});
});

app.listen(port, function(){
    console.log('Server runing on port ${port}');
});