"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


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

export function Hero() {
  return (
    <motion.section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto" initial="hidden" animate="visible" viewport={{ once: true }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side */}
        <div>
          <motion.div variants={badgeMotion} className="inline-flex items-center space-x-2 bg-[#e0f2fe] rounded-full px-4 py-1.5 mb-6">
            <BarChart3 className="w-4 h-4 text-[#0f4c81]" />
            <span className="text-[#0f4c81] text-xs font-bold tracking-wide">Manufacturing Excellence</span>
          </motion.div>
          
          <motion.h1 variants={headingMotion} className="text-5xl md:text-[56px] font-bold text-[#0f4c81] leading-[1.1] mb-6">
            Precision ERP for<br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Modern Factories.
            </span>
          </motion.h1>
          
          <motion.p variants={subtitleMotion} className="text-lg text-[#64748b] leading-relaxed mb-10 max-w-[500px]">
            Specialized ERP recovery for manufacturers struggling with production planning, inventory management, and supply chain visibility. We fix what others couldn&apos;t.
          </motion.p>
          
          <motion.div variants={actionsMotion} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#0b468f] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#0a3f80] transition-colors shadow-md">
                Schedule Your Audit
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-[#0f4c81] font-semibold px-8 py-3.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                View Calendar
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div variants={cardMotion} className="relative pl-0 lg:pl-12 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[24px] transition-all duration-500 group-hover:bg-blue-500/20" />
            <Image 
              src="/images/manufacturing-hero.png" 
              alt="Manufacturing Operations"
              width={800}
              height={600}
              className="relative rounded-[24px] w-full h-auto object-cover aspect-[4/3] shadow-[0_25px_60px_rgba(15,76,129,0.15)] transition-all duration-400 ease-in-out hover:-translate-y-[6px] border border-slate-100"
              priority
            />
          </div>
          
          {/* Floating Metric Card */}
          <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center space-x-4 border border-slate-100">
            <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#0f4c81]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0f4c81]">35%</div>
              <div className="text-[11px] font-bold text-[#64748b] tracking-wider uppercase">Efficiency Boost</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
