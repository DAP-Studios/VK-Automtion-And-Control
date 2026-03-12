import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import ProductsGrid from '../components/ProductsGrid';
import { siteConfig } from '../lib/siteConfig';

const productsStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.siteUrl}/products` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Industrial Automation Products',
    description: 'PLC, HMI, VFD, safety, networking, and power hardware for industrial automation.',
    url: `${siteConfig.siteUrl}/products`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Programmable Logic Controllers (PLC)', url: `${siteConfig.siteUrl}/products#plc` },
      { '@type': 'ListItem', position: 2, name: 'Human Machine Interface (HMI)', url: `${siteConfig.siteUrl}/products#hmi` },
      { '@type': 'ListItem', position: 3, name: 'Variable Frequency Drives (VFD)', url: `${siteConfig.siteUrl}/products#vfd` },
      { '@type': 'ListItem', position: 4, name: 'Functional Safety Controllers', url: `${siteConfig.siteUrl}/products#safety` },
      { '@type': 'ListItem', position: 5, name: 'Industrial Networking Modules', url: `${siteConfig.siteUrl}/products#networking` },
      { '@type': 'ListItem', position: 6, name: 'Industrial Power Supplies', url: `${siteConfig.siteUrl}/products#power` },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Industrial Automation Products — PLC, HMI, VFD, Safety"
        description="Explore VK Automation product offerings including PLC systems, HMI panels, variable frequency drives, safety controllers, networking modules, and industrial power hardware for automation projects."
        pathname="/products"
        keywords="PLC systems Vapi, HMI panels Gujarat, VFD drives India, safety controllers, industrial networking, Siemens PLC, Allen-Bradley PLC, Mitsubishi PLC, Delta VFD, control hardware automation"
        structuredData={productsStructuredData}
      />
      <Header />
      <PageHero
        kicker="Industrial Product Portfolio"
        title="Automation Hardware and Control Components"
        description="Browse PLC, HMI, VFD, safety, communication, and power solutions selected for high uptime, reliable commissioning, and long service life in manufacturing environments."
      />
      <main>
        <ProductsGrid />
      </main>
      <Footer />
    </>
  );
}
