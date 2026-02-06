import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Elements appear one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-gray-100 py-20 px-4 md:px-16 overflow-hidden min-h-[85vh] flex items-center">

      {/* 🌌 Background Decorative Element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">

        {/* 🚀 Left: Interactive Image with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="flex-1 w-full flex items-center justify-center group order-2 md:order-1"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }} // Floating effect
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-110 group-hover:bg-purple-400/30 transition-colors duration-500" />

            <img
              src="/program.png"
              alt="WebVision Illustration"
              loading="lazy"
              className="w-full max-w-[650px] lg:max-w-[750px] h-auto object-contain relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* 📝 Right: Staggered Text Content */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-black leading-tight"
          >
            WELCOME TO <span className="text-blue-600">WEBVISION</span> <br />
            <motion.span
              animate={{ color: ["#000000", "#4f46e5", "#000000"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              SOFTECH PVT LTD.
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-purple-600 font-bold mt-4 tracking-widest flex items-center"
          >
            WE MAKE AN WEB HAPPEN
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ..........
            </motion.span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 mt-4 text-lg leading-relaxed border-l-4 border-blue-500 pl-4 bg-white/50 py-2 rounded-r-lg"
          >
            Webvision Softech is a <span className="font-bold text-blue-600">“One Stop IT Solution”</span> for any kind of business process.
            We provide high quality applications to promote the IT sector.
          </motion.p>

          {/* ⚡ CTA Buttons with Hover Glow */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center bg-[#8BC4EC] hover:bg-blue-500 text-white font-bold px-8 py-3 rounded shadow-lg overflow-hidden group transition-all"
              >
                {/* Shining reflection effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                Get started
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section >
  );
};

export default Hero;