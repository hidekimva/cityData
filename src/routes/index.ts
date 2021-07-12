import { Router } from 'express';

import { findCityIBGE } from '../Middlewares/FindCityIBGE';
import { findCity } from './findCity.routes';

const routes = Router();

routes.use('/citydata/:nameCity', findCityIBGE, findCity);

export { routes };
