import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Facebook } from 'lucide-react';

// A custom WhatsApp icon to closely match the image provided.
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

// The main ScrollPanel component
export default function ScrollPanel() {
  // Array of social media/contact items
  const socialLinks = [
    {
      id: 'whatsapp',
      icon: <WhatsAppIcon />,
      bgColor: 'bg-green-500',
      href: 'https://wa.me/+919322347666', // Fixed whitespace in link
      label: 'Chat on WhatsApp',
    },
    {
      id: 'phone',
      icon: <Phone />,
      bgColor: 'bg-pink-500',
      href: 'tel:+919322347666', // Fixed whitespace in link
      label: 'Call Us',
    },
    {
      id: 'location',
      icon: <MapPin />,
      bgColor: 'bg-indigo-600',
      href: 'https://www.google.com/maps/place/Webvision+Softech+Pvt+Ltd/@19.380503,72.833471,17z/data=!4m5!3m4!1s0x0:0x6f8f9c7094bbc71d!8m2!3d19.3805025!4d72.8334713?hl=en',
      label: 'Visit our Location',
    },
    {
      id: 'facebook',
      icon: <Facebook />,
      bgColor: 'bg-sky-500',
      href: 'http://facebook.com/people/Webvision-Softech-Pvt-Ltd/100054232521328/#',
      label: 'Visit our Facebook Page',
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren"
      },
    },
  };

  // Animation variants for each icon item
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Hover animation for each icon
  const hoverEffect = {
    scale: 1.2,
    rotate: 10,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  };


  return (
    <motion.div
      className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center p-2 space-y-3 bg-white shadow-lg rounded-l-xl border border-gray-200 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`w-12 h-12 flex items-center justify-center text-white rounded-lg cursor-pointer ${link.bgColor}`}
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
