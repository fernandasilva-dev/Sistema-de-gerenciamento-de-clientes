import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express();
const __filename = fileURLToPath(import.meta.url); //nome dos arquivos
const __dirname = path.dirname(__filename); //nome da pasta que os arquivos estará armazenada

app.use(express.static(path.join(__dirname, 'public'))); //diz que a pasta 'public' é estática

app.get('/', function(req,res){ 
    res.sendFile(__dirname+'/conteudo/index.html');
});  //funcsion anonima

app.get('/cadastrar', function(req,res){
    res.sendFile(__dirname+'/conteudo/cadastrar.html');
});

app.get('/listar', function(req,res){
    res.sendFile(__dirname+'/conteudo/listar.html');
});

app.get('/usuarios', function(req,res){
    res.sendFile(__dirname+'/conteudo/usuarios.html');
});

app.listen(7000, ()=>{
    console.log('Servidor rodando em http://localhost:7000')
});