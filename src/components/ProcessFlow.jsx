import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Search, Code, Rocket, CheckCircle } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Discovery",
        description: "We dive deep into your business goals and requirements.",
        icon: Search,
    },
    {
        id: 2,
        title: "Strategy",
        description: "Blueprint creation with timelines and tech stack selection.",
        icon: Lightbulb,
    },
    {
        id: 3,
        title: "Development",
        description: "Agile coding sprints with regular updates and feedback.",
        icon: Code,
    },
    {
        id: 4,
        title: "Testing",
        description: " rigorous QA to ensure a bug-free, smooth experience.",
        icon: CheckCircle,
    },
    {
        id: 5,
        title: "Launch",
        description: "Deployment and post-launch support for growth.",
        icon: Rocket,
    },
];

const ProcessFlow = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-pink-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 mb-6"
                    >
                        Our <span className="text-pink-600">Process</span>
                    </motion.h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        From concept to reality, we follow a proven workflow to deliver
                        exceptional results.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-6 group-hover:border-pink-500 transition-colors duration-300 relative">
                                    <div className="absolute inset-0 bg-pink-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                    <step.icon size={28} className="text-slate-700 group-hover:text-pink-600 relative z-10 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
