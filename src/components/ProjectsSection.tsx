"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ExternalLink, GitBranch, Info, ChevronDown, ChevronUp, X, AlertTriangle, Lightbulb, Code, FileText } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  details: string;
  challenges: string[];
  futurePlans: string[];
}

const projectsData: Project[] = [
  {
    title: "SkillSwap",
    description: "Built a full-stack freelance marketplace with role-based dashboards, secure authentication, Stripe payments, and real-time proposal management.",
    image: "/skillswap.png",
    techStack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Stripe"],
    liveUrl: "https://skillswap-client-three.vercel.app/",
    githubUrl: "https://github.com/Maliha-Akter/skillswap-client",
    details: "A peer-to-peer micro-task marketplace designed to connect clients and freelancers seamlessly with dynamic proposal workflows, escrow payment handling, and responsive dashboards.",
    challenges: [
      "Implementing Stripe payment integration and securely handling payment confirmations.",
      "Managing role-based access and permissions for clients and freelancers.",
      "Keeping project, proposal, and dashboard data synchronized after user actions."
    ],
    futurePlans: [
      "Add real-time messaging between clients and freelancers.",
      "Implement video meeting support for project discussions.",
      "Introduce AI-powered freelancer and project recommendations.",
      "Add support for multiple payment methods and currencies."
    ]
  },
  {
    title: "ScholarAI",
    description: "Developed an AI-powered scholarship platform featuring intelligent recommendations, an AI chatbot, application tracking, and secure authentication.",
    image: "/scholarAI.png",
    techStack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Groq LLM"],
    liveUrl: "https://scholarai-pi.vercel.app/",
    githubUrl: "https://github.com/Maliha-Akter/scholarai",
    details: "An AI-driven platform helping students discover matching international scholarship opportunities, ask questions via a smart assistant, and manage application deadlines.",
    challenges: [
      "Integrating the Groq LLM and designing prompts to generate accurate, context-aware scholarship recommendations.",
      "Handling AI response errors, inconsistent outputs, and improving the reliability of generated results.",
      "Managing conversations and providing relevant responses while maintaining a smooth user experience."
    ],
    futurePlans: [
      "Add AI-powered SOP and scholarship essay writing assistance.",
      "Implement AI-based CV and resume review with personalized feedback.",
      "Introduce AI interview preparation with mock interview questions and suggestions.",
      "Expand the platform with multiple AI tools for scholarship search, document review, and application guidance."
    ]
  },
  {
    title: "HomeVault",
    description: "Created a home inventory platform with warranty tracking, inventory analytics, custom categories, and role-based dashboard management.",
    image: "/homevault.png",
    techStack: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
    liveUrl: "https://homevault-five.vercel.app/",
    githubUrl: "https://github.com/Maliha-Akter/homevault",
    details: "A centralized digital hub for household asset management, custom inventory categorization, document uploading, and active warranty tracking.",
    challenges: [
      "Debugging authentication and API issues caused by oversized tokens when handling user profile images, and implementing an optimized image management approach.",
      "Designing flexible MongoDB schemas for custom categories and inventory attributes.",
      "Managing dynamic inventory analytics efficiently as user data grows."
    ],
    futurePlans: [
      "Integrate AI to automatically categorize inventory items from uploaded images.",
      "Add AI-powered item value estimation based on product details and market trends.",
      "Implement QR and barcode scanning for faster item registration.",
      "Send automated warranty and maintenance reminders through email and notifications.",
      "Develop a mobile application for managing inventory on the go."
    ]
  },
  {
    title: "MediQueue",
    description: "Built a tutor booking platform with real-time session scheduling, role-based authentication, and personalized dashboards.",
    image: "/mediqueue.png",
    techStack: ["Next.js", "Better Auth", "Express.js", "MongoDB"],
    liveUrl: "https://mediqueue-kohl.vercel.app/",
    githubUrl: "https://github.com/Maliha-Akter/mediqueue",
    details: "A smart tutoring session management application with streamlined schedule discovery, role-based user authentication, and interactive calendars.",
    challenges: [
      "Implementing the backend APIs and connecting them with the frontend booking system.",
      "Configuring Better Auth authentication and resolving token-related issues during API requests.",
      "Managing appointment scheduling and keeping booking data synchronized across the application."
    ],
    futurePlans: [
      "Implement role-based dashboards and permissions for different types of users.",
      "Add an admin dashboard to manage users, appointments, and platform activities.",
      "Integrate AI to recommend suitable doctors/tutors based on user needs.",
      "Send email notifications for booking confirmations, reminders, and cancellations.",
      "Support online video consultations and calendar synchronization."
    ]
  },
  {
    title: "SkillSphere",
    description: "Developed a responsive e-learning platform with authentication, course browsing, search functionality, and personalized user profiles.",
    image: "/skillsphere.png",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://skill-sphere-th2p.vercel.app/",
    githubUrl: "https://github.com/Maliha-Akter/skill-sphere",
    details: "A clean, modern e-learning marketplace web application tailored for tech skills, featuring interactive course filtering, dynamic search, and profile customization.",
    challenges: [
      "Managing application state for authentication, course search, and user profile updates.",
      "Creating reusable React components to keep the UI consistent and maintainable."
    ],
    futurePlans: [
      "Migrate the project to Next.js for improved performance and SEO.",
      "Integrate a backend to support dynamic course management and user data.",
      "Add video progress tracking and course completion certificates.",
      "Implement AI-powered course recommendations based on user interests and learning history."
    ]
  },
  {
    title: "KeenKeeper",
    description: "Designed a friendship management application with communication tracking, interaction history, and analytics dashboards.",
    image: "/keenkeeper.png",
    techStack: ["React", "Tailwind CSS", "Recharts", "JavaScript"],
    liveUrl: "https://keen-keeper-lime-pi.vercel.app/",
    githubUrl: "https://github.com/Maliha-Akter/Keen-Keeper",
    details: "A personal relationship manager (PRM) created to help users log interaction touchpoints, monitor call/text frequencies, and visualize friendship engagement health.",
    challenges: [
      "Designing an intuitive interface to organize friendship information, interaction history, and statistics.",
      "Creating responsive layouts and maintaining a consistent user experience across different devices.",
      "Structuring static data to display timelines, friendship details, and statistics in a clear and organized way."
    ],
    futurePlans: [
      "Integrate a backend to securely store friendship records and interaction history.",
      "Add AI-powered friendship insights and personalized engagement suggestions.",
      "Implement reminders for birthdays, follow-ups, and important events.",
      "Allow users to add, edit, and manage friendships with real-time data synchronization."
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

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-gradient-to-r from-green-100 to-white dark:from-[#0B1220] dark:to-[#0B1220] transition-colors duration-300 relative overflow-hidden">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] max-w-xl text-lg font-['Manrope',sans-serif] transition-colors duration-300">
            A curated selection of my best engineering work, web apps, and AI solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] rounded-[24px] overflow-hidden hover:-translate-y-2 hover:border-[#16A34A] dark:hover:border-[#16A34A] hover:shadow-[0_12px_40px_rgb(22,163,74,0.12)] transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-[#080E1A] flex items-center justify-center p-2 transition-colors duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1D293D] via-transparent to-transparent opacity-40 pointer-events-none transition-colors duration-300"></div>

                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 dark:bg-[#0B1220]/60 backdrop-blur-xs px-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-[#16A34A] hover:bg-[#15803d] text-white dark:text-[#0B1220] font-bold text-xs rounded-xl transition-transform hover:scale-105 shadow-lg"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] hover:border-[#16A34A] dark:hover:border-[#16A34A] text-slate-900 dark:text-[#F8FAFC] font-medium text-xs rounded-xl transition-transform hover:scale-105 shadow-lg"
                    >
                      <GitBranch size={14} />
                      GitHub
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] hover:border-[#16A34A] dark:hover:border-[#16A34A] text-slate-900 dark:text-[#F8FAFC] font-medium text-xs rounded-xl transition-transform hover:scale-105 shadow-lg cursor-pointer"
                    >
                      <Info size={14} />
                      Details
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-2.5 group-hover:text-[#16A34A] dark:group-hover:text-[#16A34A] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed font-['Manrope',sans-serif] mb-6 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-[#2B3A55]/60 transition-colors duration-300">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] rounded-lg text-[11px] font-mono text-[#16A34A] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button */}
        {projectsData.length > 3 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] hover:border-[#16A34A] dark:hover:border-[#16A34A] text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_8px_25px_rgb(22,163,74,0.15)] cursor-pointer group"
            >
              <span>{showAll ? "Show Less" : "Show More Projects"}</span>
              {showAll ? (
                <ChevronUp size={18} className="text-[#16A34A] group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown size={18} className="text-[#16A34A] group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] rounded-[24px] max-w-2xl w-full max-h-[85vh] flex flex-col relative shadow-2xl z-10 overflow-hidden transition-colors duration-300"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 dark:border-[#2B3A55] flex items-center justify-between bg-slate-50/50 dark:bg-[#0B1220]/50 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] transition-colors duration-300">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-500 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#2B3A55]/50 rounded-xl transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto font-['Manrope',sans-serif] scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-[#2B3A55] transition-colors duration-300">

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#16A34A] font-semibold mb-3 flex items-center gap-2">
                    <Code size={16} /> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-50 dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] rounded-lg text-xs font-mono text-slate-900 dark:text-[#F8FAFC] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brief Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#16A34A] font-semibold mb-2 flex items-center gap-2">
                    <FileText size={16} /> Brief Description
                  </h4>
                  <p className="text-slate-600 dark:text-[#CBD5E1] text-sm leading-relaxed transition-colors duration-300">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Challenges Faced */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#16A34A] font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle size={16} /> Key Challenges Faced
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-[#CBD5E1] leading-relaxed transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0 mt-2"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Plans */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#16A34A] font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb size={16} /> Potential Improvements & Future Plans
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.futurePlans.map((plan, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-[#CBD5E1] leading-relaxed transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0 mt-2"></span>
                        <span>{plan}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer / Action Links */}
              <div className="p-6 border-t border-slate-200 dark:border-[#2B3A55] bg-slate-50/50 dark:bg-[#0B1220]/50 flex flex-wrap items-center justify-between gap-4 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#16A34A] hover:bg-[#15803d] text-white dark:text-[#0B1220] font-bold text-xs rounded-xl transition-all hover:scale-105 shadow-md"
                  >
                    <ExternalLink size={15} /> Live Project
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] hover:border-[#16A34A] dark:hover:border-[#16A34A] text-slate-900 dark:text-[#F8FAFC] font-medium text-xs rounded-xl transition-all hover:scale-105 shadow-md"
                  >
                    <GitBranch size={15} /> Client Repository
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-[#2B3A55] hover:border-[#16A34A] dark:hover:border-[#16A34A] text-slate-900 dark:text-[#F8FAFC] rounded-xl font-medium text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;