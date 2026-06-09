import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9506266925",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "salon@example.com",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Lucknow, Uttar Pradesh, India",
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sun: 10AM - 8PM",
    color: "from-rose-400 to-pink-400",
  },
];

export default function Contact() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Get in{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600">
            Visit us or contact us anytime
          </p>
        </motion.div>

        {/* 50/50 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-pink-100"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {info.label}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT SIDE - GOOGLE MAP */}
          <motion.div
            className="w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-lg border border-pink-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Salon Location"
              className="w-full h-full min-h-[350px]"
              loading="lazy"
              src="https://maps.google.com/maps?q=Lucknow%20Uttar%20Pradesh&output=embed"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}