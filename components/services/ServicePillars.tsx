"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Zap, Shield, Code, Link2, BarChart3, Brain, Wrench, Cloud, ShoppingCart } from "lucide-react";

export function ServicePillars() {
  const [flippedId, setFlippedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const pillars = [
    {
      id: 1,
      title: "ERP Strategy & Transformation",
      desc: "SUCCESS BEGINS BEFORE IMPLEMENTATION.",
      details: "We help organizations design ERP strategies aligned with long-term business growth, operational maturity, and digital transformation goals.",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Odoo Implementation",
      desc: "DESIGNED RIGHT. IMPLEMENTED ONCE.",
      details: "End-to-end Odoo ERP implementation services designed to align technology with operational workflows.",
      icon: Zap,
    },
    {
      id: 3,
      title: "ERP Rescue & Recovery",
      desc: "FIX WHAT OTHERS COULDN'T.",
      details: "This pillar extends the flagship ERP Rescue Program™ and focuses on stabilizing underperforming ERP systems.",
      icon: Shield,
    },
    {
      id: 4,
      title: "Development & Customization",
      desc: "EXTEND ERP WITHOUT BREAKING IT.",
      details: "We build scalable ERP customizations that enhance business functionality while preserving long-term system maintainability.",
      icon: Code,
    },
    {
      id: 5,
      title: "ERP Integration Services",
      desc: "CONNECT EVERYTHING THAT POWERS YOU.",
      details: "Modern ERP environments depend on seamless system integration. We build robust integration ecosystems.",
      icon: Link2,
    },
    {
      id: 6,
      title: "Data, BI & Analytics",
      desc: "TURN DATA INTO EXECUTIVE INTELLIGENCE.",
      details: "ERP systems generate massive operational data. We transform that data into decision-ready intelligence.",
      icon: BarChart3,
    },
    {
      id: 7,
      title: "AI-Driven Intelligence",
      desc: "FROM REACTIVE TO PREDICTIVE ERP.",
      details: "We integrate AI models into ERP systems to enable predictive decision-making and operational optimization.",
      icon: Brain,
    },
    {
      id: 8,
      title: "Managed Services (AMS)",
      desc: "OWNERSHIP DOESN'T END AT GO-LIVE.",
      details: "We provide long-term ERP support that ensures systems remain stable, secure, and continuously improving.",
      icon: Wrench,
    },
    {
      id: 9,
      title: "Cloud & DevOps",
      desc: "BUILT FOR PERFORMANCE AND RESILIENCE.",
      details: "Modern ERP systems require scalable cloud infrastructure. We design and manage ERP environments on leading cloud platforms.",
      icon: Cloud,
    },
    {
      id: 10,
      title: "Digital Commerce",
      desc: "UNIFY ERP WITH CUSTOMER PLATFORMS.",
      details: "We connect ERP operations directly with customer-facing systems to enable seamless order-to-delivery workflows.",
      icon: ShoppingCart,
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-[44px] font-bold text-[#0f4c81] text-center leading-tight mb-4">
        The 10 Core<br />Service Pillars
      </h2>
      <div className="w-[80px] h-[4px] bg-[#0b468f] mb-6 rounded-full" />
      
      <p className="text-lg md:text-[20px] text-[#64748b] text-center max-w-[800px] mb-16">
        Each pillar represents deep expertise and proven delivery excellence across every stage of your ERP evolution.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full mb-12">
        {pillars.map((pillar) => {
          const isFlipped = flippedId === pillar.id || hoveredId === pillar.id;
          
          return (
            <div 
              key={pillar.id} 
              style={{ perspective: 1000 }}
              className="relative w-full h-[320px] cursor-pointer"
              onTouchStart={() => setIsTouch(true)}
              onMouseEnter={() => !isTouch && setHoveredId(pillar.id)}
              onMouseLeave={() => !isTouch && setHoveredId(null)}
              onClick={() => {
                if (flippedId === pillar.id) {
                  setFlippedId(null);
                  setHoveredId(null);
                } else {
                  setFlippedId(pillar.id);
                }
              }}
            >
              <motion.div
                className="w-full h-full relative rounded-[24px]"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  rotateY: isFlipped ? 180 : 0,
                  y: isFlipped ? -6 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Front Side */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b from-[#0b468f] to-[#0a3f80] rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 ${
                    isFlipped 
                      ? 'shadow-[0_0_30px_rgba(15,76,129,0.25)]' 
                      : 'shadow-[0_8px_30px_rgba(11,70,143,0.15)]'
                  }`}
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                  <div className="absolute top-4 right-4 w-7 h-7 bg-[#0f4c81] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-inner">
                    {pillar.id}
                  </div>
                  
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <pillar.icon className="w-6 h-6 text-[#0b468f]" />
                  </div>
                  
                  <h3 className="text-white text-[17px] font-bold leading-tight mb-3 px-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-blue-100/90 text-[11px] font-bold tracking-wide uppercase leading-relaxed px-1">
                    {pillar.desc}
                  </p>
                </div>

                {/* Back Side */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b from-[#0b468f] to-[#0a3f80] rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 ${
                    isFlipped 
                      ? 'shadow-[0_0_30px_rgba(15,76,129,0.25)]' 
                      : 'shadow-[0_8px_30px_rgba(11,70,143,0.15)]'
                  }`}
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <div className="absolute top-4 right-4 w-7 h-7 bg-[#0f4c81] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-inner opacity-50">
                    {pillar.id}
                  </div>

                  <p className="text-white text-[15px] leading-relaxed">
                    {pillar.details}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      
      <p className="text-[#64748b] text-sm flex items-center justify-center space-x-2 bg-white px-6 py-2.5 rounded-full shadow-sm border border-slate-100">
        <span>💡</span>
        <span className="font-medium">Hover or tap any pillar to view details</span>
      </p>
    </section>
  );
}
