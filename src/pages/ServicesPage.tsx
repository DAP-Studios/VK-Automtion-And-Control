import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import { siteConfig } from '../lib/siteConfig';

const servicesStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.siteUrl}/services` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.siteUrl}/services#service`,
    name: 'Industrial Automation Services',
    description: 'Full-lifecycle industrial automation services including PLC programming, SCADA development, VFD commissioning, control panel engineering, process optimization, and 24/7 technical support.',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: 'IN',
      },
    },
    areaServed: { '@type': 'Country', name: 'India' },
    serviceType: 'Industrial Automation',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PLC System Integration', description: 'End-to-end PLC programming and control system integration using IEC 61131-3 structured code.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SCADA Development', description: 'Custom SCADA and HMI design, configuration, and deployment for industrial process monitoring.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VFD Commissioning', description: 'Variable frequency drive installation, parameter setup, and integration with plant control systems.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Process Optimization', description: 'PID loop tuning, OEE analysis, energy management, and performance improvement for industrial plants.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Technical Support', description: 'Remote diagnostics, emergency response, preventive maintenance, and lifecycle support.' } },
      ],
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Industrial Automation Services — PLC, SCADA, VFD"
        description="VK Automation provides system integration, PLC programming, SCADA development, VFD commissioning, process optimization, panel fabrication, and 24/7 automation support in Vapi, Gujarat."
        pathname="/services"
        keywords="PLC programming services Vapi, SCADA development Gujarat, VFD commissioning, control system integration, industrial automation services, panel fabrication Vapi, process optimization, automation support India"
        structuredData={servicesStructuredData}
      />
      <Header />
      <PageHero
        kicker="Engineering and Integration"
        title="Industrial Automation Services from Design to Lifecycle Support"
        description="From control architecture and programming to commissioning and ongoing maintenance, our team delivers practical automation services with strong documentation and fast support."
      />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
