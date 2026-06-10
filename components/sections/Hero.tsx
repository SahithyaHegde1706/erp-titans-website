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
    <section className="relative mx-auto w-full max-w-300 overflow-hidden px-4 pt-36 pb-12 text-center sm:px-6 lg:px-8 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[4%] top-[10%] h-px w-40 bg-slate-200/70 opacity-30" />
        <div className="absolute left-[11%] top-[16%] h-28 w-px bg-slate-200/70 opacity-30" />
        <div className="absolute right-[8%] top-[11%] h-px w-28 rounded-full bg-slate-200/70 opacity-30" />
        <div className="absolute right-[14%] top-[16%] h-32 w-px bg-slate-200/70 opacity-30" />
        <div className="absolute left-[6%] top-[22%] h-16 w-28 rounded-[28px] border border-slate-200/70 opacity-30" />
        <div className="absolute right-[9%] top-[18%] h-18 w-40 rounded-[30px] border border-slate-200/70 opacity-30" />
        <div className="absolute inset-x-[18%] top-[24%] h-120 rounded-full bg-[radial-gradient(circle_at_center,rgba(226,232,240,0.45),transparent_65%)] opacity-20 blur-3xl" />
      </div>

      <motion.div initial="hidden" animate="visible" variants={heroMotion} className="mx-auto max-w-240">
        <h1 className="mx-auto text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-[58px] lg:text-[76px] xl:text-[84px]">
          Fix Your <span className="text-slate-900">Broken</span> ERP.<br />Scale Your Business.
        </h1>

        <p className="mx-auto mt-4 max-w-225 text-[16px] font-normal tracking-normal text-slate-500 md:text-[18px]">
          Fast, focused ERP recovery diagnostics that restore control, streamline operations, and reduce disruption.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-3 rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Get 14 Days Free Trial
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white text-slate-900">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <Link href="/services" className="inline-flex h-12 items-center bg-white gap-3 rounded-full px-3 text-sm font-medium text-slate-900 border border-slate-300 transition-colors hover:text-slate-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-black text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-white" />
            </span>
            Watch Demo
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
