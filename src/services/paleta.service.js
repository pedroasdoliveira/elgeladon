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
  },
];

export const findAllPaletasService = () => {
  return paletas;
};

export const findByIdPaletaService = (idParametro) => {
  const paleta = paletas.find((paleta) => paleta.id === idParametro);
  return paleta;
};

export const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

export const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

export const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};
