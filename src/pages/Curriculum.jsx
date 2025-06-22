import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Monitor, 
  Globe, 
  Smartphone, 
  Sprout, 
  Heart, 
  Shield, 
  AlertTriangle,
  Brain,
  Code,
  Palette,
  Award,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Star,
  Container,
  Wifi,
  Sun,
  Truck
} from 'lucide-react'
import ImagePlaceholder from '../components/ImagePlaceholder'

const Curriculum = () => {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const courses = [
    {
      id: 1,
      title: 'Basic Computer Literacy',
      icon: Monitor,
      category: 'fundamentals',
      level: 'beginner',
      duration: '4 weeks',
      students: 1250,
      rating: 4.8,
      description: 'Master the fundamentals of computer operation, file management, and essential software.',
      topics: [
        'Using keyboard, mouse, and basic navigation',
        'Windows/Linux operating systems',
        'MS Office / Google Docs suite',
        'Internet browsing and email'
      ],
      impact: 'Essential foundation for any digital job or future learning',
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-500'
    },
    {
      id: 2,
      title: 'Digital Jobs & Online Earning',
      icon: Globe,
      category: 'income',
      level: 'beginner',
      duration: '3 weeks',
      students: 890,
      rating: 4.9,
      description: 'Learn how to earn money online through freelancing and digital work opportunities.',
      topics: [
        'Freelancing platforms (Fiverr, Upwork)',
        'Paid surveys and microtasks',
        'Remote data labeling for AI/ML',
        'Digital work ethics and scam awareness'
      ],
      impact: 'Fast way to generate income with minimal barriers to entry',
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-500'
    },
    {
      id: 3,
      title: 'E-Commerce Basics',
      icon: Smartphone,
      category: 'business',
      level: 'beginner',
      duration: '5 weeks',
      students: 720,
      rating: 4.7,
      description: 'Start your online business and learn to sell products and services digitally.',
      topics: [
        'Selling on Jumia, Kilimall, Facebook Marketplace',
        'Mobile money business (M-PESA agents)',
        'Packaging and logistics',
        'WhatsApp Business and social media marketing'
      ],
      impact: 'Rural entrepreneurs can sell crafts, farm produce, or services online',
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-500'
    },
    {
      id: 4,
      title: 'Smart Farming & Agri-Tech',
      icon: Sprout,
      category: 'agriculture',
      level: 'intermediate',
      duration: '6 weeks',
      students: 650,
      rating: 4.8,
      description: 'Revolutionize farming with digital tools and modern agricultural technology.',
      topics: [
        'Weather prediction and pest control apps',
        'iCow, DigiFarm, Hello Tractor platforms',
        'Digital record-keeping',
        'Agri e-commerce for produce and livestock'
      ],
      impact: 'Digitizing agriculture empowers rural communities\' main income source',
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-500'
    },
    {
      id: 5,
      title: 'Community Health & Digital Health Literacy',
      icon: Heart,
      category: 'health',
      level: 'beginner',
      duration: '4 weeks',
      students: 580,
      rating: 4.6,
      description: 'Access health information and services through digital platforms.',
      topics: [
        'Digital appointment booking and health info access',
        'Health education via apps and WhatsApp',
        'Nutrition, family planning, maternal health',
        'Combating health misinformation'
      ],
      impact: 'Closes critical health information gaps in rural areas',
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-500'
    },
    {
      id: 6,
      title: 'Cyber Hygiene & Digital Safety',
      icon: Shield,
      category: 'security',
      level: 'beginner',
      duration: '3 weeks',
      students: 920,
      rating: 4.9,
      description: 'Stay safe online and protect your personal information and devices.',
      topics: [
        'Personal data protection online',
        'Recognizing scams, phishing, fake links',
        'Strong passwords and device security',
        'Protecting children and elders online'
      ],
      impact: 'Builds safe, long-term internet usage behavior',
      color: 'bg-yellow-100 text-yellow-600',
      borderColor: 'border-yellow-500'
    },
    {
      id: 7,
      title: 'Misinformation Awareness & Community Info Sharing',
      icon: AlertTriangle,
      category: 'media',
      level: 'intermediate',
      duration: '4 weeks',
      students: 450,
      rating: 4.7,
      description: 'Become a community truth champion by learning to identify and combat misinformation.',
      topics: [
        'Spotting fake news and misinformation',
        'Source verification techniques',
        'Spreading verified information in local languages',
        'Community Truth Centers concept'
      ],
      impact: 'Helps communities become more resilient and well-informed',
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-500'
    },
    {
      id: 8,
      title: 'AI for Africa – Feeding AI Content',
      icon: Brain,
      category: 'technology',
      level: 'intermediate',
      duration: '5 weeks',
      students: 320,
      rating: 4.8,
      description: 'Contribute to building Africa\'s AI future through data collection and annotation.',
      topics: [
        'Simple data collection for local AI training',
        'Language recording for African language models',
        'Image/text annotation for youth',
        'Introduction to how AI works'
      ],
      impact: 'Involves youth in building Africa\'s digital future directly',
      color: 'bg-indigo-100 text-indigo-600',
      borderColor: 'border-indigo-500'
    },
    {
      id: 9,
      title: 'Introduction to Web Design & No-Code Tools',
      icon: Code,
      category: 'technology',
      level: 'intermediate',
      duration: '6 weeks',
      students: 380,
      rating: 4.6,
      description: 'Create websites and digital content without complex coding.',
      topics: [
        'Canva, Wix, WordPress for simple websites',
        'HTML/CSS basics (optional advanced)',
        'Creating local school/business websites',
        'Graphic design for posters and social media'
      ],
      impact: 'Builds creative and useful digital skills without full coding',
      color: 'bg-teal-100 text-teal-600',
      borderColor: 'border-teal-500'
    },
    {
      id: 10,
      title: 'STEAM & Digital Creativity for Youth',
      icon: Palette,
      category: 'youth',
      level: 'beginner',
      duration: '8 weeks',
      students: 290,
      rating: 4.9,
      description: 'Make technology fun and exciting for young learners through creative projects.',
      topics: [
        'Scratch programming for kids',
        'Simple robotics and electronics',
        'Mobile app ideas with MIT App Inventor',
        'Digital art and creative projects'
      ],
      impact: 'Makes tech fun and exciting for students in rural schools',
      color: 'bg-pink-100 text-pink-600',
      borderColor: 'border-pink-500'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'fundamentals', label: 'Digital Fundamentals' },
    { id: 'income', label: 'Income Generation' },
    { id: 'business', label: 'Business & Commerce' },
    { id: 'agriculture', label: 'Agriculture & Farming' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'security', label: 'Digital Security' },
    { id: 'media', label: 'Media Literacy' },
    { id: 'technology', label: 'Technology & AI' },
    { id: 'youth', label: 'Youth Programs' }
  ]

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ]

  const filteredCourses = courses.filter(course => {
    if (selectedCategory !== 'all' && course.category !== selectedCategory) return false
    if (selectedLevel !== 'all' && course.level !== selectedLevel) return false
    return true
  })

  const containerImages = [
    {
      src: '/images/containers/container-outside.jpg',
      alt: 'Mobile Container Hub Exterior',
      title: 'Solar-Powered Mobile Hub',
      description: 'Self-contained digital classroom ready for deployment'
    },
    {
      src: '/images/containers/inside-container-classes.jpg',
      alt: 'Container Classroom Interior',
      title: 'Modern Learning Environment',
      description: 'Fully equipped with computers and interactive displays'
    },
    {
      src: '/images/containers/container-relocation.jpg',
      alt: 'Container Hub Relocation',
      title: 'Easy Relocation',
      description: 'Quick setup and mobility for maximum community reach'
    },
    {
      src: '/images/containers/inside-learning-hubs.jpg',
      alt: 'Learning Hub Interior',
      title: 'Collaborative Learning Space',
      description: 'Designed for interactive and group learning activities'
    }
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
              Beginner-Friendly & High-Impact Courses
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Designed specifically for rural communities - practical skills that create immediate opportunities and long-term empowerment.
            </p>
          </motion.div>

          {/* Course Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10</h3>
              <p className="text-gray-600">Core Courses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5,247</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3-8</h3>
              <p className="text-gray-600">Weeks Duration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Container Showcase */}
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
              Mobile Container Learning Hubs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our innovative container classrooms bring world-class digital education directly to your community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Container, title: 'Solar-Powered Mobile Hub', description: 'Self-contained digital classroom ready for deployment', gradient: 'from-yellow-400 via-orange-500 to-red-500' },
              { icon: Monitor, title: 'Modern Learning Environment', description: 'Fully equipped with computers and interactive displays', gradient: 'from-blue-400 via-purple-500 to-pink-500' },
              { icon: Truck, title: 'Easy Relocation', description: 'Quick setup and mobility for maximum community reach', gradient: 'from-green-400 via-teal-500 to-blue-500' },
              { icon: Wifi, title: 'Collaborative Learning Space', description: 'Designed for interactive and group learning activities', gradient: 'from-purple-400 via-pink-500 to-red-500' }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:shadow-2xl"
              >
                <ImagePlaceholder 
                  icon={image.icon}
                  title={image.title}
                  subtitle="Container Learning Hub"
                  className="h-64"
                  gradient={image.gradient}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {image.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="btn-outline flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>View Gallery</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Container Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Setup</h3>
              <p className="text-gray-600">
                Complete deployment in 2-4 weeks. Plug-and-play technology with minimal infrastructure requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Relocation</h3>
              <p className="text-gray-600">
                Mobile design allows hubs to serve multiple communities. Quick relocation based on seasonal needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Equipped</h3>
              <p className="text-gray-600">
                20-30 workstations, solar power, satellite internet, interactive displays, and all necessary software.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
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
              Course Catalog
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-600 px-3 py-2">Category:</span>
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm font-medium text-gray-600 px-3 py-2">Level:</span>
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedLevel === level.id
                      ? 'bg-secondary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-secondary-50 hover:text-secondary-600'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => {
              const Icon = course.icon
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card p-8 hover:shadow-2xl border-l-4 ${course.borderColor}`}
                >
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full ${course.color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students} enrolled</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'beginner' ? 'bg-green-100 text-green-700' :
                      course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Topics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Statement */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Why This Matters:</h4>
                    <p className="text-gray-600 text-sm italic">
                      {course.impact}
                    </p>
                  </div>

                  {/* Course Actions */}
                  <div className="flex items-center justify-between">
                    <button className="btn-primary flex items-center space-x-2">
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Course Format */}
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
              Our Proven Learning Format
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every course follows a structured 3-level approach designed for maximum retention and real-world application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Level 1: Introduction & Basics</h3>
              <p className="text-gray-600 leading-relaxed">
                Foundation concepts, terminology, and basic navigation. Build confidence with guided tutorials and simple exercises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Level 2: Hands-On Practice</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive exercises like building profiles, filling forms, creating content. Practice with real tools and platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Level 3: Real-World Application</h3>
              <p className="text-gray-600 leading-relaxed">
                Apply skills to earn money, solve problems, or help your community. Complete real projects and earn certifications.
              </p>
            </motion.div>
          </div>

          {/* Bonus Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 card p-8 bg-gradient-to-r from-primary-50 to-secondary-50"
          >
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-6 text-primary-600" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bonus: Certification & Career Support</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every completed course includes a digital certificate, badge for your profile, and direct links to internship and job opportunities with our partner organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">View Sample Certificate</button>
                <button className="btn-outline">Browse Job Opportunities</button>
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
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of learners across Africa who are building better futures through digital skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Find a Hub Near You
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Download Course Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Curriculum