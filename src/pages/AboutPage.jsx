import React from 'react';
import { motion } from 'framer-motion';
import Aboutus from '../components/About';
import TeamSection from '../components/TeamSection';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// --- Helper Components: Icons ---
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { when: "beforeChildren", staggerChildren: 0.14, duration: 0.6 },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 40 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", duration: 0.7 },
    },
    whileHover: { scale: 1.03, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
};

const techs = ["Node.js", "PHP", "Angular", "Perl", "HTML5", "Python"];

const AboutUs = () => (
    <main
        className="
      bg-gradient-to-br from-[#f5faff] via-white to-[#f5faff]
      text-gray-800 min-h-screen py-14 px-4 md:px-24
      flex flex-col justify-center
    "
    >
        <SEO
            title="About Us"
            description="Learn about Webvision Infotech — One Stop IT Solution for web and windows applications."
            url="/about"
            image="/public/images/native-banner.avif"
        />
        {/* New Hero Section */}
        <motion.section
            className="w-full mx-auto py-16"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
                        variants={childVariants}
                    >
                        About <br />
                        <span className="text-blue-600">WEBVISION INFOTECH</span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
                        variants={childVariants}
                    >
                        Webvision Softech is your "One Stop IT Solution." We specialize in a wide range of web and window applications, delivering high-quality services to elevate the IT sector.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start"
                        variants={childVariants}
                    >
                        <motion.button
                            className="bg-[#8BC4EC] hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-colors duration-300 flex items-center group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact"> Get Started </Link>
                            <ArrowRightIcon />
                        </motion.button>
                        <motion.button
                            className="bg-transparent border-2 border-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/service"> Our Services </Link>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right: Image */}
                <motion.div
                    className="flex-1"
                    variants={childVariants}
                >
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                        alt="Modern office setup with multiple screens"
                        loading="lazy"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/e0e7ff/4338ca?text=About+Us'; }}
                    />
                </motion.div>
            </div>
        </motion.section>


        {/* Tech Logos Row */}
        <motion.div
            className="flex flex-wrap justify-center gap-6 my-14"
            variants={childVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {techs.map((tech) => (
                <motion.div
                    key={tech}
                    whileHover={{ scale: 1.09, y: -4 }}
                    className="
              p-4 rounded-xl shadow bg-white flex items-center justify-center
              transition-all border border-gray-100
            "
                >
                    <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase().replace('.', '')}/${tech.toLowerCase().replace('.', '')}-original.svg`}
                        alt={tech}
                        loading="lazy"
                        className="h-8 md:h-10 object-contain"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/90x40?text=${encodeURIComponent(tech)}` }}
                    />
                </motion.div>
            ))}
        </motion.div>



        {/* Cards Section */}
        <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div
                variants={cardVariants}
                whileHover="whileHover"
                className="bg-white rounded-2xl shadow-xl p-7 flex flex-col h-full"
            >
                <h3 className="text-xl font-bold mb-3 text-blue-700">Our Vision</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    Provide simple & effective IT solutions for complex business needs using latest technologies —
                    always cost-effective, always global.
                </p>
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="whileHover"
                className="bg-white rounded-2xl shadow-xl p-7 flex flex-col h-full"
            >
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Our Mission</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    Empower entrepreneurs in emerging markets with affordable, efficient, and innovative IT solutions — focused on innovation, quality, and client success.
                </p>
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="whileHover"
                className="bg-white rounded-2xl shadow-xl p-7 flex flex-col h-full"
            >
                <h3 className="text-xl font-bold mb-3 text-emerald-700">Why Choose Us?</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                    Client-centric methodology, unique solutions, and exceptional service. We transform businesses and consistently exceed expectations.
                </p>
            </motion.div>
        </motion.div>
        <div className='mt-16'> <Aboutus /></div>
        <div className='mt-16'> <TeamSection /> </div>
    </main>
);

export default function App() {
    return <AboutUs />;
}
