import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Container, 
  Monitor, 
  Sun, 
  Truck, 
  Users, 
  Wifi,
  ArrowRight,
  Download,
  Eye,
  Heart,
  Share2,
  Filter,
  Grid,
  List,
  CheckCircle,
  Star,
  Award
} from 'lucide-react'
import ImagePlaceholder from '../components/ImagePlaceholder'

const Designs = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const designs = [
    {
      id: 1,
      title: 'Container House Design',
      category: 'residential',
      description: 'Complete container transformation with living and learning spaces, perfect for long-term community programs.',
      features: ['Living quarters', 'Learning space', 'Kitchen facility', 'Bathroom'],
      capacity: '15-20 students',
      setupTime: '3-4 weeks',
      mobility: 'Semi-permanent',
      icon: Container,
      gradient: 'from-blue-500 via-indigo-600 to-purple-600',
      rating: 4.9,
      likes: 234,
      views: 1520
    },
    {
      id: 2,
      title: 'Solar Container Exterior',
      category: 'exterior',
      description: 'Advanced solar panel setup with weather-resistant design and optimal energy efficiency.',
      features: ['Solar panels', 'Battery storage', 'Weather protection', 'Ventilation'],
      capacity: '20-25 students',
      setupTime: '2-3 weeks',
      mobility: 'Fully mobile',
      icon: Sun,
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      rating: 4.8,
      likes: 189,
      views: 1340
    },
    {
      id: 3,
      title: 'Mobile Container Hub',
      category: 'mobile',
      description: 'Compact and efficient design optimized for quick deployment and frequent relocation.',
      features: ['Quick setup', 'Compact design', 'Essential equipment', 'Easy transport'],
      capacity: '15-18 students',
      setupTime: '1-2 weeks',
      mobility: 'Highly mobile',
      icon: Truck,
      gradient: 'from-green-400 via-teal-500 to-blue-500',
      rating: 4.7,
      likes: 156,
      views: 980
    },
    {
      id: 4,
      title: 'Interior Learning Hub',
      category: 'interior',
      description: 'Modern classroom setup with interactive technology and collaborative learning spaces.',
      features: ['Interactive displays', 'Computer stations', 'Collaborative areas', 'Storage'],
      capacity: '25-30 students',
      setupTime: '2-3 weeks',
      mobility: 'Fixed location',
      icon: Monitor,
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      rating: 4.9,
      likes: 298,
      views: 2100
    },
    {
      id: 5,
      title: 'Expanded Learning Room',
      category: 'interior',
      description: 'Larger classroom configuration for workshops, seminars, and community gatherings.',
      features: ['Extended space', 'Flexible seating', 'Presentation area', 'Group work zones'],
      capacity: '40-50 students',
      setupTime: '3-4 weeks',
      mobility: 'Semi-permanent',
      icon: Users,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      rating: 4.8,
      likes: 167,
      views: 1450
    },
    {
      id: 6,
      title: 'Connected Hub Network',
      category: 'technology',
      description: 'Advanced connectivity setup with satellite internet and local network infrastructure.',
      features: ['Satellite internet', 'Local network', 'Wi-Fi coverage', 'Tech support'],
      capacity: '30-35 students',
      setupTime: '2-3 weeks',
      mobility: 'Network dependent',
      icon: Wifi,
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      rating: 4.6,
      likes: 143,
      views: 1120
    }
  ]

  const categories = [
    { id: 'all', label: 'All Designs', count: designs.length },
    { id: 'exterior', label: 'Exterior', count: designs.filter(d => d.category === 'exterior').length },
    { id: 'interior', label: 'Interior', count: designs.filter(d => d.category === 'interior').length },
    { id: 'mobile', label: 'Mobile', count: designs.filter(d => d.category === 'mobile').length },
    { id: 'residential', label: 'Residential', count: designs.filter(d => d.category === 'residential').length },
    { id: 'technology', label: 'Technology', count: designs.filter(d => d.category === 'technology').length }
  ]

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory)

  const getMobilityColor = (mobility) => {
    switch (mobility) {
      case 'Highly mobile': return 'bg-green-100 text-green-700'
      case 'Fully mobile': return 'bg-blue-100 text-blue-700'
      case 'Semi-permanent': return 'bg-yellow-100 text-yellow-700'
      case 'Fixed location': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-success-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Container Designs Available
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of mobile learning hub designs - from compact mobile units to expanded learning centers, each optimized for different community needs.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Container className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">6</h3>
              <p className="text-gray-600">Design Options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15-50</h3>
              <p className="text-gray-600">Student Capacity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1-4</h3>
              <p className="text-gray-600">Weeks Setup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">Avg Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            {/* Categories */}
            <div className="mb-6 lg:mb-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">View:</span>
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Designs Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
            {filteredDesigns.map((design, index) => {
              const Icon = design.icon
              return (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card overflow-hidden hover:shadow-2xl group ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  {/* Design Image */}
                  <div className={`${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
                    <ImagePlaceholder 
                      icon={Icon}
                      title={design.title}
                      subtitle={`${design.capacity} capacity`}
                      className={viewMode === 'list' ? 'h-64 md:h-full' : 'h-64'}
                      gradient={design.gradient}
                    />
                  </div>

                  {/* Design Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {design.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{design.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{design.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{design.likes}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getMobilityColor(design.mobility)}`}>
                        {design.mobility}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {design.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {design.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-500">Capacity:</span>
                        <span className="font-medium text-gray-900 ml-2">{design.capacity}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Setup Time:</span>
                        <span className="font-medium text-gray-900 ml-2">{design.setupTime}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button className="btn-primary flex items-center space-x-2">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
              Ready to Choose Your Design?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our team will help you select the perfect container design for your community's specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Request Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Download Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Designs