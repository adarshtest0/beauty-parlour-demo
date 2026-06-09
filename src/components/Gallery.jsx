import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "/hair.jpg",
    alt: "Professional Hair Styling Service",
  },
  {
    id: 2,
    src: "/Facial.jpg",
    alt: "Luxury Facial Treatment",
  },
  {
    id: 3,
    src: "/NailArt.jpg",
    alt: "Elegant Nail Art Designs",
  },
  {
    id: 4,
    src: "/Makeup.jpg",
    alt: "Bridal Makeup Services",
  },
  {
    id: 5,
    src: "/SpaTreatment.jpg",
    alt: "Premium Hair Spa Treatment",
  },
  {
    id: 6,
    src: "/SkinCare.png",
    alt: "Personalized Skin Care",
  },
];

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-white">
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
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and beauty
            treatments.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-80 sm:h-64 lg:h-72"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-all duration-300" />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end p-6  group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}