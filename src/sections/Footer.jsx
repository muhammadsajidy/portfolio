import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full py-10 bg-slate-950 text-white border-t border-slate-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

                {/* Name - Center on mobile, Left on desktop */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-mono font-semibold tracking-tight text-white">
                        Muhammad Sajid
                    </h2>
                </div>

                {/* Social Icons - Center (below name) on mobile, Right on desktop */}
                <div className="flex gap-6 items-center">
                    <a
                        href="https://www.linkedin.com/in/muhammadsajidy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-110"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/_.sajid_.04/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-110"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://github.com/muhammadsajidy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-110"
                    >
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
