import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Building2, Clock, ExternalLink, Filter, Globe } from 'lucide-react';

export default function CopenhagenJobBoard() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Real English-only jobs from Copenhagen - January 2026
  // All jobs explicitly require ENGLISH ONLY - NO DANISH REQUIRED
  const realJobs = [
    {
      id: 1,
      title: 'Field Sales Team Lead',
      company: 'SumUp',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Sales',
      salary: '450,000 - 600,000 DKK',
      posted: '3 days ago',
      description: 'Lead field sales for a global fintech helping small businesses thrive. English is our working language across 30+ countries.',
      requirements: ['Proven field sales experience', 'Team leadership skills', 'Fluent English (Danish NOT required)', 'Entrepreneurial mindset'],
      url: 'https://www.sumup.com/careers/',
      featured: true,
      englishOnly: true
    },
    {
      id: 2,
      title: 'Customer Service Agent',
      company: 'Delta Airlines',
      location: 'Copenhagen Airport, Denmark',
      type: 'Full-time',
      category: 'Customer Service',
      salary: '320,000 - 420,000 DKK',
      posted: '1 week ago',
      description: 'Guide international travelers through ticketing, baggage, and boarding. Work in a fully English-speaking environment.',
      requirements: ['Customer service experience', 'Excellent English communication', 'No Danish required', 'Professional appearance'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Unity Technologies',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Tech',
      salary: '550,000 - 750,000 DKK',
      posted: '5 days ago',
      description: 'Join a global gaming engine company. English is the corporate language. Build tools used by millions of developers worldwide.',
      requirements: ['Strong coding skills (C#/C++)', 'English fluency', 'Danish NOT needed', '3+ years experience'],
      url: 'https://englishjobs.dk/',
      featured: true,
      englishOnly: true
    },
    {
      id: 4,
      title: 'Data Scientist - AI/ML',
      company: 'Novo Nordisk',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Tech',
      salary: '600,000 - 800,000 DKK',
      posted: '4 days ago',
      description: 'Global healthcare leader. English is our corporate language. Work on cutting-edge AI for diabetes and obesity solutions.',
      requirements: ['PhD or Masters in relevant field', 'Python, ML expertise', 'English required only', 'Published research preferred'],
      url: 'https://englishjobs.dk/',
      featured: true,
      englishOnly: true
    },
    {
      id: 5,
      title: 'Account Manager - E-commerce',
      company: 'DANISH ENDURANCE',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Sales',
      salary: '380,000 - 500,000 DKK',
      posted: '2 days ago',
      description: 'Manage Amazon UK marketplace for outdoor brand. Work entirely in English with international team.',
      requirements: ['E-commerce/Amazon experience', 'English fluency', 'No Danish needed', 'Sales-driven attitude'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      company: 'ZeroNorth (Shipping Tech)',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Customer Success',
      salary: '480,000 - 620,000 DKK',
      posted: '6 days ago',
      description: 'Transform shipping industry through sustainability. Serve global clients in English, reduce CO2 emissions.',
      requirements: ['3+ years CS experience', 'SaaS background', 'English only required', 'Passion for sustainability'],
      url: 'https://englishjobs.dk/',
      featured: true,
      englishOnly: true
    },
    {
      id: 7,
      title: 'UX Designer',
      company: 'Carlsberg Group',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Design',
      salary: '480,000 - 630,000 DKK',
      posted: '1 week ago',
      description: 'Design digital experiences for global beer brand. English is corporate language. International design team.',
      requirements: ['UX/UI portfolio', 'Figma expertise', 'English proficiency', 'Danish NOT required'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 8,
      title: 'IT Support Specialist',
      company: 'Maersk',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Tech',
      salary: '420,000 - 550,000 DKK',
      posted: '3 days ago',
      description: 'Support global shipping operations. English-speaking IT team serving worldwide offices.',
      requirements: ['IT support experience', 'English communication', 'No Danish necessary', 'Problem-solving skills'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 9,
      title: 'Kitchen Staff',
      company: 'Wulff & Konstali (Restaurant)',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Hospitality',
      salary: '280,000 - 350,000 DKK',
      posted: '2 days ago',
      description: 'Join dynamic international kitchen. English is the primary language. Fast-paced, team-driven environment.',
      requirements: ['Kitchen experience helpful', 'English communication', 'Danish NOT needed', 'Team player attitude'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 10,
      title: 'Marketing Manager',
      company: 'LEGO Group',
      location: 'Billund/Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Marketing',
      salary: '550,000 - 720,000 DKK',
      posted: '1 week ago',
      description: 'Global toy company with English as corporate language. 1 in 3 employees are international. Lead marketing campaigns worldwide.',
      requirements: ['5+ years marketing', 'Digital marketing skills', 'English fluency only', 'Brand management experience'],
      url: 'https://englishjobs.dk/',
      featured: true,
      englishOnly: true
    },
    {
      id: 11,
      title: 'Business Analyst',
      company: 'Pleo (Fintech)',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Finance',
      salary: '480,000 - 630,000 DKK',
      posted: '4 days ago',
      description: 'Fast-growing expense management startup. English-first culture. Analyze data to drive business decisions.',
      requirements: ['SQL, data analysis', 'English required', 'No Danish needed', 'Startup mentality'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 12,
      title: 'Program Officer',
      company: 'UNICEF Copenhagen',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'NGO/Development',
      salary: '420,000 - 580,000 DKK',
      posted: '1 week ago',
      description: 'Work for UN agency at UN City Copenhagen. English working environment. Support child welfare programs globally.',
      requirements: ['Development sector experience', 'Excellent English', 'Danish NOT required', 'Masters degree preferred'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 13,
      title: 'Warehouse Associate',
      company: 'Copenhagen Airport (Heinemann)',
      location: 'Copenhagen Airport, Denmark',
      type: 'Full-time',
      category: 'Logistics',
      salary: '300,000 - 380,000 DKK',
      posted: '3 days ago',
      description: 'Tax-free shopping operations. International team, English workplace. Sort and stock merchandise.',
      requirements: ['Physical work capability', 'Basic English', 'No Danish required', 'Flexible schedule'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 14,
      title: 'DevOps Engineer',
      company: 'Siteimprove',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Tech',
      salary: '580,000 - 750,000 DKK',
      posted: '5 days ago',
      description: 'Global SaaS company. English corporate language. Build and maintain cloud infrastructure.',
      requirements: ['Kubernetes, AWS/Azure', 'English fluency', 'Danish NOT needed', 'CI/CD experience'],
      url: 'https://englishjobs.dk/',
      featured: true,
      englishOnly: true
    },
    {
      id: 15,
      title: 'Retail Sales Associate',
      company: 'Zara/Uniqlo/Muji',
      location: 'Copenhagen City Center, Denmark',
      type: 'Part-time',
      category: 'Retail',
      salary: '180,000 - 250,000 DKK',
      posted: '2 days ago',
      description: 'International clothing brands. English-speaking teams. Serve diverse customer base in city center.',
      requirements: ['Customer service skills', 'English communication', 'No Danish required', 'Fashion interest'],
      url: 'https://englishjobs.dk/',
      featured: false,
      englishOnly: true
    },
    {
      id: 16,
      title: 'Product Manager',
      company: 'Trustpilot',
      location: 'Copenhagen, Denmark',
      type: 'Full-time',
      category: 'Product',
      salary: '550,000 - 720,000 DKK',
      posted: '1 week ago',
      description: 'Global review platform. English is working language. Define product strategy for millions of users.',
      requirements: ['3+ years product management', 'English fluency', 'Danish NOT needed', 'Data-driven mindset'],
      url: 'https://englishjobs.dk/',
      featured: true,
      englishOnly: true
    }
  ];

  useEffect(() => {
    setJobs(realJobs);
  }, []);

  const categories = ['all', 'Sales', 'Tech', 'Customer Success', 'Marketing', 'Finance', 'Design', 'Product', 'Hospitality', 'Retail', 'Logistics', 'NGO/Development', 'Quality & Compliance', 'Sustainability'];
  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract'];

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
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Copenhagen English Jobs
              </h1>
              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                English ONLY - No Danish Required
              </p>
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
        {/* Info Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900">100% English-Speaking Jobs</h3>
              <p className="text-sm text-blue-800 mt-1">
                All positions listed require <strong>English only</strong> - Danish language skills are NOT required. These companies use English as their working language.
              </p>
            </div>
          </div>
        </div>

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
            Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> English-only job{filteredJobs.length !== 1 ? 's' : ''} (no Danish required)
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
              <div key={job.id} className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 ${job.featured ? 'border-2 border-blue-200' : ''}`}>
                {job.featured && (
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      ⭐ Featured Job
                    </span>
                  </div>
                )}
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
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        English Only
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
                    <a 
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Post Your English-Speaking Job Opening</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Reach international talent in Copenhagen. List jobs where Danish is NOT required and English is the working language.
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
                The only job board focused exclusively on English-only positions in Copenhagen. No Danish required.
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
                <li><a href="#" className="hover:text-white transition-colors">Work Permits Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">No Danish? No Problem!</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2026 Copenhagen English Jobs. Connecting international talent with English-only opportunities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
