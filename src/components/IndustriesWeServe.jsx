import React from 'react';
import { motion } from 'framer-motion';
import {
  Home, ShoppingCart, Zap, Store, HeartPulse, GraduationCap,
  Users, Newspaper, Plane, Landmark, BedDouble, Heart,
} from 'lucide-react';

const industries = [
  { name: 'REAL ESTATE', icon: <Home size={34} />, desc: "Property & Asset Management" },
  { name: 'MARKETPLACE', icon: <ShoppingCart size={34} />, desc: "Multi-vendor Platforms" },
  { name: 'ON DEMAND', icon: <Zap size={34} />, desc: "Real-time Service Apps" },
  { name: 'ECOMMERCE', icon: <Store size={34} />, desc: "B2B & B2C Retail Solutions" },
  { name: 'HEALTHCARE', icon: <HeartPulse size={34} />, desc: "Patient & Clinic Portals" },
  { name: 'EDUCATION', icon: <GraduationCap size={34} />, desc: "E-Learning & LMS" },
  { name: 'JOB & RECRUITERS', icon: <Users size={34} />, desc: "Hiring & Talent Hubs" },
  { name: 'NEWS / BLOGS', icon: <Newspaper size={34} />, desc: "Content Delivery Systems" },
  { name: 'TRAVEL', icon: <Plane size={34} />, desc: "Booking & Itinerary Tools" },
  { name: 'FINANCIAL', icon: <Landmark size={34} />, desc: "Secure Fintech Solutions" },
  { name: 'HOTELS', icon: <BedDouble size={34} />, desc: "Hospitality Management" },
  { name: 'MATRIMONIAL', icon: <Heart size={34} />, desc: "Social & Pairing Networks" },
];

const IndustriesWeServe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="relative bg-[#F8FAFC] py-10 sm:py-12 overflow-hidden">
      {/* 🧬 Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pink-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block"
          >
            Industries We Empower
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">We Serve</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-pink-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            We bridge the gap between technology and business goals across 12+ global sectors.
          </p>
        </div>

        {/* --- Industries Grid --- */}
        {/* --- Industries Grid --- */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {industries.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-white/70 backdrop-blur-md border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden block"
            >
              {/* Card Hover Glow */}
              <div aria-hidden="true" className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

              {/* Icon Circle */}
              <div aria-hidden="true" className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {item.icon}
              </div>

              {/* Text */}
              <div className="relative">
                <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-400 font-medium group-hover:text-slate-600">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-600/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* 🎨 Floating Gradient Blurs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-100 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-40"></div>
    </section>
  );
};

export default IndustriesWeServe;
