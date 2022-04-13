import express from 'express';
import cors from 'cors';
import { routes } from './src/routes/paleta.route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

// Get all
// app.get('/paletas/todas-paletas', (req, res) => {
//     res.send(paletas);
// });

//Get by id
// app.get('/paletas/paleta/:id', (req, res) => {
//     const idParametro = Number(req.params.id);
//     const escolherPaleta = paletas.find((paleta) => paleta.id === idParametro);

//     res.send(escolherPaleta);
// });

// ---------------------------------------------------------
const port = 3001;

app.listen(port, () => {
  console.log(
    `Aplicação rodando na porta ${port} em http://localhost:${port}//paletas/todas-paletas 🚀.`,
  );
});
