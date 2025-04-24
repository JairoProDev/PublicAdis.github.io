import React from 'react';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import BusinessTools from '../src/components/BusinessTools';

export default function Home() {
  return (
    <Layout
      title="PublicAdis | Plataforma Publicitaria Premium en Cusco"
      description="La plataforma publicitaria más completa de Cusco que impulsa tus ventas en todos los canales de forma efectiva"
    >
      <Hero />
      <Services />
      <BusinessTools />
    </Layout>
  );
}
