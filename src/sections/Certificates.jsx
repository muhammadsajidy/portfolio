
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Text, useCursor } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useState, useRef, useEffect, useMemo } from "react";

// Data
const certificates = [
    { id: 1, title: "Generative AI", issuer: "IBM", color: "#2563eb", link: "https://drive.google.com/file/d/1qc_mfYbHBTHI0AAbQxtWJRbkyY88WgA1/view?usp=sharing" },
    { id: 2, title: "Python (Basic)", issuer: "HackerRank", color: "#ca8a04", link: "https://drive.google.com/file/d/1-Jyk5V5BjGrRNh2Z40-qJTDG1tKItLcq/view?usp=sharing" },
    { id: 3, title: "React (Basic)", issuer: "HackerRank", color: "#06b6d4", link: "https://drive.google.com/file/d/1MF4Ge6j__e7aD7lhesLdB8hz9JjzKCLb/view?usp=sharing" },
    { id: 4, title: "JavaScript (Basic)", issuer: "HackerRank", color: "#eab308", link: "https://drive.google.com/file/d/1y4aG1Mg-3fuCdSbYtkifamQypUeYbfrL/view?usp=sharing" },
    { id: 5, title: "Security Principles", issuer: "ISC2", color: "#059669", link: "https://drive.google.com/file/d/1J7rsv0_zcm7RFHSCDKUEsLdxkb2Divan/view?usp=sharing" },
    { id: 6, title: "Applied Machine Learning", issuer: "University of Michigan", color: "#3b82f6", link: "https://drive.google.com/file/d/1tsVkOAGc6nsdLTagxeE4GK8XMmq-D6i2/view?usp=sharing" }
];

function FileFolder({ index, cert }) {
    const [hovered, setHovered] = useState(false);
    const groupRef = useRef();

    useCursor(hovered);

    // Create custom folder shape to eliminate seam
    const folderShape = useMemo(() => {
        const shape = new THREE.Shape();
        const width = 2.8;
        const height = 1.15;
        const tabWidth = 0.8;
        const tabHeight = 0.2;

        // Center coordinates
        const halfW = width / 2;    // 1.4
        const halfH = height / 2;   // 0.575

        // Start Bottom-Left
        shape.moveTo(-halfW, -halfH);
        // Bottom-Right
        shape.lineTo(halfW, -halfH);
        // Shoulder-Right (Body Top-Right)
        shape.lineTo(halfW, halfH);
        // Tab Start (Right side of tab) -> x = -1.4 + 0.8 = -0.6
        shape.lineTo(-halfW + tabWidth, halfH);
        // Tab Top-Right
        shape.lineTo(-halfW + tabWidth, halfH + tabHeight);
        // Tab Top-Left
        shape.lineTo(-halfW, halfH + tabHeight);
        // Close
        shape.lineTo(-halfW, -halfH);

        return shape;
    }, []);

    // Lift animation on hover
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Lowered position logic: sits consistently within its own rack
            // Default Y: -0.25. Hover Y: 0.05.
            const targetY = hovered ? 0.05 : -0.25;
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 15);

            // Tilt forward
            const targetRotX = hovered ? 0.2 : 0;
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 15);
        }
    });

    return (
        <group
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
            onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
            onClick={() => window.open(cert.link, "_blank")}
        >
            <group ref={groupRef}>
                {/* Single Seamless Folder Mesh */}
                <mesh position={[0, 0, -0.02]}>
                    <extrudeGeometry args={[folderShape, { depth: 0.04, bevelEnabled: false }]} />
                    <meshStandardMaterial color={cert.color} roughness={0.6} metalness={0.1} />
                    <Edges color="#ffffff" threshold={15} opacity={0.5} transparent />
                </mesh>

                {/* Arrow / Interaction Area on Top Part */}
                <group position={[0, 0.35, 0.05]}>
                    {/* Arrow Icon */}
                    <Text
                        fontSize={0.25}
                        color={hovered ? cert.color : "#ffffff"}
                        anchorX="center"
                        anchorY="middle"
                        position={[1.1, 0, 0.01]}
                        fontWeight="bold"
                    >
                        ↗
                    </Text>
                </group>
            </group>
        </group>
    );
}

