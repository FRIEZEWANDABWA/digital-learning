import React from 'react'
import { motion } from 'framer-motion'

const DataForAfrica = () => {
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
              Data for Africa
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Supporting data-driven AI training and insights for Africa...
            </p>
            <div className="bg-success-50 p-8 rounded-lg">
              <p className="text-success-700">
                This page will explain how our platform collects and uses data 
                to improve services and train AI systems locally for African contexts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DataForAfrica