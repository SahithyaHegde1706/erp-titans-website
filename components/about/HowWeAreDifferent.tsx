import { Rocket, X, Check } from "lucide-react";

export function HowWeAreDifferent() {
  const genericItems = [
    "We do Odoo implementation",
    "We work for any industry",
    "We build custom solutions for everything",
    "Price is our only advantage"
  ];

  const specialistItems = [
    "We fix broken Odoo implementations",
    "Specialized in Manufacturing & Distribution",
    "Match system to business, not vice versa",
    "Expertise is our competitive edge"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <span className="text-[#0f4c81] text-xs font-bold tracking-[0.2em] uppercase block mb-4">THE DIFFERENCE</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6">How We're Different</h2>
        <p className="text-lg text-[#64748b]">Specialists vs. Generic Implementers. There's a world of difference in the results.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Generic Card */}
        <div className="bg-white rounded-[32px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
          <div className="flex items-center space-x-3 mb-10">
            <X className="w-5 h-5 text-red-500" strokeWidth={3} />
            <h3 className="text-lg font-bold text-red-500">Generic Implementers</h3>
          </div>
          <ul className="space-y-6">
            {genericItems.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4 text-[#64748b] italic">
                <span className="text-red-400 mt-0.5">—</span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Titans Card */}
        <div className="bg-[#0b468f] rounded-[32px] p-10 shadow-2xl relative overflow-hidden">
          <Rocket className="absolute top-8 right-8 w-32 h-32 text-white/10 -rotate-12" strokeWidth={1.5} />
          <ul className="space-y-8 relative z-10 mt-14">
            {specialistItems.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4 text-white">
                <div className="w-5 h-5 shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <span className="font-semibold text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
