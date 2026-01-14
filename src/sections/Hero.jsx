import GridBackground from '../components/GridBackground';
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import sajid from "../assets/sajid.png";

const TypingText = ({ text, className, delay = 0 }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.05,
            },
        },
    };

    return (
        <motion.h1
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            <GridBackground />

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-24 lg:gap-12 items-center min-h-screen pt-20 pb-16 md:py-0">
                <div className="text-center md:text-left space-y-4 lg:ml-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl md:text-2xl font-mono text-neutral-400"
                    >
                        Software Engineer
                    </motion.h2>
                    <div className="space-y-2">
                        <TypingText
                            text="Hello I'm"
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white block"
                            delay={0.5}
                        />
                        <TypingText
                            text="Muhammad"
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-orange-500 block"
                            delay={1.1}
                        />
                        <TypingText
                            text="Sajid"
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-orange-500 block"
                            delay={1.6}
                        />
                    </div>

                    <motion.div
                        className="relative w-fit border-l-4 border-orange-500 pl-4 pr-4 max-w-2xl mx-auto md:mx-0"
                    >
                        <motion.div
                            className="absolute inset-0 bg-orange-500"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
                            style={{ originX: 0, zIndex: 0 }}
                        />
                        <motion.p
                            className="relative z-10 text-lg md:text-xl font-light leading-relaxed md:leading-normal font-sans text-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                        >
                            I build things for the web, mostly.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.5, duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center gap-6 pt-4"
                    >
                        <div className="group/btn relative">
                            <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <a
                                href="https://drive.google.com/file/d/1M3YGt52dJVqeVnuLBrg7_zJYUDSaYJ5L/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-block px-10 py-4 rounded-xl border-2 border-orange-500 text-orange-500 font-mono text-base font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
                            >
                                <span className="mr-2 opacity-50">//</span>
                                View Resume
                                <span className="mx-2 opacity-50">_</span>
                                <span className="group-hover/btn:translate-x-1 inline-block transition-transform duration-300">=&gt;</span>
                            </a>
                        </div>


                    </motion.div>
                </div>

                <div className="relative z-10 w-full mb-12 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative w-full max-w-lg mx-auto flex justify-center items-center"
                    >
                        <motion.div
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-orange-500 blur-[100px] opacity-20 rounded-full"
                        ></motion.div>
                        <motion.img
                            src={sajid}
                            alt="Muhammad Sajid"
                            className="relative z-10 w-64 h-64 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white shadow-2xl shadow-orange-500/20"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce z-20 text-orange-500">
                <FaChevronDown size={24} />
            </div>
        </section>
    )
}