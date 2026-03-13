// Product images — locally stored in src/assets/products/
import plcImg from './products/plc.png';
import hmiImg from './products/hmi.png';
import vfdImg from './products/vfd.png';

// Industry images — locally stored in src/assets/industries/
import autoImg from './industries/auto.png';
import legacyImg from './industries/legacy.png';
import networkImg from './industries/network.png';
import plcIndImg from './industries/plc.png';
import safetyImg from './industries/safty.png';
import vfdIndImg from './industries/vfd.png';

// Client logos — locally stored in src/assets/clients/
import artiClient from './clients/arti.png';
import bkmClient from './clients/bkm.png';
import dorfketalClient from './clients/dorfketal.png';
import galvaClient from './clients/galva.png';
import indocountClient from './clients/indocount.png';
import kusumgarClient from './clients/kusumgar.png';
import nitinClient from './clients/nitin.png';
import paramClient from './clients/param.png';
import sandhyaClient from './clients/sandhyagroup.png';
import steamClient from './clients/steam.png';
import umdicaClient from './clients/umdica.png';
import viralClient from './clients/virallab.png';

export const productImages = {
  plc: plcImg,
  hmi: hmiImg,
  vfd: vfdImg,
};

export const industryImages = {
  automation: autoImg,
  plcControl: plcIndImg,
  vfdControl: vfdIndImg,
  networking: networkImg,
  safety: safetyImg,
  modernization: legacyImg,
};

export const clientLogos = [
  { name: 'Arti', logo: artiClient },
  { name: 'BKM', logo: bkmClient },
  { name: 'Dorf Ketal', logo: dorfketalClient },
  { name: 'Galva', logo: galvaClient },
  { name: 'Indocount', logo: indocountClient },
  { name: 'Kusumgar', logo: kusumgarClient },
  { name: 'Nitin', logo: nitinClient },
  { name: 'Param', logo: paramClient },
  { name: 'Sandhya Group', logo: sandhyaClient },
  { name: 'Steam', logo: steamClient },
  { name: 'Umdica', logo: umdicaClient },
  { name: 'Viral Lab', logo: viralClient },
];
