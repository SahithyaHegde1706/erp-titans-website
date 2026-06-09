import { AlertCircle, Search, BarChart3, Activity, ShieldCheck, Zap } from "lucide-react";

export function Challenges() {
  const blocks = [
    {
      title: "Compliance Reporting Errors",
      desc: "Struggling with Health Canada & CRA reporting. Inaccurate data leads to audit risks.",
      icon: AlertCircle
    },
    {
      title: "Traceability Gaps",
      desc: "Inability to track strains and batches accurately. Manual tracking is prone to errors.",
      icon: Search
    },
    {
      title: "Inventory Issues",
      desc: "Lack of integrated tracking across cultivation, processing, and retail stages.",
      icon: BarChart3
    },
    {
      title: "Financial Transparency",
      desc: "Multi-location accounting and taxation complexities make P&L transparency difficult.",
      icon: Activity
    },
    {
      title: "Quality Control Hurdles",
      desc: "QC and COA documentation are not integrated into production workflows.",
      icon: ShieldCheck
    },
    {
      title: "Waste Tracking",
      desc: "Difficulty in documenting waste and by-product reuse as required by mandates.",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <span className="text-[#0f4c81] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">CHALLENGES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6">
          Regulatory Roadblocks
        </h2>
        <p className="text-[17px] text-[#64748b]">
          We solve the compliance and operational issues that risk your license and stall growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {blocks.map((block, idx) => (
          <div key={idx} className="group bg-white rounded-[24px] p-8 border border-[#e5e7eb] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 ease-out transform will-change-transform hover:-translate-y-2 hover:border-[#0f4c81] hover:shadow-[0_20px_50px_rgba(15,76,129,0.15)] hover:ring-4 hover:ring-[#0f4c81]/10">
            <div className="w-12 h-12 bg-gray-100 rounded-[14px] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#0f4c81]">
              <block.icon className="w-5 h-5 text-[#0f4c81] transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="text-[17px] font-bold text-[#0f4c81] mb-3">{block.title}</h3>
            <p className="text-[14px] text-[#64748b] leading-relaxed">{block.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
