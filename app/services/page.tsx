import { Hero } from "@/components/services/Hero";
import { ServicePillars } from "@/components/services/ServicePillars";
import { ValueProps } from "@/components/services/ValueProps";
import { RescueProgram } from "@/components/services/RescueProgram";
import { FinalCTA } from "@/components/services/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive ERP Lifecycle Support for SMEs globally.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <Hero />
      <ServicePillars />
      <ValueProps />
      <RescueProgram />
      <FinalCTA />
    </div>
  );
}
