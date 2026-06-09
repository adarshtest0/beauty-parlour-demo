
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold">
            ✨ Premium Beauty Care
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Reveal Your{' '}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Natural Beauty
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Experience luxury beauty treatments in a serene environment. Our certified experts use premium products to enhance your natural glow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ScrollLink 
            to="pricing"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
              <ArrowRight size={20} />
            </motion.button>
          </ScrollLink>
          <ScrollLink 
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <motion.button
              className="  text-pink-500 px-8 py-4 rounded-full font-semibold bg-pink-50 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
          </ScrollLink>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-2 bg-pink-300 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
