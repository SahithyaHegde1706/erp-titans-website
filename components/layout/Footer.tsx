import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-900 py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Branding */}
          <div className="col-span-1 flex flex-col -mt-4 md:-mt-8">
            <div className="mb-3 origin-left">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-4 max-w-[420px]">
              Helping global SMEs recover from failed ERP implementations and unlock true business potential through expert optimization and recovery services.
            </p>
            <div className="flex">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-200/60 text-slate-700 hover:bg-slate-300/80 flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold text-[12px] tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold text-[12px] tracking-wider uppercase mb-4">Solutions</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/solutions/property-management" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  Manufacturing Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/lease-automation" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  Distribution & Logistics
                </Link>
              </li>
              <li>
                <Link href="/solutions/revenue-analytics" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                 Cannabis Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="col-span-1">
            <div className="space-y-6">
              <div>
                <h4 className="text-slate-900 font-bold text-[12px] tracking-wider uppercase mb-3">Email Support</h4>
                <a href="mailto:hello@erpestate.com" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                  sales@erptitans.com
                </a>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-[12px] tracking-wider uppercase mb-3">Location</h4>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  Calgary, Canada (Serving Globally)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center text-[13px]">
          <p className="text-slate-400">© 2026 ERPESTATE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

