"use client";

import { useState } from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { ContactForm } from "@/components/contact/ContactForm";
import { AuditScheduler } from "@/components/contact/AuditScheduler";

export function ContactClient() {
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");

  return (
    <div className="bg-[#f5f7fa] min-h-screen pb-24">
      <ContactHero activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-[30%] shrink-0">
            <ContactSidebar activeTab={activeTab} />
          </div>
          <div className="w-full lg:flex-1">
            {activeTab === "message" ? <ContactForm /> : <AuditScheduler />}
          </div>
        </div>
      </div>
    </div>
  );
}
