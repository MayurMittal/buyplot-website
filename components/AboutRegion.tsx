'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Mountain } from 'lucide-react'

export default function AboutRegion() {
  return (
    <section id="region" className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Invest in UP & Uttarakhand?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Uttar Pradesh Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal-blue-500 to-royal-blue-700 flex items-center justify-center mr-4 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Uttar Pradesh
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Uttar Pradesh is experiencing unprecedented infrastructure growth. With
              projects like the Delhi-Mumbai Industrial Corridor, expressways, and
              metro expansions, property values are on a steady upward trajectory.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-royal-blue-600 mr-2">✓</span>
                <span>Rapid urbanization and connectivity improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-blue-600 mr-2">✓</span>
                <span>Growing IT and manufacturing hubs</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-blue-600 mr-2">✓</span>
                <span>Affordable pricing with high ROI potential</span>
              </li>
            </ul>
          </motion.div>

          {/* Uttarakhand Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest-green-500 to-forest-green-700 flex items-center justify-center mr-4 shadow-lg">
                <Mountain className="text-white" size={28} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Uttarakhand
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Uttarakhand offers the perfect blend of natural beauty and modern
              living. From the serene hills of Dehradun to the spiritual aura of
              Rishikesh, it's an ideal destination for families and retirees.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-forest-green-600 mr-2">✓</span>
                <span>Pristine environment and clean air</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-green-600 mr-2">✓</span>
                <span>Excellent educational institutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-green-600 mr-2">✓</span>
                <span>Growing tourism and hospitality sector</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


