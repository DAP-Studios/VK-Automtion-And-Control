import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Clients from '../components/Clients';
import { siteConfig } from '../lib/siteConfig';

const clientsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Clients', item: `${siteConfig.siteUrl}/clients` },
  ],
};

export default function ClientsPage() {
  return (
    <>
      <Seo
        title="Clients — Industrial Automation Projects in Vapi"
        description="VK Automation and Control supports industrial clients in Vapi and Gujarat with PLC programming, SCADA work, drives, panels, commissioning, and plant automation services."
        pathname="/clients"
        keywords="industrial automation clients Vapi, PLC programming projects Gujarat, SCADA integration clients, VFD commissioning Vapi, panel automation projects Gujarat"
        structuredData={clientsStructuredData}
      />
      <Header />
      <PageHero
        kicker="Client Work"
        title="Industrial Clients We Have Supported"
        description="A snapshot of manufacturers and process businesses we have worked with across automation, controls, drives, panels, and commissioning assignments." 
      />
      <main>
        <Clients />
      </main>
      <Footer />
    </>
  );
}
