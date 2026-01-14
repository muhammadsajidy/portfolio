import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import awfexImg from "../assets/awfex.png";
import git2knowImg from "../assets/git2know.png";
import connektImg from "../assets/connekt.png";

const projects = [
    {
        id: "awfex",
        title: "Awfex",
        subtitle: "Automation Engine",
        description: "AWEFX (Automation WorkFlow Engine Experiment) is an open-source, lightweight automation engine that lets you build visual workflows and orchestrate custom functions like an alternative to n8n. Designed with Express and HTTP triggers, it’s flexible, serverless-friendly, and easy to extend for any automation need.",
        live: "https://awfex.netlify.app/",
        tech: ["React", "Express", "Tailwind", "SQLite", "Sequelize", "ReactFlow"],
        imgSrc: awfexImg
    },
    {
        id: "git2know",
        title: "Git2Know",
        subtitle: "GitHub Analytics",
        description: "Git2Know is a comprehensive GitHub analysis tool that provides quick insights into user profiles and repositories through AI-powered summaries.",
        live: "https://git2know.netlify.app/",
        tech: ["React", "Tailwind", "JavaScript"],
        imgSrc: git2knowImg
    },
    {
        id: "connekt",
        title: "Connekt",
        subtitle: "Social Platform",
        description: "Connekt is a campus-exclusive social platform designed for VIT-AP students. Whether you’re looking to ask or answer queries, find teammates for projects, coordinate travel with peers, or just share anonymously — Connekt connects ideas and people within the campus like never before.",
        live: "https://connekt4vitap.netlify.app/",
        tech: ["React", "Material UI"],
        imgSrc: connektImg
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-20 bg-slate-950 text-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 relative w-fit mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-center relative z-10">
                        Projects
                    </h2>
                    <div className="absolute bottom-0 left-6 w-full h-4 bg-orange-500 -z-0"></div>
                </motion.div>

                <div className="flex flex-col gap-20 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                        >
                            <div className="w-full lg:w-[58%] relative">
                                <div className="absolute top-4 -right-4 w-full h-full border-2 border-slate-700/30 rounded-lg -z-10 group-hover:border-orange-500/30 transition-colors duration-300"></div>

                                <div className="absolute -top-8 -right-8 -z-20 opacity-20">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 50L20 20L40 50L60 20L80 50" stroke="#F97316" strokeWidth="2" />
                                    </svg>
                                </div>

                                <div className="absolute -bottom-6 -left-6 -z-20">
                                    <div className="grid grid-cols-4 gap-2">
                                        {[...Array(16)].map((_, i) => (
                                            <div key={i} className="w-1 h-1 bg-slate-700/50 rounded-full"></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-lg overflow-hidden border border-slate-800/50 shadow-2xl bg-slate-900 group relative aspect-video hover:border-slate-600/50 transition-colors z-10">
                                    {project.imgSrc ? (
                                        <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-800/80 transition-colors">
                                            <p className="text-slate-500 font-medium">Add Project Image Here</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full lg:w-[38%]">
                                <div className="flex flex-col items-start">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-slate-500 text-slate-200 hover:border-white hover:text-white transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                                        {project.description}
                                    </p>

                                    <div className="group/btn relative">
                                        <div className="absolute inset-0 bg-white/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative inline-block px-8 py-3 rounded-xl border border-white/20 text-white font-mono text-sm hover:bg-white hover:text-slate-950 transition-all duration-300"
                                        >
                                            <span className="mr-2 opacity-50">//</span>
                                            Visit
                                            <span className="mx-2 opacity-50">_</span>
                                            <span className="group-hover/btn:translate-x-1 inline-block transition-transform duration-300">=&gt;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex justify-center mt-20"
                >
                    <div className="group/btn relative">
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <a
                            href="https://github.com/muhammadsajidy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-3 px-8 py-3 rounded-xl border border-white/20 text-white font-mono text-sm hover:bg-white hover:text-slate-950 transition-all duration-300"
                        >
                            <span className="opacity-50">//</span>
                            <span>View More</span>
                            <span className="opacity-50">_</span>
                            <span className="group-hover/btn:translate-x-1 inline-block transition-transform duration-300">=&gt;</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
