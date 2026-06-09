"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const titleVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 300,
      damping: 15
    }
  }
};

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" as const } }
};

export function Foundation() {
  const cards = [
    "Transparency",
    "Traceability",
    "Visibility",
    "Auditability",
    "Accountability",
    "Compliance"
  ];

  const features = [
    "Lot & Serial Tracking",
    "Batch Genealogy",
    "Recall Readiness",
    "Automated Reporting"
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute left-20 top-20 w-72 h-72 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-20 bottom-20 w-72 h-72 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side */}
        <div>
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {cards.map((text, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-xl border border-blue-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] py-5 px-4 text-center cursor-default transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_30px_rgba(34,197,94,0.15)] hover:border-green-500"
              >
                <span className="text-[#0f4c81] font-bold text-[15px]">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-green-50/80 rounded-r-[20px] rounded-l-md border-l-[4px] border-[#16a34a] p-8 mt-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(22,163,74,0.1)] hover:border-green-400"
          >
            <p className="text-[15px] text-[#16a34a] italic leading-relaxed font-medium">
              "Any gaps in traceability expose you to audit risk. We ensure your ERP is the absolute source of truth for Health Canada."
            </p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#0f4c81] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4"
          >
            FOUNDATION
          </motion.span>
          
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6 leading-tight"
          >
            Seed-to-Sale Traceability
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[17px] text-[#64748b] leading-relaxed mb-10 max-w-[500px]"
          >
            Complete product lifecycle tracking isn't optional—it's a regulatory mandate. We build the foundation for your compliance.
          </motion.p>

          <motion.ul 
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                variants={listItemVariants}
                className="flex items-center space-x-3 text-[#0f4c81] font-semibold text-[15px]"
              >
                <motion.div variants={iconVariants}>
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0" />
                </motion.div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
