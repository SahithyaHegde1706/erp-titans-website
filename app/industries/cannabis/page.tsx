import { Hero } from "@/components/cannabis/Hero";
import { Challenges } from "@/components/cannabis/Challenges";
import { Foundation } from "@/components/cannabis/Foundation";
import { CTA } from "@/components/cannabis/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cannabis ERP Solutions",
  description: "Specialized ERP solutions and recovery services for the Cannabis industry.",
};

export default function CannabisPage() {
  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <Hero />
      <Challenges />
      <Foundation />
      <CTA />
    </div>
  );
}
