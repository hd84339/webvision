import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer
      className="
        overflow-hidden
        text-gray-300
        bg-[#0B0F19]
        relative
      "
    >
      {/* 🌌 Background Decorative Glow */}
      <div
        className="
          w-full h-px
          bg-gradient-to-r from-transparent via-blue-500/50 to-transparent
          absolute top-0 left-1/2 -translate-x-1/2
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto px-6 py-16
          md:px-12
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* --- About Section --- */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-1"
          >
            <Link to="/" className="block">
              <img
                src="/logo_v3.png"
                alt="Webvision Infotech logo"
                loading="lazy"
                className="
                  h-44 w-auto
                  object-contain
                  brightness-110
                "
              />
            </Link>

            <p
              className="
                text-sm leading-relaxed text-gray-400
              "
            >
              A "One Stop IT Solution" for modern business processes. We
              specialize in crafting high-performance web and window
              applications that drive digital growth.
            </p>
          </motion.div>

          {/* --- Services Section --- */}
          <motion.div variants={itemVariants}>
            <h3
              className="
                mb-6 pl-3
                text-lg font-bold text-white
                border-l-4 border-blue-500
              "
            >
              Our Services
            </h3>
            <ul
              className="
                space-y-3
              "
            >
              {[
                {
                  label: "Software Development",
                  url: "/services/software-development",
                },
                {
                  label: "Website Development",
                  url: "/services/web-development",
                },
                {
                  label: "Mobile App Development",
                  url: "/services/app-development",
                },
                {
                  label: "ERP & CRM Solutions",
                  url: "/services/erp-crm",
                },
                {
                  label: "SEO & Digital Marketing",
                  url: "/services/seo",
                },
              ].map((service, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="
                    flex
                    text-sm
                    group items-center gap-2
                  "
                >
                  <FaChevronRight
                    className="
                      text-blue-500 text-[10px]
                      opacity-0 transition-all
                      group-hover:opacity-100
                    "
                  />
                  <Link
                    to={service.url}
                    className="
                      transition-colors
                      hover:text-blue-400
                    "
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- Useful Links --- */}
          <motion.div variants={itemVariants}>
            <h3
              className="
                mb-6 pl-3
                text-lg font-bold text-white
                border-l-4 border-blue-500
              "
            >
              Useful Links
            </h3>
            <ul
              className="
                space-y-3
              "
            >
              {[
                { label: "Our Portfolios", url: "/portfolio" },
                { label: "Our Products", url: "/products" },
                { label: "Contact Us", url: "/contact" },
                { label: "Terms & Conditions", url: "/terms" },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="
                    flex
                    text-sm
                    group items-center gap-2
                  "
                >
                  <FaChevronRight
                    className="
                      text-blue-500 text-[10px]
                      opacity-0 transition-all
                      group-hover:opacity-100
                    "
                  />
                  <Link
                    to={item.url}
                    className="
                      transition-colors
                      hover:text-blue-400
                    "
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- Contact & Social --- */}
          <motion.div
            variants={itemVariants}
            className="
              space-y-6
            "
          >
            <h3
              className="
                mb-6 pl-3
                text-lg font-bold text-white
                border-l-4 border-blue-500
              "
            >
              Connect With Us
            </h3>
            <div
              className="
                space-y-4
                text-sm
              "
            >
              <div
                className="
                  flex
                  items-start gap-3
                "
              >
                <MdLocationOn
                  className="
                    flex-shrink-0
                    text-blue-500 text-xl
                  "
                />
                <p
                  className="
                    text-gray-400
                  "
                >
                  Vasai West, Palghar, Maharashtra 401202.
                </p>
              </div>
              <div
                className="
                  flex
                  items-center gap-3
                "
              >
                <MdEmail
                  className="
                    flex-shrink-0
                    text-blue-500 text-xl
                  "
                />
                <a
                  href="mailto:info@webvisionsoftech.com"
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  info@webvisionsoftech.com
                </a>
              </div>
              <div
                className="
                  flex
                  items-center gap-3
                "
              >
                <MdPhone
                  className="
                    flex-shrink-0
                    text-blue-500 text-xl
                  "
                />
                <p
                  className="
                    text-gray-400
                  "
                >
                  +91 9322347666
                </p>
              </div>
            </div>

            {/* Social Icons Container */}
            <div
              className="
                flex
                pt-4
                gap-3
              "
            >
              {[
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/people/Webvision-Softech-Pvt-Ltd/100054232521328/",
                },
                { icon: FaTwitter, link: "https://x.com/webvisionsofte1" },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/webvision_softech/",
                },
                {
                  icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/company/webvisionsoftech/",
                },
                {
                  icon: FaYoutube,
                  link: "https://www.youtube.com/channel/UChgKCsA6Rs4_hCs3Y4Eqbkw",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.9 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5
                    text-white
                    bg-gray-800/50
                    rounded-xl
                    transition-all shadow-lg
                  "
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- Footer Bottom --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-16 pt-8
            text-center
            border-t border-gray-800/50
          "
        >
          <p
            className="
              text-xs text-gray-500 tracking-widest
              uppercase
            "
          >
            © {new Date().getFullYear()}{" "}
            <span
              className="
                text-white font-bold
              "
            >
              Webvision Softech Pvt. Ltd.
            </span>{" "}
            All Rights Reserved.
          </p>
          <p
            className="
              mt-2
              text-xs text-gray-600
            "
          >
            Engineered with Precision by{" "}
            <a
              href="https://harshdubeyhrd.netlify.app/"
              className="
                text-blue-500/80
                transition-colors
                hover:text-blue-400
              "
            >
              Harsh Dubey
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
