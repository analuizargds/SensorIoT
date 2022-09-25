var express = require('express');
var bodyParser = require('body-parser');
var server = express();
const router = express.Router();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/', express.static('frontend'));
server.set("view engine", "ejs");
var dados=[];
var info;

function GetDados(req, resp) {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.send(dados);
};

function PostDados(req, resp) {
    info = { "Nivel de gas": req.query.Gas }
    dados.push(info);
    resp.send({ "Status": 200 });
    console.log(info);
};

server.get('/', (req, res) =>{
    res.render("../views/index");
})

server.get("/Receber", GetDados);
server.post("/Enviar", PostDados);
server.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
});