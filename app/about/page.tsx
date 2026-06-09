import { Hero } from "@/components/about/Hero";
import { Story } from "@/components/about/Story";
import { HowWeAreDifferent } from "@/components/about/HowWeAreDifferent";
import { WhoWeServe } from "@/components/about/WhoWeServe";
import { FinalCTA } from "@/components/about/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission to help SMEs recover from failed ERP implementations.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <Hero />
      <Story />
      <HowWeAreDifferent />
      <WhoWeServe />
      <FinalCTA />
    </div>
  );
}
