import React from "react";
import { motion } from "framer-motion";
import InlineContactForm from "../../components/InlineContactForm";
import {
  Building,
  Laptop,
  Network,
  Cloud,
  Settings,
  Zap,
  Layers,
  Database,
  Shield,
  Users,
  Globe,
  Server,
  Check,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react";
import SEO from "../../components/SEO";

// --- Styling & Config ---
// Accent Color: Premium Pink (pink-600)
// Text Color: Deep Blue (#1F2937)

// --- Pricing Card Data ---
const pricingPlans = [
  {
    icon: Settings,
    title: "IT Infrastructure Setup",
    subtitle: "Focus: Basic Business IT Needs",
    features: [
      "Network Setup & Configuration",
      "Hardware Installation & Setup",
      "Basic Security Implementation",
      "Initial Staff Training",
    ],
    accent: "text-gray-500",
    shadow: "shadow-gray-300",
  },
  {
    icon: Zap,
    title: "Complete IT Solutions (Recommended)",
    subtitle: "Focus: Comprehensive Business Technology",
    features: [
      "All Infrastructure services included",
      "Cloud Migration & Management",
      "Advanced Security & Monitoring",
      "24/7 Technical Support",
    ],
    accent: "text-pink-600",
    shadow: "shadow-pink-600/50",
  },
  {
    icon: Cloud,
    title: "Enterprise IT Management",
    subtitle: "Focus: Large-Scale Business Operations",
    features: [
      "All Complete IT features included",
      "Multi-location IT Management",
      "Disaster Recovery Planning",
      "Strategic IT Consulting",
    ],
    accent: "text-gray-500",
    shadow: "shadow-gray-300",
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

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
      {/* Left Part: Text and Heading (IT Business Focus) */}
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
          Complete IT Business Solutions
        </h2>
        <h1
          className="
                    text-4xl font-extrabold leading-tight text-[#1F2937]
                    md:text-5xl
                  "
        >
          IT Business Services: From{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Setup to Management
          </span>
        </h1>
        <p
          className="
                    text-lg text-gray-600
                  "
        >
          We provide comprehensive IT business solutions to help companies
          establish, manage, and optimize their technology infrastructure for
          maximum productivity and growth.
        </p>
        <motion.a
          href="#core-services"
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
          Explore Our Solutions
        </motion.a>
      </motion.div>

      {/* Right Part: Image  */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, rotate: 0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
                flex
                justify-center
              "
      >
        <div
          className="
                    flex
                    w-full max-w-lg h-full
                    items-center justify-center
                  "
        >
          <img
            src="/images/techstack.png"
            alt="IT business infrastructure and solutions"
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
const MethodologySection = () => (
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
      {/* Left Part: Image  */}
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
        <img
          src="/images/app_analytics_dashboard.jpg"
          alt="IT business management and monitoring"
          loading="lazy"
          className="
                    w-full max-w-md
                    rounded-xl border-4 border-[#1F2937]
                    shadow-2xl
                  "
        />
      </motion.div>

      {/* Right Part: Related IT Business Information */}
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
          Strategic IT Management &{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Business Growth
          </span>
        </h3>
        <p
          className="
                    text-lg text-gray-600
                  "
        >
          Our IT business services focus on aligning technology with your
          business objectives. We provide strategic planning, implementation,
          and ongoing management to ensure your IT infrastructure supports
          growth.
        </p>
        <ul
          className="
                    space-y-2 pl-4
                    text-lg text-gray-600
                    list-disc list-inside
                  "
        >
          <li>
            **Business Alignment:** IT solutions designed to support your
            business goals.
          </li>
          <li>
            **Scalable Infrastructure:** Technology that grows with your
            business needs.
          </li>
          <li>
            **Cost Efficiency:** Optimized IT spending with maximum return on
            investment.
          </li>
        </ul>
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 4. Digital Pillars Card Grid (8 Cards, 2 Rows)
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
  const coreServices = [
    {
      icon: Building,
      title: "IT Infrastructure Planning",
      description:
        "Strategic planning and design of complete IT infrastructure for businesses.",
    },
    {
      icon: Network,
      title: "Network Setup & Management",
      description:
        "Complete network installation, configuration, and ongoing management.",
    },
    {
      icon: Server,
      title: "Server Solutions",
      description:
        "Server setup, maintenance, and optimization for business operations.",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Database design, implementation, and backup solutions for business data.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamless integration with cloud services for scalability and flexibility.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security measures to protect business data and systems.",
    },
    {
      icon: Users,
      title: "IT Training & Support",
      description:
        "Staff training and ongoing technical support for all IT systems.",
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description:
        "Continuous monitoring and optimization of IT systems and performance.",
    },
  ];

  return (
    <motion.section
      id="core-services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="
            py-20 px-4
            bg-gray-50
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
          Our{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            IT Business Solutions
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
          {coreServices.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ----------------------------------------------------------------------
// 5. Three-Card Pricing Section
// ----------------------------------------------------------------------
const PricingSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
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
        IT Business{" "}
        <span
          className="
                    text-pink-600
                  "
        >
          Service Packages
        </span>
      </h2>

      <motion.div
        variants={containerVariants}
        className="
                grid grid-cols-1
                gap-8
                md:grid-cols-3
              "
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
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
                                        text-pink-600
                                      `}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
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
                                text-center font-semibold text-white
                                bg-pink-600
                                rounded-lg
                                shadow-md
                                transition duration-300 hover:bg-pink-700
                              `}
              >
                Get IT Solutions
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 6. Contact Form Section (CTA)
// ----------------------------------------------------------------------
const ContactSection = () => (
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
        Ready to Transform Your IT?
      </h2>
      <p
        className="
                mb-6
                text-lg text-gray-600
              "
      >
        Let's build a robust IT infrastructure that supports your business
        growth. Contact us for a comprehensive IT assessment.
      </p>
      <InlineContactForm targetEmail="webvisionsoftech@gmail.com" />
    </div>
  </section>
);

// ----------------------------------------------------------------------
// MAIN COMPONENT: ITBusinessPage
// ----------------------------------------------------------------------

const ITBusinessPage = () => {
  return (
    <div
      className="
            min-h-screen
            text-[#1F2937] font-sans
            bg-white
          "
    >
      <SEO
        title="IT Business Solutions"
        description="IT business services including infrastructure, cloud and managed services by Webvision Infotech."
        url="/services/it-business"
      />

      {/* 1. Hero Content/Image Section */}
      <HeroSection />

      {/* 2. Content/Image Detail Section */}
      <MethodologySection />

      {/* 3. Card Grid Section (Core Services) */}
      <CardGridSection />

      {/* 4. Pricing Section */}
      <PricingSection />

      {/* 5. Contact Form Section (CTA) */}
      <ContactSection />
    </div>
  );
};

export default ITBusinessPage;
