import express from 'express';
import {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paleta.controller.js';

export const routes = express.Router();

routes.get('/todas-paletas', findAllPaletasController);

routes.get('/paleta/:id', findByIdPaletaController);

routes.post('/create', createPaletaController);

routes.put('/update/:id', updatePaletaController);

routes.delete('/delete/:id', deletePaletaController);
