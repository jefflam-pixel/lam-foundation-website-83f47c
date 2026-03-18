"use client";

import { useState } from 'react';

export default function Mission() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Light Ahead Movement</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About Us</a>
              <a href="/mission" className="text-blue-600 font-medium">Mission</a>
              <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">Get Involved</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
                <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">About Us</a>
                <a href="/mission" className="block px-3 py-2 text-blue-600 font-medium">Mission</a>
                <a href="/contact" className="block px-3 py-2 text-blue-600 hover:text-blue-700 transition-colors duration-300">Get Involved</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white min-h-screen flex items-center pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Illuminating Pathways to 
              <span className="text-yellow-300">Student Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              The Light Ahead Movement is dedicated to raising awareness and creating opportunities that empower students to achieve their academic and personal goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Join Our Mission
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn Our Impact
              </button>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe every student deserves access to resources, mentorship, and opportunities that light the path to their brightest future.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-800 text-center font-medium italic mb-6">
                "To raise awareness about educational barriers and create sustainable solutions that empower students from all backgrounds to pursue higher education and achieve their dreams."
              </blockquote>
              <p className="text-center text-gray-600 text-lg">— Light Ahead Movement Foundation</p>
            </div>
          </div>
        </section>

        {/* Key Activities */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Create Change</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach addresses the critical needs of students through targeted programs and community partnerships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Awareness Campaigns</h3>
                <p className="text-gray-600 mb-6">
                  We develop and implement strategic awareness campaigns that highlight educational inequities and showcase success stories to inspire action within student communities.
                </p>
                <div className="text-blue-600 font-semibold">Learn More →</div>
              </article>
              
              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Mentorship</h3>
                <p className="text-gray-600 mb-6">
                  Our peer-to-peer mentorship programs connect students with successful alumni and professionals who provide guidance, support, and real-world insights.
                </p>
                <div className="text-purple-600 font-semibold">Get Involved →</div>
              </article>
              
              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Resource Development</h3>
                <p className="text-gray-600 mb-6">
                  We create and curate educational resources, scholarship opportunities, and support tools specifically designed to address the unique challenges students face.
                </p>
                <div className="text-green-600 font-semibold">Explore Resources →</div>
              </article>
            </div>
          </div>
        </section>

        {/* Impact Focus */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Students Matter to Us</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Students are the future leaders, innovators, and change-makers of our society. Yet many face significant barriers that prevent them from reaching their full potential.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Breaking Down Barriers</h3>
                      <p className="text-gray-600">We identify and address systemic obstacles that limit educational access and opportunity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Empowering Communities</h3>
                      <p className="text-gray-600">Our work creates ripple effects that strengthen entire communities and families.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Building Tomorrow's Leaders</h3>
                      <p className="text-gray-600">Every student we help becomes a catalyst for positive change in their field and community.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <span className="font-semibold text-gray-900">Student-Centered Approach</span>
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <span className="font-semibold text-gray-900">Evidence-Based Solutions</span>
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <span className="font-semibold text-gray-900">Community Partnerships</span>
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <span className="font-semibold text-gray-900">Sustainable Impact</span>
                      <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Light the Path Forward?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join The Light Ahead Movement and help us create awareness and opportunities that transform student lives. Whether you're a student, educator, or community supporter, there's a place for you in our mission.
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300">
              Start Making a Difference
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Light Ahead Movement</div>
              <p className="text-gray-400 mb-6">
                Illuminating pathways to student success through awareness, mentorship, and community support.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="/mission" className="text-gray-400 hover:text-white transition-colors duration-300">Mission</a></li>
                <li><a href="/programs" className="text-gray-400 hover:text-white transition-colors duration-300">Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@lightaheadmovement.org</li>
                <li>(555) 123-4567</li>
                <li>123 Education Way</li>
                <li>Learning City, LC 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Light Ahead Movement Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}