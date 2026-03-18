"use client";

import React, { useState } from 'react';

export default function GetInvolvedPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Light Ahead Movement
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="/mission" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Mission</a>
            <a href="/get-involved" className="text-blue-600 font-semibold">Get Involved</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
              Donate Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="/" className="block text-gray-700">Home</a>
              <a href="/about" className="block text-gray-700">About</a>
              <a href="/mission" className="block text-gray-700">Mission</a>
              <a href="/get-involved" className="block text-blue-600 font-semibold">Get Involved</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Join Our Movement to Light the Way Forward
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Be part of a community that's creating real change for students everywhere. Your voice, your time, and your passion can make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Become a Volunteer
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ways to Make an Impact
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Whether you have an hour a week or want to dive deeper, there's a perfect way for you to contribute to our mission.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Volunteer Mentor</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Guide and support students through their academic journey. Share your experience and help light their path to success.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    2-3 hours per week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Virtual or in-person
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Training provided
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
                  Apply to Mentor
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Event Organizer</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Help plan and execute workshops, fundraisers, and community events that bring our mission to life.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Flexible schedule
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Creative freedom
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Team collaboration
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300">
                  Join Event Team
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ambassador</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Spread awareness about our mission on your campus and in your community. Be our voice where it matters most.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Social media content
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Campus outreach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Exclusive resources
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300">
                  Become Ambassador
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Application Form */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Fill out this form and we'll connect you with the perfect opportunity to make a difference.
            </p>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Primary Interest *</label>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your interest</option>
                    <option value="mentor">Volunteer Mentor</option>
                    <option value="events">Event Organizer</option>
                    <option value="ambassador">Campus Ambassador</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your availability</option>
                  <option value="1-2 hours/week">1-2 hours per week</option>
                  <option value="3-5 hours/week">3-5 hours per week</option>
                  <option value="6-10 hours/week">6-10 hours per week</option>
                  <option value="10+ hours/week">10+ hours per week</option>
                  <option value="flexible">Flexible schedule</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-2">Tell us about yourself</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Share your background, interests, and why you want to join the Light Ahead Movement..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Every Great Movement Starts with One Person
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join thousands of students and supporters who are already making a difference. Your journey starts today.
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Impact Journey
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Light Ahead Movement</h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering students to create positive change in their communities and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fundraise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Report</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Light Ahead Movement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}