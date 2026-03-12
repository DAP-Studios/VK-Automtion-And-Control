import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import { siteConfig } from '../lib/siteConfig';

const contactStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteConfig.siteUrl}/contact` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteConfig.siteUrl}/contact#contactpage`,
    url: `${siteConfig.siteUrl}/contact`,
    name: `Contact ${siteConfig.name}`,
    description: 'Get in touch with VK Automation and Control for PLC programming, SCADA integration, VFD commissioning, and industrial automation project consultations in Vapi, Gujarat.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.addressLines[0],
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        postalCode: '396195',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
      ],
    },
  },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact VK Automation — Get an Automation Consultation"
        description="Contact VK Automation and Control in Vapi for PLC programming, SCADA integration, commissioning, industrial networking, and automation project consultations. Call or email for a fast response."
        pathname="/contact"
        keywords="contact VK Automation Vapi, automation consultation Gujarat, PLC SCADA inquiry, industrial automation quote, automation company contact India"
        structuredData={contactStructuredData}
      />
      <Header />
      <PageHero
        kicker="Project Consultation"
        title="Talk to Our Industrial Automation Engineering Team"
        description="Share your plant requirements, controls challenges, and project timelines. We will suggest a practical path for PLC, SCADA, VFD, and network integration work."
      />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
