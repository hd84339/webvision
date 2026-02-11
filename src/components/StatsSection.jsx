import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
    {
        id: 1,
        label: "Years of Excellence",
        value: "10+",
        icon: Clock,
    },
    {
        id: 2,
        label: "Projects Completed",
        value: "500+",
        icon: Briefcase,
    },
    {
        id: 3,
        label: "Happy Clients",
        value: "300+",
        icon: Users,
    },
    {
        id: 4,
        label: "Awards Won",
        value: "25+",
        icon: Award,
    },
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
