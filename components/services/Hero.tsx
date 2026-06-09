"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const badgeMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const headingMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12, ease: "easeOut" as const } },
};

const subtitleMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const } },
};

const actionsMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <motion.section 
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={badgeMotion} className="inline-flex items-center space-x-2 bg-[#e0f2fe] rounded-full px-4 py-1.5 mb-8">
        <Sparkles className="w-4 h-4 text-[#0f4c81]" />
        <span className="text-[#0f4c81] text-xs font-bold tracking-widest uppercase">OUR EXPERTISE</span>
      </motion.div>
      
      <motion.h1 variants={headingMotion} className="text-5xl md:text-[56px] font-bold text-[#0f4c81] text-center leading-tight mb-6">
        Comprehensive ERP<br />Lifecycle Support
      </motion.h1>
      
      <motion.p variants={subtitleMotion} className="text-lg md:text-[22px] text-[#64748b] text-center max-w-[800px] mb-12">
        From Strategy to Recovery to Scale — We own the entire ERP journey for SMEs globally.
      </motion.p>
      
      <motion.div variants={actionsMotion} className="w-full max-w-[1000px] bg-white rounded-[24px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <p className="text-xl md:text-[22px] text-[#0f4c81] text-center font-medium italic leading-relaxed">
          "End-to-End ERP Services Built for Stability, Scalability, and Strategic Growth. Whether you're implementing Odoo for the first time or fixing a broken deployment, we ensure measurable business outcomes."
        </p>
      </motion.div>
    </motion.section>
  );
}
