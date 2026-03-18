"use client";

import { useState } from 'react';

export default function StudentsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-blue-600">Light Ahead Movement</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
              <a href="/mission" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Mission</a>
              <a href="/students" className="text-blue-600 font-semibold">For Students</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Get Involved
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
                <a href="/mission" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Mission</a>
                <a href="/students" className="block px-3 py-2 text-blue-600 font-semibold">For Students</a>
                <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg mt-2">
                  Get Involved
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Make Your Impact While You Study
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students creating positive change in their communities through The Light Ahead Movement. Your voice matters, your actions count.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Join the Movement
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Student Programs Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Programs Built for Student Life
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We understand your busy schedule. Our flexible programs fit around classes, exams, and everything else on your plate.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Campus Ambassadors</h3>
                <p className="text-gray-600 mb-6">
                  Lead awareness campaigns on your campus. Flexible commitment that works with your academic schedule and builds leadership experience.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </article>

              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation Challenges</h3>
                <p className="text-gray-600 mb-6">
                  Tackle real-world problems with creative solutions. Perfect for building your portfolio while making a difference in communities.
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  View Challenges →
                </button>
              </article>

              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Skill-Based Volunteering</h3>
                <p className="text-gray-600 mb-6">
                  Use your academic skills to help nonprofits succeed. Gain real experience while studying and build professional connections.
                </p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Find Opportunities →
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Students Creating Change
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Real stories from students who are making a difference while building their futures.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center text-gray-400 mb-8">
                  Student Success Story Image
                </div>
              </div>
              
              <div>
                <blockquote className="text-2xl font-medium text-gray-900 mb-6">
                  "Being part of LAM helped me discover my passion for social impact while I was still figuring out my major. The flexible volunteer opportunities fit perfectly around my class schedule."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex Santos</p>
                    <p className="text-gray-600">Junior, University of California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Students */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Why Students Choose LAM
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Build Your Resume</h3>
                <p className="text-gray-600">
                  Gain valuable experience and leadership skills that employers value.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Connect & Network</h3>
                <p className="text-gray-600">
                  Meet like-minded peers and professionals who share your values.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Participate on your terms with opportunities that fit your academic calendar.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Make Real Impact</h3>
                <p className="text-gray-600">
                  See the direct results of your efforts in communities that need support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Light the Way Forward?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join The Light Ahead Movement today and start making a difference while you study. Your journey toward positive impact begins with a single step.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Light Ahead Movement</h3>
              <p className="text-gray-400 mb-4">
                Empowering students to create positive change in their communities and beyond.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/mission" className="hover:text-white transition-colors">Mission</a></li>
                <li><a href="/students" className="hover:text-white transition-colors">For Students</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Campus Ambassadors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Innovation Challenges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skill-Based Volunteering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership Development</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: students@lightaheadmovement.org</p>
                <p>Phone: (555) 123-4567</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-white transition-colors">Facebook</a>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Light Ahead Movement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}