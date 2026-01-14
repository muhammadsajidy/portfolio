import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiFastapi, SiFlask, SiMysql, SiHtml5, SiCss3, SiJavascript, SiPython } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiExpress, name: "Express.js", color: "#ffffff" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
    { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { Icon: SiFlask, name: "Flask", color: "#ffffff" },
    { Icon: TbBrandReactNative, name: "React Native", color: "#61DAFB" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
];

export default function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 relative w-fit mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-center relative z-10">
                        About
                    </h2>
                    <div className="absolute bottom-0 left-6 w-full h-4 bg-orange-500 -z-0"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl mx-auto text-justify px-4 md:px-0"
                >
                    <div className="text-base md:text-xl text-slate-300 leading-relaxed font-light mb-12 space-y-6">
                        <p>
                            I am a third-year Computer Science and Engineering student at VIT-AP University with expertise across machine learning, web development, mobile application development, and cybersecurity.
                        </p>
                        <p>
                            I actively solve algorithmic challenges on platforms like <a href="https://leetcode.com/u/md_sajid_04/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">LeetCode</a> and occasionally participate in Capture The Flag (CTF) competitions. My diverse technical background and commitment to continuous learning drive me to build innovative solutions and tackle complex problems.
                        </p>
                        <p>
                            I am currently seeking opportunities to apply my skills in real-world projects and contribute to impactful initiatives. Beyond technology, I enjoy playing football.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-center mb-8 text-white">Technologies I'm experienced in</h3>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
                        {skills.map(({ Icon, name }, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1, color: "#f97316" }}
                                className="text-4xl text-slate-500 cursor-pointer transition-colors duration-300"
                                title={name}
                            >
                                <Icon />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="absolute -top-20 -left-64 md:-top-40 md:-left-64 w-[500px] h-[500px] md:w-[600px] md:h-[600px] opacity-30 md:opacity-60 z-0 pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                        <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
                            <IcosahedronShape scale={isMobile ? 0.5 : 0.7} />
                        </Float>
                    </Canvas>
                </div>

                <div className="absolute -bottom-20 -right-64 md:-bottom-40 md:-right-64 w-[500px] h-[500px] md:w-[600px] md:h-[600px] opacity-30 md:opacity-60 z-0 pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
                        <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
                            <OctahedronShape scale={isMobile ? 0.5 : 0.7} />
                        </Float>
                    </Canvas>
                </div>
            </div>
        </section>
    );
}

const IcosahedronShape = ({ scale = 1 }) => {
    return (
        <mesh scale={[scale, scale, scale]}>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshBasicMaterial color="transparent" transparent opacity={0} />
            <Edges
                scale={1}
                threshold={15}
                color="orange"
            />
        </mesh>
    );
};

const OctahedronShape = ({ scale = 1 }) => {
    return (
        <mesh rotation={[0, 0, 0]} scale={[scale, scale, scale]}>
            <octahedronGeometry args={[1.5, 0]} />
            <meshBasicMaterial color="transparent" transparent opacity={0} />
            <Edges
                scale={1}
                threshold={15}
                color="orange"
            />
        </mesh>
    );
};
