import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  AppWindow,
  Users,
  Briefcase,
  Database,
  Share2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const services = [
  {
    name: "Software Development",
    description:
      "Custom tailor-made solutions for complex business architectures.",
    icon: <Code size={28} />,
    link: "/services/software-development",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Website Development",
    description:
      "High-performance, responsive websites with modern UX/UI standards.",
    icon: <Layers size={28} />,
    link: "/services/web-development",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "App Development",
    description:
      "Native and cross-platform mobile apps built for speed and scale.",
    icon: <AppWindow size={28} />,
    link: "/services/app-development",
    color: "from-orange-500 to-yellow-400",
  },
  {
    name: "Outsourcing & Consulting",
    description: "Expert guidance to optimize your technical roadmap and team.",
    icon: <Users size={28} />,
    link: "/services/out-consulting",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "IT Business Solution",
    description: "End-to-end digital transformation for modern enterprises.",
    icon: <Briefcase size={28} />,
    link: "/services/it-business",
    color: "from-indigo-500 to-blue-400",
  },
  {
    name: "ERP & CRM Solution",
    description:
      "Automate your workflow with robust and scalable internal systems.",
    icon: <Database size={28} />,
    link: "/services/erp-crm",
    color: "from-red-500 to-rose-400",
  },
  {
    name: "SEO Optimization",
    description:
      "Dominating search results with data-driven organic strategies.",
    icon: <TrendingUp size={28} />,
    link: "/services/seo",
    color: "from-teal-500 to-cyan-400",
  },
  {
    name: "Social Media Marketing",
    description:
      "Creative storytelling to grow your brand's digital footprint.",
    icon: <Share2 size={28} />,
    link: "/services/smm",
    color: "from-fuchsia-500 to-purple-400",
  },
];

const OurService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      className="
        overflow-hidden
        py-24
        bg-slate-50
        relative
      "
    >
      <SEO
        title="Services"
        description="Explore services by Webvision Infotech: Software, Web & App development, SEO, SMM and more."
        url="/services"
      />
      {/* Background Decorative Elements */}
      <div
        className="
          w-full h-full
          pointer-events-none opacity-40
          absolute top-0 left-0
        "
      >
        <div
          className="
            w-[40%] h-[40%]
            bg-blue-100
            rounded-full
            absolute top-[-10%] left-[-10%] blur-[120px]
          "
        />
        <div
          className="
            w-[40%] h-[40%]
            bg-purple-100
            rounded-full
            absolute bottom-[-10%] right-[-10%] blur-[120px]
          "
        />
      </div>

      <div
        className="
          z-10
          max-w-7xl
          mx-auto px-6
          relative
        "
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mb-20
            text-center
          "
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              text-blue-600 font-bold tracking-[0.25em] text-sm
              uppercase
            "
          >
            Expertise
          </motion.span>
          <h1
            className="
              mt-3 mb-6
              text-4xl font-black text-slate-900
              md:text-6xl
            "
          >
            Digital{" "}
            <span
              className="
                text-transparent
                bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600
              "
            >
              Capabilities
            </span>
          </h1>
          <div
            className="
              h-1.5 w-24
              mx-auto mb-8
              bg-blue-600
              rounded-full
            "
          />
          <p
            className="
              max-w-2xl
              mx-auto
              text-lg text-slate-600 leading-relaxed
            "
          >
            We don't just build software; we engineer digital experiences that
            push the boundaries of what's possible for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="
                group
              "
            >
              <Link
                to={service.link}
                className="
                  block
                  h-full
                "
              >
                <div
                  className="
                    flex flex-col overflow-hidden
                    h-full
                    p-8
                    bg-white
                    rounded-3xl border border-slate-100
                    shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all
                    relative duration-500 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:border-blue-100 justify-between
                  "
                >
                  {/* Subtle Gradient Hover Background */}
                  <div
                    className={`
                      opacity-0 transition-opacity
                      group-hover:opacity-[0.03] duration-500
                      absolute inset-0 bg-gradient-to-br ${service.color}
                    `}
                  />

                  <div>
                    {/* Icon Container */}
                    <div
                      className={`
                        inline-flex
                        w-14 h-14
                        mb-8
                        text-white
                        bg-gradient-to-br
                        rounded-2xl
                        shadow-lg transition-transform
                        items-center justify-center ${service.color} duration-500 group-hover:scale-110 group-hover:rotate-3
                      `}
                    >
                      {service.icon}
                    </div>

                    <h3
                      className="
                        mb-3
                        text-xl font-bold text-slate-900
                        transition-colors
                        group-hover:text-blue-600
                      "
                    >
                      {service.name}
                    </h3>
                    <p
                      className="
                        mb-6
                        text-slate-500 text-sm leading-relaxed
                      "
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Link Action */}
                  <div
                    className="
                      flex
                      text-blue-600 font-bold text-xs tracking-widest
                      items-center uppercase
                    "
                  >
                    <span
                      className="
                        mr-2
                        transition-all
                        group-hover:mr-4
                      "
                    >
                      Learn More
                    </span>
                    <ArrowRight
                      size={14}
                      className="
                        opacity-0 transition-all
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;
