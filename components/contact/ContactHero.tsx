"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar } from "lucide-react";

interface ContactHeroProps {
  activeTab: "message" | "schedule";
  setActiveTab: (tab: "message" | "schedule") => void;
}


const badgeMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};
const headingMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12, ease: "easeOut" as const } }
};
const subtitleMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const } }
};
const actionsMotion = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const } }
};
const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const } }
};

export function ContactHero({ activeTab, setActiveTab }: ContactHeroProps) {
  return (
    <motion.div initial="hidden" animate="visible" viewport={{ once: true }} className="flex flex-col items-center text-center pt-32 pb-4 px-4 sm:px-6 lg:px-8">
      <motion.span variants={badgeMotion} className="text-[#0f4c81] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
        Connect With Us
      </motion.span>
      <motion.h1 variants={headingMotion} className="text-5xl md:text-6xl font-bold text-[#0f4c81] mb-6">
        How Can We Help?
      </motion.h1>
      <motion.p variants={subtitleMotion} className="text-[17px] text-[#64748b] max-w-[600px] leading-relaxed mb-12">
        Whether you have a quick question or need a deep-dive audit of your ERP system, our specialists are ready to assist.
      </motion.p>

      {/* Segmented Control */}
      <motion.div variants={actionsMotion} className="bg-white rounded-[16px] p-1.5 shadow-[0_2px_10px_rgb(0,0,0,0.04)] flex items-center w-full max-w-[380px] border border-slate-100 relative">
        <button 
          onClick={() => setActiveTab("message")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-[12px] transition-all z-10 ${
            activeTab === "message" ? "bg-white text-[#0f4c81] font-semibold shadow-[0_2px_15px_rgb(0,0,0,0.08)]" : "text-[#64748b] font-medium hover:text-[#0f4c81] bg-transparent"
          }`}
        >
          <MessageSquare className="w-[18px] h-[18px]" />
          <span className="text-[15px]">Send a Message</span>
        </button>
        <button 
          onClick={() => setActiveTab("schedule")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-[12px] transition-all z-10 ${
            activeTab === "schedule" ? "bg-white text-[#0f4c81] font-semibold shadow-[0_2px_15px_rgb(0,0,0,0.08)]" : "text-[#64748b] font-medium hover:text-[#0f4c81] bg-transparent"
          }`}
        >
          <Calendar className="w-[18px] h-[18px]" />
          <span className="text-[15px]">Schedule Meeting</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
