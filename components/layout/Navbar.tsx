"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/feature", label: "Feature" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 z-99999 w-[92%] max-w-300 -translate-x-1/2 rounded-full border backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "border-slate-200/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)]" : "border-slate-200/50 bg-white/75"
      }`}
    >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition-colors hover:text-slate-900 ${isActive(link.href) ? "text-slate-900" : ""}`}
            >
              {link.label}
              <span
                className={`absolute left-0 right-0 -bottom-0.5 h-0.75 rounded-full bg-purple-600 transition-all duration-200 ${
                  isActive(link.href) ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:text-slate-600"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Sign Up
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden absolute top-[calc(100%+12px)] left-0 right-0 z-999999 rounded-[28px] border border-slate-200/70 bg-white/95 p-3 shadow-[0_24px_50px_rgba(15,23,42,0.08)] backdrop-blur-md"
          >
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href) ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.href) ? <span className="h-2 w-2 rounded-full bg-purple-600" /> : null}
                </Link>
              ))}
              <div className="mt-2 flex gap-2 px-1 pb-1">
                <Link href="/contact" className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-900">
                  Log in
                </Link>
                <Link href="/contact" className="flex-1 rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white">
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
