"use client";

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

export function Hero() {
  return (
    <motion.section 
      className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={badgeMotion} className="mb-6">
        <span className="text-[#0f4c81] text-xs font-bold tracking-[0.2em] uppercase">OUR MISSION</span>
      </motion.div>
      
      <motion.h1 variants={headingMotion} className="text-5xl md:text-[64px] font-bold text-[#0f4c81] text-center leading-tight mb-8">
        We Are ERP Recovery<br />Specialists
      </motion.h1>
      
      <motion.p variants={subtitleMotion} className="text-lg md:text-[22px] text-[#475569] text-center max-w-[800px] leading-relaxed">
        We bridge the gap between business reality and ERP capability. Our team of senior consultants, developers, and architects fix broken implementations and build scalable foundations for SME growth.
      </motion.p>
    </motion.section>
  );
}
