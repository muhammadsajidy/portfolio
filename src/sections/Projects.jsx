import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaRedo, FaLock, FaRegStar, FaPlus, FaChevronRight } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const projects = [
    {
        id: "awfex",
        title: "Awfex",
        tab: "Awfex",
        live: "https://awfex.netlify.app/",
        shouldEmbed: true
    },
    {
        id: "git2know",
        title: "Git2Know",
        tab: "Git2Know",
        live: "https://git2know.netlify.app/",
        shouldEmbed: true
    },
    {
        id: "connekt",
        title: "Connekt",
        tab: "Connekt",
        live: "https://connekt4vitap.netlify.app/",
        shouldEmbed: true
    }
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentUrl, setCurrentUrl] = useState(projects[0].live);

    useEffect(() => {
        setCurrentUrl(projects[activeTab].live);
    }, [activeTab]);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data && event.data.type === 'url-change' && event.data.url) {
                setCurrentUrl(event.data.url);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const handleNextProject = () => {
        setActiveTab((prev) => (prev + 1) % projects.length);
    };

    return (
        <section id="projects" className="relative py-20 bg-slate-950 text-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 relative w-fit mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-center relative z-10">
                        Projects
                    </h2>
                    <div className="absolute bottom-0 left-6 w-full h-4 bg-orange-500 -z-0"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-6xl mx-auto bg-[#202124] rounded-xl overflow-hidden shadow-2xl border border-[#35363A] font-[Arial,sans-serif]"
                >
                    <div className="hidden md:flex items-end px-2 pt-2 gap-2 bg-[#202124]">
                        <div className="flex-1 flex items-center px-3 py-2 gap-2 overflow-x-auto no-scrollbar">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#292A2D] cursor-pointer text-gray-400 mr-2">
                                <HiDotsVertical className="rotate-90" size={14} />
                            </div>

                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                        group relative flex items-center gap-2 px-3 py-1.5 min-w-[140px] max-w-[200px] text-xs md:text-sm cursor-pointer rounded-lg transition-all duration-200 border border-transparent
                                        ${activeTab === index
                                            ? 'bg-[#35363A] text-white shadow-sm border-[#45464A]'
                                            : 'text-gray-400 hover:bg-[#292A2D] hover:text-gray-200'}
                                    `}
                                >
                                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-emerald-500' : 'bg-orange-500'}`}></div>

                                    <span className="truncate flex-1 font-medium">{project.tab}</span>

                                    <div className={`p-1 rounded-md hover:bg-white/10 ${activeTab === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                            <a
                                href="https://github.com/muhammadsajidy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-400 hover:bg-[#292A2D] rounded-full ml-2 self-center cursor-pointer transition-colors"
                                title="Visit GitHub Profile"
                            >
                                <FaPlus size={12} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#35363A] px-4 py-2 flex items-center gap-4 text-gray-400 border-b border-[#202124]">
                        <div className="hidden md:flex items-center gap-5">
                            <FaArrowLeft className="hover:text-white cursor-pointer" size={16} />
                            <FaArrowRight className="hover:text-white cursor-pointer" size={16} />
                            <FaRedo className="hover:text-white cursor-pointer" size={14} />
                        </div>

                        <div className="flex-1 bg-[#202124] rounded-full px-4 py-1.5 flex items-center gap-3 text-sm text-gray-300 border border-transparent focus-within:border-orange-500/50 transition-colors">
                            <FaLock size={12} className="text-emerald-500" />
                            <input
                                type="text"
                                value={currentUrl}
                                readOnly
                                className="flex-1 bg-transparent border-none outline-none text-white text-sm font-sans placeholder-gray-500"
                            />
                            <FaRegStar size={14} className="hidden md:block hover:text-orange-400 cursor-pointer" />

                            <button
                                onClick={handleNextProject}
                                className="md:hidden p-1.5 hover:bg-[#35363A] rounded-full text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                                title="Next Project"
                            >
                                <span className="sr-only">Next</span>
                                <div className="border border-white/20 rounded-md px-2 py-0.5 text-xs font-bold mr-1 hover:border-white/50">
                                    {activeTab + 1}
                                </div>
                                <FaChevronRight size={12} />
                            </button>
                        </div>

                        <div className="flex gap-3 items-center pl-2 border-l border-gray-600">
                            <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
                            <HiDotsVertical size={16} className="hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    <div className="bg-[#18181b] relative text-gray-300">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full relative min-h-[500px] bg-[#18181b]"
                            >
                                {projects[activeTab].shouldEmbed ? (
                                    <iframe
                                        src={projects[activeTab].live}
                                        title={projects[activeTab].title}
                                        className="w-full h-[500px] md:h-[600px] border-none"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden bg-[#18181b]">
                                        {projects[activeTab].imgSrc ? (
                                            <img
                                                src={projects[activeTab].imgSrc}
                                                alt={projects[activeTab].title}
                                                className="w-full h-full object-cover object-left-top"
                                            />
                                        ) : (
                                            <div className="w-full h-full relative">
                                                <div className={`absolute inset-0 ${projects[activeTab].image} opacity-80`} />
                                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <h3 className="text-4xl font-bold text-white drop-shadow-xl">{projects[activeTab].title}</h3>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
