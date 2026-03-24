import siemensLogo from '../assets/partners/siemens.png';
import allenBradleyLogo from '../assets/partners/allenbradley.png';
import schneiderLogo from '../assets/partners/schneider.png';
import abbLogo from '../assets/partners/abb.png';
import mitsubishiLogo from '../assets/partners/mitsubishi.png';
import omronLogo from '../assets/partners/omron.png';
import deltaLogo from '../assets/partners/delta.png';
import invtLogo from '../assets/partners/invt.png';
import weconLogo from '../assets/partners/wecon.png';
import wintechLogo from '../assets/partners/wintech.png';

export const siteConfig = {
  name: 'VK Automation and Control',
  shortName: 'VK Automation',
  siteUrl: 'https://www.vkautomationandcontrol.in',
  defaultTitle: 'VK Automation and Control | Industrial Automation Company in Vapi, Gujarat',
  defaultDescription:
    'VK Automation and Control delivers PLC programming, SCADA development, VFD commissioning, industrial networking, control panel engineering, and automation support for manufacturing and process plants in Vapi, Gujarat.',
  ogImage: 'https://www.vkautomationandcontrol.in/fin.png',
  phoneDisplay: '+91 7096799555',
  phoneHref: 'tel:+917096799555',
  email: 'info.vkautomationadncontrol@gmail.com',
  emailHref: 'mailto:info.vkautomationadncontrol@gmail.com',
  addressLines: [
    'Ground Floor, Shop No 2, Bajrang Complex',
    'Vapi Prime Hotel, Char Rasta',
    'Vapi, Valsad-396195, Gujarat, India',
  ],
  city: 'Vapi',
  region: 'Gujarat',
  country: 'India',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export const technologyPartners = [
  { name: 'Siemens', category: 'PLC and Automation', logo: siemensLogo },
  { name: 'Allen-Bradley', category: 'Rockwell Automation', logo: allenBradleyLogo },
  { name: 'Schneider Electric', category: 'Industrial Control', logo: schneiderLogo },
  { name: 'ABB', category: 'Drives and Motors', logo: abbLogo },
  { name: 'Mitsubishi', category: 'Automation Solutions', logo: mitsubishiLogo },
  { name: 'Omron', category: 'Control Components', logo: omronLogo },
  { name: 'Delta', category: 'Drive and Motion Control', logo: deltaLogo },
  { name: 'INVT', category: 'Variable Frequency Drives', logo: invtLogo },
  { name: 'Wecon', category: 'HMI and Operator Panels', logo: weconLogo },
  { name: 'Wintech', category: 'Industrial Interface Solutions', logo: wintechLogo },
];