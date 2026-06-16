"use client";

import { Zap, BarChart2, Activity, TrendingUp } from "lucide-react";

export function Challenges() {
  const challenges = [
    {
      icon: Zap,
      title: "Excel Workarounds",
      description: "Your team still relies on spreadsheets despite having an ERP system"
    },
    {
      icon: BarChart2,
      title: "Reporting Gaps",
      description: "Can't get the reports you need to make informed business decisions"
    },
    {
      icon: Activity,
      title: "System Conflicts",
      description: "Your ERP doesn't match your actual business processes"
    },
    {
      icon: TrendingUp,
      title: "Budget Overruns",
      description: "Expensive implementations that didn't deliver expected ROI"
    }
  ];

  return (
    <section className="w-full bg-[#f6f8fb] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-4">Challenges</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue tracking-tight mb-4">
          Does This Sound Familiar?
        </h2>
        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
          Common struggles we help SMEs overcome globally, every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] p-8 text-left border border-[#e5e7eb] shadow-sm transition-all duration-300 ease-out transform will-change-transform hover:-translate-y-2 hover:border-[#0f4c81] hover:shadow-[0_20px_50px_rgba(15,76,129,0.15)] hover:ring-4 hover:ring-[#0f4c81]/10 aspect-square flex flex-col"
            >
              <div className="h-12 w-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#0f4c81]">
                <challenge.icon className="h-6 w-6 text-primary-blue transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-3">{challenge.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
