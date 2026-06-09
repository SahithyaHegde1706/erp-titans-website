import { Hero } from "@/components/industries/manufacturing/Hero";
import { Roadblocks } from "@/components/industries/manufacturing/Roadblocks";
import { Solutions } from "@/components/industries/manufacturing/Solutions";
import { FinalCTA } from "@/components/industries/manufacturing/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing ERP Solutions",
  description: "Expert ERP recovery and optimization for manufacturing companies.",
};

export default function ManufacturingPage() {
  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <Hero />
      <Roadblocks />
      <Solutions />
      <FinalCTA />
    </div>
  );
}
