import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Users, 
  MapPin, 
  BookOpen, 
  Zap,
  Globe,
  Heart,
  Award,
  TrendingUp,
  Monitor,
  Container,
  Wifi,
  Sun,
  GraduationCap,
  Building2
} from 'lucide-react'
import ImagePlaceholder from '../components/ImagePlaceholder'

const Home = () => {
  const stats = [
    { 
      icon: MapPin, 
      number: '26+', 
      label: 'Active Hubs',
      color: 'text-primary-600'
    },
    { 
      icon: Users, 
      number: '5,247+', 
      label: 'Students Trained',
      color: 'text-secondary-600'
    },
    { 
      icon: Globe, 
      number: '5', 
      label: 'Countries',
      color: 'text-success-600'
    },
    { 
      icon: Heart, 
      number: '150+', 
      label: 'Communities',
      color: 'text-pink-600'
    },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Solar-Powered',
      description: 'Sustainable energy solutions for remote locations',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Digital literacy, coding, e-commerce, and health education',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Community-Centered',
      description: 'Tailored programs for local needs and languages',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Data-driven approach to track progress and outcomes',
      color: 'bg-purple-100 text-purple-600'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 africa-pattern opacity-15"></div>
        <div className="absolute inset-0 colorful-dots opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Empowering Africa Through Digital Literacy
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Mobile Solar-Powered Digital Hubs Transforming Communities
            </p>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Bringing digital skills, health access, and verified information to underserved communities across Africa through innovative container-based learning centers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/about"
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <span>Explore Our Impact</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/stories"
                className="btn-outline text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Deployment Models Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Two Complementary Deployment Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile containers for rural flexibility and institutional partnerships for urban scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Mobile Container Model */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card overflow-hidden border-l-4 border-primary-500 hover:shadow-2xl"
            >
              {/* Container Image */}
              <ImagePlaceholder 
                icon={Container}
                title="Mobile Container Hub"
                subtitle="Solar-powered & fully equipped"
                className="h-48"
                gradient="from-blue-500 via-purple-500 to-green-500"
              />
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-600">Mobile Container Hubs</h3>
                </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Solar-powered shipping containers converted into digital classrooms, bringing technology directly to remote communities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">Fully mobile and self-contained</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">Solar-powered with battery backup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">Satellite internet connectivity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">20-30 student capacity</span>
                </li>
              </ul>
                <Link to="/about" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2">
                  <span>Learn more about mobile hubs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Partnered Centers Model */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card overflow-hidden border-l-4 border-secondary-500 hover:shadow-2xl"
            >
              {/* University Partnership Image */}
              <ImagePlaceholder 
                icon={GraduationCap}
                title="University Partnership"
                subtitle="50-200+ student capacity"
                className="h-48"
                gradient="from-orange-500 via-red-500 to-pink-500"
              />
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-600">Partnered Learning Centers</h3>
                </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic partnerships with universities, schools, and technical institutions to scale digital education.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">Existing institutional infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">Shared resources and facilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">High-speed internet and power</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span className="text-gray-700">50-200+ student capacity</span>
                </li>
              </ul>
                <Link to="/partnered-centers" className="text-secondary-600 hover:text-secondary-700 font-semibold flex items-center space-x-2">
                  <span>Explore partnered centers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Countries Preview */}
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
              Our Presence Across Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Localized programs tailored to each community's needs
            </p>
            <Link
              to="/countries"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Explore All Countries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { flag: '🇰🇪', name: 'Kenya', students: '2,000+', color: 'from-green-400 to-red-400' },
              { flag: '🇸🇳', name: 'Senegal', students: '1,200+', color: 'from-green-400 to-yellow-400' },
              { flag: '🇷🇼', name: 'Rwanda', students: '800+', color: 'from-blue-400 to-yellow-400' },
              { flag: '🇪🇹', name: 'Ethiopia', students: '600+', color: 'from-green-400 to-red-400' },
              { flag: '🇿🇦', name: 'South Africa', students: '400+', color: 'from-blue-400 to-green-400' },
            ].map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${country.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{country.flag}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {country.name}
                </h3>
                <p className="text-primary-600 font-medium">{country.students}</p>
                <div className="mt-3 text-xs text-gray-500">Active Students</div>
              </motion.div>
            ))}
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us in empowering African communities through digital education and sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partnership-application"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home