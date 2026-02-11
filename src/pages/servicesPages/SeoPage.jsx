import React, { useEffect } from "react";
import { motion } from "framer-motion";
import InlineContactForm from "../../components/InlineContactForm";
import {
  Search,
  Target,
  TrendingUp,
  Zap,
  Smartphone,
  Monitor as Laptop,
  DollarSign,
  Shield,
  Link,
  Code,
  Users,
  Globe,
  Check,
  Phone,
  Mail,
} from "lucide-react";

import SEO from "../../components/SEO";

// --- Styling & Config ---
// Accent Color: Vibrant Orange (#FF8C00)
// Text Color: Deep Blue (#1F2937)

const ImageBannerSection = () => (
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []),
  (
    <motion.section
      className="
       flex
       py-16 px-4
       bg-white
       justify-center
       sm:px-10
     "
    >
      {/* Container: Use a taller aspect ratio (e.g., aspect-4/3) */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="
        w-[90%] max-w-6xl
        aspect-9/3
      "
      >
        <img
          src="/images/native-banner.avif"
          alt="Image Description"
          loading="lazy"
          className="
            object-cover
            w-full h-full
            rounded-xl border-0 border-[]/50
            shadow-2xl
          "
        />
      </motion.div>
    </motion.section>
  )
);

// --- Pricing Card Data ---
const pricingPlans = [
  {
    icon: Shield,
    title: "Local SEO Starter",
    subtitle: "Focus: Local Ranking & Visibility",
    features: [
      "Comprehensive Local Audit",
      "Google Business Profile Setup/Optimization",
      "5 Core Web Vitals Fixes",
      "Monthly Local Ranking Report",
    ],
    accent: "text-pink-600",
    shadow: "shadow-pink-300",
  },
  {
    icon: Zap,
    title: "Growth Accelerator (Recommended)",
    subtitle: "Focus: National Growth & Technical SEO",
    features: [
      "All Starter features included",
      "Full Technical SEO Audit & Implementation",
      "Content Strategy & Keyword Mapping",
      "Monthly Backlink Outreach (4 Links)",
    ],
    accent: "text-pink-600",
    shadow: "shadow-pink-600/50",
  },
  {
    icon: DollarSign,
    title: "Enterprise E-commerce",
    subtitle: "Focus: High Volume & Global Authority",
    features: [
      "All Growth features included",
      "Dedicated ASO & Mobile App Optimization",
      "Advanced Structured Data Implementation",
      "Quarterly E-E-A-T Strategy Session",
    ],
    accent: "text-pink-600",
    shadow: "shadow-pink-300",
  },
];

