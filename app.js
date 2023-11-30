const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
{id: 1, nome: "Kit de maquiagem ",preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 2, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "aaaaaaaaaa.jpg"},
{id: 3, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "tttttttttttttttt.jpg"},
{id: 4, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 5, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 6, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 7, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 8, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 9, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
{id: 10, nome: "Kit de maquiagem", preco: "400,00", descricao: "Maquiagem", imagem: "jihukny.jpg"},
] 

function buscarProdutoPorID(){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', { produtos });
});


app.get('/produto', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produto', {produtos });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});