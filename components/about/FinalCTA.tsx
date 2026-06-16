import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="w-full bg-[#0b468f] py-24 px-4 sm:px-6 lg:px-8 mt-16 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready for a Specialist?
      </h2>
      <p className="text-[17px] text-blue-100 max-w-[600px] mb-12">
        Let's discuss your ERP challenges and create a recovery plan that works for your business.
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <Link href="/contact">
          <button className="bg-white text-[#0b468f] font-semibold px-8 py-4 rounded-full text-[17px] hover:bg-slate-50 transition-colors shadow-lg">
            Start Your Recovery
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-white font-bold text-[17px] hover:underline transition-all flex items-center space-x-2">
            <span>Book a Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
