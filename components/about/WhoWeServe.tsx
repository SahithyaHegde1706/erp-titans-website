import { LineChart, Settings, LayoutDashboard } from "lucide-react";

export function WhoWeServe() {
  const partners = [
    {
      title: "CFOs & Controllers",
      desc: "Focused on ROI, financial controls, and reporting accuracy.",
      badge: "Finance Leadership",
      icon: LineChart
    },
    {
      title: "COOs & Ops Heads",
      desc: "Focused on efficiency, optimization, and scaling workflows.",
      badge: "Operations Leadership",
      icon: Settings
    },
    {
      title: "ERP Managers",
      desc: "Responsible for performance and user adoption across the team.",
      badge: "System Ownership",
      icon: LayoutDashboard
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <span className="text-[#0f4c81] text-xs font-bold tracking-[0.2em] uppercase block mb-4">PARTNERSHIP</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6">Who We Serve Best</h2>
        <p className="text-[17px] text-[#64748b]">We work with SMEs globally that value precision and long-term stability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1200px]">
        {partners.map((partner, idx) => (
          <div 
            key={idx} 
            className="group relative bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,1))] rounded-[24px] p-8 border border-[#0f4c81]/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] min-h-[300px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#0f4c81]/50 hover:shadow-[0_0_30px_rgba(15,76,129,0.08),0_20px_50px_rgba(15,76,129,0.12)] overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0b468f] to-[#4ea2f0]" />

            {/* Icon */}
            <div className="w-[72px] h-[72px] bg-[#e0f2fe] rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-blue-100 shrink-0">
              <partner.icon className="w-8 h-8 text-[#0f4c81]" />
            </div>

            {/* Content */}
            <h3 className="text-[20px] font-bold text-[#0f4c81] mb-3">{partner.title}</h3>
            <p className="text-[15px] text-[#64748b] leading-[1.6] max-w-[280px] flex-1">
              {partner.desc}
            </p>

            {/* Badge */}
            <div className="mt-6 px-5 py-2 bg-white border border-[#0f4c81]/10 rounded-full shadow-sm group-hover:border-[#0f4c81]/20 transition-colors">
              <span className="text-[#0f4c81] text-[11px] font-bold tracking-widest uppercase">
                {partner.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
