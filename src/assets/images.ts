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
