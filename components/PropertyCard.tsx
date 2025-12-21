'use client'

import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import type { Property } from '@/lib/utils'

interface PropertyCardProps {
  property: Property
  index: number
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  // Primary WhatsApp number - opens WhatsApp directly for user to start chatting
  const whatsappUrl = `https://wa.me/919536711313`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-forest-green-100 to-royal-blue-100">
        {property.imageUrl ? (
          <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image Coming Soon</span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-forest-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {property.type}
          </span>
        </div>
        {property.rera_status && (
          <div className="absolute top-4 left-4">
            <span className="bg-royal-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              {property.rera_status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="text-forest-green-600 mr-2 flex-shrink-0" />
          <span className="text-sm">{property.location}</span>
        </div>

        {property.description && (
          <p className="text-gray-600 text-sm mb-6 line-clamp-3">
            {property.description}
          </p>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
        >
          <MessageCircle size={20} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </motion.div>
  )
}

