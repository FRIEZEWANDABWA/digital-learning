import React from 'react'
import { motion } from 'framer-motion'
import { 
  Container, 
  Zap, 
  Wifi, 
  Users, 
  BookOpen, 
  Heart,
  Target,
  Globe,
  Award,
  Truck,
  Sun,
  Monitor,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react'
import ImagePlaceholder from '../components/ImagePlaceholder'

const About = () => {

  const hubFeatures = [
    {
      icon: Container,
      title: 'Mobile Container Hubs',
      description: 'Converted shipping containers equipped with state-of-the-art technology, designed for mobility and durability in challenging environments.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Sun,
      title: 'Solar-Powered Systems',
      description: 'Completely off-grid operation with advanced solar panels and battery storage, ensuring reliable power in remote locations.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Wifi,
      title: 'Satellite Connectivity',
      description: 'High-speed internet access via satellite technology, connecting remote communities to the global digital economy.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Monitor,
      title: 'Digital Classroom Setup',
      description: 'Interactive displays, tablets, and learning stations designed for collaborative and individual learning experiences.',
      color: 'bg-purple-100 text-purple-600'
    },
  ]

  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Digital Literacy',
      description: 'Basic computer skills, internet navigation, and digital communication tools.',
      stats: '85% improvement in digital skills'
    },
    {
      icon: Globe,
      title: 'E-Commerce & Freelancing',
      description: 'Online business skills, digital marketing, and remote work opportunities.',
      stats: '60% of graduates start online businesses'
    },
    {
      icon: Heart,
      title: 'Health Education',
      description: 'Digital health resources, telemedicine access, and health information literacy.',
      stats: '40% increase in health awareness'
    },
    {
      icon: Target,
      title: 'Information Verification',
      description: 'Critical thinking skills to identify and counter misinformation.',
      stats: '70% better at identifying fake news'
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Community Assessment',
      description: 'We work with local leaders to identify needs and select optimal locations for maximum impact.'
    },
    {
      step: '02',
      title: 'Hub Deployment',
      description: 'Mobile hubs are transported and set up in strategic locations like health centers, schools, and community centers.'
    },
    {
      step: '03',
      title: 'Local Training',
      description: 'Community members are trained as digital literacy facilitators and ongoing support providers.'
    },
    {
      step: '04',
      title: 'Program Launch',
      description: 'Comprehensive digital skills programs begin, tailored to local languages and cultural contexts.'
    },
    {
      step: '05',
      title: 'Impact Measurement',
      description: 'Continuous monitoring and evaluation to measure outcomes and improve program effectiveness.'
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Revolutionary Mobile Digital Hubs
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Solar-powered shipping containers transformed into digital classrooms, bringing cutting-edge technology and education to the most remote corners of Africa.
            </p>
          </motion.div>

          {/* Container Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImagePlaceholder 
                icon={Container}
                title="Container Exterior"
                subtitle="Solar panels & mobility"
                className="aspect-video rounded-2xl shadow-2xl"
                gradient="from-blue-500 via-purple-600 to-pink-600"
              />
              <ImagePlaceholder 
                icon={Monitor}
                title="Learning Interior"
                subtitle="20-30 workstations"
                className="aspect-video rounded-2xl shadow-2xl"
                gradient="from-green-500 via-teal-600 to-blue-600"
              />
            </div>
            <div className="mt-6 text-center">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hub Features */}
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
              How Our Digital Hubs Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each hub is a self-contained digital learning environment designed for sustainability, mobility, and maximum educational impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 hover:shadow-2xl"
                >
                  <div className={`w-16 h-16 mb-6 rounded-full ${feature.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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

      {/* Impact Areas */}
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
              Areas of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum addresses multiple aspects of digital empowerment and community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 hover:shadow-2xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="bg-success-50 text-success-700 px-4 py-2 rounded-lg inline-block">
                        <span className="font-semibold">{area.stats}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From community assessment to impact measurement, we follow a proven methodology for sustainable digital empowerment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Step number */}
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 relative z-10">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designs Available Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Container Designs Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our various container hub designs - from exterior setups to interior learning environments, showcasing mobility and modern educational facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Container House Design', 
                description: 'Complete container transformation with living and learning spaces',
                icon: Container,
                gradient: 'from-blue-500 via-indigo-600 to-purple-600'
              },
              { 
                title: 'Exterior Setup', 
                description: 'Solar panels, mobility features, and weather-resistant design',
                icon: Sun,
                gradient: 'from-yellow-400 via-orange-500 to-red-500'
              },
              { 
                title: 'Container Relocation', 
                description: 'Easy transport and quick deployment capabilities',
                icon: Truck,
                gradient: 'from-green-400 via-teal-500 to-blue-500'
              },
              { 
                title: 'Interior Learning Hub', 
                description: 'Modern classroom setup with interactive technology',
                icon: Monitor,
                gradient: 'from-purple-400 via-pink-500 to-red-500'
              },
              { 
                title: 'Bigger Learning Room', 
                description: 'Expanded classroom for larger groups and workshops',
                icon: Users,
                gradient: 'from-cyan-400 via-blue-500 to-indigo-600'
              },
              { 
                title: 'Mobile Learning Hub', 
                description: 'Compact and efficient design for remote deployment',
                icon: Wifi,
                gradient: 'from-emerald-400 via-green-500 to-teal-600'
              }
            ].map((design, index) => {
              const Icon = design.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden hover:shadow-2xl group"
                >
                  <div className={`h-48 bg-gradient-to-br ${design.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="text-center text-white relative z-10">
                      <Icon className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-lg font-semibold">{design.title}</p>
                      <p className="text-sm opacity-80">Container Design</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {design.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {design.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-1">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">Available</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Design Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Setup</h3>
              <p className="text-gray-600">
                All designs can be deployed within 2-4 weeks with minimal site preparation required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Relocation</h3>
              <p className="text-gray-600">
                Mobile design allows serving multiple communities based on seasonal needs and demand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Each design has been tested in real-world conditions across multiple African countries.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Interested in a Custom Design?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We can customize any of these designs to meet your specific community needs, local regulations, and environmental conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Request Custom Design
                </button>
                <button className="btn-outline">
                  Download Design Catalog
                </button>
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
              Bring Digital Empowerment to Your Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with us to establish a Digital Empowerment Hub in your region and transform lives through technology education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Request a Hub
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About