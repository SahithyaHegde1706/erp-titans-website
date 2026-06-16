import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-[#0A4A8B] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Branding */}
          <div className="col-span-1 flex flex-col -mt-4 md:-mt-8">
            <div className="mb-3 origin-left">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-[#bfdbfe] text-lg leading-relaxed mb-4 max-w-[420px]">
              Helping global SMEs recover from failed ERP implementations and unlock true business potential through expert optimization and recovery services.
            </p>
            <div className="flex">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <ul className="space-y-5">
              <li><Link href="/" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1">
            <ul className="space-y-5">
              <li><Link href="/industries/manufacturing" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">Manufacturing Solutions</Link></li>
              <li><Link href="/industries/distribution" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">Distribution & Logistics</Link></li>
              <li><Link href="/industries/cannabis" className="text-[15px] text-white hover:text-[#bfdbfe] transition-colors">Cannabis Compliance</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <div className="space-y-8">
              <div>
                <h4 className="text-[11px] font-semibold text-[#bfdbfe] tracking-widest mb-3 uppercase">EMAIL SUPPORT</h4>
                {/* TEMP TEST EMAIL - Replace before production */}
                <a href="mailto:sales@erptitans.com" className="text-[15px] text-white hover:underline">sales@erptitans.com</a>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold text-[#bfdbfe] tracking-widest mb-3 uppercase">LOCATION</h4>
                <p className="text-[15px] text-white">Calgary, Canada (Serving Globally)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#bfdbfe]">
          <p>© 2026 ERP Titans. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
