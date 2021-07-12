import { FormatName, FindCodUF } from '../services/FormatDatas.services';
import { SearchCityOnIBGE } from '../services/SearchCityOnIBGE.services';

async function findCityIBGE(request, response, next) {
  const { nameCity } = request.params;

  const { city, uf } = FormatName(nameCity);

  const codUF = FindCodUF(uf);

  const teste = await SearchCityOnIBGE(codUF);

  console.log(teste);
  return next();
}

export { findCityIBGE };
