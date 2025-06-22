import React from 'react'
import { motion } from 'framer-motion'

const GetInvolved = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Partner with us to expand digital empowerment across Africa...
            </p>
            <div className="bg-purple-50 p-8 rounded-lg">
              <p className="text-purple-700">
                This page will showcase partnership opportunities for NGOs, 
                governments, donors, volunteers, and corporate sponsors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GetInvolved