function WallOrganizer({ certs, position, rotation, scale = 1 }) {
    const WireBasket = ({ position, cert, children }) => {
        return (
            <group position={position}>
                {/* Content (Folder) - Positioned relative to basket origin */}
                <group position={[0, 0, -0.05]}>
                    {children}
                </group>

                {/* Wireframe Basket Structure */}
                <group position={[0, -0.4, 0.2]} rotation={[0.15, 0, 0]}>
                    {/* Front Panel Mesh */}
                    <mesh>
                        <boxGeometry args={[3.0, 0.8, 0.02]} />
                        <meshBasicMaterial color="#020617" transparent opacity={0.9} />
                        <Edges color="#f97316" scale={1} threshold={15} />
                    </mesh>

                    {/* Certificate Title ON THE RACK */}
                    <group position={[0, 0, 0.03]}>
                        <Text
                            fontWeight="bold"
                            fontSize={0.18}
                            color="#ffffff"
                            anchorX="center"
                            anchorY="middle"
                            maxWidth={2.8}
                            textAlign="center"
                        >
                            {cert.title}
                        </Text>
                        <Text
                            fontSize={0.1}
                            color="#94a3b8"
                            anchorX="center"
                            anchorY="top"
                            position={[0, -0.15, 0]}
                        >
                            {cert.issuer}
                        </Text>
                    </group>
                </group>

                {/* Bottom Wire - Solid Floor to mask clipping */}
                <mesh position={[0, -0.85, 0.1]} rotation={[0.15, 0, 0]}>
                    <boxGeometry args={[3.0, 0.05, 0.4]} />
                    <meshBasicMaterial color="#020617" />
                    <Edges color="#f97316" />
                </mesh>

                {/* Side Wires */}
                <mesh position={[-1.5, -0.4, 0.2]} rotation={[0.15, 0, 0]}>
                    <boxGeometry args={[0.02, 0.8, 0.02]} />
                    <meshBasicMaterial color="#f97316" />
                </mesh>
                <mesh position={[1.5, -0.4, 0.2]} rotation={[0.15, 0, 0]}>
                    <boxGeometry args={[0.02, 0.8, 0.02]} />
                    <meshBasicMaterial color="#f97316" />
                </mesh>
            </group>
        );
    };

    const backboardHeight = certs.length * 1.6 + 0.5;

    return (
        <group scale={scale} position={position} rotation={rotation}>
            {/* Main Backboard Frame - Dynamic Height */}
            <group position={[0, 0, -0.5]}>
                <mesh>
                    <boxGeometry args={[3.4, backboardHeight, 0.1]} />
                    <meshBasicMaterial color="#020617" transparent opacity={0.5} />
                    <Edges color="#f97316" scale={1} threshold={15} />
                </mesh>
            </group>

            {/* Baskets / Racks */}
            {certs.map((cert, i) => {
                // Dynamic centering based on list length
                const yStart = ((certs.length - 1) * 1.6) / 2;
                const yPos = yStart - (i * 1.6);

                return (
                    <WireBasket key={cert.id} cert={cert} position={[0, yPos, 0]}>
                        <FileFolder index={i} cert={cert} />
                    </WireBasket>
                );
            })}
        </group>
    );
}

export default function Certificates() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Split certificates by type
    const basicCerts = certificates.filter(c => c.title.includes("(Basic)"));
    const advancedCerts = certificates.filter(c => !c.title.includes("(Basic)"));

    // Combine for mobile (Basic on top, then Advanced)
    const allCerts = [...basicCerts, ...advancedCerts];

    return (
        <section className="relative py-20 bg-slate-950 text-white overflow-hidden min-h-[600px]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[100px]"></div>
                {/* <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]"></div> */}
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    // Mobile: mb-12 for spacing. Desktop: mb-2 for tight fit.
                    className="mb-12 md:mb-2 relative w-fit mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-center relative z-10">
                        Certificates
                    </h2>
                    <div className="absolute bottom-0 left-6 w-full h-4 bg-orange-500 -z-0"></div>
                </motion.div>

                {/* 3D Scene */}
                <div className="h-[600px] w-full flex items-center justify-center cursor-default">
                    {/* Centered Camera - Zoomed out slightly on mobile to fit the tall rack */}
                    <Canvas camera={{ position: [0, 0, isMobile ? 14 : 11], fov: 45 }}>
                        <ambientLight intensity={0.7} />
                        <directionalLight position={[0, 5, 10]} intensity={1.2} />
                        <pointLight position={[-5, 2, 5]} intensity={0.5} color="#f97316" />
                        <pointLight position={[5, 2, 5]} intensity={0.5} color="#f97316" />

                        {isMobile ? (
                            /* Mobile: Single 6-Rack Shelf */
                            <WallOrganizer
                                certs={allCerts}
                                scale={0.55}
                                position={[0, -0.5, 0]}
                                rotation={[0, -0.1, 0]}
                            />
                        ) : (
                            /* Desktop: Split Side-by-Side */
                            <>
                                {/* Left Column (Advanced) */}
                                <WallOrganizer
                                    certs={advancedCerts}
                                    scale={1.15}
                                    position={[-1.7, 0.5, 0]}
                                    rotation={[0, -0.4, 0]}
                                />

                                {/* Right Column (Basic) */}
                                <WallOrganizer
                                    certs={basicCerts}
                                    scale={1.15}
                                    position={[1.7, 0.5, 0]}
                                    rotation={[0, 0.4, 0]}
                                />
                            </>
                        )}
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
