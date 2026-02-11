import React, { useEffect } from "react";
import { motion } from "framer-motion";
import InlineContactForm from "../../components/InlineContactForm";
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Code,
  Shield,
  Facebook,
  Instagram,
  Youtube,
  Zap,
  Monitor,
  MessageSquare,
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
    icon: Users,
    title: "Foundation Starter",
    subtitle: "Focus: Setup, Content Scheduling & Engagement",
    features: [
      "2 Platform Setup/Optimization (FB/Insta)",
      "12 Posts/Reels Scheduled Monthly",
      "Basic Community Management (4 hrs/week)",
      "Monthly Performance Reporting",
    ],
    accent: "text-gray-500",
    shadow: "shadow-gray-300",
  },
  {
    icon: Target,
    title: "Growth Accelerator (Recommended)",
    subtitle: "Focus: Paid Ads, Lead Generation & Conversion",
    features: [
      "All Starter features included",
      "Dedicated Paid Campaign Strategy (₹ Ad Spend)",
      "Conversion Tracking Setup (Pixel/API)",
      "Advanced Audience Segmentation & Testing",
    ],
    accent: "text-pink-600", // Primary Blue
    shadow: "shadow-pink-600/50",
  },
  {
    icon: DollarSign,
    title: "Enterprise Influencer",
    subtitle: "Focus: Full Funnel Management & Brand Authority",
    features: [
      "All Growth features included",
      "Influencer/Creator Outreach Management",
      "Dedicated Customer Service & Moderation",
      "Quarterly Brand Health Audit & Strategy",
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []),
  (
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
        {/* Left Part: Text and Heading (SMM Focus) */}
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
            Your Social Connection Strategy
          </h2>
          <h1
            className="
                    text-4xl font-extrabold leading-tight text-[#1F2937]
                    md:text-5xl
                  "
          >
            Mastering Social Media: From{" "}
            <span
              className="
                        text-pink-600
                      "
            >
              Engagement to ROI
            </span>
          </h1>
          <p
            className="
                    text-lg text-gray-600
                  "
          >
            We craft compelling social narratives and targeted paid campaigns
            across platforms like Facebook, Instagram, and LinkedIn to build
            community, drive traffic, and maximize your return on investment.
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
            View SMM Pillars
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
              src="/images/smm_dashboard.png"
              alt="Social media marketing dashboard illustration"
              loading="lazy"
              className="
                        w-full h-full
                        shadow-2xl
                      "
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
);

// ----------------------------------------------------------------------
// 2. Content/Image Split Section (Left Image, Right Content)
// ----------------------------------------------------------------------
const PaidAdsSection = () => (
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
        whileHover={{ scale: 1.01, rotate: -0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
                flex order-2
                justify-center
                md:order-1
              "
      >
        <img
          src="/images/paid_ads_setup.png"
          alt="Targeted social media advertising setup"
          className="
                    w-full
                    shadow-2xl
                  "
        />
      </motion.div>

      {/* Right Part: Related SMM Information */}
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
          Precision Targeting &{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Paid Ad Mastery
          </span>
        </h3>
        <p
          className="
                    text-lg text-gray-600
                  "
        >
          We don't just spend money; we invest it strategically. Our approach
          uses deep audience analysis to create highly **segmented,
          high-converting ad campaigns** on Meta, LinkedIn, and YouTube.
        </p>
        <ul
          className="
                    space-y-2 pl-4
                    text-lg text-gray-600
                    list-disc list-inside
                  "
        >
          <li>
            **Conversion Focus:** Directing traffic to high-value actions
            (purchases, sign-ups).
          </li>
          <li>
            **A/B Testing:** Continuous testing of ad creatives, copy, and
            audience demographics.
          </li>
          <li>
            **Budget Optimization:** Maximizing reach and results within a fixed
            daily budget.
          </li>
        </ul>
      </motion.div>
    </div>
  </motion.section>
);

// ----------------------------------------------------------------------
// 3. Image Mosaic Section (Custom Image Layout)
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
            w-[60%] max-w-7xl
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
        Platform{" "}
        <span
          className="
                    text-pink-600
                  "
        >
          Ecosystem
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
              src="/images/facebook_ad.jpg"
              alt="Facebook advertising mockup"
              loading="lazy"
              className="
                            object-cover
                            w-full h-full
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
              src="/images/instagram_reel.jpg"
              alt="Instagram Reel content creation"
              loading="lazy"
              className="
                            object-cover
                            w-full h-full
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
              src="/images/linkedin_b2b.jpg"
              alt="LinkedIn B2B marketing content"
              loading="lazy"
              className="
                            object-cover
                            w-full h-full
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
              src="/images/tiktok_viral.jpg"
              alt="TikTok viral video strategy"
              loading="lazy"
              className="
                            object-cover
                            w-full h-full
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
        border border-gray-100
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
      icon: Facebook,
      title: "Content Calendar & Design",
      description:
        "Strategic planning and professional creative development for all channels.",
    },
    {
      icon: Instagram,
      title: "Community Management",
      description:
        "Active engagement, response handling, and brand reputation protection.",
    },
    {
      icon: TrendingUp,
      title: "A/B Testing & Optimization",
      description:
        "Data-driven testing of ad creatives, copy, and landing pages for better CTR.",
    },
    {
      icon: Zap,
      title: "Rapid Response Strategy",
      description:
        "Quick reaction to trends and crises to maintain brand relevance and safety.",
    },
    {
      icon: MessageSquare,
      title: "Direct Response Marketing",
      description:
        "Creating compelling calls-to-action that drive immediate lead generation.",
    },
    {
      icon: Shield,
      title: "Brand Safety Monitoring",
      description:
        "Protecting your brand from negative sentiment and irrelevant placements.",
    },
    {
      icon: Code,
      title: "Conversion Tracking Setup",
      description:
        "Implementing pixels and APIs for accurate measurement of off-platform actions.",
    },
    {
      icon: Youtube,
      title: "Video Content Strategy",
      description:
        "Focusing on short-form video (Reels, TikTok) for maximum organic reach.",
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
          The 8 Pillars of{" "}
          <span
            className="
                        text-pink-600
                      "
          >
            Social Media Success
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
        Social Media{" "}
        <span
          className="
                    text-pink-600
                  "
        >
          Investment Packages
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
                        border-t-8 border-b-8
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
                                shadow-md
                                transition duration-300 hover:bg-pink-700
                              `}
              >
                Get Custom Proposal
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
            shadow-2xl
          "
    >
      <h2
        className="
                mb-4
                text-3xl font-bold text-[#1F2937]
              "
      >
        Ready to Go Viral?
      </h2>
      <p
        className="
                mb-6
                text-lg text-gray-600
              "
      >
        Contact us for a free social media audit and see how we can transform
        your brand's presence.
      </p>
      <InlineContactForm targetEmail="webvisionsoftech@gmail.com" />
    </div>
  </section>
);

// ----------------------------------------------------------------------
// MAIN COMPONENT: SmmPage
// ----------------------------------------------------------------------

const SmmPage = () => {
  return (
    <div
      className="
            min-h-screen
            text-[#1F2937] font-sans
            bg-white
          "
    >
      <SEO
        title="Social Media Marketing"
        description="Social media marketing services: content, ads, community management and influencer outreach."
        url="/services/smm"
      />

      {/* 1. Hero Content/Image Section */}
      <HeroSection />

      {/* 2. Content/Image Detail Section (Paid Ads Focus) */}
      <PaidAdsSection />

      {/* 3. Image Mosaic Section (Platform Ecosystem) */}
      <ImageMosaicSection />

      {/* 4. Card Grid Section (Core Services) */}
      <CardGridSection />

      {/* 5. Pricing Section */}
      <PricingSection />

      {/* 6. Contact Form Section (CTA) */}
      <ContactSection />
    </div>
  );
};

export default SmmPage;
