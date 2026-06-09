import { Hero } from "@/components/sections/Hero";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { Challenges } from "@/components/sections/Challenges";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-slate-50/50 pb-24 pt-8">
        <DashboardShowcase />
      </div>
      <Challenges />
      <div className="bg-white">
        <WhyUs />
      </div>
      <FinalCTA />
    </>
  );
}
