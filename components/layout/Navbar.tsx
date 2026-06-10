"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsMobileMenuOpen(false);
      setIsMobileIndustriesOpen(false);
    });
    return () => cancelAnimationFrame(handle);
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10 text-sm font-medium text-slate-600">
          {/* Home */}
          <Link
            href="/"
            className={`relative pb-1 transition-colors hover:text-slate-900 ${isActive("/") ? "text-slate-900" : ""}`}
          >
            Home
            <span
              className={`absolute left-0 right-0 -bottom-0.5 h-0.75 rounded-full bg-purple-600 transition-all duration-200 ${
                isActive("/") ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Services */}
          <Link
            href="/services"
            className={`relative pb-1 transition-colors hover:text-slate-900 ${isActive("/services") ? "text-slate-900" : ""}`}
          >
            Services
            <span
              className={`absolute left-0 right-0 -bottom-0.5 h-0.75 rounded-full bg-purple-600 transition-all duration-200 ${
                isActive("/services") ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Industries (Dropdown) */}
          <div
            className="relative py-4"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`relative pb-1 flex items-center gap-1 transition-colors hover:text-slate-900 cursor-pointer ${
                pathname?.startsWith("/industries") ? "text-slate-900" : "text-slate-600"
              }`}
            >
              <span>Industries</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              <span
                className={`absolute left-0 right-0 -bottom-0.5 h-0.75 rounded-full bg-purple-600 transition-all duration-200 ${
                  pathname?.startsWith("/industries") ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 z-50 min-w-[200px] rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md"
                >
                  <Link
                    href="/industries/manufacturing"
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname === "/industries/manufacturing"
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    Manufacturing
                  </Link>
                  <Link
                    href="/industries/distribution"
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname === "/industries/distribution"
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    Distribution
                  </Link>
                  <Link
                    href="/industries/cannabis"
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname === "/industries/cannabis"
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    Cannabis
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About */}
          <Link
            href="/about"
            className={`relative pb-1 transition-colors hover:text-slate-900 ${isActive("/about") ? "text-slate-900" : ""}`}
          >
            About
            <span
              className={`absolute left-0 right-0 -bottom-0.5 h-0.75 rounded-full bg-purple-600 transition-all duration-200 ${
                isActive("/about") ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`relative pb-1 transition-colors hover:text-slate-900 ${isActive("/contact") ? "text-slate-900" : ""}`}
          >
            Contact
            <span
              className={`absolute left-0 right-0 -bottom-0.5 h-0.75 rounded-full bg-purple-600 transition-all duration-200 ${
                isActive("/contact") ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Book free audit
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

      {/* Mobile Menu */}
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
              {/* Home */}
              <Link
                href="/"
                className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  isActive("/") ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>Home</span>
                {isActive("/") ? <span className="h-2 w-2 rounded-full bg-purple-600" /> : null}
              </Link>

              {/* Services */}
              <Link
                href="/services"
                className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  isActive("/services") ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>Services</span>
                {isActive("/services") ? <span className="h-2 w-2 rounded-full bg-purple-600" /> : null}
              </Link>

              {/* Industries Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className={`w-full flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                    pathname?.startsWith("/industries") ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 pr-2 space-y-1 mt-1"
                    >
                      <Link
                        href="/industries/manufacturing"
                        className={`flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === "/industries/manufacturing" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span>Manufacturing</span>
                        {pathname === "/industries/manufacturing" ? <span className="h-1.5 w-1.5 rounded-full bg-purple-600" /> : null}
                      </Link>
                      <Link
                        href="/industries/distribution"
                        className={`flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === "/industries/distribution" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span>Distribution</span>
                        {pathname === "/industries/distribution" ? <span className="h-1.5 w-1.5 rounded-full bg-purple-600" /> : null}
                      </Link>
                      <Link
                        href="/industries/cannabis"
                        className={`flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === "/industries/cannabis" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span>Cannabis</span>
                        {pathname === "/industries/cannabis" ? <span className="h-1.5 w-1.5 rounded-full bg-purple-600" /> : null}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <Link
                href="/about"
                className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  isActive("/about") ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>About</span>
                {isActive("/about") ? <span className="h-2 w-2 rounded-full bg-purple-600" /> : null}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  isActive("/contact") ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>Contact</span>
                {isActive("/contact") ? <span className="h-2 w-2 rounded-full bg-purple-600" /> : null}
              </Link>

              <div className="mt-2 px-1 pb-1">
                <Link 
                  href="/contact" 
                  className="block w-full rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Book free audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
