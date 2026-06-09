import { CheckCircle2, Activity } from "lucide-react";

export function Solutions() {
  const cards = [
    {
      title: "MRP Optimization",
      items: ["Capacity Planning", "Demand Forecasting", "Auto PO Generation"]
    },
    {
      title: "Traceability",
      items: ["Lot/Serial Tracking", "Multi-warehouse", "Real-time Visibility"]
    },
    {
      title: "Quality Control",
      items: ["Workflow Checkpoints", "Inspection Logs", "Audit Trails"]
    },
    {
      title: "Supply Chain",
      items: ["Supplier Portal", "JIT Inventory", "Automated Receiving"]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="group bg-white rounded-[24px] p-8 border border-[#e5e7eb] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 ease-out transform will-change-transform hover:-translate-y-2 hover:border-[#0f4c81] hover:shadow-[0_20px_50px_rgba(15,76,129,0.15)] hover:ring-4 hover:ring-[#0f4c81]/10">
              <h3 className="text-[17px] font-bold text-[#0f4c81] mb-5">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center space-x-2 text-[#64748b] text-[14px]">
                    <CheckCircle2 className="w-4 h-4 text-[#0f4c81]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side: Text & Recovery Card */}
        <div>
          <span className="text-[#0f4c81] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">SOLUTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6 leading-tight">
            How We Fix Your<br />Manufacturing ERP
          </h2>
          <p className="text-[17px] text-[#64748b] leading-relaxed mb-10 max-w-[480px]">
            Our approach is rooted in deep manufacturing expertise. We don't just fix software; we optimize your entire production workflow.
          </p>

          <div className="bg-[#f5f7fa] rounded-[24px] p-6 border border-slate-200 flex items-start space-x-5 shadow-sm">
            <div className="w-12 h-12 bg-[#0b468f] rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-[17px] font-bold text-[#0f4c81] mb-1">Zero Downtime Recovery</h4>
              <p className="text-[14px] text-[#64748b] leading-relaxed">
                We implement fixes in phases, ensuring your production lines keep moving while we optimize the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
