import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  MapPin, 
  TrendingUp, 
  Calendar,
  Monitor,
  Wifi,
  Battery,
  BookOpen,
  Award,
  Filter,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

const HubDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month')
  const [selectedHubType, setSelectedHubType] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')

  const overallStats = {
    totalHubs: 26,
    activeStudents: 5247,
    completedPrograms: 3891,
    averageCompletion: 74,
    monthlyGrowth: 12.5
  }

  const hubData = [
    {
      id: 1,
      name: 'Nairobi Tech Hub',
      type: 'university',
      country: 'Kenya',
      status: 'active',
      students: 450,
      programs: 8,
      completion: 85,
      uptime: 98.5,
      lastUpdate: '2024-01-15T10:30:00Z',
      coordinates: [-1.2921, 36.8219],
      monthlyStats: {
        newEnrollments: 45,
        completions: 38,
        activeHours: 240
      }
    },
    {
      id: 2,
      name: 'Kibera Mobile Hub',
      type: 'mobile',
      country: 'Kenya',
      status: 'active',
      students: 180,
      programs: 5,
      completion: 78,
      uptime: 94.2,
      lastUpdate: '2024-01-15T09:15:00Z',
      coordinates: [-1.3133, 36.7892],
      monthlyStats: {
        newEnrollments: 25,
        completions: 22,
        activeHours: 180
      }
    },
    {
      id: 3,
      name: 'Kigali Innovation Center',
      type: 'tvet',
      country: 'Rwanda',
      status: 'active',
      students: 320,
      programs: 6,
      completion: 82,
      uptime: 96.8,
      lastUpdate: '2024-01-15T11:45:00Z',
      coordinates: [-1.9441, 30.0619],
      monthlyStats: {
        newEnrollments: 35,
        completions: 28,
        activeHours: 220
      }
    },
    {
      id: 4,
      name: 'Dakar Polytechnic',
      type: 'tvet',
      country: 'Senegal',
      status: 'maintenance',
      students: 200,
      programs: 4,
      completion: 65,
      uptime: 87.3,
      lastUpdate: '2024-01-14T16:20:00Z',
      coordinates: [14.7167, -17.4677],
      monthlyStats: {
        newEnrollments: 15,
        completions: 12,
        activeHours: 120
      }
    },
    {
      id: 5,
      name: 'Cape Town Mobile Hub',
      type: 'mobile',
      country: 'South Africa',
      status: 'active',
      students: 150,
      programs: 4,
      completion: 71,
      uptime: 91.5,
      lastUpdate: '2024-01-15T08:30:00Z',
      coordinates: [-33.9249, 18.4241],
      monthlyStats: {
        newEnrollments: 20,
        completions: 18,
        activeHours: 160
      }
    }
  ]

  const filteredHubs = hubData.filter(hub => {
    if (selectedHubType !== 'all' && hub.type !== selectedHubType) return false
    if (selectedCountry !== 'all' && hub.country !== selectedCountry) return false
    return true
  })

  const programStats = [
    { name: 'Digital Literacy', enrolled: 1250, completed: 980, completion: 78 },
    { name: 'Web Development', enrolled: 850, completed: 680, completion: 80 },
    { name: 'E-Commerce', enrolled: 720, completed: 540, completion: 75 },
    { name: 'Data Science', enrolled: 450, completed: 320, completion: 71 },
    { name: 'Mobile Apps', enrolled: 380, completed: 285, completion: 75 }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'maintenance': return 'text-yellow-600 bg-yellow-100'
      case 'offline': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return CheckCircle
      case 'maintenance': return Clock
      case 'offline': return AlertCircle
      default: return AlertCircle
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">
                Hub Dashboard
              </h1>
              <p className="text-xl text-gray-600">
                Real-time monitoring and analytics for all Digital Empowerment Hubs
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <button className="btn-outline flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </button>
              <button className="btn-primary flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleString()}
          </div>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8"
        >
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{overallStats.totalHubs}</h3>
            <p className="text-gray-600">Total Hubs</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{overallStats.activeStudents.toLocaleString()}</h3>
            <p className="text-gray-600">Active Students</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{overallStats.completedPrograms.toLocaleString()}</h3>
            <p className="text-gray-600">Completed Programs</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{overallStats.averageCompletion}%</h3>
            <p className="text-gray-600">Avg Completion</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">+{overallStats.monthlyGrowth}%</h3>
            <p className="text-gray-600">Monthly Growth</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <h2 className="text-xl font-semibold text-gray-900">Hub Performance</h2>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filters:</span>
              </div>
              
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>

              <select
                value={selectedHubType}
                onChange={(e) => setSelectedHubType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Hub Types</option>
                <option value="mobile">Mobile Containers</option>
                <option value="university">Universities</option>
                <option value="school">Schools</option>
                <option value="tvet">TVET/Polytechnic</option>
              </select>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Countries</option>
                <option value="Kenya">Kenya</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Senegal">Senegal</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Hub Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8"
        >
          {filteredHubs.map((hub, index) => {
            const StatusIcon = getStatusIcon(hub.status)
            return (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:shadow-xl"
              >
                {/* Hub Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {hub.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{hub.country}</span>
                      <span className="text-gray-400">•</span>
                      <span className="capitalize">{hub.type.replace('-', ' ')}</span>
                    </div>
                  </div>
                  
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hub.status)}`}>
                    <StatusIcon className="w-3 h-3" />
                    <span className="capitalize">{hub.status}</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{hub.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">{hub.programs}</div>
                    <div className="text-xs text-gray-600">Programs</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-medium">{hub.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${hub.completion}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">System Uptime</span>
                      <span className="font-medium">{hub.uptime}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          hub.uptime >= 95 ? 'bg-green-500' : hub.uptime >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${hub.uptime}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Monthly Stats */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">This Month</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{hub.monthlyStats.newEnrollments}</div>
                      <div className="text-xs text-gray-600">New</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{hub.monthlyStats.completions}</div>
                      <div className="text-xs text-gray-600">Completed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">{hub.monthlyStats.activeHours}</div>
                      <div className="text-xs text-gray-600">Hours</div>
                    </div>
                  </div>
                </div>

                {/* Last Update */}
                <div className="text-xs text-gray-500 flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Updated {new Date(hub.lastUpdate).toLocaleString()}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Program Performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Program Performance</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Program</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Enrolled</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Completed</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Completion Rate</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900">Progress</th>
                </tr>
              </thead>
              <tbody>
                {programStats.map((program, index) => (
                  <motion.tr
                    key={program.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-primary-600" />
                        <span className="font-medium text-gray-900">{program.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-gray-900">
                      {program.enrolled.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-green-600">
                      {program.completed.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-gray-900">
                      {program.completion}%
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${program.completion}%` }}
                        />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HubDashboard