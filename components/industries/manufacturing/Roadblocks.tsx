import { Settings, Layers, Zap, ShieldCheck, BarChart2, Cpu } from "lucide-react";

export function Roadblocks() {
  const blocks = [
    {
      title: "Production Planning Chaos",
      desc: "Your MRP/MPS isn't working, leading to missed deadlines and excess inventory. Teams rely on manual scheduling.",
      icon: Settings
    },
    {
      title: "Inventory Visibility Gaps",
      desc: "Can't track raw materials, WIP, or finished goods accurately. Constant discrepancies and write-offs.",
      icon: Layers
    },
    {
      title: "Supply Chain Disconnects",
      desc: "Supplier orders, receiving, and quality checks aren't integrated. Manual processes create delays.",
      icon: Zap
    },
    {
      title: "Quality & Compliance",
      desc: "Traceability and quality control workflows aren't properly configured. Regulatory compliance is a nightmare.",
      icon: ShieldCheck
    },
    {
      title: "Reporting Blindness",
      desc: "No real-time visibility into production metrics, costs, or performance. Decision-making is reactive.",
      icon: BarChart2
    },
    {
      title: "Customization Overload",
      desc: "Previous implementation added too many custom modules that conflict with core Odoo functionality.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <span className="text-[#0f4c81] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">CHALLENGES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6">
          Common Manufacturing<br />Roadblocks
        </h2>
        <p className="text-[17px] text-[#64748b]">
          We solve the complex problems that drain your ROI and stall production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {blocks.map((block, idx) => (
          <div key={idx} className="group bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e7eb] transition-all duration-300 ease-out transform will-change-transform hover:-translate-y-2 hover:border-[#0f4c81] hover:shadow-[0_20px_50px_rgba(15,76,129,0.15)] hover:ring-4 hover:ring-[#0f4c81]/10">
            <div className="w-12 h-12 bg-gray-100 rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm transition-colors duration-300 group-hover:bg-[#0f4c81]">
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
