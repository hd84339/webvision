import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Fixed the icon imports to match the usage below
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import SEO from "../components/SEO";

// --- Constants ---
const PRIMARY_EMAIL = "webvisionsoftech@gmail.com";
const SECONDARY_EMAIL = "info@webvisionsoftech.com";
const PHONE = "+91 9322347666";
const ADDRESS =
  "224/A, B4, 2nd Floor, Vishwakarma Paradise, Phase-1, Ambadi Rd, Vasai West, Palghar, Maharashtra 401202";

const ContactInfoCard = ({ icon: Icon, title, lines, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="
        flex flex-col
        p-8
        text-center
        bg-white
        rounded-3xl border border-slate-100
        shadow-sm transition-all
        group items-center duration-300 hover:shadow-xl
      "
  >
    <div
      className="
            p-4 mb-5
            text-blue-600
            bg-blue-50
            rounded-2xl
            transition-colors
            group-hover:bg-blue-600 group-hover:text-white duration-300
          "
    >
      <Icon size={28} />
    </div>
    <h3
      className="
            mb-3
            text-xl font-bold text-slate-800
          "
    >
      {title}
    </h3>
    <div
      className="
            space-y-1
            text-slate-500 text-sm leading-relaxed
          "
    >
      {lines.map((line, index) => (
        <span
          key={index}
          className="
                    block
                  "
        >
          {line}
        </span>
      ))}
    </div>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PRIMARY_EMAIL}&cc=${SECONDARY_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(gmailUrl, "_blank");
    setStatus(true);
    setTimeout(() => setStatus(false), 5000);
  };

  return (
    <div
      className="
            min-h-screen
            font-sans
            bg-[#FBFDFF]
          "
    >
      <SEO
        title="Contact"
        description="Contact Webvision Infotech for IT solutions, web development and digital services."
        url="/contact"
      />
      {/* --- Header Section --- */}
      <div
        className="
                pt-32 pb-40 px-6
                bg-slate-900
                relative
                overflow-hidden
              "
      >
        <div
          className="
                    opacity-20 pointer-events-none
                    absolute inset-0
                  "
        >
          <div
            className="
                        w-[500px] h-[500px]
                        bg-blue-600
                        rounded-full
                        absolute top-0 right-0 blur-[120px] translate-x-1/2 -translate-y-1/2
                      "
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
                    z-10
                    max-w-4xl
                    mx-auto
                    text-center
                    relative
                  "
        >
          <h1
            className="
                        mb-6
                        text-4xl font-black text-white
                        md:text-6xl
                      "
          >
            Let's Design Your{" "}
            <span
              className="
                        text-blue-400
                      "
            >
              Digital Future
            </span>
          </h1>
          <p
            className="
                        max-w-2xl
                        mx-auto
                        text-slate-400 text-lg
                        md:text-xl
                      "
          >
            Whether you have a question about features, pricing, or anything
            else, our team is ready to answer.
          </p>
        </motion.div>
      </div>

      {/* --- Info Cards --- */}
      <div
        className="
                z-20
                max-w-7xl
                mx-auto px-6
                -mt-20 relative
              "
      >
        <div
          className="
                    grid grid-cols-1
                    gap-8
                    md:grid-cols-3
                  "
        >
          {/* Fixed the icon names here to match imports */}
          <ContactInfoCard
            icon={Mail}
            title="Email Us"
            lines={[PRIMARY_EMAIL, SECONDARY_EMAIL]}
            link={`mailto:${PRIMARY_EMAIL}`}
          />
          <ContactInfoCard
            icon={MapPin}
            title="Visit Us"
            lines={["Vasai West, Palghar", "Maharashtra, India"]}
            link="https://www.google.com/maps/dir//Webvision+Softech+Pvt+Ltd"
          />
          <ContactInfoCard
            icon={Phone}
            title="Call Us"
            lines={[PHONE, "+91 8422014356"]}
            link={`tel:${PHONE.replace(/\s/g, "")}`}
          />
        </div>
      </div>

      {/* --- Main Section --- */}
      <div
        className="
                max-w-7xl
                mx-auto px-6 py-24
              "
      >
        <div
          className="
                    grid grid-cols-1
                    gap-16 items-start
                    lg:grid-cols-2
                  "
        >
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
                        p-6
                        bg-white
                        rounded-[2rem] border border-slate-50
                        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]
                        md:p-12
                      "
          >
            <h2
              className="
                            mb-2
                            text-3xl font-black text-slate-900
                          "
            >
              Send a Message
            </h2>
            <p
              className="
                            mb-8
                            text-slate-500 font-medium
                          "
            >
              We'll get back to you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="
                            space-y-5
                          "
            >
              <div
                className="
                                grid grid-cols-1
                                gap-5
                                md:grid-cols-2
                              "
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                                    w-full
                                    p-4
                                    bg-slate-50
                                    border border-transparent rounded-2xl
                                    transition-all
                                    focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none
                                  "
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                                    w-full
                                    p-4
                                    bg-slate-50
                                    border border-transparent rounded-2xl
                                    transition-all
                                    focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none
                                  "
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="
                                w-full
                                p-4
                                bg-slate-50
                                border border-transparent rounded-2xl
                                transition-all
                                focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none
                              "
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                                w-full
                                p-4
                                bg-slate-50
                                border border-transparent rounded-2xl
                                transition-all resize-none
                                focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none
                              "
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                                flex
                                w-full
                                py-5
                                text-white font-black
                                bg-blue-600
                                rounded-2xl
                                shadow-xl shadow-blue-200 transition-all
                                hover:bg-blue-700 items-center justify-center gap-3
                              "
              >
                <Send size={20} />
                Launch Inquiry
              </motion.button>
            </form>

            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="
                                    flex
                                    mt-4
                                    text-green-600 font-bold text-sm
                                    items-center justify-center gap-2
                                  "
                >
                  <CheckCircle size={16} /> Opening your email client...
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Content/Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
                        space-y-10
                      "
          >
            <div
              className="
                            space-y-6
                          "
            >
              <div
                className="
                                inline-flex
                                px-4 py-2
                                text-blue-700 text-sm font-bold
                                bg-blue-50
                                rounded-full
                                items-center gap-2
                              "
              >
                <Clock size={16} /> Hours: Mon - Sat (10 AM - 7 PM)
              </div>
              <h2
                className="
                                text-3xl font-black text-slate-900
                              "
              >
                Our Corporate Presence
              </h2>
              <p
                className="
                                text-slate-500 leading-relaxed text-lg
                              "
              >
                Located in the heart of Vasai, we are perfectly positioned to
                serve businesses across Mumbai and globally.
              </p>
            </div>

            <div
              className="
                            overflow-hidden
                            h-[300px] md:h-[450px]
                            rounded-[2rem] border-8 border-white
                            shadow-2xl
                            relative
                          "
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.612127264186!2d72.82364939019739!3d19.384079976692455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af321745c20b%3A0x6f8f9c7094bbc71d!2sweb%20vision%20softech%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1766052740519!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />

              {/* <iframe 
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.612127264186!2d72.82364939019739!3d19.384079976692455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af321745c20b%3A0x6f8f9c7094bbc71d!2sweb%20vision%20softech%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1766052740519!5m2!1sen!2sin" 
                            width="100%"
                             height="100%" 
                             style="border:0;" 
                             allowfullscreen=""
                              loading="lazy" 
                              referrerpolicy="no-referrer-when-downgrade">
                            </iframe> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
