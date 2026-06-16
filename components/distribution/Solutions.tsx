import { CheckCircle2, Truck, Zap } from "lucide-react";

export function Solutions() {
  const cards = [
    {
      title: "Multi-Warehouse Management",
      items: ["Real-time Sync", "Auto Reorder Points", "Internal Transfers"]
    },
    {
      title: "Fulfillment Optimization",
      items: ["Smart Routing", "Split Shipments", "Status Tracking"]
    },
    {
      title: "Logistics Integration",
      items: ["Carrier API Sync", "Rate Shopping", "Returns Management"]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Text & Cards Stack */}
        <div>
          <span className="text-[#0f4c81] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">SOLUTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-6 leading-tight max-w-[480px]">
            Optimized Supply Chain<br />Solutions
          </h2>
          <p className="text-[17px] text-[#64748b] leading-relaxed mb-10 max-w-[480px]">
            We integrate your ERP with carrier systems, customer portals, and warehouse management systems for a seamless operation.
          </p>

          <div className="space-y-4">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-[#fffdf7] rounded-[24px] p-6 sm:p-8 border border-orange-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                <h3 className="text-[17px] font-bold text-[#0f4c81] mb-6">{card.title}</h3>
                <ul className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center space-x-2 text-[#64748b] text-[13px]">
                      <CheckCircle2 className="w-[18px] h-[18px] text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Feature Card */}
        <div className="lg:pt-32">
          <div className="bg-[#0b468f] rounded-[32px] p-10 sm:p-12 shadow-[0_20px_60px_rgb(11,70,143,0.3)]">
            <h3 className="text-3xl font-bold text-white mb-12">Why Distributors Choose Us</h3>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-[19px] font-bold text-white mb-2">Operational Focus</h4>
                  <p className="text-[15px] text-blue-100/80 leading-relaxed">
                    We optimize for what matters most: fast fulfillment and accurate inventory.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-[19px] font-bold text-white mb-2">Seamless Integration</h4>
                  <p className="text-[15px] text-blue-100/80 leading-relaxed">
                    Direct carrier system and customer portal integration for real-time updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
