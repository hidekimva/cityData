import { Router } from 'express';

const findCity = Router();

findCity.get('/', async (request, response) => {
  console.log('aqui');

  return response.send();
});

export { findCity };
