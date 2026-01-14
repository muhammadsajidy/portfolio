import { motion } from "framer-motion";
import { FaPython, FaReact, FaJs, FaShieldAlt, FaBrain, FaRobot, FaExternalLinkAlt } from "react-icons/fa";


const certificates = [
    { id: 1, title: "Generative AI", issuer: "IBM", date: "June 2025", color: "#2563eb", link: "https://drive.google.com/file/d/1qc_mfYbHBTHI0AAbQxtWJRbkyY88WgA1/view?usp=sharing", icon: FaBrain },
    { id: 2, title: "Python (Basic)", issuer: "HackerRank", date: "Dec 2023", color: "#ca8a04", link: "https://drive.google.com/file/d/1-Jyk5V5BjGrRNh2Z40-qJTDG1tKItLcq/view?usp=sharing", icon: FaPython },
    { id: 3, title: "React (Basic)", issuer: "HackerRank", date: "Jan 2025", color: "#06b6d4", link: "https://drive.google.com/file/d/1MF4Ge6j__e7aD7lhesLdB8hz9JjzKCLb/view?usp=sharing", icon: FaReact },
    { id: 4, title: "JavaScript (Basic)", issuer: "HackerRank", date: "Jan 2025", color: "#eab308", link: "https://drive.google.com/file/d/1y4aG1Mg-3fuCdSbYtkifamQypUeYbfrL/view?usp=sharing", icon: FaJs },
    { id: 5, title: "Security Principles", issuer: "ISC2", date: "Oct 2025", color: "#059669", link: "https://drive.google.com/file/d/1J7rsv0_zcm7RFHSCDKUEsLdxkb2Divan/view?usp=sharing", icon: FaShieldAlt },
    { id: 6, title: "Applied Machine Learning", issuer: "University of Michigan", date: "September 2025", color: "#3b82f6", link: "https://drive.google.com/file/d/1tsVkOAGc6nsdLTagxeE4GK8XMmq-D6i2/view?usp=sharing", icon: FaRobot }
];

export default function Certificates() {
    return (
        <section className="relative py-20 bg-slate-950 text-white overflow-hidden min-h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 md:mb-20 relative w-fit mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-center relative z-10">
                        Certificates
                    </h2>
                    <div className="absolute bottom-0 left-6 w-full h-4 bg-orange-500 -z-0"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group h-[240px] rounded-2xl overflow-hidden p-[1px]"
                            >
                                <div
                                    className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_85%,#ffffff_100%)] blur-xl opacity-80"
                                    style={{ animationDelay: `-${index * 1.5}s` }}
                                />

                                <div
                                    className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_85%,#ffffff_100%)]"
                                    style={{ animationDelay: `-${index * 1.5}s` }}
                                />

                                <div className="absolute inset-[1px] rounded-2xl bg-slate-900/90" />

                                <div className="relative h-full w-full bg-[#0b0f19] rounded-2xl p-6 flex flex-col justify-between overflow-hidden">


                                    <div>
                                        <h3 className="text-xl font-bold text-white font-mono mb-2 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm font-mono mb-4">
                                            Issued {cert.date}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-end mt-4">
                                        <div className="text-slate-400 font-mono text-sm leading-relaxed">
                                            {cert.issuer}
                                        </div>
                                        <div className="text-emerald-400 text-2xl">
                                            <cert.icon />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
