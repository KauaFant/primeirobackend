const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
let avaliacoes = [
    { id: 1, desc: "Gostei da página! Radical!" },
    { id: 2, desc: "parabéns" }
];
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.get('/avaliacao', (req, res) => {
    res.json(avaliacoes);
});



app.get('/saibamais', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'saibamais.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'contato.html'));
});

app.get('/', async (req,res) => {
    res.send("Página Inicial");
});

app.post('/avaliacao', (req, res) => {
    const novo={id: avaliacoes.length + 1, desc: req.body.av};
    avaliacoes.push(novo);
    res.status(201).json(novo);
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});

