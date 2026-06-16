"use client";

import { useState } from "react";
import { Shield, TrendingUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <h3 className="text-sm font-bold text-[#0f4c81] tracking-widest uppercase mb-4">The Difference</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f4c81] tracking-tight mb-6">
            Why ERP Titans?
          </h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
            We&apos;re specialists, not generic implementers. We understand the nuances of ERP recovery on a global scale.
          </p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {[
              {
                title: "Trust-Based Approach",
                desc: "We build relationships with SMEs who value expertise, accountability, and long-term results.",
                icon: Shield
              },
              {
                title: "Proven Recovery Track Record",
                desc: "Specialized in fixing broken ERP implementations and recovering lost value.",
                icon: TrendingUp
              },
              {
                title: "Calgary Expertise, Global Reach",
                desc: "Headquartered in Calgary, Canada, with the infrastructure to serve clients anywhere.",
                icon: MapPin
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex group cursor-pointer">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-12 w-12 rounded-full bg-[#e0f2fe] flex items-center justify-center transition-all duration-300 group-hover:scale-[1.15] group-hover:rotate-6 shadow-sm border border-blue-100 group-hover:border-blue-300 group-hover:bg-blue-100">
                    <item.icon className="h-6 w-6 text-[#0f4c81]" />
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-[19px] font-bold text-[#0f4c81] transition-colors group-hover:text-[#0b468f] mb-1.5">{item.title}</h4>
                  <p className="text-[15px] leading-[1.6] text-slate-500 max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Blue Positioning Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative lg:pl-10"
        >
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ 
              y: isHovered ? -6 : [0, -6, 0],
              boxShadow: isHovered 
                ? "0 30px 80px rgba(15,76,129,0.3)" 
                : "0 20px 60px rgba(15,76,129,0.18)"
            }}
            transition={{ 
              y: isHovered 
                ? { duration: 0.3, ease: "easeOut" as const } 
                : { duration: 5, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 0.3, ease: "easeOut" as const }
            }}
            className="bg-gradient-to-b from-[#0b468f] to-[#0a3f80] rounded-[32px] p-10 md:p-12 text-white relative overflow-hidden cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Our Positioning</h3>
            
            <div className="bg-white/5 rounded-xl p-6 mb-6 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10">
              <h4 className="text-rose-400 font-black tracking-wider uppercase mb-2 text-sm">We Don&apos;t Say</h4>
              <p className="text-[17px] italic text-blue-100/90 leading-relaxed">"We do ERP implementation"</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-10 backdrop-blur-sm border border-white/20 shadow-inner transition-colors hover:bg-white/[0.15]">
              <motion.h4 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-emerald-400 font-black tracking-wider uppercase mb-2 text-sm"
              >
                We Say
              </motion.h4>
              <p className="text-[20px] font-bold leading-[1.4] text-white">
                "We help SMEs fix and scale underperforming ERP systems."
              </p>
            </div>

            <p className="text-blue-100/80 text-[15px] leading-relaxed">
              We focus on companies that have been burnt by poor implementations and need expert help to get back on track.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
