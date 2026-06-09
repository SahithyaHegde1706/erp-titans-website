import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export function ContactSidebar({ activeTab = "schedule" }: { activeTab?: "message" | "schedule" }) {
  return (
    <div className="space-y-10 mt-6 lg:mt-0">
      <div className="space-y-8 pl-1">
        <div className="flex items-start space-x-5">
          <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center shrink-0 border border-blue-100/50">
            <Mail className="w-5 h-5 text-[#0f4c81]" />
          </div>
          <div className="pt-0.5">
            <h3 className="text-[15px] font-bold text-[#0f4c81] mb-1">Email Us</h3>
            {/* TEMP TEST EMAIL - Replace before production */}
            <p className="text-[14px] text-[#64748b]">sales@erptitans.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center shrink-0 border border-blue-100/50">
            <MapPin className="w-5 h-5 text-[#0f4c81]" />
          </div>
          <div className="pt-0.5">
            <h3 className="text-[15px] font-bold text-[#0f4c81] mb-1">Our Location</h3>
            <p className="text-[14px] text-[#64748b]">Calgary, Canada (Serving Globally)</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="flex items-center space-x-3 mb-3">
          <Clock className="w-5 h-5 text-[#0f4c81]" />
          <h3 className="text-[15px] font-bold text-[#0f4c81]">Mountain Time (Calgary)</h3>
        </div>
        <p className="text-[14px] text-[#64748b] leading-relaxed">
          {activeTab === "message" 
            ? "We typically respond within 24 hours. For urgent recovery, please mention 'URGENT' in your message."
            : "All appointments are scheduled in Calgary Time (Mountain Time). Please adjust if you are in a different zone."}
        </p>
      </div>

      <div className="pt-2 pl-1">
        <h3 className="text-[15px] font-bold text-[#0f4c81] mb-5">Why partner with us?</h3>
        <ul className="space-y-4">
          {[
            "Free initial consultation",
            "Direct access to ERP specialists",
            "Transparent recovery roadmap",
            "No-obligation ERP health audit"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-[#64748b] text-[14px] leading-snug">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#16a34a] shrink-0" />
              <span className="pt-[1px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
