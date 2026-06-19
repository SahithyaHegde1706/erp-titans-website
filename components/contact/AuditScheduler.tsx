
"use client";

import { useState, useMemo } from "react";
import { Calendar, Clock, User, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AuditScheduler() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonthStart, setCurrentMonthStart] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedFullDate, setSelectedFullDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  
  // Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handlePrevMonth = () => {
    setCurrentMonthStart(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthStart(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const monthName = currentMonthStart.toLocaleString('default', { month: 'long', year: 'numeric' });

  const dates = useMemo(() => {
    const year = currentMonthStart.getFullYear();
    const month = currentMonthStart.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const result = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      const dayOfWeek = d.getDay();
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const isPast = d < today;
        const dayStr = DAY_NAMES[dayOfWeek];
        // Format YYYY-MM-DD reliably avoiding timezone shifts
        const mStr = String(month + 1).padStart(2, '0');
        const dStr = String(i).padStart(2, '0');
        const dateStr = `${year}-${mStr}-${dStr}`;
        
        result.push({
          day: dayStr,
          date: i.toString(),
          fullDate: dateStr,
          isPast
        });
      }
    }
    return result;
  }, [currentMonthStart]);

  const times = [
    "08:00", "08:30", "09:00",
    "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00",
    "12:30"
  ];

  const handleSubmit = async () => {
    // 1. Validate
    const newErrors: Record<string, string> = {};
    if (!selectedFullDate) newErrors.date = "Please select a date.";
    if (!selectedTime) newErrors.time = "Please select a time.";
    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid Email is required.";
    if (!phone.trim()) newErrors.phone = "Phone Number is required.";
    if (!company.trim()) newErrors.company = "Company Name is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // 2. Submit
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          selectedDate: selectedFullDate,
          selectedTime
        })
      });

      const data = await res.json();

      if (!res.ok) {
        // If email fails, show success but with error note as requested
        setSubmitError("Booking saved but email could not be sent.");
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[24px] p-8 sm:p-16 shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-slate-50 overflow-hidden flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </motion.div>
        
        <motion.h3 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[28px] font-bold text-[#0f4c81] mb-3"
        >
          ✓ ERP Health Audit Confirmed
        </motion.h3>
        
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[16px] text-[#475569] max-w-[400px] leading-relaxed"
        >
          Thank you for your request. <br /> A confirmation email has been sent.
        </motion.p>

        {submitError && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-[14px] text-amber-700 font-medium px-4 py-3 bg-amber-50 rounded-xl"
          >
            {submitError}
          </motion.p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-slate-50 overflow-hidden">
      <h2 className="text-[26px] font-bold text-[#0f4c81] mb-8">Book Your ERP Health Audit</h2>
      
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10">
        {/* Date Picker */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-[18px] h-[18px] text-[#0f4c81]" />
              <span className="text-[15px] font-bold text-[#0f4c81]">Select a Date</span>
              {errors.date && <span className="text-red-500 text-[12px] ml-2">{errors.date}</span>}
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePrevMonth}
                type="button"
                className="text-[#0f4c81] hover:bg-blue-50 p-1.5 rounded-full transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[14px] font-[600] text-[#0f4c81] min-w-[120px] text-center transition-all">
                {monthName}
              </span>
              <button 
                onClick={handleNextMonth}
                type="button"
                className="text-[#0f4c81] hover:bg-blue-50 p-1.5 rounded-full transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={monthName}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center sm:justify-items-start"
            >
              {dates.map((d, i) => {
                const isSelected = selectedFullDate === d.fullDate;
                return (
                  <button 
                    key={i}
                    onClick={() => {
                      if (!d.isPast) {
                        setSelectedFullDate(d.fullDate);
                        if (errors.date) setErrors({ ...errors, date: "" });
                      }
                    }}
                    disabled={d.isPast}
                    type="button"
                    className={`flex flex-col items-center justify-center w-[72px] h-[72px] rounded-[16px] transition-all duration-300 ease-in-out ${
                      d.isPast 
                        ? "opacity-40 cursor-not-allowed bg-slate-50 border border-slate-100" 
                        : isSelected 
                          ? "bg-[#0f4c81] border-[#0f4c81] shadow-[0_0_20px_rgba(15,76,129,0.35)] -translate-y-1" 
                          : "bg-white border border-blue-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,70,140,0.15)]"
                    }`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                      isSelected ? "text-blue-200" : d.isPast ? "text-slate-400" : "text-[#64748b]"
                    }`}>
                      {d.day}
                    </span>
                    <span className={`text-[19px] font-bold ${
                      isSelected ? "text-white" : d.isPast ? "text-slate-400" : "text-[#0f4c81]"
                    }`}>
                      {d.date}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Time Picker */}
        <div className="lg:w-[320px] shrink-0">
          <div className="flex items-center space-x-2 mb-6">
            <Clock className="w-[18px] h-[18px] text-[#0f4c81]" />
            <span className="text-[15px] font-bold text-[#0f4c81]">Select a Time (MT)</span>
            {errors.time && <span className="text-red-500 text-[12px] ml-2">{errors.time}</span>}
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            {times.map((t, i) => {
              const isSelected = selectedTime === t;
              return (
                <button 
                  key={i}
                  type="button"
                  onClick={() => {
                    setSelectedTime(t);
                    if (errors.time) setErrors({ ...errors, time: "" });
                  }}
                  className={`py-2.5 rounded-full text-[14px] font-bold transition-colors ${
                    isSelected
                      ? "bg-[#0f4c81] text-white border border-[#0f4c81] shadow-[0_4px_15px_rgba(15,76,129,0.2)]"
                      : "bg-white text-[#0f4c81] border border-blue-200 hover:border-[#0f4c81] hover:bg-slate-50"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-[#94a3b8] italic text-center pr-4">
            All times are in Calgary (Mountain Time)
          </p>
        </div>
      </div>

      <div className="h-px bg-blue-100/50 w-full mb-10"></div>

      {/* Your Details */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <User className="w-[18px] h-[18px] text-[#0f4c81]" />
            <span className="text-[15px] font-bold text-[#0f4c81]">Your Details</span>
          </div>
          {submitError && !isSuccess && (
            <span className="text-red-500 text-[13px] font-medium">{submitError}</span>
          )}
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-[13px] font-bold text-[#0f4c81]">Full Name *</label>
                {errors.fullName && <span className="text-red-500 text-[11px]">{errors.fullName}</span>}
              </div>
              <input 
                type="text" 
                placeholder="John Doe"
                value={fullName}
                onChange={e => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: "" });
                }}
                className={`w-full h-[52px] bg-[#f8fafc] border rounded-[12px] px-4 text-[14px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:outline-none shadow-sm transition-colors ${
                  errors.fullName ? "border-red-400 focus:border-red-500" : "border-slate-100 focus:border-[#0f4c81]"
                }`}
              />
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-[13px] font-bold text-[#0f4c81]">Email Address *</label>
                {errors.email && <span className="text-red-500 text-[11px]">{errors.email}</span>}
              </div>
              <input 
                type="email" 
                placeholder="john@company.com"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full h-[52px] bg-[#f8fafc] border rounded-[12px] px-4 text-[14px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:outline-none shadow-sm transition-colors ${
                  errors.email ? "border-red-400 focus:border-red-500" : "border-slate-100 focus:border-[#0f4c81]"
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-[13px] font-bold text-[#0f4c81]">Phone Number *</label>
                {errors.phone && <span className="text-red-500 text-[11px]">{errors.phone}</span>}
              </div>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                className={`w-full h-[52px] bg-[#f8fafc] border rounded-[12px] px-4 text-[14px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:outline-none shadow-sm transition-colors ${
                  errors.phone ? "border-red-400 focus:border-red-500" : "border-slate-100 focus:border-[#0f4c81]"
                }`}
              />
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-[13px] font-bold text-[#0f4c81]">Company Name *</label>
                {errors.company && <span className="text-red-500 text-[11px]">{errors.company}</span>}
              </div>
              <input 
                type="text" 
                placeholder="Acme Corp"
                value={company}
                onChange={e => {
                  setCompany(e.target.value);
                  if (errors.company) setErrors({ ...errors, company: "" });
                }}
                className={`w-full h-[52px] bg-[#f8fafc] border rounded-[12px] px-4 text-[14px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:outline-none shadow-sm transition-colors ${
                  errors.company ? "border-red-400 focus:border-red-500" : "border-slate-100 focus:border-[#0f4c81]"
                }`}
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center space-x-2 font-semibold h-[56px] rounded-[14px] transition-all shadow-[0_4px_15px_rgb(15,76,129,0.2)] text-[16px] ${
                isSubmitting 
                  ? "bg-[#64748b] text-white cursor-not-allowed opacity-80" 
                  : "bg-[#0f4c81] text-white hover:bg-[#0a3f80]"
              }`}
            >
              <span>{isSubmitting ? "Submitting..." : "Confirm ERP Health Audit"}</span>
              {!isSubmitting && <ChevronRight className="w-[18px] h-[18px]" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
