import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { ChevronRight } from "lucide-react";

/* ===================== DATA ===================== */
const slideData = [
  {
    id: 1,
    text: "Software Development",
    description: "Tailor-made solutions to solve your most complex business challenges.",
    pageUrl: "/services/software-development",
    imgUrl: "/serv.png",
  },
  {
    id: 2,
    text: "Website Design",
    description: "Responsive, high-performance websites designed to convert visitors.",
    pageUrl: "/services/web-development",
    imgUrl: "/images/websitehm.png",
  },
  {
    id: 3,
    text: "Mobile Apps",
    description: "Next-gen iOS and Android applications built for your users.",
    pageUrl: "/services/app-development",
    imgUrl: "/images/app_analytics_dashboard.jpg",
  },
  {
    id: 4,
    text: "IT Consulting",
    description: "Strategic technology planning to scale your enterprise efficiently.",
    pageUrl: "/services/out-consulting",
    imgUrl: "/hero.png",
  },
  {
    id: 5,
    text: "Business Infrastructure",
    description: "Secure and scalable server environments for sustainable IT growth.",
    pageUrl: "/services/it-business",
    imgUrl: "/images/itserver.png",
  },
  {
    id: 6,
    text: "CRM Systems",
    description: "Manage customer relationships with integrated, data-driven tools.",
    pageUrl: "/services/erp-crm",
    imgUrl: "/images/seomastering.png",
  },
  {
    id: 7,
    text: "Digital Services",
    description: "End-to-end digital transformation and comprehensive support.",
    pageUrl: "/services",
    imgUrl: "/images/headseoWix.avif",
  },
  {
    id: 8,
    text: "Expert FAQ",
    description: "Answers to your most critical technology and business questions.",
    pageUrl: "/about",
    imgUrl: "/images/FAQ.png",
  },
];

/* ===================== ANIMATION VARIANTS ===================== */
const slideVariants = {
  enter: { x: 1000, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ===================== MAIN SECTION ===================== */
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe logic: Change slide every 6 seconds for better readability
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        h-[85vh]
        max-h-[1080px]
        overflow-hidden
        bg-black
      "
    >
      <SEO
        title="Home"
        description="Webvision Infotech - Software, Web and App development, SEO and digital services."
        url="/"
      />

      {/* 📸 Background Image Slider */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          style={{ backgroundImage: `url(${slideData[currentIndex].imgUrl})` }}
          className="
            absolute inset-0
            w-full h-full
            bg-cover bg-center
          "
        >
          {/* Enhanced Overlay for better text readability */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b from-black/70 via-black/50 to-black/80
              backdrop-blur-[2px]
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* 📄 Content Overlay */}
      <div
        className="
          relative z-20
          flex flex-col
          items-center justify-center
          h-full
          px-6 sm:px-12
          text-center
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            variants={textVariants}
            className="max-w-5xl"
          >
            <motion.h2
              className="
                mb-6
                text-sm md:text-lg
                font-bold tracking-[0.2em]
                text-pink-400
                uppercase
              "
            >
              Welcome to Webvision Softech Pvt. Ltd.
            </motion.h2>

            <motion.h1
              className="
                mb-8
                text-5xl md:text-7xl lg:text-8xl
                font-black
                text-white
                tracking-tight
                drop-shadow-2xl
              "
            >
              {slideData[currentIndex].text}
            </motion.h1>

            <motion.p
              className="
                mb-12
                text-lg md:text-2xl
                text-gray-200
                font-light
                max-w-3xl mx-auto
                leading-relaxed
              "
            >
              {slideData[currentIndex].description}
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() =>
                  (window.location.href = slideData[currentIndex].pageUrl)
                }
                className="
                  group
                  relative
                  inline-flex items-center gap-3
                  px-10 py-5
                  text-lg font-bold text-white
                  bg-pink-600
                  rounded-full
                  overflow-hidden
                  transition-all duration-300
                  hover:bg-pink-700
                  shadow-[0_0_20px_rgba(236,72,153,0.5)]
                  hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]
                "
              >
                <span className="relative z-10">Explore Service</span>
                <ChevronRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1" />

                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔘 Navigation Dots */}
      <div
        className="
          absolute bottom-12 left-1/2 -translate-x-1/2
          z-30
          flex gap-4
        "
      >
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              h-3 rounded-full transition-all duration-500 ease-out
              ${index === currentIndex
                ? "w-12 bg-pink-500 shadow-[0_0_10px_#ec4899]"
                : "w-3 bg-white/40 hover:bg-white/80"}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 🌊 Floating Orb Background (Subtle & Modern) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <FloatingOrbs />
      </div>
    </section>
  );
};

/* ===================== SUPPORTING COMPONENTS ===================== */

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px]"
          style={{
            background: i % 2 === 0 ? "#ec4899" : "#f472b6", // Pink shades
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;
