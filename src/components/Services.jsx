import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import {
    Code, Layout, Cloud, TrendingUp, Settings, PenTool, ArrowRight
} from 'lucide-react';

// Added Icons to the data for more visual impact
const servicesList = [
    {
        title: 'Web Development',
        icon: <Code className="w-6 h-6" />,
        description: 'Crafting responsive, high-performance websites and mobile applications tailored to your business needs.',
        extendedDescription: 'Our development process includes full-stack solutions using React, Node.js, and modern mobile frameworks. We focus on scalability, security, and clean code architecture.',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
        link: "/services/web-development",
        color: "blue"
    },
    {
        title: 'App Development',
        icon: <Layout className="w-6 h-6" />,
        description: 'Designing intuitive, engaging, and user-centric interfaces that deliver a seamless user experience.',
        extendedDescription: 'We perform deep user research and wireframing to build prototypes that convert. Our designs prioritize accessibility and emotional engagement.',
        imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
        link: "/services/app-development",
        color: "purple"
    },
    {
        title: 'Cloud Solutions',
        icon: <Cloud className="w-6 h-6" />,
        description: 'Leveraging cloud infrastructure to provide scalable, secure, and cost-effective solutions for your business.',
        extendedDescription: 'From AWS to Google Cloud, we manage your migration and infrastructure. We implement CI/CD pipelines and auto-scaling to ensure 99.9% uptime.',
        imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
        link: "/services/erp-crm",
        color: "cyan"
    },
    {
        title: 'Digital Marketing',
        icon: <TrendingUp className="w-6 h-6" />,
        description: 'Boosting your online presence with data-driven marketing strategies, from SEO to social media campaigns.',
        extendedDescription: 'Our marketing experts use AI-driven analytics to target your ideal audience. We specialize in high-ROI PPC campaigns and organic SEO growth.',
        imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
        link: "/services/seo",
        color: "orange"
    },
    {
        title: 'Software Maintenance',
        icon: <Settings className="w-6 h-6" />,
        description: 'Ensuring your applications run smoothly with proactive maintenance, updates, and dedicated support.',
        extendedDescription: 'We provide 24/7 monitoring, security patching, and performance tuning. Our team ensures legacy systems stay compatible with modern standards.',
        imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop',
        link: "/services/software-development",
        color: "green"
    },
    {
        title: 'Branding & Identity',
        icon: <PenTool className="w-6 h-6" />,
        description: 'Building a strong brand identity with memorable logos, style guides, and compelling brand narratives.',
        extendedDescription: 'We define your brand DNA. This includes visual identity systems, typography, color palettes, and a unique voice that resonates.',
        imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop',
        link: "/services/smm",
        color: "pink"
    },
];

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-10 sm:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-10 md:mb-12"
                >
                    <span className="text-pink-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
                        Everything You Need
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Our <span className="text-pink-600">Premium Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We deliver a comprehensive suite of digital solutions designed to accelerate your business growth and ensure long-term success.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link to={service.link} className="block group h-full">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(236,72,153,0.3)] transition-all duration-500 border border-slate-100 group-hover:border-pink-500/30 h-full flex flex-col"
                                >
                                    {/* Image Section with Overlay */}
                                    <div className="h-56 relative overflow-hidden">
                                        <img
                                            src={service.imageUrl}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                        {/* Icon Badge */}
                                        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white shadow-xl group-hover:bg-pink-600 group-hover:border-pink-600 transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Expandable Info */}
                                        <AnimatePresence>
                                            {expandedIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden border-t border-slate-100 mt-2 mb-4 pt-4"
                                                >
                                                    <p className="text-slate-500 text-sm italic leading-relaxed">
                                                        {service.extendedDescription}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Interaction Bar */}
                                        <div className="mt-auto flex items-center justify-between">
                                            <button
                                                onClick={(e) => toggleExpand(e, index)}
                                                className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-pink-600 transition-colors"
                                            >
                                                <span className="bg-slate-100 p-1 rounded-full group-hover:bg-pink-50">
                                                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-90' : ''}`} />
                                                </span>
                                                {expandedIndex === index ? "LESS" : "DETAILS"}
                                            </button>

                                            <span className="text-pink-600 font-black text-xs tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                                                VIEW CASE STUDY
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
