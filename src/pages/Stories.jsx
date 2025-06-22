import React from 'react'
import { motion } from 'framer-motion'

const Stories = () => {
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
              Stories & Impact
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real stories from real people whose lives have been transformed...
            </p>
            <div className="bg-secondary-50 p-8 rounded-lg">
              <p className="text-secondary-700">
                This page will feature inspiring success stories, testimonials, 
                and measurable impact data from our program participants.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Stories