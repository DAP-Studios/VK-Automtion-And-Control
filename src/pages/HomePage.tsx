import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Clients from '../components/Clients';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import { siteConfig } from '../lib/siteConfig';

const homeStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    url: `${siteConfig.siteUrl}/`,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    inLanguage: 'en-IN',
    publisher: { '@id': `${siteConfig.siteUrl}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Industrial Automation Company in Vapi"
        description="VK Automation and Control provides PLC programming, SCADA development, VFD commissioning, industrial networking, and automation support for manufacturing and process plants in Vapi and Gujarat."
        pathname="/"
        keywords="industrial automation Vapi, PLC programming Gujarat, SCADA development Vapi, VFD commissioning, control panel manufacturer Vapi, Siemens PLC Vapi, Allen-Bradley Vapi, Schneider Electric automation, industrial control systems Gujarat, automation company Vapi"
        structuredData={homeStructuredData}
      />
      <Header />
      <Hero />
      <About />
      <Industries />
      <Clients variant="featured" />
      <Contact />
      <Footer />
    </>
  );
}