// --- Framer Motion Variants ---
const cardContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// ----------------------------------------------------------------------
// THE NEW COMPONENT: Three-Card Pricing Section
// ----------------------------------------------------------------------
const PricingSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardContainerVariants}
    className="
        py-24 px-4
        bg-white
        sm:px-10
      "
  >
    <div
      className="
            max-w-7xl
            mx-auto
          "
    >
      <h2
        className="
                mb-16
                text-4xl font-extrabold text-[#1F2937] text-center
                md:text-5xl
              "
      >
        Our Transparent{" "}
        <span
          className="
                    text-pink-600
                  "
        >
          Service Charges
        </span>
      </h2>

      <motion.div
        variants={cardContainerVariants}
        className="
                grid grid-cols-1
                gap-8
                md:grid-cols-3
              "
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardItemVariants}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: `0px 15px 30px ${plan.shadow.split("/")[0].split("-")[1]}/80`,
            }}
            className={`
                        flex flex-col
                        p-8
                        bg-white
                        rounded-xl border-t-8 border-b-8
                        shadow-xl
                        transition duration-300
                        ${plan.accent.replace("text", "border")}
                        ${plan.shadow}
                      `}
          >
            {/* Header */}
            <div
              className="
                            mb-6
                            text-center
                          "
            >
              <plan.icon
                className={`
                                w-12 h-12
                                mx-auto mb-3
                                ${plan.accent}
                              `}
              />
              <h3
                className="
                                text-3xl font-bold text-[#1F2937]
                              "
              >
                {plan.title}
              </h3>
              <p
                className="
                                mt-1
                                text-sm text-gray-500
                              "
              >
                {plan.subtitle}
              </p>
            </div>

            {/* Features List */}
            <ul
              className="
                            flex-grow
                            space-y-3
                          "
            >
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="
                                    flex
                                    text-gray-700
                                    items-start
                                  "
                >
                  <Check
                    className={`
                                        flex-shrink-0
                                        w-5 h-5
                                        mr-3
                                        ${plan.accent}
                                      `}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button Placeholder */}
            <div
              className="
                            mt-8
                          "
            >
              <a
                href="/contact"
                className={`
                                block
                                w-full
                                py-3
                                text-center font-semibold
                                rounded-lg
                                transition duration-300
                                ${plan.accent.includes("#FF8C00") ? "bg-pink-600 text-white hover:bg-pink-600" : "bg-gray-200 text-[#1F2937] hover:bg-pink-500"}
                              `}
              >
                Select Plan
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 1. Hero Content/Image Split Section (Left Text, Right Image)
// ----------------------------------------------------------------------
const HeroSection = () => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="
        py-20 px-4
        bg-white
        sm:px-10
      "
  >
    <div
      className="
            grid grid-cols-1
            max-w-7xl
            mx-auto
            gap-12 items-center
            md:grid-cols-2
          "
    >
      {/* Left Part: Text and Heading (SEO Focus) */}
      <motion.div
        variants={itemVariants}
        className="
                space-y-4
              "
      >
        <h2
          className="
                    text-sm font-semibold tracking-widest text-gray-500
                    uppercase
                  "
        >
          Your Digital Growth Engine
        </h2>
        <h1
          className="
                    text-4xl font-extrabold leading-tight text-[#1F2937]
                    md:text-5xl
                  "
        >
          Mastering Search: From{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Code to Conversions
          </span>
        </h1>
        <p
          className="
                    text-lg text-gray-600
                  "
        >
          We specialize in technical SEO that aligns perfectly with modern
          search algorithms. Our strategies cover mobile responsiveness, Core
          Web Vitals, and semantic markup to build long-term authority.
        </p>
        <motion.a
          href="#card-grid"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 10px rgba(225, 29, 72, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
                    inline-block
                    mt-4 px-6 py-3
                    text-white font-semibold
                    bg-pink-600
                    rounded-lg
                    shadow-md
                  "
        >
          Explore Our Pillars
        </motion.a>
      </motion.div>

      {/* Right Part: Image */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, rotate: 0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
                flex
                justify-center
              "
      >
        {/* --- CORRECTED Image Path Location --- */}
        {/* The path should start from the root (public folder) and use forward slashes / */}
        <div
          className="
                    flex
                    w-full max-w-lg h-full
                    items-center justify-center
                  "
        >
          <img
            src="/images/seomastering.png"
            alt="SEO strategy illustration on laptop and mobile"
            loading="lazy"
            className="
                        w-full h-full
                        rounded-xl border-4 border-pink-600
                        shadow-2xl
                      "
          />
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 2. Content/Image Split Section (Left Image, Right Content)
// ----------------------------------------------------------------------
const ContentImageSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    variants={containerVariants}
    className="
        py-20 px-4
        bg-gray-50
        sm:px-10
      "
  >
    <div
      className="
            grid grid-cols-1
            max-w-7xl
            mx-auto
            gap-12 items-center
            md:grid-cols-2
          "
    >
      {/* Left Part: Image */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, rotate: -0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
                flex order-2
                justify-center
                md:order-1
              "
      >
        {/* --- CORRECTED Image Path Location --- */}
        <img
          src="/images/headseoWix.avif"
          alt="Detailed optimization dashboard"
          loading="lazy"
          className="
                    w-full max-w-md
                    rounded-xl border-4 border-[#1F2937]
                    shadow-2xl
                  "
        />
      </motion.div>

      {/* Right Part: Related SEO Information */}
      <motion.div
        variants={itemVariants}
        className="
                order-1
                space-y-4
                md:order-2
              "
      >
        <h3
          className="
                    text-4xl font-extrabold text-[#1F2937]
                  "
        >
          Technical Audit &{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Performance Fixes
          </span>
        </h3>
        <p
          className="
                    text-lg text-gray-600
                  "
        >
          We start with a comprehensive audit of your site's codebase and
          architecture. This ensures search engines can efficiently crawl,
          index, and rank your content without technical barriers.
        </p>
        <p
          className="
                    text-lg text-gray-600
                  "
        >
          Our process commences with a **thorough inspection** of your existing
          **site infrastructure and underlying source code**. This step is vital
          to confirm compliance and **maximize the efficiency** with which
          search engines can **crawl, catalogue, and elevate** your web presence
          without hindrance.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 3. Digital Pillars Card Grid (8 Cards, 2 Rows)
// ----------------------------------------------------------------------
const PillarCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    }}
    transition={{ type: "spring", stiffness: 300 }}
    className="
        flex flex-col
        h-full
        p-6
        text-center
        bg-white
        rounded-xl border border-gray-100
        shadow-lg
        items-center
      "
  >
    <Icon
      className="
            w-10 h-10
            mb-3
            text-pink-600
          "
    />
    <h4
      className="
            mb-2
            text-xl font-bold text-[#1F2937]
          "
    >
      {title}
    </h4>
    <p
      className="
            text-sm text-gray-500
          "
    >
      {description}
    </p>
  </motion.div>
);

const CardGridSection = () => {
  const digitalPillars = [
    {
      icon: Smartphone,
      title: "Mobile SEO Focus",
      description:
        "Dedicated optimization for mobile-first indexing and responsive design.",
    },
    {
      icon: Laptop,
      title: "Desktop Performance",
      description:
        "Ensuring blazing fast load times and clean code for traditional desktop users.",
    },
    {
      icon: Search,
      title: "Algorithmic Compliance",
      description:
        "Strategies that align with Google's latest core updates and guidelines.",
    },
    {
      icon: TrendingUp,
      title: "Voice Search Optimization",
      description:
        "Optimizing content for conversational, question-based search queries.",
    },
    {
      icon: Target,
      title: "A/B Testing Content",
      description:
        "Iterative testing of titles, metas, and copy to maximize CTR and ranking.",
    },
    {
      icon: Users,
      title: "E-E-A-T Signals",
      description:
        "Building Experience, Expertise, Authority, and Trust across your domain.",
    },
    {
      icon: Globe,
      title: "Local SEO Mastery",
      description:
        "Dominating local map packs and 'near me' searches for physical businesses.",
    },
    {
      icon: Link,
      title: "Backlink Acquisition",
      description:
        "Ethical and high-quality link building to boost domain authority.",
    },
  ];

  return (
    <motion.section
      id="card-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="
            py-20 px-4
            bg-white
            sm:px-10
          "
    >
      <div
        className="
                max-w-7xl
                mx-auto
              "
      >
        <motion.h2
          variants={itemVariants}
          className="
                    mb-12
                    text-4xl font-extrabold text-[#1F2937] text-center
                  "
        >
          The 8 Pillars of{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Digital Authority
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="
                    grid grid-cols-1
                    gap-8
                    sm:grid-cols-2
                    lg:grid-cols-4
                  "
        >
          {digitalPillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ----------------------------------------------------------------------
// MAIN COMPONENT: SeoPage
// ----------------------------------------------------------------------

const SeoPage = () => {
  return (
    <div
      className="
            min-h-screen
            text-[#1F2937] font-sans
            bg-white
          "
    >
      <SEO
        title="SEO Services"
        description="Technical and content-driven SEO services by Webvision Infotech to improve organic search performance."
        url="/services/seo"
      />

      <ImageBannerSection />

      {/* 1. Hero Content/Image Section */}
      <HeroSection />

      {/* 2. Content/Image Detail Section */}
      <ContentImageSection />

      {/* 3. Pricing Section */}
      <PricingSection />

      {/* 4. Card Grid Section */}
      <CardGridSection />

      {/* 5. Contact Form Section */}
      <section
        className="
                py-20 px-4
                bg-gray-50
                border-t border-gray-200
                sm:px-10
              "
      >
        <div
          className="
                    max-w-3xl
                    mx-auto p-10
                    text-center
                    bg-white
                    rounded-xl
                    shadow-2xl
                  "
        >
          <h2
            className="
                        mb-4
                        text-3xl font-bold text-[#1F2937]
                      "
          >
            Ready to Scale?
          </h2>
          <p
            className="
                        mb-6
                        text-lg text-gray-600
                      "
          >
            Contact us now to get your free SEO audit and consultation.
          </p>
          {/* Updated CTA button */}
          <InlineContactForm targetEmail="webvisionsoftech@gmail.com" />
        </div>
      </section>
    </div>
  );
};

export default SeoPage;
