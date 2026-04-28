import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Globe, Layout, Smartphone } from 'lucide-react';

const featuredItems = [
  {
    title: "Smart Solutions",
    category: "Website",
    icon: <Globe size={18} />,
    description: "Corporate platform for comprehensive business and IT solutions.",
    techStack: ["React", "Node.js"],
    link: "https://www.ssolutions.in/",
    image: "/portfolio/smart-solutions.png",
  },
  {
    title: "Loan Baazaar",
    category: "SaaS",
    icon: <Smartphone size={18} />,
    description: "Comprehensive loan aggregation and comparison marketplace.",
    techStack: ["React Native", "Express"],
    link: "https://loanbaazaar.com/",
    image: "/portfolio/loan-baazaar.png",
  },
  {
    title: "Smart Solutions Mumbai",
    category: "Website",
    icon: <Layout size={18} />,
    description: "Regional business hub and digital services portal.",
    techStack: ["Next.js", "Tailwind"],
    link: "https://www.smartsolutionsmumbai.com/",
    image: "/portfolio/smart-solutions-mumbai.png",
  },
  {
    title: "Wood Oven Pizza",
    category: "Website",
    icon: <Globe size={18} />,
    description: "Premium digital experience for a traditional pizzeria with custom reservations.",
    techStack: ["React", "Firebase"],
    link: "#",
    image: "/portfolio/wood-oven.png",
  }
];

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all group relative hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] duration-500"
    >
      <div className="overflow-hidden h-60 bg-slate-50 relative">
        {item.link && item.link !== "#" && !item.useImageFallback ? (
          <iframe
            src={item.link}
            title={item.title}
            loading="lazy"
            scrolling="no"
            className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none border-0 transition-transform duration-[7000ms] ease-in-out group-hover:-translate-y-[10%]"
          />
        ) : (
          <motion.img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x800/6366f1/ffffff?text=Project+Preview";
            }}
            className="object-cover object-top w-full h-auto transition-transform absolute inset-0 duration-[7000ms] ease-in-out group-hover:-translate-y-[calc(100%-15rem)]"
          />
        )}
        <div className="z-10 flex absolute top-4 left-4 gap-2">
          <span className="flex px-3 py-1.5 text-[10px] font-black text-slate-800 bg-white/90 rounded-full shadow-sm items-center gap-1.5 backdrop-blur-md uppercase">
            {item.icon} {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-black text-slate-900 transition-colors group-hover:text-pink-600">
          {item.title}
        </h3>
        <p className="mb-4 text-slate-500 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap mb-6 gap-1.5">
          {item.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-slate-400 text-[9px] font-bold bg-slate-50 border border-slate-100 uppercase rounded">
              {tech}
            </span>
          ))}
        </div>
        <motion.a href={item.link} whileHover={{ x: 5 }} className="inline-flex text-pink-600 font-black text-xs tracking-tight items-center gap-2 uppercase">
          View Project <ExternalLink size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

const FeaturedPortfolio = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-pink-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Our Latest <span className="text-pink-600">Projects</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            A selection of our most recent and impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-xl hover:bg-pink-600 transition-colors uppercase text-sm tracking-wider"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
