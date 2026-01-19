import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Building2, Clock, ExternalLink, Filter, X } from 'lucide-react';

export default function CopenhagenJobBoard() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample job data - in production, this would come from an API or database
  const sampleJobs = [
    {
      id: 1,
      title: 'Account Executive',
      company: 'TechStart Copenhagen',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Sales',
      salary: '400,000 - 550,000 DKK',
      posted: '2 days ago',
      description: 'Join our fast-growing SaaS company as an Account Executive. English is our company language.',
      requirements: ['2+ years B2B sales experience', 'Fluent English', 'EU work permit'],
      url: '#'
    },
    {
      id: 2,
      title: 'Customer Success Manager',
      company: 'Nordic Solutions',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Customer Success',
      salary: '450,000 - 600,000 DKK',
      posted: '1 week ago',
      description: 'Help our international clients succeed. Work in English with global teams.',
      requirements: ['3+ years CS experience', 'English fluency', 'SaaS background'],
      url: '#'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency DK',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Tech',
      salary: '500,000 - 650,000 DKK',
      posted: '3 days ago',
      description: 'Build amazing web experiences. English-speaking team environment.',
      requirements: ['React expertise', 'English communication', 'Portfolio required'],
      url: '#'
    },
    {
      id: 4,
      title: 'Marketing Manager',
      company: 'Global Brand Co',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Marketing',
      salary: '480,000 - 620,000 DKK',
      posted: '5 days ago',
      description: 'Lead marketing initiatives for our Nordic expansion. English is our working language.',
      requirements: ['5+ years marketing', 'Digital marketing skills', 'English native/fluent'],
      url: '#'
    },
    {
      id: 5,
      title: 'Junior Account Executive',
      company: 'SaaS Innovators',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Sales',
      salary: '350,000 - 450,000 DKK',
      posted: '1 day ago',
      description: 'Start your sales career in a supportive, English-speaking environment.',
      requirements: ['0-2 years experience', 'Excellent English', 'Growth mindset'],
      url: '#'
    },
    {
      id: 6,
      title: 'Product Designer',
      company: 'Design Studio CPH',
      location: 'Copenhagen, Denmark',
      type: 'Contract',
      category: 'Design',
      salary: '550,000 - 700,000 DKK',
      posted: '4 days ago',
      description: 'Create beautiful user experiences. International team, English language.',
      requirements: ['Figma expert', 'Portfolio required', 'English fluency'],
      url: '#'
    }
  ];

  useEffect(() => {
    setJobs(sampleJobs);
  }, []);

  const categories = ['all', 'Sales', 'Customer Success', 'Tech', 'Marketing', 'Design'];
  const jobTypes = ['all', 'Full-time', 'Contract', 'Part-time'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Copenhagen English Jobs
              </h1>
              <p className="text-gray-600 mt-1">Find your next opportunity in Denmark's capital</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Copenhagen, Denmark</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title, company, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> English-speaking job{filteredJobs.length !== 1 ? 's' : ''} in Copenhagen
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.posted}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {job.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {job.salary}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-6">
                    <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Post Your Job Opening</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Looking to hire English-speaking talent in Copenhagen? Reach thousands of qualified candidates actively seeking opportunities.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Post a Job
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Copenhagen English Jobs</h3>
              <p className="text-sm">
                Connecting international talent with English-speaking opportunities in Copenhagen.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Living in Copenhagen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Work Permits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2026 Copenhagen English Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}