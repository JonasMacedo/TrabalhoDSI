
const express = require('express'); //require é tipo o importe, vai no node_modules e importa as biliotecas dali
const bodyParser = require('body-parser');
const pg = require('pg');

function getClient(){//delcara a função
  //começa um parametro
  return new pg.Client({//um parametro é o que tem dentro das chaves e o que tem dentro é um objeto no formato JSON
    host:'localhost',   //e retorna uma nova instancia de pg.Client
    port: 5432,
    database: 'Pet',
    user: 'postgres',
    password: 'Dmolidor18',
  });//termina o parametro
}//termina função

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

//criando conexão.
pg.connect('meuBanco.db');

//criando banco.
pg.run("CREATE TABLE IF NOT EXISTS animal(ID  INTEGER PRIMARY KEY AUTOINCREMENT, id serial PRIMARY KEY,nome VARCHAR(100),raca VARCHAR(100),idade int,sexo enum('M','F');");

// fazendo cosulta no banco.
pg.connect("meuBanco.db");
var rows = pg.run("SELECT * FROM animal");
console.log(rows);

// Fazendo Inserção de daddos.
var add = pg.inset("ANIMAL",{ NOME: "Jhon Snow" , ID: 20});
console.log(id);

// Fazendo Update.
pg.update("ANIMAL",{NOME: "Gendalf"},{id:2});
