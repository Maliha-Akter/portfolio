"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Settings, 
  Database, 
  TerminalSquare, 
  Wrench, 
  Bot,
  Code2,
  Layout,
  Server,
  Cloud,
  HardDrive,
  Cpu,
  GitMerge,
  PenTool,
  BrainCircuit,
  Sparkles,
  Braces,
  Boxes,
  MonitorSmartphone
} from 'lucide-react';

const skillsData = [
  {
    title: "Frontend & Web",
    categoryIcon: Laptop,
    skills: [
      { name: "HTML5", icon: Layout },
      { name: "CSS3", icon: Layout },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: Braces },
      { name: "React.js", icon: Boxes },
      { name: "Next.js", icon: MonitorSmartphone },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Bootstrap", icon: Layout },
      { name: "WebGL", icon: Boxes }
    ]
  },
  {
    title: "Backend & Cloud",
    categoryIcon: Settings,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "Flask", icon: Server },
      { name: "FastAPI", icon: Server },
      { name: "REST APIs", icon: Cloud },
      { name: "Better Auth", icon: Server },
      { name: "BashScript", icon: TerminalSquare },
      { name: "AWS EC2", icon: Cloud },
      { name: "Linux", icon: TerminalSquare }
    ]
  },
  {
    title: "Databases",
    categoryIcon: Database,
    skills: [
      { name: "MongoDB Atlas", icon: Database },
      { name: "Mongoose", icon: Database },
      { name: "MySQL", icon: HardDrive },
      { name: "Oracle SQL", icon: HardDrive },
      { name: "MS SQL Server", icon: HardDrive },
      { name: "Firebase", icon: Cloud }
    ]
  },
  {
    title: "Programming",
    categoryIcon: TerminalSquare,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "C", icon: Code2 },
      { name: "C++", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: Braces },
      { name: "PHP", icon: Code2 },
      { name: "SQL", icon: Database }
    ]
  },
  {
    title: "Tools & Design",
    categoryIcon: Wrench,
    skills: [
      { name: "Git", icon: GitMerge },
      { name: "GitHub", icon: GitMerge },
      { name: "Docker", icon: Boxes },
      { name: "Postman", icon: Cloud },
      { name: "VS Code", icon: Code2 },
      { name: "Figma", icon: PenTool },
      { name: "Canva", icon: Layout },
      { name: "Tableau", icon: Layout },
      { name: "Netlify", icon: Cloud }
    ]
  },
  {
    title: "Data & ML",
    categoryIcon: Bot,
    skills: [
      { name: "TensorFlow", icon: BrainCircuit },
      { name: "PyTorch", icon: BrainCircuit },
      { name: "Scikit-learn", icon: Cpu },
      { name: "XGBoost", icon: Cpu },
      { name: "LightGBM", icon: Cpu },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Database },
      { name: "NLP", icon: BrainCircuit },
      { name: "Deep Learning", icon: BrainCircuit },
      { name: "OpenAI API", icon: Sparkles },
      { name: "Google Gemini", icon: Sparkles },
      { name: "Gemma", icon: Sparkles }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-r from-green-100 to-white dark:from-[#0B1220] dark:to-[#0B1220] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
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
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-4 transition-colors duration-300">
            Technical Arsenal
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] max-w-2xl text-lg font-['Manrope',sans-serif] transition-colors duration-300">
            A categorized look at the programming languages, frameworks, and tools I use to build scalable applications and intelligent systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] rounded-[24px] p-7 md:p-8 hover:-translate-y-1.5 hover:border-[#16A34A] dark:hover:border-[#16A34A] hover:shadow-[0_8px_30px_rgb(22,163,74,0.08)] transition-all duration-300 flex flex-col h-full group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] rounded-xl text-[#16A34A] shadow-inner transition-colors duration-300 group-hover:scale-110">
                  <category.categoryIcon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] transition-colors duration-300 group-hover:text-[#16A34A] dark:group-hover:text-[#16A34A]">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] rounded-lg text-slate-700 dark:text-[#CBD5E1] text-sm font-medium font-['Manrope',sans-serif] hover:border-[#16A34A] dark:hover:border-[#16A34A] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-all duration-300 group/badge cursor-default"
                  >
                    <skill.icon 
                      size={14} 
                      className="text-slate-500 dark:text-[#94A3B8] group-hover/badge:text-[#16A34A] dark:group-hover/badge:text-[#16A34A] transition-colors duration-300" 
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;