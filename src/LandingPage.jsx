import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building2, TrendingUp, Users, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function LandingPage({ onBrowseJobs }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Copenhagen');

  const handleSearch = () => {
    onBrowseJobs(searchQuery);
  };

  const featuredCompanies = [
    { name: 'LEGO', logo: '🧱' },
    { name: 'Novo Nordisk', logo: '💊' },
    { name: 'Maersk', logo: '🚢' },
    { name: 'Carlsberg', logo: '🍺' },
    { name: 'Unity', logo: '🎮' },
    { name: 'SumUp', logo: '💳' },
    { name: 'Trustpilot', logo: '⭐' },
    { name: 'Pleo', logo: '💰' }
  ];

  const categories = [
    { name: 'Tech & Engineering', count: 245, icon: '💻' },
    { name: 'Sales & Business', count: 156, icon: '📊' },
    { name: 'Marketing & Design', count: 89, icon: '🎨' },
    { name: 'Customer Success', count: 67, icon: '🤝' },
    { name: 'Product & Data', count: 134, icon: '📈' },
    { name: 'Operations', count: 45, icon: '⚙️' }
  ];

  const stats = [
    { label: 'English-Only Jobs', value: '500+', icon: Globe },
    { label: 'Companies Hiring', value: '150+', icon: Building2 },
    { label: 'New Jobs Weekly', value: '50+', icon: TrendingUp },
    { label: 'Job Seekers', value: '10K+', icon: Users }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Software Engineer at Unity',
      text: 'Found my dream job in Copenhagen within 2 weeks. No Danish required!',
      flag: '🇺🇸'
    },
    {
      name: 'Marco R.',
      role: 'Product Manager at Pleo',
      text: 'Finally, a job board that actually has English-only positions. Game changer.',
      flag: '🇮🇹'
    },
    {
      name: 'Priya K.',
      role: 'Data Scientist at Novo Nordisk',
      text: 'Moved from India to Copenhagen thanks to this site. The process was so smooth!',
      flag: '🇮🇳'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Copenhagen English Jobs</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={onBrowseJobs} className="text-gray-700 hover:text-gray-900 font-medium">Find Jobs</button>
              <a href="#companies" className="text-gray-700 hover:text-gray-900 font-medium">Companies</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <button 
                onClick={onBrowseJobs}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find English-Only Jobs<br />in Copenhagen
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              No Danish Required • 500+ Opportunities • Join International Teams
            </p>
            <p className="text-lg text-blue-200">
              The only job board exclusively for English-speaking positions in Denmark's capital
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Job title or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-lg"
                />
              </div>
              <div className="md:w-64 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-lg appearance-none bg-white"
                >
                  <option>Copenhagen</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                Search
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Popular:</span>
              {['Software Engineer', 'Product Manager', 'Sales', 'Marketing', 'Customer Success'].map(tag => (
                <button
                  key={tag}
                  onClick={() => { setSearchQuery(tag); handleSearch(); }}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section id="companies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Companies Hiring in English
            </h2>
            <p className="text-lg text-gray-600">
              Join world-class companies that use English as their working language
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredCompanies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="font-semibold text-gray-900">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect role in your field
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => { setSearchQuery(category.name); handleSearch(); }}
                className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-blue-200"
              >
                <div className="text-4xl">{category.icon}</div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900">{category.name}</div>
                  <div className="text-sm text-gray-600">{category.count} open positions</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Choose Copenhagen English Jobs?
            </h2>
            <p className="text-lg text-gray-600">
              The smartest way to find work in Copenhagen without Danish
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% English Only</h3>
              <p className="text-gray-600">
                Every single job requires English only. No Danish language skills needed.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Updated Daily</h3>
              <p className="text-gray-600">
                New opportunities added every day from verified companies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">International Community</h3>
              <p className="text-gray-600">
                Join thousands of expats who found their perfect role in Copenhagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from people who found their dream jobs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.flag}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Next Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of international professionals working in Copenhagen
          </p>
          <button
            onClick={onBrowseJobs}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg inline-flex items-center gap-2"
          >
            Browse All Jobs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Copenhagen English Jobs</span>
              </div>
              <p className="text-sm text-gray-400">
                The only job board exclusively for English-speaking opportunities in Copenhagen. No Danish required.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={onBrowseJobs} className="hover:text-white transition-colors">Browse Jobs</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Create Alert</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
            <p>&copy; 2026 Copenhagen English Jobs. Made with ❤️ for the international community in Copenhagen.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}