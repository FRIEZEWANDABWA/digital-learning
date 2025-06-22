import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  GraduationCap, 
  Users, 
  MapPin, 
  Wifi, 
  Monitor,
  BookOpen,
  Award,
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  Globe,
  Phone,
  Mail
} from 'lucide-react'

const PartnershipApplication = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Institution Details
    institutionName: '',
    institutionType: '',
    establishedYear: '',
    studentCount: '',
    location: '',
    country: '',
    website: '',
    
    // Contact Information
    contactName: '',
    contactTitle: '',
    contactEmail: '',
    contactPhone: '',
    
    // Infrastructure
    availableSpace: '',
    powerSupply: '',
    internetConnection: '',
    existingComputers: '',
    
    // Program Preferences
    preferredPrograms: [],
    languageOfInstruction: '',
    expectedStudents: '',
    startDate: '',
    
    // Additional Information
    motivation: '',
    previousExperience: '',
    additionalSupport: ''
  })

  const institutionTypes = [
    { value: 'university', label: 'University', icon: GraduationCap },
    { value: 'college', label: 'College', icon: Building2 },
    { value: 'secondary-school', label: 'Secondary School', icon: BookOpen },
    { value: 'tvet', label: 'TVET/Polytechnic', icon: Award },
    { value: 'training-center', label: 'Training Center', icon: Users }
  ]

  const availablePrograms = [
    'Digital Literacy Fundamentals',
    'Web Development',
    'Mobile App Development',
    'Data Science & Analytics',
    'Digital Marketing',
    'E-Commerce & Online Business',
    'Cybersecurity Basics',
    'AI & Machine Learning',
    'Graphic Design',
    'Video Production',
    'Financial Technology',
    'Health Information Systems'
  ]

  const countries = [
    'Kenya', 'Senegal', 'Rwanda', 'Ethiopia', 'South Africa', 
    'Nigeria', 'Ghana', 'Tanzania', 'Uganda', 'Other'
  ]

  const languages = [
    'English', 'Kiswahili', 'French', 'Kinyarwanda', 
    'Amharic', 'isiZulu', 'Hausa', 'Yoruba', 'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (name === 'preferredPrograms') {
        setFormData(prev => ({
          ...prev,
          preferredPrograms: checked 
            ? [...prev.preferredPrograms, value]
            : prev.preferredPrograms.filter(program => program !== value)
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 2000)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const steps = [
    { number: 1, title: 'Institution Details', icon: Building2 },
    { number: 2, title: 'Infrastructure & Capacity', icon: Monitor },
    { number: 3, title: 'Program Preferences', icon: BookOpen },
    { number: 4, title: 'Review & Submit', icon: Send }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-12 text-center max-w-2xl mx-4"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for your interest in becoming a Digital Empowerment Hub partner. 
            Our team will review your application and contact you within 5-7 business days.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
            <ul className="text-left text-blue-800 space-y-2">
              <li>• Initial review of your application (2-3 days)</li>
              <li>• Site assessment and feasibility study (1-2 weeks)</li>
              <li>• Partnership agreement and setup planning (2-3 weeks)</li>
              <li>• Hub launch and training program start (4-6 weeks)</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setIsSubmitted(false)
                setCurrentStep(1)
                setFormData({})
              }}
              className="btn-outline"
            >
              Submit Another Application
            </button>
            <a href="/contact" className="btn-primary">
              Contact Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Partnership Application
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of educational institutions bringing digital empowerment to communities across Africa.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 overflow-x-auto pb-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.number
                const isCompleted = currentStep > step.number
                
                return (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary-600 text-white' 
                        : isCompleted 
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                      <div className="hidden sm:block">
                        <div className="font-medium">{step.title}</div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-2 ${
                        currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-8">
            {/* Step 1: Institution Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-primary-600" />
                  Institution Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Name *
                    </label>
                    <input
                      type="text"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter institution name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Type *
                    </label>
                    <select
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      {institutionTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year Established
                    </label>
                    <input
                      type="number"
                      name="establishedYear"
                      value={formData.establishedYear}
                      onChange={handleInputChange}
                      min="1900"
                      max="2024"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g. 2010"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Student Count
                    </label>
                    <input
                      type="number"
                      name="studentCount"
                      value={formData.studentCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g. 1500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location (City) *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g. Nairobi"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://www.example.com"
                  />
                </div>

                {/* Contact Information */}
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Contact person name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title/Position *
                    </label>
                    <input
                      type="text"
                      name="contactTitle"
                      value={formData.contactTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g. Dean, Director, Principal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="contact@institution.edu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Infrastructure */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Monitor className="w-6 h-6 mr-3 text-primary-600" />
                  Infrastructure & Capacity
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Space for Digital Hub *
                    </label>
                    <select
                      name="availableSpace"
                      value={formData.availableSpace}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select available space</option>
                      <option value="classroom-small">Small Classroom (20-30 students)</option>
                      <option value="classroom-large">Large Classroom (40-60 students)</option>
                      <option value="computer-lab">Existing Computer Lab</option>
                      <option value="lecture-hall">Lecture Hall (80+ students)</option>
                      <option value="dedicated-building">Dedicated Building/Floor</option>
                      <option value="other">Other (please specify in comments)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Power Supply Status *
                    </label>
                    <select
                      name="powerSupply"
                      value={formData.powerSupply}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select power supply status</option>
                      <option value="reliable-grid">Reliable Grid Connection</option>
                      <option value="intermittent-grid">Intermittent Grid Connection</option>
                      <option value="generator-backup">Generator Backup Available</option>
                      <option value="solar-existing">Existing Solar Installation</option>
                      <option value="no-reliable-power">No Reliable Power Source</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Internet Connectivity *
                    </label>
                    <select
                      name="internetConnection"
                      value={formData.internetConnection}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select internet connectivity</option>
                      <option value="fiber-high-speed">Fiber - High Speed (50+ Mbps)</option>
                      <option value="fiber-standard">Fiber - Standard (10-50 Mbps)</option>
                      <option value="wireless-4g">4G/LTE Wireless</option>
                      <option value="satellite">Satellite Internet</option>
                      <option value="limited-connectivity">Limited/Slow Connectivity</option>
                      <option value="no-internet">No Internet Connection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Existing Computer Equipment
                    </label>
                    <select
                      name="existingComputers"
                      value={formData.existingComputers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select existing equipment</option>
                      <option value="none">No Computers Available</option>
                      <option value="few-old">Few Old Computers (5-10)</option>
                      <option value="some-mixed">Some Mixed Equipment (10-20)</option>
                      <option value="good-lab">Good Computer Lab (20-40)</option>
                      <option value="multiple-labs">Multiple Computer Labs (40+)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Program Preferences */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary-600" />
                  Program Preferences
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Preferred Training Programs * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {availablePrograms.map(program => (
                        <label key={program} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            name="preferredPrograms"
                            value={program}
                            checked={formData.preferredPrograms?.includes(program)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700">{program}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Language of Instruction *
                      </label>
                      <select
                        name="languageOfInstruction"
                        value={formData.languageOfInstruction}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select language</option>
                        {languages.map(language => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Number of Students *
                      </label>
                      <select
                        name="expectedStudents"
                        value={formData.expectedStudents}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select expected students</option>
                        <option value="20-50">20-50 students</option>
                        <option value="50-100">50-100 students</option>
                        <option value="100-200">100-200 students</option>
                        <option value="200-500">200-500 students</option>
                        <option value="500+">500+ students</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motivation for Partnership *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us why you want to partner with Digilift Africa and how this aligns with your institution's goals..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Digital Education Experience
                    </label>
                    <textarea
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Describe any previous experience with digital education programs, partnerships, or technology training..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Support Needed
                    </label>
                    <textarea
                      name="additionalSupport"
                      value={formData.additionalSupport}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="What additional support would you need from Digilift Africa? (e.g., equipment, training, funding assistance)..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary-600" />
                  Review & Submit
                </h2>

                <div className="space-y-6">
                  {/* Institution Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Institution Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><strong>Name:</strong> {formData.institutionName}</div>
                      <div><strong>Type:</strong> {formData.institutionType}</div>
                      <div><strong>Location:</strong> {formData.location}, {formData.country}</div>
                      <div><strong>Contact:</strong> {formData.contactName} ({formData.contactTitle})</div>
                    </div>
                  </div>

                  {/* Program Summary */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Preferences</h3>
                    <div className="text-sm space-y-2">
                      <div><strong>Expected Students:</strong> {formData.expectedStudents}</div>
                      <div><strong>Language:</strong> {formData.languageOfInstruction}</div>
                      <div><strong>Selected Programs:</strong></div>
                      <ul className="list-disc list-inside ml-4">
                        {formData.preferredPrograms?.map(program => (
                          <li key={program}>{program}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Information</h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Partnership agreements are subject to feasibility assessment</li>
                          <li>• Equipment and training are provided at no cost to qualifying institutions</li>
                          <li>• Partners commit to program sustainability and ongoing support</li>
                          <li>• Regular reporting and impact measurement is required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the terms and conditions and confirm that all information provided is accurate *
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PartnershipApplication