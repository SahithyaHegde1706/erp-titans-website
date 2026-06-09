import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
      <div className="bg-[#0b468f] rounded-[32px] py-20 px-8 flex flex-col items-center text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Optimize Your<br className="hidden md:block" /> Operations?
        </h2>
        
        <p className="text-xl text-blue-100 max-w-[700px] mb-12">
          Whether you need a new implementation or a rescue mission, our team is ready to deliver.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link href="/contact">
            <button className="bg-white text-[#0b468f] font-semibold px-8 py-4 rounded-full text-lg hover:bg-slate-50 transition-colors shadow-lg">
              Book a Consultation
            </button>
          </Link>
          <Link href="/contact" className="text-white font-bold text-lg hover:underline transition-all">
            Schedule ERP Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
