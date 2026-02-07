import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Man | Seller',
    text: "I went to WebVision, and it's completely boomed my sales through the service they provide. I have doubled my income—highly recommended!",
    avatar: 'https://placehold.co/100x100/E0E7FF/4F46E5?text=RS',
  },
  {
    name: 'Priya Verma',
    role: 'Startup Founder',
    text: 'The team delivered a stunning website that perfectly captures our brand. The process was smooth, and the results exceeded our expectations.',
    avatar: 'https://placehold.co/100x100/FEF2F2/B91C1C?text=PV',
  },
  {
    name: 'Arjun Singh',
    role: 'E-commerce Manager',
    text: 'Our online store has never performed better. The new design is not only beautiful but also incredibly user-friendly, leading to a significant increase in conversions.',
    avatar: 'https://placehold.co/100x100/D1FAE5/059669?text=AS',
  },
  {
    name: 'Neha Gupta',
    role: 'Marketing Director',
    text: 'A truly professional and talented team. They understood our vision from day one and brought it to life with creativity and precision.',
    avatar: 'https://placehold.co/100x100/FFFBEB/B45309?text=NG',
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-[#F8FAFC] py-10 sm:py-12 overflow-hidden relative">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-50 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-[120px] opacity-50 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-bold tracking-[0.3em] text-sm uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Success Stories</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                key={i}
              >
                <Star className="text-amber-400 fill-current" size={20} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- Seamless Marquee with Fade Gradient Mask --- */}
      <div className="relative flex overflow-hidden group">
        {/* Left & Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 py-10"
          animate={{ x: [0, -1600] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35, // Slower is more professional
              ease: 'linear',
            },
          }}
          // Pauses the animation when the user hovers to read
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex-shrink-0 bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.2)] p-10 w-[400px] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl">
                  <Quote className="text-blue-600" size={28} />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-current" />)}
                </div>
              </div>

              <p className="text-slate-600 italic leading-relaxed text-lg mb-8 h-32 overflow-hidden overflow-y-auto custom-scrollbar">
                "{testimonial.text}"
              </p>

              <div className="flex items-center pt-6 border-t border-slate-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 blur-lg opacity-20 rounded-full" />
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="relative w-16 h-16 rounded-2xl object-cover mr-4 border-2 border-white shadow-md"
                  />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm font-bold text-blue-500 uppercase tracking-tighter">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Modern Call to Action --- */}
      <motion.div
        className="text-center mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-slate-500 font-medium">Join 500+ satisfied businesses worldwide.</p>
        <motion.a
          href='/contact'
          className="mt-8 bg-slate-900 text-white font-black py-4 px-10 rounded-2xl inline-flex items-center gap-3 shadow-2xl hover:bg-blue-600 transition-colors group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
        </motion.a>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
