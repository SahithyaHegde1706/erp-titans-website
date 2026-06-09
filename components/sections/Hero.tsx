"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const badgeMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const headingMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12, ease: "easeOut" as const } },
};

const subtitleMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" as const } },
};

const actionsMotion = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center pt-32 sm:pt-40 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto text-center"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-center mb-8"
        variants={badgeMotion}
      >
        <div className="bg-[#e2f0fc] text-[#0f4c81] px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide">
          ERP Recovery Specialists
        </div>
      </motion.div>

      <motion.h1
        className="text-[48px] md:text-[64px] lg:text-[84px] xl:text-[88px] leading-tight font-extrabold text-[#0f4c81] tracking-tight mb-8"
        variants={headingMotion}
      >
        Fix Your{" "}
        <span className="relative inline-block text-[#ef4444]">
          <span className="absolute top-[50%] left-[-2%] right-[-2%] h-[4px] bg-[#ef4444] transform -translate-y-1/2 z-10"></span>
          Broken
        </span>{" "}
        ERP.<br />Scale Your Business.
      </motion.h1>

      <motion.p
        className="text-[18px] md:text-[20px] text-[#475569] mb-12 max-w-[900px] mx-auto leading-relaxed"
        variants={subtitleMotion}
      >
        Based in Calgary and serving clients globally, we help SMEs recover from failed ERP<br className="hidden md:block" />
        implementations and unlock true potential through expert diagnostics and<br className="hidden md:block" />
        precision fixing.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        variants={actionsMotion}
      >
        <Link href="/contact">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0f4c81] hover:bg-[#0f4c81]/90 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-md"
          >
            Get ERP Health Audit
          </Button>
        </Link>

        <Link href="/services">
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto group border-2 border-[#e2e8f0] text-[#0f4c81] hover:bg-[#f8fafc] rounded-full px-8 h-14 text-lg font-semibold bg-white"
          >
            Learn Our Process
            <ArrowRight className="ml-2 h-5 w-5 text-[#0f4c81] transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
