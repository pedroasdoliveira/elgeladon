import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const paletas = [
    {
        id: 1,
        sabor: 'Ninho com Ovomaltine',
        descricao: 'Paleta de paçoca com recheio de avelã',
        foto: './public/image/ninho-com-ovomaltine.png',
        preco: 18.0,
    },
    {
        id: 2,
        sabor: 'Morango com Avelã',
        descricao: 'Paleta de morango com recheio de avelã',
        foto: './public/image/morango-com-avela.png',
        preco: 16.0,
    },
    {
        id: 3,
        sabor: 'Chocolate Belga',
        descricao: 'Paleta feita de Açai',
        foto: './public/image/chocolate-belga.png',
        preco: 19.0,
    }
];

// app.get('/', (req, res) => {
//     res.send('Olá');
// });

// Get all
app.get('/paletas/todas-paletas', (req, res) => {
    res.send(paletas);
});

//Get by id
app.get('/paletas/paleta/:id', (req, res) => {
    const idParametro = Number(req.params.id);
    const escolherPaleta = paletas.find((paleta) => paleta.id === idParametro);

    res.send(escolherPaleta);
});

// ---------------------------------------------------------
const port = 3001;

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port} 🚀.`);
});


