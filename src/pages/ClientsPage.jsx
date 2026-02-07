import React from 'react'; // Removed useState since it's no longer needed
import { motion } from 'framer-motion'; // Removed AnimatePresence
import SEO from '../components/SEO';

// --- Client Data ---
const clients = [
    { name: "Airo-tech", info: "Cutting-edge aerospace technology.", logo: "/clients/airotech.jpg" },
    { name: "Balchitrakal", info: "Creative arts and cultural organization.", logo: "/clients/balchitrakal.jpg" },
    { name: "BBA", info: "Building the next generation of public speakers.", logo: "/clients/bba.jpg" },
    { name: "Giriji", info: "Engineering and technology solutions provider.", logo: "/clients/giriji.jpg" },
    { name: "Gleen Steen", info: "High-performance industrial solutions.", logo: "/clients/gleen-steen.jpg" },
    { name: "GV Wala", info: "Premium organic tea and beverage supplier.", logo: "/clients/gvwala.jpg" },
    { name: "Maharashtra Kung Fu", info: "Martial arts training and federation.", logo: "/clients/maharstra-kungfu.jpg" },
    { name: "MFV", info: "Innovative business solutions.", logo: "/clients/mfv.jpg" },
    { name: "MK Enterprises", info: "Diversified business enterprises.", logo: "/clients/mkenterprises.jpg" },
    { name: "Naturez Freshz", info: "Farm-to-table organic produce delivery.", logo: "/clients/naturefreshz.jpg" },
    { name: "Patna", info: "Regional development and services.", logo: "/clients/patna.jpg" },
    { name: "RAHY", info: "Leading logistics and transport solutions.", logo: "/clients/rahy.jpg" },
    { name: "Tata Speed", info: "Automotive performance and parts specialist.", logo: "/clients/tata-speed.jpg" },
    { name: "Vruddhi", info: "Personal and business financial planning.", logo: "/clients/vrudhi.jpg" },
    { name: "We Can Services", info: "Comprehensive home and business maintenance.", logo: "/clients/we-can-services.jpg" },
    { name: "Web Vision Softech", info: "Web development solutions in Vasai.", logo: "/clients/web-development-vasai-web-vision-softech.jpg" },
];


// --- Components ---

/**
 * ClientCard Component (Simplified)
 * Displays only the client logo without any hover effects.
 */
const ClientCard = ({ client }) => {
    return (
        <motion.div
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md h-32"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <img src={client.logo} alt={`${client.name} logo`} loading="lazy" className="max-h-20 w-auto object-contain" />
        </motion.div>
    );
};

/**
 * ClientCallToAction Component
 * A footer-like section to encourage user interaction.
 */
const ClientCallToAction = () => {
    return (
        <motion.div
            className="mt-24 md:mt-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Become Our Next Success Story
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Ready to elevate your brand and achieve your goals? Let's collaborate and create something amazing together.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Get In Touch
                </motion.button>
            </div>
        </motion.div>
    );
};


/**
 * OurClients Component
 * The main component to display the grid of client logos.
 */
const OurClients = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    return (
        <main className="bg-gray-100 min-h-screen py-16 md:py-24">
            <SEO title="Clients" description="Trusted clients of Webvision Infotech across industries." url="/clients" />
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Our Valued Clients
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We are proud to have collaborated with a diverse range of businesses and organizations.
                    </p>
                </motion.div>

                {/* Client Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {clients.map((client) => (
                        <ClientCard key={client.name} client={client} />
                    ))}
                </motion.div>

                {/* Call to Action Section */}
                <ClientCallToAction />
            </div>
        </main>
    );
};

export default OurClients;