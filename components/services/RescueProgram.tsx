import { Shield, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export function RescueProgram() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column */}
        <div className="bg-[#0b468f] rounded-[32px] p-10 md:p-14 relative overflow-hidden shadow-2xl">
          <Shield className="absolute top-10 right-10 w-48 h-48 text-white/5" strokeWidth={1} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">FLAGSHIP PROGRAM</span>
            </div>
            
            <h2 className="text-4xl md:text-[42px] font-bold text-white mb-6">
              ERP Rescue Program™
            </h2>
            
            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-[480px]">
              Our specialized intervention for organizations with stalled, failed, or underperforming ERP implementations. We don't just patch symptoms; we fix the foundation.
            </p>
            
            <ul className="space-y-4 mb-12">
              {["Root Cause Diagnostic Audit", "Data Integrity Restoration", "Process Realignment", "User Adoption Training"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-medium text-[17px]">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/contact">
              <button className="bg-white text-[#0b468f] font-semibold px-8 py-4 rounded-full text-lg hover:bg-slate-50 transition-colors shadow-lg">
                Request Recovery Audit
              </button>
            </Link>
          </div>
        </div>
        
        {/* Right Column */}
        <div>
          <h2 className="text-4xl font-bold text-[#0f4c81] mb-6">
            Why ERP Titans?
          </h2>
          
          <p className="text-lg text-[#64748b] leading-relaxed mb-12">
            Most ERP failures aren't software problems—they're execution problems. We combine deep technical knowledge of Odoo and other platforms with senior-level business process expertise.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Senior Lead Only",
                desc: "No junior consultants. You work with experts."
              },
              {
                title: "Global Delivery",
                desc: "Supporting clients across North America & Europe."
              },
              {
                title: "Platform Agnostic",
                desc: "Odoo experts, but we fix all major ERP ecosystems."
              },
              {
                title: "Outcome Focused",
                desc: "We measure success by your business performance."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-[24px] p-8 border border-[#e5e7eb] shadow-sm transition-all duration-300 ease-out transform will-change-transform hover:-translate-y-2 hover:border-[#0f4c81] hover:shadow-[0_20px_50px_rgba(15,76,129,0.15)] hover:ring-4 hover:ring-[#0f4c81]/10">
                <h3 className="text-lg font-bold text-[#0f4c81] mb-3">{feature.title}</h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
