import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" pathname="/404" noIndex />
      <Header />
      <main className="flex min-h-[70vh] items-center bg-industrial-50 pt-28 md:pt-32">
        <div className="container-wide">
          <div className="surface-panel rounded-[2rem] px-8 py-14 text-center md:px-14">
            <div className="font-mono text-sm uppercase tracking-[0.28em] text-industrial-500">404</div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">The page you requested is not available.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-industrial-600">
              The link may be outdated or the page may have been moved during the site refresh. Use the homepage to continue browsing VK Automation services and solutions.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex rounded-full bg-industrial-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
