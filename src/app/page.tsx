"use client";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] bg-gradient-to-br from-blue-600 to-purple-700 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">LAM foundation website</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Making a difference through innovation and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-involved" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
              Learn More
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features / Pages Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Explore our programs, services, and initiatives.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/get-involved" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get involved</h3>
              <p className="text-gray-500 text-sm">Learn more about our get involved.</p>
            </a>
            <a href="/mission" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-500 text-sm">Learn more about our mission.</p>
            </a>
            <a href="/students" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Students</h3>
              <p className="text-gray-500 text-sm">Learn more about our students.</p>
            </a>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                LAM foundation website is dedicated to creating meaningful impact through thoughtful action and community engagement.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We believe in transparency, excellence, and putting people first in everything we do.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400 text-lg">
              Image
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-blue-100 text-lg mb-10">Join us in making a difference. Every action counts.</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
