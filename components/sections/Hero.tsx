"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

const heroMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-300 overflow-hidden px-4 pt-36 pb-16 text-center sm:px-6 lg:px-8 sm:pt-45">

      <motion.div initial="hidden" animate="visible" variants={heroMotion} className="mx-auto max-w-240">
        <h1 className="mx-auto text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-[58px] lg:text-[76px] xl:text-[84px]">
          Fix Your <span className="relative inline-block text-slate-400">Broken<span className="absolute left-0 right-0 top-[48%] h-[3.5px] -rotate-3 bg-rose-500 rounded-full shadow-sm" /></span> ERP<br />Scale Your Business.
        </h1>

        <p className="mx-auto mt-6 max-w-225 text-[16px] font-normal tracking-normal text-slate-500 md:text-[18px]">
          Fast, focused ERP recovery diagnostics that restore control, streamline operations, and reduce disruption.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-3 rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Get ERP Health Audit
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white text-slate-900">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <Link href="/services" className="inline-flex h-12 items-center bg-white gap-3 rounded-full px-3 text-sm font-medium text-slate-900 border border-slate-300 transition-colors hover:text-slate-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-black text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-white" />
            </span>
            Learn our process
          </Link>
        </div>
      </motion.div>
    </section>
  );
}