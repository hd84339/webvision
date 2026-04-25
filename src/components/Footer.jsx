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
        text-slate-300
        bg-slate-950
        relative
        border-t border-white/5
      "
    >
      {/* Premium background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 🌌 Background Decorative Glow */}
      <div
        className="
          w-full h-[2px]
          bg-gradient-to-r from-transparent via-pink-500 to-transparent
          absolute top-0 left-1/2 -translate-x-1/2 opacity-70
        "
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[120px] bg-pink-500/20 blur-[100px] pointer-events-none rounded-full" />

      <div
        className="
          max-w-7xl
          mx-auto px-6 py-16
          md:px-12 relative z-10
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
              <div className="bg-white/90 p-3 rounded-2xl mb-4 backdrop-blur-sm">
                  <img
                    src="/logo_v3.png"
                    alt="Webvision Infotech logo"
                    loading="lazy"
                    className="
                      h-12 w-auto
                      object-contain
                    "
                  />
              </div>
            </Link>

            <p
              className="
                text-sm leading-relaxed text-slate-400
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
                text-lg font-black text-white tracking-wide uppercase
                border-l-4 border-pink-500
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
                      text-pink-500 text-[10px]
                      opacity-0 transition-all
                      group-hover:opacity-100
                    "
                  />
                  <Link
                    to={service.url}
                    className="
                      transition-colors text-slate-400
                      hover:text-pink-400
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
                text-lg font-black text-white tracking-wide uppercase
                border-l-4 border-pink-500
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
                      text-pink-500 text-[10px]
                      opacity-0 transition-all
                      group-hover:opacity-100
                    "
                  />
                  <Link
                    to={item.url}
                    className="
                      transition-colors text-slate-400
                      hover:text-pink-400
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
                text-lg font-black text-white tracking-wide uppercase
                border-l-4 border-pink-500
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
                    text-pink-500 text-xl
                  "
                />
                <p
                  className="
                    text-slate-400
                  "
                >
                  B4, 2nd Floor, 224/A, Ambadi Rd, Sai Nagar, Vasai West, Palghar, Maharashtra 401202
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
                    text-pink-500 text-xl
                  "
                />
                <a
                  href="mailto:info@webvisionsoftech.com"
                  className="
                    transition-colors text-slate-400
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
                    text-pink-500 text-xl
                  "
                />
                <p
                  className="
                    text-slate-400
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
                  whileHover={{ y: -5, backgroundColor: "#db2777" }}
                  whileTap={{ scale: 0.9 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5
                    text-white
                    bg-white/10 backdrop-blur-md
                    rounded-xl border border-white/5
                    transition-all shadow-lg hover:border-pink-500
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
            border-t border-white/10
          "
        >
          <p
            className="
              text-xs text-slate-500 tracking-widest
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
