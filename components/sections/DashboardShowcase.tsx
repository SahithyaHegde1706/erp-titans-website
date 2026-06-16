"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Activity, Database, FileText, Zap, Shield, TrendingUp, Search } from "lucide-react";
import { motion, animate, useReducedMotion } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "", decimals = 0 }: { from: number, to: number, duration?: number, suffix?: string, decimals?: number }) {
  const [value, setValue] = useState(from);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: "easeOut" as const,
      onUpdate(v) {
        setValue(Number(v.toFixed(decimals)));
      }
    });
    return () => controls.stop();
  }, [from, to, duration, decimals, shouldReduceMotion]);

  return <span>{value.toFixed(decimals)}{suffix}</span>;
}

export function DashboardShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto relative overflow-hidden pb-12">
      {/* Floating Badge */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20px] right-[5%] lg:right-[10%] z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center space-x-4"
      >
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Activity className="text-green-600 h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Recovery Health</p>
          <p className="text-base font-bold text-[#0f4c81]">
            <Counter from={0} to={99.8} decimals={1} suffix="%" /> Optimized
          </p>
        </div>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative max-w-[1000px] mx-auto mt-8">
        {/* Browser Top Bar Mockup */}
        <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 flex-1 flex justify-center">
            <div className="bg-white rounded-md border border-slate-200 text-xs text-slate-400 px-3 py-1 flex items-center w-full max-w-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              erptitans.com/recovery-dashboard
            </div>
          </div>
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>

        <div className="flex h-[450px]">
          {/* Sidebar */}
          <div className="w-56 border-r border-slate-100 p-6 flex flex-col justify-between hidden md:flex">
            <div className="space-y-1">
              <div className="w-16 h-2 bg-slate-200 rounded mb-6"></div>
              
              <div className="flex items-center space-x-3 bg-[#0f4c81] text-white p-2.5 rounded-lg text-sm font-semibold shadow-sm group">
                <LayoutDashboard className="h-4 w-4" />
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">Overview</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 p-2.5 hover:bg-slate-50 rounded-lg text-sm font-medium cursor-pointer transition-colors group">
                <Activity className="h-4 w-4" />
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">Diagnostics</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 p-2.5 hover:bg-slate-50 rounded-lg text-sm font-medium cursor-pointer transition-colors group">
                <Database className="h-4 w-4" />
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">Data Sync</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 p-2.5 hover:bg-slate-50 rounded-lg text-sm font-medium cursor-pointer transition-colors group">
                <FileText className="h-4 w-4" />
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">Reporting</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 p-2.5 hover:bg-slate-50 rounded-lg text-sm font-medium cursor-pointer transition-colors group">
                <Zap className="h-4 w-4" />
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">Automations</span>
              </div>
            </div>

            <div>
              <div className="w-12 h-2 bg-slate-200 rounded mb-3"></div>
              <div className="border border-slate-100 bg-slate-50/50 rounded-xl p-4">
                <p className="text-[10px] font-bold text-[#0f4c81] mb-2 uppercase tracking-wider">Recovery Progress</p>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" as const, delay: 0.5 }}
                    className="h-full bg-[#0f4c81] rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="flex-1 p-6 lg:p-8 bg-white overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#0f4c81]">ERP Recovery Hub</h2>
                <p className="text-xs text-slate-500 mt-0.5">Real-time optimization metrics for your business</p>
              </div>
              <div className="flex space-x-3">
                <div className="px-3 py-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center">
                  <motion.span 
                    animate={shouldReduceMotion ? {} : { opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"
                  ></motion.span>
                  Live System
                </div>
                <div className="px-4 py-1.5 bg-[#0f4c81] text-white rounded-full text-[11px] font-bold uppercase tracking-wide cursor-pointer shadow-sm hover:bg-[#0a3f80] transition-colors">
                  Generate Audit
                </div>
              </div>
            </div>

            {/* Metric Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
            >
              {[
                { title: "Data Integrity", icon: Shield, value: 99.2, decimals: 1, suffix: "%", trend: "+12.4%", color: "text-[#0f4c81]" },
                { title: "Sync Efficiency", icon: Zap, value: 2.4, decimals: 1, suffix: "ms", trend: "-45%", color: "text-blue-500" },
                { title: "Projected ROI", icon: TrendingUp, value: 4.8, decimals: 1, suffix: "x", trend: "+0.8x", color: "text-slate-700" }
              ].map((metric, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -8, boxShadow: "0 10px 30px rgba(15,76,129,0.15)" }}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className={`p-2 rounded-lg bg-slate-50 border border-slate-100 ${metric.color}`}>
                      <metric.icon className="h-4 w-4" />
                    </div>
                    <span className={`text-[10px] font-bold ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-[#0f4c81]'}`}>
                      {metric.trend}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{metric.title}</p>
                  <p className="text-2xl font-extrabold text-[#0f4c81]">
                    <Counter from={0} to={metric.value} decimals={metric.decimals} suffix={metric.suffix} />
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[11px] font-bold text-[#0f4c81] uppercase tracking-wider">Recent Optimizations</h3>
                  <Activity className="h-3 w-3 text-slate-400" />
                </div>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {[
                    { text: "Database cleanup completed", time: "2m ago" },
                    { text: "API endpoint latency reduced", time: "15m ago" },
                    { text: "Automated report generated", time: "1h ago" }
                  ].map((item, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex justify-between items-center text-xs">
                      <div className="flex items-center text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mr-2"></span>
                        {item.text}
                      </div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">{item.time}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <motion.div 
                animate={shouldReduceMotion ? {} : { boxShadow: ["0 0 0px rgba(15,76,129,0)", "0 0 20px rgba(15,76,129,0.08)", "0 0 0px rgba(15,76,129,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 relative overflow-hidden group"
              >
                <div className="absolute -right-6 -bottom-6 opacity-5">
                  <Search className="h-32 w-32 text-[#0f4c81]" />
                </div>
                <Activity className="h-6 w-6 text-slate-400 mb-3" />
                <h3 className="text-sm font-bold text-[#0f4c81] mb-1">System Health Audit</h3>
                <p className="text-xs text-slate-500 mb-3">Ready for deep diagnostic</p>
                <span className="text-[11px] font-bold text-[#0f4c81] uppercase tracking-wider cursor-pointer hover:underline">View Detailed Report</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
