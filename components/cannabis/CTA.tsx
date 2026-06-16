import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function CTA() {
  return (
    <section className="w-full bg-[#0b468f] py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Stay Compliant. Scale Fast.
      </h2>
      <p className="text-[17px] text-blue-100 max-w-[600px] mb-12">
        Schedule your cannabis ERP health audit today. Protect your license and optimize your production.
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <Link href="/contact" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white text-[#0b468f] font-semibold px-8 py-4 rounded-full text-[17px] hover:bg-slate-50 transition-colors shadow-lg">
            Book Your Audit Now
          </button>
        </Link>
        <Link href="/services" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto text-white font-bold text-[17px] hover:underline transition-all flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
