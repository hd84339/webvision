import React from "react";
import { motion } from "framer-motion";
import InlineContactForm from "../../components/InlineContactForm";
import {
  Smartphone,
  Zap,
  TrendingUp,
  Code,
  DollarSign,
  Shield,
  Monitor,
  Users,
  Cloud,
  Aperture,
  Settings,
  Database,
  Check,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import SEO from "../../components/SEO";

// --- Styling & Config ---
// Accent Color: Premium Pink (pink-600)
// Text Color: Deep Blue (#1F2937)

// --- Pricing Card Data ---
const pricingPlans = [
  {
    icon: Smartphone,
    title: "MVP Launchpad",
    subtitle: "Focus: Core Functionality & Rapid Deployment",
    features: [
      "Cross-Platform Flutter/React Native",
      "Core Feature Development (up to 5 screens)",
      "Basic Backend (Firebase/Supabase setup)",
      "3rd Party Integration (e.g., Auth)",
    ],
    accent: "text-gray-500",
    shadow: "shadow-gray-300",
  },
  {
    icon: Zap,
    title: "Growth Scale (Recommended)",
    subtitle: "Focus: Feature Richness & User Experience",
    features: [
      "All Launchpad features included",
      "Advanced UI/UX Customization",
      "Custom API Development & Integration",
      "App Store/Play Store Optimization (ASO)",
    ],
    accent: "text-pink-600", // Premium Pink
    shadow: "shadow-pink-600/50",
  },
  {
    icon: DollarSign,
    title: "Enterprise Ecosystem",
    subtitle: "Focus: High Traffic & Complex Systems",
    features: [
      "All Growth features included",
      "Dedicated Cloud Infrastructure (AWS/Azure)",
      "Comprehensive Security Audit & Testing",
      "SLA and Dedicated DevOps Support",
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
// 3. NEW: Image Mosaic Section (4 Images, Custom Widths)
// ----------------------------------------------------------------------
const ImageMosaicSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className="
      flex
      py-16 px-4
      bg-white
      justify-center
      sm:px-10
    "
  >
    {/* Outer Container: 90% width */}
    <div
      className="
        w-[60%] max-w-5xl
        mx-auto
      "
    >
      <motion.h2
        variants={itemVariants}
        className="
          mb-8
          text-3xl font-extrabold text-[#1F2937] text-center
        "
      >
        Our Apps{" "}
        <span
          className="
            text-pink-600
          "
        >
          Developments
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="
          space-y-4
        "
      >
        {/* Row 1: Left 40%, Right 60% */}
        <div
          className="
            flex
            gap-4
          "
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="
                w-[40%]
              "
          >
            <img
              src="/images/app_design_small.jpg"
              alt="Mobile UI Design Mockup"
              loading="lazy"
              className="
                object-cover
                w-full h-full
                rounded-xl
                shadow-lg
                aspect-[16/9]
              "
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="
              w-[60%]
            "
          >
            <img
              src="/images/app_development_code.jpg"
              alt="Code on screen for app development"
              loading="lazy"
              className="
                object-cover
                w-full h-full
                rounded-xl
                shadow-lg
                aspect-[16/9]
              "
            />
          </motion.div>
        </div>

        {/* Row 2: Left 60%, Right 40% */}
        <div
          className="
            flex
            gap-4
          "
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="
              w-[60%]
            "
          >
            <img
              src="/images/app_analytics_dashboard.jpg"
              alt="App performance analytics dashboard"
              loading="lazy"
              className="
                object-cover
                w-full h-full
                rounded-xl
                shadow-lg
                aspect-[16/9]
              "
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="
              w-[40%]
            "
          >
            <img
              src="/images/app_launch_phone.jpg"
              alt="Hand holding phone with a launched app"
              loading="lazy"
              className="
                object-cover
                w-full h-full
                rounded-xl
                shadow-lg
                aspect-[16/9]
              "
            />
          </motion.div>
        </div>
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
      {/* Left Part: Text and Heading (App Dev Focus) */}
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
          Your Digital Product Vision
        </h2>
        <h1
          className="
            text-4xl font-extrabold leading-tight text-[#1F2937]
            md:text-5xl
          "
        >
          Building Mobile Apps: From{" "}
          <span
            className="
              text-pink-600
            "
          >
            Idea to App Store
          </span>
        </h1>
        <p
          className="
            text-lg text-gray-600
          "
        >
          We specialize in high-performance cross-platform mobile development
          using Flutter and React Native, ensuring native-like speed and a
          unified experience across iOS and Android.
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
          View Core Services
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
            src="/images/appdevelopment.png"
            alt="Mobile app development illustration showing iOS and Android screens"
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
const TechStackSection = () => (
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
        whileHover={{ scale: 1.02, rotate: -0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          flex order-2
          justify-center
          md:order-1
        "
      >
        <img
          src="/images/techstack.png"
          alt="Flutter and React Native frameworks"
          loading="lazy"
          className="
            w-full
            rounded-xl border-0 border-[]
            shadow-2xl
          "
        />
      </motion.div>

      {/* Right Part: Related App Dev Information */}
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
          Cross-Platform Mastery:{" "}
          <span
            className="
              text-pink-600
            "
          >
            Flutter & React Native
          </span>
        </h3>
        <p
          className="
            text-lg text-gray-600
          "
        >
          Choosing the right technology is crucial. We leverage **React Native**
          and **Flutter** to build powerful, single-codebase applications,
          cutting development time and costs by up to 40%.
        </p>
        <ul
          className="
            space-y-2 pl-4
            text-lg text-gray-600
            list-disc list-inside
          "
        >
          <li>**Speed:** Faster time-to-market with code reusability.</li>
          <li>**Performance:** Near-native performance and seamless UX.</li>
          <li>
            **Maintenance:** Simplified updates and bug fixes across platforms.
          </li>
        </ul>
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
  const coreServices = [
    {
      icon: Code,
      title: "Custom UI/UX Design",
      description:
        "Intuitive, clean interfaces built for maximum user engagement and retention.",
    },
    {
      icon: Settings,
      title: "Backend API Integration",
      description:
        "Robust and scalable API development for secure data handling and high traffic.",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "Designing efficient database structures (SQL/NoSQL) tailored to application needs.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description:
        "Optimizing hosting and scaling on AWS, Azure, or Google Cloud Platform.",
    },
    {
      icon: Aperture,
      title: "Quality Assurance (QA)",
      description:
        "Rigorous testing protocols for stability, security, and bug-free performance.",
    },
    {
      icon: Globe,
      title: "App Store Optimization (ASO)",
      description:
        "Strategy for better visibility, downloads, and conversion on app marketplaces.",
    },
    {
      icon: Users,
      title: "Post-Launch Support",
      description:
        "Continuous monitoring, maintenance, and feature updates after deployment.",
    },
    {
      icon: Monitor,
      title: "Native Mobile Development",
      description:
        "Specialized services for pure Swift/Kotlin projects where native performance is mandatory.",
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
          Our{" "}
          <span
            className="
              text-pink-600
            "
          >
            Core App Development Services
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
// 4. Three-Card Pricing Section
// ----------------------------------------------------------------------
const PricingSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className="
      py-24 px-4
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
      <h2
        className="
          mb-4
          text-4xl font-extrabold text-[#1F2937] text-center
          md:text-5xl
        "
      >
        Transparent{" "}
        <span
          className="
            text-pink-600
          "
        >
          Development Packages
        </span>
      </h2>
      <p
        className="
          max-w-3xl
          mb-16 mx-auto
          text-xl text-gray-500 text-center
        "
      >
        Pricing varies based on complexity, feature set, and maintenance
        requirements. All quotes are upfront and fixed scope.
      </p>

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

            {/* Price */}
            <div
              className="
                mb-8 pb-4
                text-center
                border-b
              "
            >
              <p
                className="
                  text-sm text-gray-500
                "
              >
                starting investment
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
                Start Discovery Call
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 5. Contact Form Section (CTA)
// ----------------------------------------------------------------------
const ContactSection = () => (
  <section
    className="
      py-20 px-4
      bg-white
      border-t border-gray-200
      sm:px-10
    "
  >
    <div
      className="
        max-w-3xl
        mx-auto p-10
        text-center
        bg-gray-50
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
        Ready to Build Your App?
      </h2>
      <p
        className="
          mb-6
          text-lg text-gray-600
        "
      >
        Let's discuss your project's scope, technology stack, and timeline. Get
        a free consultation today.
      </p>
      <InlineContactForm targetEmail="webvisionsoftech@gmail.com" />
    </div>
  </section>
);

// ----------------------------------------------------------------------
// MAIN COMPONENT: AppDevlopPage
// ----------------------------------------------------------------------

const AppDevlopPage = () => {
  return (
    <div
      className="
        min-h-screen
        text-[#1F2937] font-sans
        bg-white
      "
    >
      <SEO
        title="App Development"
        description="Mobile app development services: Flutter, React Native, native apps and app store optimization."
        url="/services/app-development"
      />
      {/* 3. NEW: Image Mosaic Section */}
      <ImageMosaicSection />

      {/* 1. Hero Content/Image Section */}
      <HeroSection />

      {/* 2. Content/Image Detail Section (Tech Stack) */}
      <TechStackSection />

      {/* 3. Card Grid Section (Core Services) */}
      <CardGridSection />

      {/* 4. Pricing Section */}
      <PricingSection />

      {/* 5. Contact Form Section (CTA) */}
      <ContactSection />
    </div>
  );
};

export default AppDevlopPage;
