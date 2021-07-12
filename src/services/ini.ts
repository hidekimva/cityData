import fs from 'fs';
import ini from 'ini';

const config = ini.parse(fs.readFileSync('./nfseLocais.ini', 'utf-8'));

console.log(config.MARINGA);
