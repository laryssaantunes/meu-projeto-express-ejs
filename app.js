const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
{id: 1, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 2, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 3, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 4, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 5, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 6, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 7, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 8, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 9, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
{id: 10, nome: "nome do produto", preco: "400", descricao: "descricao do produto", imagem: "produto1.jpg"},
] 

function buscarProdutoPorID(){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});


app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Bem vindo a pagina produtos!' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});