import axios from 'axios';

async function SearchCityOnIBGE(codUF: number): Promise<[] | any> {
  const api = axios.create({
    baseURL: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${codUF}/distritos`,
  });

  await api.get('').then((response) => {
    const { data } = response;
    console.log(data);
    return data;
  });
}

export { SearchCityOnIBGE };
