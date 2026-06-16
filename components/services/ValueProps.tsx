import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";

export function ValueProps() {
  const cards = [
    {
      title: "Proven Expertise",
      desc: "Years of experience across industries and ERP platforms.",
      icon: CheckCircle
    },
    {
      title: "Measurable Results",
      desc: "Tangible business outcomes and ROI-focused delivery.",
      icon: Sparkles
    },
    {
      title: "Seamless Integration",
      desc: "Services designed to work together harmoniously.",
      icon: ArrowRight
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {cards.map((card, i) => (
          <div 
            key={i}
            className="group flex flex-col items-center justify-center text-center rounded-[24px] border border-[#0f4c81]/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-[260px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(15,76,129,0.15)] hover:border-[#0f4c81]/50 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]"
          >
            <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-blue-100">
              <card.icon className="w-7 h-7 text-[#0f4c81]" />
            </div>
            <h3 className="text-[20px] font-bold text-[#0f4c81] mb-3">
              {card.title}
            </h3>
            <p className="text-[#475569] text-[16px] leading-[1.6] max-w-[280px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
