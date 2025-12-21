'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from './PropertyCard'
import { fetchPropertiesFromGoogleSheet, type Property } from '@/lib/utils'

export default function PropertyGrid() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadProperties() {
      setIsLoading(true)
      // Replace with your Google Sheet CSV URL when ready
      // Example: const csvUrl = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0'
      const csvUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL
      const data = await fetchPropertiesFromGoogleSheet(csvUrl)
      setProperties(data)
      setIsLoading(false)
    }

    loadProperties()
  }, [])

  return (
    <section id="listings" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Verified Property Listings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of legally verified properties in UP & Uttarakhand
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-blue-600"></div>
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No properties available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



