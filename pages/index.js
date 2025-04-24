import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      title="PublicAdis | Digital Solutions"
      description="Digital solutions for public administration and businesses"
    >
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Solutions for Modern Challenges
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help public administrations and businesses transform digitally
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-gray-600">
                Comprehensive solutions to modernize your operations and services
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
              <p className="text-gray-600">
                Streamline workflows and increase efficiency with our expert guidance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Custom Software</h3>
              <p className="text-gray-600">
                Tailor-made applications designed for your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
