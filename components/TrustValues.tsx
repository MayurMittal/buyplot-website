'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Handshake } from 'lucide-react'

const trustCards = [
  {
    icon: Shield,
    title: '100% Legally Verified',
    description: 'We don\'t list disputed properties. Every paper is checked.',
    color: 'from-forest-green-500 to-forest-green-700',
  },
  {
    icon: Eye,
    title: 'Transparent Pricing',
    description: 'No hidden brokerage. What you see is what you pay.',
    color: 'from-royal-blue-500 to-royal-blue-700',
  },
  {
    icon: Handshake,
    title: 'End-to-End Support',
    description: 'From site visit to registry, we are with you.',
    color: 'from-forest-green-600 to-royal-blue-600',
  },
]

export default function TrustValues() {
  return (
    <section id="trust" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why We Are Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trust, Transparency, and Legal Clarity—that's our promise to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trustCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



