
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const navigationLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg">
              <Sparkles className="text-white" size={24} />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Glow
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Beauty Salon</p>
            </div>
            </motion.div>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <ScrollLink 
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <motion.button
                  className="text-gray-700 hover:text-pink-500 font-medium transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              </ScrollLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <ScrollLink 
            to="pricing"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.button
              className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
          </ScrollLink>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-pink-500" />
            ) : (
              <Menu size={28} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu - Fixed Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/30 top-16 z-40 md:hidden"
              />
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 md:hidden max-h-[calc(100vh-64px)] overflow-y-auto"
              >
                <div className="px-4 py-4 space-y-3">
                  {navigationLinks.map((link) => (
                    <ScrollLink
                      key={link.id}
                      to={link.id}
                      smooth={true}
                      duration={500}
                      offset={-64}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.button
                        className="block w-full text-left text-gray-700 hover:text-pink-500 py-2 font-medium cursor-pointer"
                        whileHover={{ x: 8 }}
                      >
                        {link.label}
                      </motion.button>
                    </ScrollLink>
                  ))}
                  <ScrollLink 
                    to="pricing"
                    smooth={true}
                    duration={500}
                    offset={-64}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.button
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 rounded-full font-semibold mt-4 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Appointment
                    </motion.button>
                  </ScrollLink>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
