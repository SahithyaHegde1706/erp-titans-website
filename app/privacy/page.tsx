"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { motion } from "framer-motion";

const badgeMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};
const headingMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12, ease: "easeOut" as const } }
};
const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const } }
};

export default function PrivacyPolicyPage() {
  return (
    <motion.div initial="hidden" animate="visible" viewport={{ once: true }} className="min-h-screen bg-[#f8fafc] pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[850px] mx-auto">
        {/* Back Link */}
        <motion.div variants={badgeMotion}>
          <Link
            href="/"
            className="inline-flex items-center text-[13px] font-semibold text-[#0f4c81] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Main Card */}
        <div className="relative">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-[32px] shadow-[0_25px_80px_rgba(15,76,129,0.08)] border border-slate-200/60 p-8 md:p-14 hover:-translate-y-[2px] transition-transform duration-300 z-10"
          >

            {/* Card Header */}
            <motion.div variants={headingMotion} className="flex items-center space-x-6 mb-12">
              <div className="w-[60px] h-[60px] rounded-2xl bg-[#e2f0fc] flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(15,76,129,0.2)]">
                <Shield className="w-8 h-8 text-[#0f4c81]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0f4c81] tracking-tight mb-1">
                  Privacy Policy
                </h1>
                <p className="text-[13px] text-slate-500 font-medium">
                  Last Updated: April 2026
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={cardMotion} className="space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  1. Introduction
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  At ERP Titans, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. We are committed to protecting your personal data and your right to privacy in accordance with Canadian and international data protection standards.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8] mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Fill out our contact or inquiry forms",
                    "Schedule an ERP Health Audit or consultation",
                    "Communicate with us via email or phone",
                    "Request resources or whitepapers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[15px] text-[#475569] leading-[1.8]">
                      <span className="mr-3 text-slate-400 mt-[7px] text-[10px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  This information may include your name, email address, phone number, company name, industry, and details regarding your current ERP system challenges.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8] mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Provide, operate, and maintain our services",
                    "Process your inquiries and schedule consultations",
                    "Send you meeting invites and follow-up communications",
                    "Analyze and improve our website and service offerings",
                    "Comply with legal obligations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[15px] text-[#475569] leading-[1.8]">
                      <span className="mr-3 text-slate-400 mt-[7px] text-[10px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  4. Data Security
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  5. Third-Party Services
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except for trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  6. Contact Us
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8] mb-4">
                  If you have questions or comments about this policy, you may email us at:
                </p>
                {/* TEMP TEST EMAIL - Replace before production */}
                <a href="mailto:sales@erptitans.com" className="text-[15px] font-semibold text-[#0f4c81] hover:underline">
                  sales@erptitans.com
                </a>
              </section>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
