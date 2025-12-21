'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Noida, UP',
    property: '3BHK Flat',
    text: 'The entire process was transparent from day one. No hidden charges, and the legal verification gave us complete peace of mind. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Dehradun, Uttarakhand',
    property: 'Plot',
    text: 'We were looking for a plot to build our retirement home. The team helped us find the perfect location with all legal clearances. Thank you!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    location: 'Mussoorie, Uttarakhand',
    property: 'Villa',
    text: 'End-to-end support means exactly that. From site visits to registry, they were with us every step. A relationship, not just a transaction.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories of Happy Families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from families who found their dream properties with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="text-royal-blue-600 mb-4" size={32} />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.property} • {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



