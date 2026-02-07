import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink, Award } from 'lucide-react';

const Aboutus = () => {
  const aboutCards = [
    {
      title: "Innovation",
      text: "We leverage the latest technologies to build forward-thinking solutions that keep you ahead of the curve."
    },
    {
      title: "Reliability",
      text: "Our systems are built to ensure maximum uptime and consistent performance, so you can focus on your business."
    },
    {
      title: "Scalability",
      text: "Grow your business without limits using our scalable software architecture designed to handle increasing loads."
    }
  ];

  return (
    <section className="bg-white py-8 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* 🎨 Left: Animated Image Section */}
        <motion.div
          className="flex-1 w-full flex items-center justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl scale-75 opacity-50" />
          <motion.img
            src={"/hero.png"}
            alt="About WebVision"
            className="w-full h-auto relative z-10 drop-shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* 📝 Right: Content Section */}
        <div className="flex-1">
          <motion.h2
            className="text-3xl font-bold mb-6 text-black border-l-4 border-blue-500 pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-8 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We provide our clients with the exact tailor-made software solutions that will meet their specific business requirements.
            Our team of experienced and technical software developers will integrate application development with your line of business.
          </motion.p>

          <div className="space-y-4">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:bg-white hover:border-blue-100 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <h3 className="font-bold text-lg text-blue-600 mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm ml-4">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* 🔘 Buttons */}
          <motion.div
            className="mt-8 flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-md group"
              >
                Portfolio
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
