
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Bride',
    rating: 5,
    review: 'My bridal makeup was absolutely stunning! The team made me feel beautiful and confident on my special day. Highly recommended!',
    avatar: '👰',
  },
  {
    id: 2,
    name: 'Emily Chen',
    title: 'Regular Client',
    rating: 5,
    review: 'The hair spa treatment transformed my damaged hair. The staff is professional and the salon is so clean and luxurious.',
    avatar: '✨',
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    title: 'Skincare Enthusiast',
    rating: 5,
    review: 'Best facial treatment ever! My skin has never looked better. The products used are premium quality and truly effective.',
    avatar: '💫',
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
            Client <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our happy clients say about their experience at our salon.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100"
              whileHover={{ y: -8, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="text-amber-400 fill-amber-400" size={20} />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6" />

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
