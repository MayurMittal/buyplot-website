'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-forest-green-600 to-royal-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">BuyPlot</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for verified properties in UP & Uttarakhand. 
              Building relationships, one property at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#listings" className="text-gray-400 hover:text-white transition-colors">
                  Property Listings
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#trust" className="text-gray-400 hover:text-white transition-colors">
                  Our Promise
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-forest-green-400 mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919536711313" className="text-gray-400 hover:text-white transition-colors">
                    +91 95367 11313
                  </a>
                  <a href="tel:+919568522577" className="text-gray-400 hover:text-white transition-colors text-sm mt-1">
                    +91 95685 22577
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-forest-green-400 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:info@buyplot.in" className="text-gray-400 hover:text-white transition-colors">
                  info@buyplot.in
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-forest-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Dehradun, Uttarakhand<br />
                  Noida, Uttar Pradesh
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-royal-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-royal-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-royal-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                <strong className="text-white">RERA Registration:</strong><br />
                UP: UP-RERA/XXXX/XXXX<br />
                UK: UK-RERA/XXXX/XXXX
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm"
        >
          <p>
            © {new Date().getFullYear()} BuyPlot. All rights reserved. | 
            Trust • Transparency • Legal Clarity
          </p>
        </motion.div>
      </div>
    </footer>
  )
}



