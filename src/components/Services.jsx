import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Leaf,
  Zap,
  Droplet,
  Heart,
} from "lucide-react";

const WHATSAPP_NUMBER = "919506266925";

const services = [
  {
    id: 1,
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Professional haircuts, styling, and treatments for all hair types.",
    price: "₹999",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Bridal Makeup",
    description:
      "Stunning bridal makeup and coordination for your special day.",
    price: "₹4,999",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Facial Treatment",
    description:
      "Rejuvenating facials with premium organic skincare products.",
    price: "₹1,499",
  },
  {
    id: 4,
    icon: Zap,
    title: "Nail Art",
    description:
      "Creative nail designs and manicure services for every occasion.",
    price: "₹799",
  },
  {
    id: 5,
    icon: Droplet,
    title: "Hair Spa",
    description:
      "Relaxing hair spa treatments to nourish and strengthen hair.",
    price: "₹1,299",
  },
  {
    id: 6,
    icon: Heart,
    title: "Skin Care",
    description:
      "Personalized skincare routines with premium dermatological products.",
    price: "₹1,999",
  },
];

export default function Services() {
  const handleBooking = (service) => {


    alert("Booking functionality is currently unavailable.");


//     const message = `Hello, I would like to book the ${service.title} service.

// Price: ${service.price}

// Please share available slots and details.`;

//     const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(whatsappUrl, "_blank");


  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty treatments designed to
            enhance your natural beauty.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="group bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="text-white" size={28} />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    {service.price}
                  </span>

                  <button
                    onClick={() => handleBooking(service)}
                    className="px-5 py-2.5 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:scale-105 transition-transform duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}