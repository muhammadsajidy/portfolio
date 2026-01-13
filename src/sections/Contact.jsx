import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since no backend is defined, we'll simple open a mailto link
        const subject = `Contact from Portfolio: ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:muhammadsajidy04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[30%] h-[30%] bg-orange-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 relative w-fit mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-center relative z-10">
                        Contact
                    </h2>
                    <div className="absolute bottom-0 left-6 w-full h-4 bg-orange-500 -z-0"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl mx-auto"
                >
                    {/* Dark Minimalist Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div className="group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1e1e1e] text-slate-300 px-4 py-3 outline-none border-b-2 border-[#333333] focus:border-orange-500 transition-colors duration-300 placeholder-slate-500"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1e1e1e] text-slate-300 px-4 py-3 outline-none border-b-2 border-[#333333] focus:border-orange-500 transition-colors duration-300 placeholder-slate-500"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1e1e1e] text-slate-300 px-4 py-3 outline-none border-b-2 border-[#333333] focus:border-orange-500 transition-colors duration-300 placeholder-slate-500 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="relative group overflow-hidden px-1 py-1 cursor-pointer"
                            >
                                <span className="relative z-10 text-white font-bold tracking-widest text-sm uppercase">
                                    SUBMIT
                                </span>
                                {/* Animated Underline */}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f87171] transform scale-x-100 transition-transform duration-300 origin-left"></span>
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
