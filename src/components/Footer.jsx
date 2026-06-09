
import { motion } from 'framer-motion';
import { Send, Smile, Share2, Heart, Sparkles } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const socialLinks = [
  { icon: Send, label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Smile, label: 'Instagram', color: 'hover:text-pink-600' },
  { icon: Share2, label: 'Twitter', color: 'hover:text-blue-400' },
];

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Testimonials', id: 'testimonials' },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
              <motion.div
                className="flex items-center gap-2 mb-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Glow
                  </h3>
                  <p className="text-xs text-gray-400">Beauty Salon</p>
                </div>
              </motion.div>
            </ScrollLink>
            <p className="text-gray-400 text-sm mb-6">
              Experience luxury beauty treatments in a serene environment with certified experts.
            </p>

            {/* Social Links */}
            {/* <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.button
                    key={index}
                    className={`text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={24} />
                  </motion.button>
                );
              })}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <ScrollLink 
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                  >
                    <motion.button
                      className="text-gray-400 hover:text-pink-400 transition-colors text-sm cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.button>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Hair Styling</li>
              <li>Bridal Makeup</li>
              <li>Facial Treatments</li>
              <li>Nail Art</li>
              <li>Hair Spa</li>
              <li>Skin Care</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="font-semibold text-pink-400">Phone:</span>
                <br />
                +1 (555) 123-4567
              </li>
              <li>
                <span className="font-semibold text-pink-400">Email:</span>
                <br />
                hello@glowsalon.com
              </li>
              <li>
                <span className="font-semibold text-pink-400">Hours:</span>
                <br />
                Mon-Sat: 9AM-7PM
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 py-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Glow Beauty Salon. All rights reserved.
          </p>
          <motion.div
            className="flex items-center gap-2 text-pink-400 mt-4 sm:mt-0"

          >
            <span className="text-sm">Made with</span>
            <Heart size={16} className="fill-pink-400" />
            <span className="text-sm">for beauty lovers</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
