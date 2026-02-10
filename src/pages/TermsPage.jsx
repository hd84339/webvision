import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldAlert,
  Fingerprint,
  Mail,
  Scale,
  BookOpen,
  Users,
  Gavel,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import SEO from "../components/SEO";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const TermsPage = () => {
  return (
    <div
      className="
        min-h-screen
        font-sans text-gray-800
        bg-gray-50
        antialiased
      "
    >
      <SEO
        title="Terms & Conditions"
        description="Terms, privacy and usage policies for Webvision Infotech."
        url="/terms"
      />

      {/* --- SECTION 1: HERO / HEADER --- */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="
          py-16 px-6
          text-center text-white
          bg-slate-900
        "
      >
        <FileText
          className="
            h-16 w-16
            mx-auto mb-4
            text-orange-500
          "
        />
        <h1
          className="
            text-4xl font-extrabold
            md:text-6xl
          "
        >
          Terms & Conditions
        </h1>
        <p
          className="
            mt-4
            text-lg text-gray-400
          "
        >
          Effective Date: December 2025
        </p>
      </motion.header>

      <main
        className="
          max-w-6xl
          mx-auto px-4 py-12
        "
      >
        {/* --- SECTION 2: RIGHT WORD / LEFT ICON --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="
            grid grid-cols-1
            mb-20
            items-center gap-12
            md:grid-cols-2
          "
        >
          <div
            className="
              flex
              justify-center
              md:order-1
            "
          >
            <motion.div
              variants={fadeInUp}
              className="
                p-8
                bg-orange-100
                rounded-2xl
                shadow-inner
              "
            >
              <ShieldAlert
                className="
                  h-32 w-32
                  text-orange-600
                  lg:h-48 lg:w-48
                "
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUp}
            className="
              md:order-2
            "
          >
            <h2
              className="
                mb-6
                text-3xl font-bold text-slate-900
                underline decoration-orange-500 decoration-4
              "
            >
              General Disclaimers
            </h2>
            <ul
              className="
                space-y-4
                text-lg leading-relaxed
              "
            >
              <li
                className="
                  flex
                  items-start gap-3
                "
              >
                <span
                  className="
                    h-2 w-2
                    mt-2
                    bg-orange-500
                    rounded-full
                  "
                ></span>
                There is no guarantee that submitting your resume to us will
                result in employment.
              </li>
              <li
                className="
                  flex
                  items-start gap-3
                "
              >
                <span
                  className="
                    h-2 w-2
                    mt-2
                    bg-orange-500
                    rounded-full
                  "
                ></span>
                We are not responsible for losses due to system failure or
                software leaks.
              </li>
              <li
                className="
                  flex
                  items-start gap-3
                "
              >
                <span
                  className="
                    h-2 w-2
                    mt-2
                    bg-orange-500
                    rounded-full
                  "
                ></span>
                Software testing is the client's responsibility; we are not
                liable for losses from use.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* --- SECTION 3: LEFT WORD / RIGHT ICON --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="
            grid grid-cols-1
            mb-20
            items-center gap-12
            md:grid-cols-2
          "
        >
          <motion.div
            className="
              order-2
              md:order-1
            "
          >
            <h2
              className="
                mb-6
                text-3xl font-bold text-slate-900
                underline decoration-pink-500 decoration-4
              "
            >
              Data & Privacy
            </h2>
            <div
              className="
                space-y-6
              "
            >
              <div
                className="
                  flex
                  gap-4
                "
              >
                <Fingerprint
                  className="
                    flex-shrink-0
                    h-8 w-8
                    text-pink-600
                  "
                />
                <p>
                  We collect browser details and IP for security and service
                  enhancement.
                </p>
              </div>
              <div
                className="
                  flex
                  gap-4
                "
              >
                <Mail
                  className="
                    flex-shrink-0
                    h-8 w-8
                    text-blue-600
                  "
                />
                <p>
                  Registering on our site constitutes consent to collect Name,
                  Email, and Phone.
                </p>
              </div>
              <div
                className="
                  flex
                  gap-4
                "
              >
                <Users
                  className="
                    flex-shrink-0
                    h-8 w-8
                    text-blue-600
                  "
                />
                <p>
                  Third-party vendors like Google use cookies (DART) to serve
                  personalized ads.
                </p>
              </div>
            </div>
          </motion.div>
          <div
            className="
              order-1 flex
              justify-center
              md:order-2
            "
          >
            <motion.div
              variants={fadeInUp}
              className="
                p-8
                bg-pink-100
                rounded-2xl
                shadow-inner
              "
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <RefreshCw
                  className="
                    h-32 w-32
                    text-blue-600
                    lg:h-48 lg:w-48
                  "
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* --- SECTION 4: DETAILED TERMS GRID (3 columns responsive) --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="
            mb-20
          "
        >
          <h2
            className="
              mb-12
              text-center text-4xl font-bold
            "
          >
            Additional Disclosures
          </h2>
          <div
            className="
              grid grid-cols-1
              gap-8
              md:grid-cols-3
            "
          >
            <motion.div
              variants={fadeInUp}
              className="
                p-6
                bg-white
                rounded-xl border border-gray-200
                shadow-md transition-shadow
                hover:shadow-xl
              "
            >
              <Scale
                className="
                  h-10 w-10
                  mb-4
                  text-orange-500
                "
              />
              <h3
                className="
                  mb-2
                  text-xl font-bold
                "
              >
                Interpretation
              </h3>
              <p
                className="
                  text-sm text-gray-600
                "
              >
                Definitions for CMS, Downloads, and Entries apply strictly for
                non-commercial educational use.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="
                p-6
                bg-white
                rounded-xl border border-gray-200
                shadow-md transition-shadow
                hover:shadow-xl
              "
            >
              <BookOpen
                className="
                  h-10 w-10
                  mb-4
                  text-orange-500
                "
              />
              <h3
                className="
                  mb-2
                  text-xl font-bold
                "
              >
                License Grant
              </h3>
              <p
                className="
                  text-sm text-gray-600
                "
              >
                Object Retrieval grants a personal, non-transferable,
                non-exclusive license to access and study entries.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="
                p-6
                bg-white
                rounded-xl border border-gray-200
                shadow-md transition-shadow
                hover:shadow-xl
              "
            >
              <Gavel
                className="
                  h-10 w-10
                  mb-4
                  text-orange-500
                "
              />
              <h3
                className="
                  mb-2
                  text-xl font-bold
                "
              >
                Governing Law
              </h3>
              <p
                className="
                  text-sm text-gray-600
                "
              >
                This agreement is governed by English law and subject to the
                exclusive jurisdiction of English courts.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* --- SECTION 5: FINAL WARNINGS --- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            p-10
            text-white
            bg-slate-900
            rounded-3xl
            shadow-2xl
          "
        >
          <div
            className="
              flex flex-col
              items-center gap-6
              md:flex-row
            "
          >
            <AlertTriangle
              className="
                h-20 w-20
                text-yellow-400
              "
            />
            <div>
              <h2
                className="
                  text-3xl font-bold
                "
              >
                Indemnity & Suspension
              </h2>
              <p
                className="
                  mt-4
                  text-gray-300
                "
              >
                You agree to indemnify Object Retrieval against all claims
                resulting from your breach of these terms. Access may be
                suspended without notice for violations.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default TermsPage;
