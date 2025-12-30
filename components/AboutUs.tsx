'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Heart } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function AboutUs() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building trust through transparency and genuine relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green-400 to-royal-blue-400 rounded-3xl transform rotate-3"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white">
                {!imageError ? (
                  <Image
                    src="/founder-photo.jpg"
                    alt="Dr. Rajeev Goyal - Founder & CEO of BuyPlot"
                    fill
                    className="object-contain p-4"
                    onError={() => {
                      setImageError(true)
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-forest-green-50 to-royal-blue-50">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-forest-green-400 to-royal-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-3xl font-bold">RG</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Rajeev Goyal</h3>
                      <p className="text-royal-blue-600 font-semibold">Founder & CEO</p>
                      <p className="text-xs text-gray-500 mt-2">Please add founder-photo.jpg to the public folder</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Dr. Rajeev Goyal
              </h3>
              <p className="text-xl text-royal-blue-600 font-semibold mb-4">
                Founder & CEO
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="leading-relaxed">
                With almost 30 years of experience in the real estate industry, Dr. Rajeev Goyal 
                has dedicated his career to bringing transparency and trust to property transactions 
                in Northern India. His vision is simple: every family deserves a home they can trust, 
                with zero hidden surprises.
              </p>
              <p className="leading-relaxed">
                Having witnessed firsthand the challenges families face—from legal disputes to hidden 
                brokerage fees—Dr. Rajeev Goyal founded BuyPlot with a mission to change the game. 
                BuyPlot doesn't just sell properties; we build relationships that last beyond the transaction.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Award className="text-forest-green-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Briefcase className="text-royal-blue-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Happy Families</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Heart className="text-forest-green-600 mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Verified Properties</p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-forest-green-50 to-royal-blue-50 rounded-2xl border-l-4 border-forest-green-600"
            >
              <p className="text-gray-800 italic text-lg leading-relaxed">
                "A relationship, not just a transaction. That's what sets us apart. 
                When you choose BuyPlot, you're choosing a partner who will be with you 
                every step of the way."
              </p>
              <p className="text-right mt-4 font-semibold text-gray-700">
                — Dr. Rajeev Goyal
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


