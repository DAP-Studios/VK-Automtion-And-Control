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
    { '@type': 'ListItem', position: 2, name: 'Technology Partners', item: `${siteConfig.siteUrl}/clients` },
  ],
};

export default function ClientsPage() {
  return (
    <>
      <Seo
        title="Technology Partners — Siemens, Allen-Bradley, Schneider, ABB"
        description="VK Automation and Control is certified to integrate Siemens, Allen-Bradley, Schneider Electric, ABB, Mitsubishi, Omron, Delta, INVT, Wecon, and Wintech automation platforms in Vapi, Gujarat."
        pathname="/clients"
        keywords="Siemens PLC partner Vapi, Allen-Bradley integrator, Schneider Electric automation, ABB drives Gujarat, Mitsubishi automation, Omron PLC, Delta automation, INVT VFD, Wecon HMI, industrial automation partners India"
        structuredData={clientsStructuredData}
      />
      <Header />
      <PageHero
        kicker="Trusted Platforms"
        title="Certified Technology Partners and Integration Ecosystem"
        description="We work across proven industrial automation platforms to deliver compatible control systems, faster troubleshooting, and dependable long-term maintainability."
      />
      <main>
        <Clients />
      </main>
      <Footer />
    </>
  );
}
