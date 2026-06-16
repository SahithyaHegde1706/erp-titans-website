import { Hero } from "@/components/distribution/Hero";
import { Challenges } from "@/components/distribution/Challenges";
import { Solutions } from "@/components/distribution/Solutions";
import { CTA } from "@/components/distribution/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribution ERP Solutions",
  description: "Expert ERP recovery and optimization for distribution and logistics companies.",
};

export default function DistributionPage() {
  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <Hero />
      <Challenges />
      <Solutions />
      <CTA />
    </div>
  );
}
