import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  Building,
  MessageSquare,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    subject: '',
    message: '',
    type: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        organization: '',
        country: '',
        subject: '',
        message: '',
        type: 'general'
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@digiliftafrica.org',
      description: 'Get in touch for partnerships and inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 700 000 000',
      description: 'Monday to Friday, 9AM - 5PM EAT'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      description: 'Regional headquarters and training center'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '24-48 hours',
      description: 'We respond to all inquiries promptly'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'hub-request', label: 'Request a Hub' },
    { value: 'volunteer', label: 'Volunteer Application' },
    { value: 'media', label: 'Media & Press' },
    { value: 'technical', label: 'Technical Support' }
  ]

  const countries = [
    'Kenya', 'Senegal', 'Rwanda', 'Ethiopia', 'South Africa', 'Other'
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
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring digital empowerment to your community? Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center hover:shadow-2xl"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-primary-600 mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-success-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Organization & Country */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your organization"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                          >
                            <option value="">Select your country</option>
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Inquiry *
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Brief subject line"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your inquiry, project, or how we can help..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner w-5 h-5"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our Locations
                </h3>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map Coming Soon</p>
                    <p className="text-sm text-gray-500">Hub locations across Africa</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Headquarters</h4>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-secondary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Regional Offices</h4>
                      <p className="text-gray-600">Dakar, Kigali, Addis Ababa, Cape Town</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How long does it take to set up a hub?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Typically 2-4 weeks from approval to full operation, including community training.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What are the requirements for hosting a hub?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A committed community partner, suitable location, and local support for ongoing operations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Is there a cost to communities?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Our programs are free to participants. We work with donors and partners to fund operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact