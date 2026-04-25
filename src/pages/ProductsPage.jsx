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
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-14 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
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

            <div className="container mx-auto px-6 pt-6 pb-20 lg:pt-12 lg:pb-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 mb-12 lg:mb-20">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 text-pink-600 px-4 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
                        >
                            <Zap size={16} className="text-pink-500" /> Premium Enterprise Solutions
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]"
                        >
                            Innovative & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">
                                Future-Ready Products
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg"
                        >
                            Explore our comprehensive suite of custom-engineered digital tools designed to accelerate your business growth and scale seamlessly with your long-term vision. Built for ultimate performance and security.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 pt-4"
                        >
                             <div className="flex flex-col">
                                 <span className="text-4xl font-black text-slate-900">50+</span>
                                 <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Enterprise Clients</span>
                             </div>
                             <div className="w-px h-16 bg-slate-200"></div>
                             <div className="flex flex-col">
                                 <span className="text-4xl font-black text-slate-900">99%</span>
                                 <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Uptime Guarantee</span>
                             </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
                        <motion.div
                             initial={{ opacity: 0, scale: 0.95 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.6, delay: 0.2 }}
                             className="relative z-10"
                        >
                             <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 bg-white p-2.5 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                                 <img 
                                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                                     alt="Software Dashboards" 
                                     className="rounded-2xl object-cover w-full h-[350px] lg:h-[450px]"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-transparent mix-blend-multiply rounded-2xl"></div>
                             </div>
                             
                             <motion.div
                                 animate={{ y: [0, -15, 0] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                 className="absolute -top-6 -left-6 bg-white p-4 lg:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20"
                             >
                                 <div className="bg-emerald-100 p-2.5 lg:p-3 rounded-full">
                                     <ShieldCheck size={24} className="text-emerald-600" />
                                 </div>
                                 <div>
                                     <p className="text-sm lg:text-base font-bold text-slate-900">Bank-grade</p>
                                     <p className="text-xs lg:text-sm font-semibold text-slate-500">Security Built-in</p>
                                 </div>
                             </motion.div>
                        </motion.div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-pink-200/50 to-violet-200/50 blur-[100px] -z-10 rounded-full opacity-70"></div>
                    </div>
                </div>

                <div className="flex flex-col space-y-8 lg:space-y-16">
                    {products.map((product, index) => (
                        <React.Fragment key={index}>
                            <ProductSection product={product} index={index} />
                            {index < products.length - 1 && (
                                <hr className="border-t border-slate-200" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default OurProducts;