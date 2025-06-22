import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  Building2, 
  GraduationCap, 
  Users, 
  MapPin, 
  Wifi, 
  Monitor,
  BookOpen,
  Award,
  Filter,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PartneredCenters = () => {
  const { t } = useTranslation()
  const [filterType, setFilterType] = useState('all')

  const hubTypes = [
    { id: 'all', label: 'All Centers', icon: Building2 },
    { id: 'university', label: 'Universities', icon: GraduationCap },
    { id: 'school', label: 'Schools', icon: BookOpen },
    { id: 'tvet', label: 'TVET/Polytechnic', icon: Award },
    { id: 'mobile', label: 'Mobile Containers', icon: Monitor }
  ]

  const partneredCenters = [
    {
      id: 1,
      name: 'University of Nairobi Digital Hub',
      type: 'university',
      location: 'Nairobi, Kenya',
      students: 450,
      programs: ['AI & Machine Learning', 'Data Science', 'Digital Marketing'],
      established: '2023',
      status: 'Active',
      image: '/api/placeholder/400/250',
      description: 'Partnership with Kenya\'s premier university offering advanced digital skills to undergraduate and graduate students.',
      facilities: ['50 Computer Lab', 'High-Speed Internet', 'Smart Boards', 'Video Conferencing']
    },
    {
      id: 2,
      name: 'Smart Academy Kiambu',
      type: 'school',
      location: 'Kiambu, Kenya',
      students: 280,
      programs: ['Digital Literacy', 'Basic Coding', 'E-Commerce'],
      established: '2023',
      status: 'Active',
      image: '/api/placeholder/400/250',
      description: 'Government partnership through Kenya\'s Smart Academy initiative bringing digital skills to secondary school students.',
      facilities: ['30 Computer Lab', 'Fiber Internet', 'Interactive Displays', 'Solar Backup']
    },
    {
      id: 3,
      name: 'Kigali Innovation City Hub',
      type: 'tvet',
      location: 'Kigali, Rwanda',
      students: 320,
      programs: ['Fintech Development', 'Mobile App Design', 'Blockchain'],
      established: '2024',
      status: 'Active',
      image: '/api/placeholder/400/250',
      description: 'Strategic partnership with Rwanda\'s flagship innovation center focusing on emerging technologies.',
      facilities: ['40 Workstations', '5G Connectivity', 'VR/AR Lab', 'Maker Space']
    },
    {
      id: 4,
      name: 'Dakar Polytechnic Center',
      type: 'tvet',
      location: 'Dakar, Senegal',
      students: 200,
      programs: ['Web Development', 'Digital Design', 'Cybersecurity'],
      established: '2024',
      status: 'Launching',
      image: '/api/placeholder/400/250',
      description: 'French-language programs in partnership with Senegal\'s leading technical education institution.',
      facilities: ['25 Computer Lab', 'Satellite Internet', 'Design Studio', 'Testing Lab']
    }
  ]

  const filteredCenters = filterType === 'all' 
    ? partneredCenters 
    : partneredCenters.filter(center => center.type === filterType)

  const comparisonData = [
    {
      aspect: 'Setup Time',
      mobile: '2-4 weeks',
      partnered: '4-8 weeks',
      mobileIcon: '🚚',
      partneredIcon: '🏫'
    },
    {
      aspect: 'Capacity',
      mobile: '20-30 students',
      partnered: '50-200 students',
      mobileIcon: '👥',
      partneredIcon: '👨‍🎓'
    },
    {
      aspect: 'Location Flexibility',
      mobile: 'High - Mobile',
      partnered: 'Fixed - Institutional',
      mobileIcon: '🌍',
      partneredIcon: '🏛️'
    },
    {
      aspect: 'Infrastructure',
      mobile: 'Self-contained',
      partnered: 'Shared facilities',
      mobileIcon: '⚡',
      partneredIcon: '🔌'
    },
    {
      aspect: 'Sustainability',
      mobile: 'Solar powered',
      partnered: 'Institution supported',
      mobileIcon: '☀️',
      partneredIcon: '🤝'
    }
  ]

  const successMetrics = [
    { label: 'Partner Institutions', value: '15+', icon: Building2, color: 'text-blue-600' },
    { label: 'Students Enrolled', value: '1,250+', icon: Users, color: 'text-green-600' },
    { label: 'Programs Offered', value: '12', icon: BookOpen, color: 'text-purple-600' },
    { label: 'Countries Active', value: '4', icon: MapPin, color: 'text-orange-600' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Partnered Learning Centers
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Scaling digital empowerment through strategic partnerships with universities, schools, and technical institutions across Africa.
            </p>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Two Complementary Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile containers for rural flexibility and institutional partnerships for urban scale.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Aspect</th>
                  <th className="px-6 py-4 text-center">Mobile Container Hubs</th>
                  <th className="px-6 py-4 text-center">Partnered Learning Centers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl">{row.mobileIcon}</span>
                        <span>{row.mobile}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl">{row.partneredIcon}</span>
                        <span>{row.partnered}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
              Our Partner Network
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {hubTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => setFilterType(type.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      filterType === type.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{type.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Centers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCenters.map((center, index) => (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:shadow-2xl"
              >
                {/* Center Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building2 className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm opacity-80">Center Image</p>
                  </div>
                </div>

                {/* Center Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {center.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{center.location}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      center.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {center.status}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {center.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{center.students}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600">{center.programs.length}</div>
                      <div className="text-sm text-gray-600">Programs</div>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Programs</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Facilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {center.facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary w-full">
                    View Center Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8 lg:p-12 bg-gradient-to-br from-green-50 to-blue-50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Success Story</h3>
                    <p className="text-green-600 font-medium">Smart Africa Digital Academy Partnership</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Kenya's Smart Academy Initiative
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our partnership with Kenya's government-backed Smart Academy program has reached over 2,000 secondary school students across 15 counties. The program integrates digital literacy into the national curriculum, preparing students for the digital economy.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">2,000+</div>
                    <div className="text-sm text-gray-600">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">15</div>
                    <div className="text-sm text-gray-600">Counties Reached</div>
                  </div>
                </div>
                
                <a
                  href="https://www.smartacademy.go.ke/gok-digital-hubs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <span>Learn more about Smart Academy</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <GraduationCap className="w-20 h-20 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Smart Academy</p>
                    <p className="text-sm opacity-90">Kenya Partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Is your institution ready to become a Digital Empowerment Hub? Join our growing network of educational partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partnership-application"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Apply for Partnership</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/hub-dashboard"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>View Hub Dashboard</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PartneredCenters