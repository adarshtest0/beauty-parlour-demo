
import { motion } from 'framer-motion';
import { Award, Gem, Shield, HandHeart } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team of certified beauty professionals with 10+ years of experience.',
  },
  {
    id: 2,
    icon: Gem,
    title: 'Premium Products',
    description: 'We use only internationally certified organic and luxury beauty products.',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Hygienic Environment',
    description: 'State-of-the-art sanitation and sterilization protocols for your safety.',
  },
  {
    id: 4,
    icon: HandHeart,
    title: 'Personalized Care',
    description: 'Custom beauty treatments tailored to your unique skin and hair needs.',
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of premium beauty care with our dedicated team.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon with Background */}
                <motion.div
                  className="mb-6 inline-block"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
                    <IconComponent className="text-pink-500" size={32} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
