import { Heart, Target, Award, Globe } from "lucide-react";

export function Story() {
  const values = [
    {
      title: "Trust Over Cost",
      desc: "Relationships built on transparency, not just price.",
      icon: Heart
    },
    {
      title: "Specialization",
      desc: "Deep focus on recovery, not being everything to everyone.",
      icon: Target
    },
    {
      title: "Results First",
      desc: "We measure success by real business outcomes.",
      icon: Award
    },
    {
      title: "Global Reach",
      desc: "Calgary-based expertise with the infrastructure to serve you anywhere.",
      icon: Globe
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Story */}
        <div className="bg-white rounded-[32px] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50">
          <h2 className="text-3xl font-bold text-[#0f4c81] mb-8">Our Story</h2>
          <div className="space-y-8 text-[#64748b] text-[17px] leading-relaxed">
            <p>
              ERP Titans was founded with a clear mission: to help SMEs recover from failed ERP implementations and unlock the true value of their systems.
            </p>
            <p>
              We've seen too many companies burnt by generic ERP implementers who promised the world but delivered systems that didn't match their business needs.
            </p>
            <p>
              We decided to do things differently. We focus exclusively on ERP recovery—fixing broken implementations and helping companies scale.
            </p>
          </div>
        </div>

        {/* Right Column: Core Values */}
        <div className="flex flex-col justify-center lg:pl-8">
          <h2 className="text-3xl font-bold text-[#0f4c81] mb-12 text-center sm:text-left">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="group relative bg-white rounded-[24px] p-8 border border-[#0f4c81]/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full flex flex-col text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#0f4c81]/25 hover:shadow-[0_0_30px_rgba(15,76,129,0.08),0_20px_50px_rgba(15,76,129,0.12)] overflow-hidden"
              >
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0b468f] to-[#4ea2f0]" />
                
                {/* Icon Container */}
                <div className="w-[72px] h-[72px] bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-8 h-8 text-[#0f4c81]" />
                </div>
                
                <h3 className="text-[18px] font-bold text-[#0f4c81] mb-3">
                  {value.title}
                </h3>
                
                <p className="text-[15px] text-[#64748b] leading-[1.6]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
