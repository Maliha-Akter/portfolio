"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Code2 
} from 'lucide-react';

// Brand Icon SVGs (replacing removed lucide-react brand exports)
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      detail: "hello@example.com", // Replace with your actual email
      link: "mailto:hello@example.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      detail: "01861209855",
      link: "tel:+8801861209855"
    },
    {
      icon: <MessageCircle size={20} />,
      title: "WhatsApp",
      detail: "01861209855",
      link: "https://wa.me/8801861209855"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      detail: "Dhaka, Bangladesh",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <LinkedinIcon size={18} />, url: "https://www.linkedin.com/in/maliha-akter-miti/", label: "LinkedIn" },
    { icon: <GithubIcon size={18} />, url: "https://github.com/Maliha-Akter", label: "GitHub" },
    { icon: <Code2 size={18} />, url: "https://leetcode.com/u/maliha_miti_CodeID/", label: "Portfolio Code" },
    // { icon: <InstagramIcon size={18} />, url: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-green-100 to-white dark:from-[#0B1220] dark:to-[#0B1220] transition-colors duration-300 relative overflow-hidden flex items-center min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Section: Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-6 transition-colors duration-300">
            Let's Work Together!
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] text-lg font-['Manrope',sans-serif] max-w-2xl leading-relaxed transition-colors duration-300">
            I'm always excited to discuss new projects, creative ideas or opportunities. Feel free to message me!
          </p>
        </motion.div>

        {/* Bottom Section: Grid Layout for Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Information & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              {/* Contact Info Cards */}
              <div className="flex flex-col gap-4 mb-10">
                {contactInfo.map((info, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] rounded-[16px] p-5 flex items-center gap-5 transition-all duration-300 hover:border-[#16A34A]/50 hover:shadow-md dark:hover:shadow-none group"
                  >
                    <div className="w-12 h-12 shrink-0 bg-slate-50 dark:bg-[#0B1220] rounded-full flex items-center justify-center text-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white dark:group-hover:text-[#0B1220] transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-[#F8FAFC] font-bold font-['Space_Grotesk',sans-serif] text-base mb-1 transition-colors duration-300">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a href={info.link} className="text-slate-500 dark:text-[#94A3B8] text-sm hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors font-['Manrope',sans-serif]">
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-slate-500 dark:text-[#94A3B8] text-sm font-['Manrope',sans-serif] transition-colors duration-300">
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] hover:border-[#16A34A] dark:hover:border-[#16A34A] text-slate-500 dark:text-[#94A3B8] hover:text-[#16A34A] dark:hover:text-[#16A34A] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#1D293D] border border-slate-200 dark:border-[#2B3A55] rounded-[24px] p-8 md:p-10 shadow-2xl w-full transition-colors duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Top Row: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-[#0B1220] border border-[#16A34A] dark:border-[#2B3A55] rounded-xl text-slate-900 dark:text-[#F8FAFC] text-sm placeholder-[#16A34A]/70 dark:placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-[#0B1220] border border-[#16A34A] dark:border-[#2B3A55] rounded-xl text-slate-900 dark:text-[#F8FAFC] text-sm placeholder-[#16A34A]/70 dark:placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-[#0B1220] border border-[#16A34A] dark:border-[#2B3A55] rounded-xl text-slate-900 dark:text-[#F8FAFC] text-sm placeholder-[#16A34A]/70 dark:placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-[#0B1220] border border-[#16A34A] dark:border-[#2B3A55] rounded-xl text-slate-900 dark:text-[#F8FAFC] text-sm placeholder-[#16A34A]/70 dark:placeholder-[#64748B] focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#16A34A] hover:bg-[#15803d] disabled:bg-[#16A34A]/50 text-white dark:text-[#0B1220] disabled:text-white/50 dark:disabled:text-[#0B1220]/50 font-bold text-base rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {status === 'loading' ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-[#16A34A] text-sm font-medium">
                    <CheckCircle size={16} />
                    <span>Message sent! I'll be in touch soon.</span>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400 text-sm font-medium transition-colors duration-300">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;