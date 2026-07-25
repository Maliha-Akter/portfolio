"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, School, MapPin, Calendar, ChevronRight } from 'lucide-react';

const educationData = [
    {
        type: "university",
        icon: GraduationCap,
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "Ahsanullah University of Science & Technology (AUST)",
        location: "Tejgaon, Dhaka",
        duration: "2021 – 2025",
        status: "B.Sc.",
        highlight: true,
        details: [
            "Core Competencies: Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, Artificial Intelligence & Machine Learning, Computer Networks",
            "Thesis: A Machine Learning-Based Predictive Framework for Dynamic Traffic Flow in Evolving Urban Landscapes (Grade: 3.75)"
        ]
    },
    {
        type: "college",
        icon: School,
        degree: "Higher Secondary Certificate (Science)",
        institution: "Viqarunnisa Noon College",
        location: "Bailey Road, Dhaka",
        duration: "2018 – 2020",
        status: "GPA: 5.00/5.00",
        highlight: false,
        details: [
            "Built a strong foundation in mathematics and analytical problem-solving",
            "Developed effective communication, teamwork, and critical thinking skills"
        ]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const EducationSection = () => {
    return (
        <section id="education" className="py-24 bg-gradient-to-r from-green-100 to-white dark:from-[#0B1220] dark:to-[#0B1220] transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse"></span>
                        <span className="text-[#16A34A] font-mono tracking-wider text-sm font-semibold uppercase">
                            Academic Background
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-4 transition-colors duration-300">
                        Education
                    </h2>
                    <p className="text-slate-600 dark:text-[#94A3B8] max-w-xl text-lg font-['Manrope',sans-serif] transition-colors duration-300">
                        My formal academic foundations in engineering and science.
                    </p>
                </motion.div>

                {/* Modern Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {educationData.map((edu, index) => {
                        const IconComponent = edu.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] rounded-[20px] p-8 hover:-translate-y-1.5 hover:border-[#16A34A] dark:hover:border-[#16A34A] hover:shadow-[0_8px_30px_rgb(22,163,74,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Decorative top accent line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16A34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div>
                                    {/* Icon & Status Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] rounded-2xl text-[#16A34A] shadow-inner group-hover:scale-110 transition-all duration-300">
                                            <IconComponent size={28} strokeWidth={1.5} />
                                        </div>
                                        <span className="px-3.5 py-1.5 bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] rounded-full text-xs font-mono font-semibold text-[#16A34A] tracking-wide transition-colors duration-300">
                                            {edu.status}
                                        </span>
                                    </div>

                                    {/* Degree / Certificate Title */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-3 group-hover:text-[#16A34A] dark:group-hover:text-[#16A34A] transition-colors duration-300">
                                        {edu.degree}
                                    </h3>

                                    {/* Institution */}
                                    <p className="text-slate-700 dark:text-[#CBD5E1] font-medium text-base font-['Manrope',sans-serif] mb-5 transition-colors duration-300">
                                        {edu.institution}
                                    </p>

                                    {/* Bullet Points / Details */}
                                    <ul className="space-y-3 mb-8">
                                        {edu.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-[#94A3B8] text-sm font-['Manrope',sans-serif] leading-relaxed transition-colors duration-300">
                                                <ChevronRight size={16} className="text-[#16A34A] shrink-0 mt-0.5" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Footer Details: Location & Date */}
                                <div className="pt-6 border-t border-slate-200 dark:border-[#2B3A55]/60 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 dark:text-[#94A3B8] font-['Manrope',sans-serif] transition-colors duration-300">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-[#16A34A]" />
                                        <span>{edu.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-[#16A34A]" />
                                        <span>{edu.duration}</span>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default EducationSection;