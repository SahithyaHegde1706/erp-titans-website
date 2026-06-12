"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const headingMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12, ease: "easeOut" as const } }
};
const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const } }
};

export default function TermsOfServicePage() {
  return (
    <motion.div initial="hidden" animate="visible" viewport={{ once: true }} className="min-h-screen bg-[#f8fafc] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[850px] mx-auto">

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
                <FileText className="w-8 h-8 text-[#0f4c81]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0f4c81] tracking-tight mb-1">
                  Terms of Service
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
                  1. Agreement to Terms
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  By accessing or using the ERP Titans website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  2. Services Offered
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  ERP Titans provides specialized ERP recovery, optimization, and consultation services. The ERP Health Audit and initial consultations are provided as a means of diagnosing system issues and creating recovery roadmaps.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  3. Intellectual Property
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  The content, features, and functionality of this website, including but not limited to all information, software, text, displays, images, video, and audio, are owned by ERP Titans and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  4. User Conduct
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  You agree not to use the website or services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website or services in any way that could damage the website, services, or general business of ERP Titans.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  5. Disclaimer of Warranties
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  Your use of our services and any content obtained through our website is at your own risk. Our services and content are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  In no event will ERP Titans, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our website or services.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  7. Governing Law
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  These terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  8. Changes to Terms
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8]">
                  We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of the website or services after such changes constitutes your acceptance of the new terms.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-xl md:text-[22px] font-bold text-[#0f4c81] mb-4">
                  9. Contact Information
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.8] mb-4">
                  For any questions about these terms, please contact us at:
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
