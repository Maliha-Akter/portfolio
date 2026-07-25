import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  BadgeCheck, 
  GitBranch, 
  HeartHandshake, 
  Sparkles,
  GraduationCap,
  Briefcase,
  Monitor,
  FolderGit2,
  MapPin,
  BookOpen,
  Film,
  Music,
  Lightbulb
} from 'lucide-react';

// Reusable Card Wrapper for consistent styling and hover effects
const BentoCard = ({ children, className = "", delay = 0, slideIn = "up" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: slideIn === "up" ? 40 : 0,
      x: slideIn === "left" ? -50 : slideIn === "right" ? 50 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { duration: 0.5, delay, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={`bg-[#1D293D] border border-[#2B3A55] rounded-[24px] p-7 md:p-8 hover:-translate-y-1.5 hover:border-[#16A34A] hover:shadow-[0_8px_30px_rgb(22,163,74,0.1)] transition-all duration-300 group ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Reusable Header for each Bento Box
const CardHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-[#16A34A]/10 rounded-full text-[#16A34A] group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">{title}</h3>
  </div>
);

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1220] relative overflow-hidden">
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
              About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-4">
            Get to know more about me
          </h2>
        </motion.div>

        {/* 6-Column Bento Grid */}
        <div className="grid grid-cols-6 gap-6">
          
          {/* 1. Who I Am (Spans 4 cols on large screens) */}
          <BentoCard className="col-span-6 lg:col-span-4" slideIn="left">
            <CardHeader icon={User} title="Who I Am" />
            <p className="text-[#CBD5E1] text-lg leading-relaxed font-['Manrope',sans-serif]">
              I am a Computer Science and Engineering graduate from AUST, deeply passionate about 
              building modern, scalable web applications. I bridge the gap between clean, intuitive 
              user interfaces and highly efficient backend systems. With a strong foundation in 
              software architecture and a constant drive to learn, I strive to create solutions 
              that don't just work, but deliver exceptional digital experiences.
            </p>
          </BentoCard>

          {/* 2. Quick Facts (Spans 2 cols on large screens) */}
          <BentoCard className="col-span-6 lg:col-span-2" slideIn="right">
            <CardHeader icon={BadgeCheck} title="Quick Facts" />
            <ul className="space-y-4 text-[#94A3B8] font-['Manrope',sans-serif]">
              <li className="flex items-center gap-3">
                <GraduationCap size={20} className="text-[#16A34A]" />
                <span>CSE Graduate</span>
              </li>
              <li className="flex items-center gap-3">
                <Monitor size={20} className="text-[#16A34A]" />
                <span>Full Stack Dev</span>
              </li>
              <li className="flex items-center gap-3">
                <Briefcase size={20} className="text-[#16A34A]" />
                <span>Open to Work</span>
              </li>
              <li className="flex items-center gap-3">
                <FolderGit2 size={20} className="text-[#16A34A]" />
                <span>6+ Projects</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-[#16A34A]" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </BentoCard>

          {/* 3. Programming Journey (Spans 3 cols) */}
          <BentoCard className="col-span-6 lg:col-span-3" delay={0.1}>
            <CardHeader icon={GitBranch} title="Programming Journey" />
            <div className="relative border-l-2 border-[#2B3A55] ml-3 mt-4 space-y-6">
              {[
                "C Programming",
                "HTML & CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Backend Development",
                "AI Integration"
              ].map((step, index) => (
                <div key={index} className="relative pl-6">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-[#1D293D] border-2 border-[#16A34A] rounded-full group-hover:bg-[#16A34A] transition-colors duration-300"></div>
                  <p className="text-[#CBD5E1] font-medium font-['Manrope',sans-serif]">{step}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 4. What I Enjoy (Spans 3 cols) */}
          <BentoCard className="col-span-6 lg:col-span-3" delay={0.2}>
            <CardHeader icon={HeartHandshake} title="What I Enjoy" />
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { label: "Full Stack Development", icon: "💻" },
                { label: "Responsive UI", icon: "🎨" },
                { label: "REST APIs", icon: "⚙️" },
                { label: "AI Integration", icon: "🤖" },
                { label: "Continuous Learning", icon: "📚" },
                { label: "Problem Solving", icon: "🧩" }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#0B1220] border border-[#2B3A55] rounded-xl text-[#CBD5E1] text-sm font-['Manrope',sans-serif] hover:border-[#16A34A] hover:text-[#16A34A] transition-colors duration-300 cursor-default"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 5. Beyond Programming (Full width) */}
          <BentoCard className="col-span-6" delay={0.3}>
            <CardHeader icon={Sparkles} title="Beyond Programming" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {[
                { label: "Reading", icon: BookOpen },
                { label: "Movies", icon: Film },
                { label: "Music", icon: Music },
                { label: "Learning", icon: Lightbulb }
              ].map((hobby, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-[#0B1220] border border-[#2B3A55] rounded-2xl group/hobby hover:border-[#16A34A] transition-colors duration-300"
                >
                  <hobby.icon size={28} className="text-[#94A3B8] group-hover/hobby:text-[#16A34A] mb-3 transition-colors duration-300" />
                  <span className="text-[#CBD5E1] font-medium font-['Manrope',sans-serif]">{hobby.label}</span>
                </div>
              ))}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;