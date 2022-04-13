import * as paletaService from '../services/paleta.service.js';

export const findAllPaletasController = (req, res) => {
  const paletas = paletaService.findAllPaletasService();

  res.send(paletas);
};

export const findByIdPaletaController = (req, res) => {
  const idParametro = Number(req.params.id);
  const escolherPaleta = paletaService.findByIdPaletaService(idParametro);

  res.send(escolherPaleta);
};

export const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletaService.createPaletaService(paleta);

  res.send(newPaleta);
};

export const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatedPaleta = paletaService.updatePaletaService(idParam, paletaEdit);

  res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletaService.deletePaletaService(idParam);

  res.send({ message: 'Paleta deletada com sucesso!' });
};
