"use client";

import { Shield, TrendingUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
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
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-[12%] h-px w-40 bg-slate-200/80 opacity-40" />
        <div className="absolute right-[8%] top-[18%] h-28 w-px bg-slate-200/80 opacity-40" />
        <div className="absolute left-[8%] bottom-[16%] h-20 w-28 rounded-[28px] border border-slate-200/80 opacity-40" />
        <div className="absolute right-[10%] bottom-[18%] h-16 w-40 rounded-[30px] border border-slate-200/80 opacity-40" />
        <div className="absolute inset-x-[20%] top-[20%] h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(226,232,240,0.55),transparent_68%)] opacity-20 blur-3xl" />
      </div>

      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-purple-600">The Difference</h3>
          <h2 className="mb-6 text-4xl font-semibold tracking-[-0.04em] text-slate-900 md:text-5xl">
            Why ERP Titans?
          </h2>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-500">
            Specialists, not generic implementers. We focus on the recovery, clarity, and control that broken ERP systems need.
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
              <motion.div key={idx} variants={itemVariants} className="group flex cursor-pointer">
                <div className="shrink-0 mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-purple-50 text-purple-600 shadow-sm transition-all duration-300 group-hover:scale-[1.08] group-hover:bg-purple-100">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="mb-1.5 text-[19px] font-semibold text-slate-900 transition-colors group-hover:text-purple-600">{item.title}</h4>
                  <p className="max-w-md text-[15px] leading-[1.6] text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Positioning Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative lg:pl-10"
        >
          <motion.div
            transition={{ boxShadow: { duration: 0.25, ease: "easeOut" as const } }}
            className="relative cursor-pointer overflow-hidden hover:shadow-lg rounded-xl border border-slate-200 bg-white p-10 text-slate-900 md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_55%)]" />

            <h3 className="relative mb-8 text-2xl font-semibold text-slate-900">Our Positioning</h3>
            
            <div className="relative mb-6 rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:bg-white">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">We Don't Say</h4>
              <p className="text-[17px] italic leading-relaxed text-slate-700">"We do ERP implementation"</p>
            </div>

            <div className="relative mb-10 rounded-2xl border border-purple-100 bg-purple-50 p-6 shadow-sm transition-colors hover:bg-purple-100/70">
              <motion.h4 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-600"
              >
                We Say
              </motion.h4>
              <p className="text-[20px] font-semibold leading-[1.4] text-slate-900">
                "We help SMEs fix and scale underperforming ERP systems."
              </p>
            </div>

            <p className="text-[15px] leading-relaxed text-slate-500">
              We focus on companies that have been burnt by poor implementations and need expert help to get back on track.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
