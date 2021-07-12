interface IResponse {
    city: string;
    uf: string;
}

function FormatName(nameCityUF: string): IResponse {
  const sizeNameCity = nameCityUF.length;

  const city = nameCityUF.substring(0, sizeNameCity - 2);
  const uf = nameCityUF.substring(sizeNameCity - 2, sizeNameCity).toUpperCase();

  return { city, uf };
}

function FindCodUF(UF: string):number {
  let codUF;

  switch (UF) {
    // Norte
    case 'RO':
      codUF = 11;
      break;
    case 'AC':
      codUF = 12;
      break;
    case 'AM':
      codUF = 13;
      break;
    case 'RR':
      codUF = 14;
      break;
    case 'PA':
      codUF = 15;
      break;
    case 'AP':
      codUF = 16;
      break;
    case 'TO':
      codUF = 17;
      break;
      // Nordeste
    case 'MA':
      codUF = 21;
      break;
    case 'PI':
      codUF = 22;
      break;
    case 'CE':
      codUF = 23;
      break;
    case 'RN':
      codUF = 24;
      break;
    case 'PB':
      codUF = 25;
      break;
    case 'PE':
      codUF = 26;
      break;
    case 'AL':
      codUF = 27;
      break;
    case 'SE':
      codUF = 28;
      break;
    case 'BA':
      codUF = 29;
      break;
      // Sudeste
    case 'MG':
      codUF = 31;
      break;
    case 'ES':
      codUF = 32;
      break;
    case 'RJ':
      codUF = 33;

      break;
    case 'SP':
      codUF = 35;
      break;
      // Sul
    case 'PR':
      codUF = 41;
      break;
    case 'SC':
      codUF = 42;
      break;
    case 'RS':
      codUF = 43;
      break;
      // Centro-Oeste
    case 'MS':
      codUF = 50;
      break;
    case 'MT':
      codUF = 51;
      break;
    case 'GO':
      codUF = 52;
      break;
    case 'DF':
      codUF = 53;
      break;

    default:
      throw new Error('UF nao encontrada');
      break;
  }

  return codUF;
}

export { FormatName, FindCodUF };
