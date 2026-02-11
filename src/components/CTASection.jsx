import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl"
            >
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-pink-900/40" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />

                <div className="relative z-10 px-8 py-16 md:py-24 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Ready to <span className="text-pink-500">Transform</span> Your Digital Presence?
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                            Let's collaborate to build something extraordinary. Whether it's a
                            new platform or a digital overhaul, we have the expertise to deliver.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-pink-500/40"
                            >
                                Start a Project <ArrowRight size={20} />
                            </Link>
                            <a
                                href="mailto:webvisionsoftech@gmail.com"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full transition-all border border-white/10"
                            >
                                <Mail size={20} /> Contact Sales
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        {/* Abstract visual or decorative element could go here */}
                        <div className="w-64 h-64 border-4 border-white/10 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                            <div className="w-48 h-48 border-4 border-pink-500/20 rounded-full" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_20px_#ec4899]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
