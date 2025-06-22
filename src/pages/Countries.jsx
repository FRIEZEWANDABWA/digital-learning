import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Users, MapPin, Award, TrendingUp } from 'lucide-react'

const Countries = () => {
  const { t } = useTranslation()

  const countries = [
    {
      id: 'kenya',
      name: 'Kenya',
      flag: '🇰🇪',
      languages: ['English', 'Kiswahili'],
      hubs: 8,
      students: 2000,
      communities: 45,
      description: 'Leading digital transformation in East Africa with comprehensive programs in urban and rural communities.',
      highlights: ['Nairobi Tech Hub', 'Rural School Programs', 'Health Center Integration'],
      color: 'from-green-500 to-red-500'
    },
    {
      id: 'senegal',
      name: 'Senegal',
      flag: '🇸🇳',
      languages: ['French', 'Wolof'],
      hubs: 6,
      students: 1200,
      communities: 30,
      description: 'Empowering West African communities through French-language digital literacy programs.',
      highlights: ['Dakar Innovation Center', 'Women Entrepreneurs Program', 'Youth Coding Bootcamps'],
      color: 'from-green-500 to-yellow-500'
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      flag: '🇷🇼',
      languages: ['Kinyarwanda', 'English', 'French'],
      hubs: 5,
      students: 800,
      communities: 25,
      description: 'Supporting Rwanda\'s digital transformation goals with community-centered education.',
      highlights: ['Kigali Digital Village', 'Genocide Memorial Education', 'Agricultural Tech Training'],
      color: 'from-blue-500 to-yellow-500'
    },
    {
      id: 'ethiopia',
      name: 'Ethiopia',
      flag: '🇪🇹',
      languages: ['Amharic', 'English'],
      hubs: 4,
      students: 600,
      communities: 20,
      description: 'Bridging the digital divide in one of Africa\'s most populous nations.',
      highlights: ['Addis Ababa Tech Center', 'Coffee Farmer Digital Tools', 'Healthcare Worker Training'],
      color: 'from-green-500 to-red-500'
    },
    {
      id: 'south-africa',
      name: 'South Africa',
      flag: '🇿🇦',
      languages: ['English', 'isiZulu', 'Afrikaans'],
      hubs: 3,
      students: 400,
      communities: 15,
      description: 'Addressing inequality through digital empowerment in townships and rural areas.',
      highlights: ['Cape Town Innovation Hub', 'Township Digital Centers', 'Youth Employment Programs'],
      color: 'from-blue-500 to-green-500'
    }
  ]

  const totalStats = {
    hubs: countries.reduce((sum, country) => sum + country.hubs, 0),
    students: countries.reduce((sum, country) => sum + country.students, 0),
    communities: countries.reduce((sum, country) => sum + country.communities, 0)
  }

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
              Our Presence Across Africa
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Localized programs tailored to each community's unique needs, languages, and cultural contexts.
            </p>
          </motion.div>

          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{totalStats.hubs}</h3>
              <p className="text-gray-600 font-medium">Active Hubs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{totalStats.students.toLocaleString()}</h3>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-success-100 text-success-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{totalStats.communities}</h3>
              <p className="text-gray-600 font-medium">Communities Served</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:shadow-2xl"
              >
                {/* Country Header */}
                <div className={`bg-gradient-to-r ${country.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{country.name}</h3>
                        <p className="opacity-90">
                          {country.languages.join(' • ')}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/countries/${country.id}`}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">{country.hubs}</div>
                      <div className="text-sm opacity-90">Hubs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{country.students.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{country.communities}</div>
                      <div className="text-sm opacity-90">Communities</div>
                    </div>
                  </div>
                </div>

                {/* Country Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <div className="space-y-2">
                      {country.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/countries/${country.id}`}
                    className="btn-primary w-full text-center inline-block"
                  >
                    Explore {country.name} Programs
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
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
              Expansion Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're actively exploring opportunities to expand our digital empowerment programs to additional African countries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                country: 'Nigeria',
                flag: '🇳🇬',
                status: 'Planning Phase',
                timeline: '2024 Q3',
                focus: 'Lagos & Abuja tech ecosystems'
              },
              {
                country: 'Ghana',
                flag: '🇬🇭',
                status: 'Partnership Development',
                timeline: '2024 Q4',
                focus: 'Accra innovation hub'
              },
              {
                country: 'Tanzania',
                flag: '🇹🇿',
                status: 'Feasibility Study',
                timeline: '2025 Q1',
                focus: 'Dar es Salaam & rural areas'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">{plan.flag}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.country}
                </h3>
                <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {plan.status}
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Timeline:</strong> {plan.timeline}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Focus:</strong> {plan.focus}
                </p>
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
              Bring Digilift to Your Country
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Interested in establishing digital empowerment hubs in your region? Let's explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Countries