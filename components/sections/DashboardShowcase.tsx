"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  CalendarDays,
  CircleDollarSign,
  FileText,
  Layers3,
  LayoutDashboard,
  LineChart,
  MessageSquareText,
  Search,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";
import { animate, motion, useReducedMotion } from "framer-motion";

type SidebarItem = {
  label: string;
  icon: typeof LayoutDashboard;
};

function Counter({ from, to, duration = 2, suffix = "", decimals = 0 }: { from: number; to: number; duration?: number; suffix?: string; decimals?: number }) {
  const [value, setValue] = useState(from);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: "easeOut" as const,
      onUpdate(v) {
        setValue(Number(v.toFixed(decimals)));
      },
    });

    return () => controls.stop();
  }, [from, to, duration, decimals, shouldReduceMotion]);

  return (
    <span>
      {value.toFixed(decimals)}{suffix}
    </span>
  );
}

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Properties", icon: Building2 },
  { label: "Clients", icon: UserRound },
  { label: "Leases", icon: Layers3 },
  { label: "Payments", icon: CircleDollarSign },
  { label: "Maintenance", icon: Wrench },
  { label: "Reports", icon: FileText },
  { label: "Analytics", icon: LineChart },
] as const;

const quickStats = [
  { title: "Active Units", value: 424, suffix: "", decimals: 0, tone: "text-slate-900", accent: "bg-purple-600/10 text-purple-600" },
  { title: "Leases Renewing", value: 324, suffix: "", decimals: 0, tone: "text-slate-900", accent: "bg-slate-100 text-slate-700" },
  { title: "Monthly Revenue", value: 456.54, suffix: "k", decimals: 2, tone: "text-slate-900", accent: "bg-emerald-50 text-emerald-600" },
  { title: "Occupancy Rate", value: 78.8, suffix: "%", decimals: 1, tone: "text-slate-900", accent: "bg-amber-50 text-amber-600" },
] as const;

const activityRows = [
  { label: "New lease signed for property #3245", meta: "2 min ago" },
  { label: "Maintenance request assigned to field team", meta: "19 min ago" },
  { label: "Client payment received and reconciled", meta: "1 hour ago" },
];

export function DashboardShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
  };

  return (
    <section className="relative mx-auto max-w-350 overflow-hidden px-4 pb-12 sm:px-6 lg:px-8">
      <div className="absolute left-[8%] top-[12%] hidden h-px w-44 bg-slate-200/60 opacity-30 md:block" />
      <div className="absolute right-[10%] top-[16%] hidden h-24 w-px bg-slate-200/60 opacity-30 md:block" />

      <div className="mx-auto mt-6 max-w-287.5 rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/90 px-4 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1" />
          <div className="hidden w-full max-w-90 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-400 sm:flex">
            <Search className="h-3.5 w-3.5" />
            Search for a property, lease, or client
          </div>
          <div className="flex-1" />
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-8 w-8 rounded-full bg-slate-200/80" />
            <div className="text-right">
              <p className="text-xs font-medium text-slate-900">Johan</p>
              <p className="text-[10px] text-slate-500">Property admin</p>
            </div>
          </div>
        </div>

        <div className="grid min-h-130 grid-cols-1 lg:grid-cols-[240px_1fr]">
          <aside className="hidden border-r border-slate-200 bg-white px-4 py-5 lg:flex lg:flex-col">
            <div className="mb-6 flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Property Suite</p>
                <p className="text-xs text-slate-500">Operational control</p>
              </div>
            </div>

            <nav className="space-y-1.5">
              {sidebarItems.map((item) => {
                const isActive = item.label === "Dashboard";

                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "bg-purple-50 text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <item.icon className={`h-4 w-4 ${isActive ? "text-purple-600" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                    {isActive ? <span className="ml-auto h-2.5 w-2.5 rounded-full bg-purple-600" /> : null}
                  </div>
                );
              })}
            </nav>

            <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <ShieldCheck className="h-4 w-4 text-purple-600" />
                Portfolio health
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "86%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" as const }}
                  className="h-2 rounded-full bg-purple-600"
                />
              </div>
              <p className="mt-3 text-sm text-slate-500">Occupancy, payments, and maintenance are all in sync.</p>
            </div>
          </aside>

          <div className="bg-white px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm text-slate-500">Good morning chirag</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-[32px]">Dashboard Overview</h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  This month
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800">
                  Export Report
                </button>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {quickStats.map((stat) => (
                <motion.div
                  key={stat.title}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-full px-3 py-1 text-xs font-medium ${stat.accent}`}>{stat.title}</div>
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Metric</p>
                  <p className={`mt-2 text-3xl font-semibold tracking-[-0.04em] ${stat.tone}`}>
                    <Counter from={0} to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-500">VS last period</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-6 grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Sales over view</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">Property flow and revenue distribution</h3>
                  </div>
                  <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">This Year</div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { month: "August", value: 9 },
                    { month: "September", value: 7 },
                    { month: "October", value: 8 },
                  ].map((series) => (
                    <div key={series.month} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">{series.month}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {Array.from({ length: 20 }).map((_, index) => (
                          <span
                            key={`${series.month}-${index}`}
                            className={`h-2.5 w-2.5 rounded-full ${index % 3 === 0 ? "bg-purple-400" : index % 4 === 0 ? "bg-slate-300" : "bg-purple-200"}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Property status</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">Occupancy and collection mix</h3>
                  </div>
                  <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">This Month</div>
                </div>

                <div className="mt-5 rounded-3xl bg-slate-50 p-5">
                  <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-10 border-purple-600/70 border-t-amber-400 border-r-slate-300 border-b-purple-200 border-l-slate-100 bg-white text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Total</p>
                      <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-900">
                        <Counter from={0} to={424} />
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { label: "Leased", value: 258, color: "bg-purple-600" },
                      { label: "Under contract", value: 89, color: "bg-amber-400" },
                      { label: "Vacant", value: 42, color: "bg-slate-400" },
                      { label: "Repair", value: 34, color: "bg-sky-500" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3 text-sm">
                        <span className={`h-2.5 w-2.5 rounded-full ${row.color}`} />
                        <span className="w-32 text-slate-500">{row.label}</span>
                        <div className="h-2 flex-1 rounded-full bg-slate-200">
                          <div className={`h-2 rounded-full ${row.color}`} style={{ width: `${Math.min(100, row.value / 3)}%` }} />
                        </div>
                        <span className="w-10 text-right text-slate-900">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr_0.9fr]">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">Your task</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">Today</span>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">John chirag</p>
                    <p className="text-xs text-slate-500">Property #1234</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">Recent activity</h3>
                  <MessageSquareText className="h-4 w-4 text-slate-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {activityRows.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-purple-600" />
                        <p className="text-sm text-slate-600">{item.label}</p>
                      </div>
                      <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-slate-400">{item.meta}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">Upcoming events</h3>
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                </div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">August 2025</p>
                  <p className="mt-2 text-sm text-slate-600">Walk-throughs, renewals, and payment follow-ups.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
