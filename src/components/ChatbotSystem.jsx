import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, MapPin, Phone, Mail, User } from 'lucide-react';

// --- Configuration ---
const COMPANY_EMAIL = 'info@webvisionsoftech.com';
const SECONDARY_EMAIL = 'webvisionsoftech@gmail.com';
const PRIMARY_PHONE = '+91 9322347666';
const SECONDARY_PHONE = '+91 8422014356';
const ADDRESS = '224/A,B4 ,2nd Floor, Vishwakarma Paradise, Phase -1, Ambadi Rd, Vasai West, Palghar, Maharashtra 401202.';

// --- Chatbot Logic and State Management ---

const CHAT_STEPS = {
    INITIAL: 'INITIAL',
    OPTIONS: 'OPTIONS',
    CONTACT_FORM: 'CONTACT_FORM',
    ADDRESS: 'ADDRESS',
    PHONE: 'PHONE',
};

const optionsData = [
    { text: "Send us a message", action: CHAT_STEPS.CONTACT_FORM, icon: Mail },
    { text: "Where is your office?", action: CHAT_STEPS.ADDRESS, icon: MapPin },
    { text: "I need to call you", action: CHAT_STEPS.PHONE, icon: Phone },
];

/**
 * A reusable bubble component for the bot's messages.
 */
const BotMessage = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-200 text-gray-800 p-3 rounded-t-xl rounded-br-xl max-w-[85%] self-start shadow-md"
    >
        {children}
    </motion.div>
);

/**
 * The main component for the full chat window.
 */
const ChatWindow = ({ onClose }) => {
    const [step, setStep] = useState(CHAT_STEPS.INITIAL);
    const [formState, setFormState] = useState({ name: '', email: '', query: '' });

    // --- Actions ---

    const handleFormChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    // VITAL FUNCTION: Opens Gmail URL in a new tab with pre-filled data.
    const handleSendMail = (e) => {
        e.preventDefault();

        // 1. Define subject and email content (correct variable order)
        const subject = encodeURIComponent(`Query from ${formState.name} via Chatbot`);

        const emailBody = `
Hello Web Vision Softech Team,

My name is ${formState.name}.
My contact email is ${formState.email}.

My query is:
${formState.query}
        `.trim();

        const encodedBody = encodeURIComponent(emailBody);

        // 2. Construct the final Gmail URL for webmail opening
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}&cc=${SECONDARY_EMAIL}&su=${subject}&body=${encodedBody}`;

        // 3. Open the Gmail URL in a new tab
        window.open(gmailUrl, '_blank');

        // 4. Clean up state in the chatbot
        setFormState({ name: '', email: '', query: '' });
        setStep(CHAT_STEPS.OPTIONS); // Transition back to the options menu
    };

    const handleInitialGreeting = () => {
        // After showing the welcome message, move to options after a delay
        setTimeout(() => setStep(CHAT_STEPS.OPTIONS), 2000);
    };

    // --- Content Rendering Functions ---

    const renderChatContent = useCallback(() => {
        switch (step) {
            case CHAT_STEPS.INITIAL:
                handleInitialGreeting();
                return (
                    <>
                        <BotMessage>
                            Welcome to Web Vision Softech Pvt Ltd!
                        </BotMessage>
                        <BotMessage>
                            How can I help you today?
                        </BotMessage>
                    </>
                );

            case CHAT_STEPS.OPTIONS:
                return (
                    <div className="space-y-3">
                        <BotMessage>
                            Choose an option below to continue:
                        </BotMessage>
                        {optionsData.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setStep(option.action)}
                                className="bg-pink-500 text-white p-2 rounded-lg text-sm flex items-center shadow-lg hover:bg-pink-600 transition"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <option.icon size={16} className="mr-2" />
                                {option.text}
                            </motion.button>
                        ))}
                    </div>
                );

            case CHAT_STEPS.CONTACT_FORM:
                return (
                    <div className="space-y-3">
                        <BotMessage>
                            Please enter your details below. We'll open your email client for you to send your query.
                        </BotMessage>
                        <form onSubmit={handleSendMail} className="p-4 bg-white rounded-lg shadow-lg space-y-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formState.name}
                                onChange={handleFormChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formState.email}
                                onChange={handleFormChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                            <textarea
                                name="query"
                                placeholder="Your Query"
                                value={formState.query}
                                onChange={handleFormChange}
                                required
                                rows="3"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-green-600 transition disabled:opacity-50"
                                disabled={!formState.name || !formState.email || !formState.query}
                            >
                                Send Mail <Send size={16} className="ml-2" />
                            </button>
                        </form>
                        <button onClick={() => setStep(CHAT_STEPS.OPTIONS)} className="text-xs text-gray-500 hover:text-pink-500">
                            ← Back to Options
                        </button>
                    </div>
                );

            case CHAT_STEPS.ADDRESS:
                return (
                    <div className="space-y-3">
                        <BotMessage>
                            <MapPin size={18} className="inline mr-2 text-pink-500" />
                            Here is our corporate office address:
                        </BotMessage>
                        <div className="bg-white p-3 rounded-lg shadow-md text-sm">
                            <p className="font-semibold text-gray-800">{ADDRESS}</p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 text-xs mt-1 block hover:underline"
                            >
                                View on Google Maps
                            </a>
                        </div>
                        <button onClick={() => setStep(CHAT_STEPS.OPTIONS)} className="text-xs text-gray-500 hover:text-blue-500">
                            ← Back to Options
                        </button>
                    </div>
                );

            case CHAT_STEPS.PHONE:
                return (
                    <div className="space-y-3">
                        <BotMessage>
                            <Phone size={18} className="inline mr-2 text-pink-500" />
                            You can reach us directly on these numbers:
                        </BotMessage>
                        <div className="bg-white p-3 rounded-lg shadow-md text-sm space-y-2">
                            <p>
                                <a href={`tel:${PRIMARY_PHONE}`} className="text-pink-500 font-semibold hover:underline">{PRIMARY_PHONE}</a> (Primary)
                            </p>
                            <p>
                                <a href={`tel:${SECONDARY_PHONE}`} className="text-blue-500 font-semibold hover:underline">{SECONDARY_PHONE}</a> (Secondary)
                            </p>
                        </div>
                        <button onClick={() => setStep(CHAT_STEPS.OPTIONS)} className="text-xs text-gray-500 hover:text-blue-500">
                            ← Back to Options
                        </button>
                    </div>
                );

            default:
                return null;
        }
    }, [step, formState, handleInitialGreeting]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="fixed bottom-4 right-4 z-[1000] w-[90vw] max-w-sm h-[70vh] max-h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
        >
            {/* Header */}
            <div className="bg-pink-600 text-white p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center">
                    <MessageSquare size={24} className="mr-2" />
                    <h3 className="font-bold text-lg">Web Vision Chatbot</h3>
                </div>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-pink-500 transition">
                    <X size={20} />
                </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                    {renderChatContent()}
                </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-3 border-t bg-gray-50 text-center text-xs text-gray-500">
                Powered by Web Vision Softech
            </div>
        </motion.div>
    );
};


// ----------------------------------------------------------------------
// MAIN EXPORTED COMPONENT (The clickable circle)
// ----------------------------------------------------------------------

const ChatbotSystem = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 1. Chatbot Icon (Small Circle) */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 z-[1000] p-4 rounded-full shadow-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all ${isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open Chatbot"
            >
                <MessageSquare size={30} />
            </motion.button>

            {/* 2. Chatbot Window (Mobile Size) */}
            <AnimatePresence>
                {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
            </AnimatePresence>


        </>
    );
};

export default ChatbotSystem;