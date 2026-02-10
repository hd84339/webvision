import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function InlineContactForm({
  targetEmail = "webvisionsoftech@gmail.com",
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      targetEmail
    )}&su=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent(
      body
    )}`;

    window.open(gmailUrl, "_blank");

    // Show success feedback
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);

    setForm({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative p-1">
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -top-12 left-0 right-0 flex justify-center z-10"
          >
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2 shadow-md border border-green-200">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">Opening Gmail...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <motion.div variants={itemVariants} className="relative group">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={18} />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              aria-label="Full Name"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-gray-400"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              aria-label="Email Address"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative group mb-6">
          <MessageSquare className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            aria-label="Project Details"
            placeholder="Tell us about your project..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 resize-none"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(236,72,153,0.2)] transition-all"
          >
            <span>Send Message</span>
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
}