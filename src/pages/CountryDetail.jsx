import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, Award, Calendar, ExternalLink } from 'lucide-react'

const CountryDetail = () => {
  const { countryId } = useParams()

  // This would typically come from an API or data file
  const countryData = {
    kenya: {
      name: 'Kenya',
      flag: '🇰🇪',
      languages: ['English', 'Kiswahili'],
      description: 'Kenya serves as our flagship program and regional headquarters, demonstrating the full potential of digital empowerment hubs across diverse communities.',
      stats: {
        hubs: 8,
        students: 2000,
        communities: 45,
        graduates: 1500,
        employmentRate: '78%'
      },
      locations: [
        { name: 'Nairobi Tech Hub', type: 'Urban Center', students: 500 },
        { name: 'Kibera Community Center', type: 'Urban Informal', students: 300 },
        { name: 'Nakuru Health Center', type: 'Rural Health', students: 200 },
        { name: 'Mombasa Port Hub', type: 'Coastal Trade', students: 250 }
      ],
      programs: [
        {
          name: 'Digital Literacy Fundamentals',
          duration: '4 weeks',
          participants: 800,
          description: 'Basic computer skills, internet navigation, and digital communication'
        },
        {
          name: 'E-Commerce for SMEs',
          duration: '6 weeks',
          participants: 400,
          description: 'Online business setup, digital marketing, and payment systems'
        },
        {
          name: 'Health Information Systems',
          duration: '8 weeks',
          participants: 300,
          description: 'Digital health records, telemedicine, and health data management'
        }
      ],
      partners: [
        'Kenya Ministry of ICT',
        'Safaricom Foundation',
        'iHub Nairobi',
        'Kenya Red Cross',
        'USAID Kenya'
      ],
      stories: [
        {
          name: 'Grace Wanjiku',
          age: 28,
          location: 'Kibera, Nairobi',
          story: 'Started an online tailoring business after completing our e-commerce program. Now earning 3x her previous income.',
          image: '/api/placeholder/150/150'
        },
        {
          name: 'David Kimani',
          age: 35,
          location: 'Nakuru',
          story: 'Health worker who digitized patient records for his clinic, improving care for 500+ patients.',
          image: '/api/placeholder/150/150'
        }
      ]
    }
    // Add other countries here...
  }

  const country = countryData[countryId]

  if (!country) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <Link to="/countries" className="btn-primary">
            Back to Countries
          </Link>
        </div>
      </div>
    )
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
          >
            {/* Back Button */}
            <Link
              to="/countries"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Countries</span>
            </Link>

            <div className="flex items-center space-x-6 mb-8">
              <span className="text-8xl">{country.flag}</span>
              <div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-2">
                  {country.name}
                </h1>
                <p className="text-xl text-gray-600">
                  Languages: {country.languages.join(' • ')}
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              {country.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
          >
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{country.stats.hubs}</h3>
              <p className="text-gray-600">Active Hubs</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{country.stats.students.toLocaleString()}</h3>
              <p className="text-gray-600">Students Trained</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-success-100 text-success-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{country.stats.communities}</h3>
              <p className="text-gray-600">Communities</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{country.stats.graduates.toLocaleString()}</h3>
              <p className="text-gray-600">Graduates</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{country.stats.employmentRate}</h3>
              <p className="text-gray-600">Employment Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hub Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 text-center">
              Hub Locations
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Strategic placement across diverse communities to maximize impact and accessibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {location.name}
                    </h3>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {location.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{location.students}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">View on Map</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 text-center">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Comprehensive curriculum designed for local needs and delivered in local languages.
            </p>
          </motion.div>

          <div className="space-y-8">
            {country.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {program.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{program.participants} participants</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn-outline mt-4 md:mt-0">
                    Learn More
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 text-center">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Real people, real impact - stories from our program graduates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-gray-600">Age {story.age} • {story.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{story.story}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-8">
              Local Partners
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {country.partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-6 py-3 rounded-lg text-gray-700 font-medium"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CountryDetail