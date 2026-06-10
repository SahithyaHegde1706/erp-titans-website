"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRY_LINKS = [
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/distribution", label: "Distribution" },
  { href: "/industries/cannabis", label: "Cannabis" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleDesktopMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsIndustriesOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 150);
  };

  // Small reusable NavLink with sliding Framer Motion indicator
  function NavLink({ href, path, children }: { href: string; path: string; children: React.ReactNode }) {
    const isActive = path === "/" ? pathname === "/" : pathname?.startsWith(path);
    return (
      <Link
        href={href}
        className={`relative px-1 py-1 ${isActive ? "text-primary-blue font-semibold" : "text-slate-600"} transform transition duration-200 hover:-translate-y-1`}
      >
        <span className="relative inline-block">
          {children}
          {isActive && (
            <motion.span
              layoutId="nav-indicator"
              initial={false}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#0f4c81] rounded-full"
            />
          )}
        </span>
      </Link>
    );
  }

  const getLinkClass = (path: string) => {
    const isActive = path === "/" ? pathname === "/" : pathname?.startsWith(path);
    return isActive
      ? "text-primary-blue font-semibold bg-[#e2f0fc]/60"
      : "text-slate-600 hover:text-primary-blue hover:bg-[#e2f0fc]/20 transition-colors";
  };

  const closeMenus = () => {
    setIsIndustriesOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current?.contains(target)) return;
      if (mobileMenuRef.current?.contains(target)) return;
      setIsIndustriesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsIndustriesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-[1200px] z-[99999] overflow-visible transition-all duration-300 rounded-full border backdrop-blur-md ${
        isScrolled 
          ? "bg-white/75 border-slate-200/80 shadow-md" 
          : "bg-white/75 border-slate-200/30"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-16" : "h-16"}`}>
          <div className={`flex items-center transition-transform duration-300 origin-left ${isScrolled ? "scale-[0.8]" : "scale-[0.85]"}`}>
            <Logo />
          </div>

          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-8 lg:space-x-12 h-full">
            <NavLink href="/" path="/">Home</NavLink>
            <NavLink href="/services" path="/services">Services</NavLink>
            
            <div 
              ref={dropdownRef}
              className="relative flex items-center h-full"
              onMouseEnter={handleDesktopMouseEnter}
              onMouseLeave={handleDesktopMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center h-full cursor-default ${pathname.startsWith("/industries") ? "text-primary-blue font-semibold" : "text-slate-600"} hover:text-primary-blue font-medium transition transform duration-200 bg-transparent border-none p-0 outline-none`}
                onClick={(e) => e.preventDefault()}
                aria-expanded={isIndustriesOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                <span className="relative inline-flex items-center">
                  <span className="mr-1">Industries</span>
                </span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 mt-2 w-[260px] bg-white rounded-[20px] shadow-xl border border-slate-200/80 p-3 z-[999999] flex flex-col"
                  >
                    {INDUSTRY_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 text-[#0f4c81] font-semibold hover:bg-[#f1f5f9] rounded-lg transition-colors"
                        onClick={() => setIsIndustriesOpen(false)}
                      >
                        {link.label === 'Manufacturing' ? 'Manufacturing' : link.label === 'Distribution' ? 'Distribution' : 'Cannabis'}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink href="/about" path="/about">About</NavLink>
            <NavLink href="/contact" path="/contact">Contact</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button className="rounded-full shadow-[0_4px_14px_rgba(15,76,129,0.25)] hover:shadow-[0_6px_20px_rgba(15,76,129,0.35)] transform transition duration-200 hover:-translate-y-0.5 bg-[#0f4c81] hover:bg-[#0c3d69] text-white px-6 h-10 text-sm font-semibold border-none">
                Book Free Audit
              </Button>
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-600 hover:text-primary-blue hover:bg-slate-50 border border-slate-200/40 shadow-sm transition-all duration-200"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            ref={mobileMenuRef} 
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl rounded-2xl z-[99999] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1.5">
              <Link href="/" className={`block px-4 py-2.5 rounded-xl ${getLinkClass("/")}`} onClick={closeMenus}>
                Home
              </Link>
              <Link href="/services" className={`block px-4 py-2.5 rounded-xl ${getLinkClass("/services")}`} onClick={closeMenus}>
                Services
              </Link>
              <button
                type="button"
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl ${pathname?.startsWith("/industries") ? "text-primary-blue font-semibold bg-[#e2f0fc]/60" : "text-slate-600"} hover:text-primary-blue hover:bg-[#e2f0fc]/20 font-medium transition-colors`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsIndustriesOpen((prev) => !prev);
                }}
                aria-expanded={isIndustriesOpen}
              >
                <span>Industries</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              {isIndustriesOpen && (
                <div className="ml-4 space-y-1 border-l-2 border-slate-100 pl-2">
                  {INDUSTRY_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-[#0f4c81] font-semibold hover:bg-[#f1f5f9] rounded-lg"
                      onClick={closeMenus}
                    >
                      {link.label === 'Manufacturing' ? 'Manufacturing' : link.label === 'Distribution' ? 'Distribution' : 'Cannabis'}
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/about" className={`block px-4 py-2.5 rounded-xl ${getLinkClass("/about")}`} onClick={closeMenus}>
                About
              </Link>
              <Link href="/contact" className={`block px-4 py-2.5 rounded-xl ${getLinkClass("/contact")}`} onClick={closeMenus}>
                Contact
              </Link>
              <Link href="/contact" onClick={closeMenus} className="block mt-2 sm:hidden">
                <Button className="w-full bg-[#0f4c81] hover:bg-[#0c3d69] text-white rounded-full shadow-[0_4px_12px_rgba(15,76,129,0.2)]">
                  Book Free Audit
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
