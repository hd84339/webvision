import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const products = [
    {
        title: "Fast Quotation & Invoice App",
        tagline: "Quick Business Solutions",
        description: "Create and send professional quotes and invoices on the go. Specifically designed for speed and ease of use to keep your cash flow moving.",
        features: ["Instant Quotes", "PDF Generation", "Share via WhatsApp"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
        color: "blue"
    },
    {
        title: "Advanced CRM Software",
        tagline: "Customer Relationship Hub",
        description: "Transform your sales pipeline. Our CRM provides vertical solutions tailored for mid-market and enterprise-level lead tracking and customer support.",
        features: ["Lead Scoring", "Automated Workflows", "360° View"],
        image: "/images/appdevelopment.png",
        color: "indigo"
    },
    {
        title: "Loyalty Management Software",
        tagline: "Customer Retention Suite",
        description: "A complete ecosystem to retain customers. Includes a mobile app for customers to track points, redeem rewards, and stay engaged with your brand.",
        features: ["Mobile App Integration", "Points Logic", "Campaign Tools"],
        image: "/images/app_analytics_dashboard.jpg",
        color: "purple"
    },
    {
        title: "Billing Software",
        tagline: "Comprehensive Finance",
        description: "Full-fledged billing solution for businesses. Manage inventory, GST/Tax calculations, multi-store data, and generate detailed financial reports.",
        features: ["GST Ready", "Inventory Sync", "Multi-Store"],
        image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop",
        color: "cyan"
    },
    {
        title: "AMC & Service CRM",
        tagline: "Service Excellence",
        description: "Streamline your Annual Maintenance Contracts. Track service schedules, manage technician visits, and automate renewal reminders for superior customer service.",
        features: ["Automated Reminders", "Field Service", "Complaint Tracking"],
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
        color: "rose"
    }
];

const ProductSection = ({ product, index }) => {
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="group relative"
        >
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                    className="w-full lg:w-1/2 relative"
                    whileHover={{ scale: 1.02, rotateY: isReversed ? -5 : 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <div className={`absolute -inset-4 bg-${product.color}-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white p-2">
                        <img
                            src={product.image}
                            alt={product.title}
                            loading="lazy"
                            className="rounded-xl object-cover w-full h-[300px] md:h-[450px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    </div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-6 hidden md:flex bg-white p-4 rounded-xl shadow-xl items-center gap-3 border border-slate-100"
                    >
                        <div className={`p-2 bg-${product.color}-100 rounded-lg text-${product.color}-600`}>
                            <ShieldCheck size={20} />
                        </div>
                        <span className="text-sm font-bold text-slate-800">Verified Secure</span>
                    </motion.div>
                </motion.div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                        <span className={`text-${product.color}-600 font-bold tracking-[0.2em] uppercase text-xs`}>
                            {product.tagline}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            {product.title}
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        {product.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features?.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 group/feat">
                                <CheckCircle size={18} className="text-pink-500 group-hover/feat:scale-125 transition-transform" />
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pt-6">
                        <motion.a
                            href="tel:+919322347666"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-slate-900 text-white font-black py-4 px-10 rounded-full shadow-2xl hover:bg-pink-600 transition-all duration-300 group"
                        >
                            Request a Demo
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const OurProducts = () => {
    return (
        <main className="bg-[#FCFDFF] min-h-screen relative overflow-hidden">
            <SEO title="Products" description="Explore product offerings by Webvision Infotech." url="/products" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 py-20 lg:py-32">
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-40 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                    >
                        <Zap size={14} /> Global Enterprise Solutions
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
                    >
                        Future-Ready <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                            Software Products
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Custom-engineered digital tools that scale with your vision. Reliable, secure, and built for growth.
                    </motion.p>
                </div>

                <div className="space-y-32 lg:space-y-56">
                    {products.map((product, index) => (
                        <ProductSection key={index} product={product} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default OurProducts;