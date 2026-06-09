import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WHATSAPP_NUMBER = "9643567854";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Care",
    price: "₹999",
    period: "per visit",
    description: "Daily grooming & basic salon services",
    features: [
      "Haircut + basic styling",
      "Basic facial cleanup",
      "Eyebrow shaping",
      "Hair wash",
      "Quick blow dry",
    ],
    cta: "Book Basic",
    featured: false,
  },
  {
    id: 2,
    name: "Glow Package",
    price: "₹2,499",
    period: "per month",
    description: "Monthly beauty & glow maintenance",
    features: [
      "2 Haircuts or styling",
      "1 Premium facial",
      "Hair spa (1 time)",
      "Manicure & pedicure",
      "Eyebrow + upper lip",
      "Skin glow treatment",
      "Priority booking",
    ],
    cta: "Choose Glow",
    featured: true,
  },
  {
    id: 3,
    name: "Bridal & Premium",
    price: "₹7,999",
    period: "starting package",
    description: "Complete bridal & premium salon care",
    features: [
      "Bridal makeup session",
      "Pre-bridal facial (3 sessions)",
      "Hair spa & treatment",
      "Full body waxing",
      "Nail art & extensions",
      "Saree draping support",
      "Home service available",
    ],
    cta: "Book Premium",
    featured: false,
  },
];

export default function Pricing() {
  const handleBooking = (plan) => {

alert("Booking functionality is currently unavailable.");

//     const message = `Hello, I want to book the "${plan.name}" plan.

// Price: ${plan.price}
// Period: ${plan.period}

// Includes:
// ${plan.features.map((f) => `- ${f}`).join("\n")}

// Please share availability and booking details.`;

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
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pricing{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect salon package for your beauty needs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`relative rounded-2xl overflow-hidden border ${plan.featured
                  ? "border-pink-500 shadow-lg"
                  : "border-gray-200"
                } bg-white`}
            >
              <div className="p-8">
                {/* Badge */}
                {plan.featured && (
                  <span className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 text-xs rounded-full">
                    POPULAR
                  </span>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-pink-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleBooking(plan)}
                  className={`w-full py-3 rounded-xl cursor-pointer font-semibold transition-all duration-150 ${plan.featured
                      ? "bg-pink-500 text-white hover:bg-pink-600"
                      : "border border-pink-500 text-pink-500 hover:bg-pink-50"
                    }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={18} className="text-pink-500" />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}