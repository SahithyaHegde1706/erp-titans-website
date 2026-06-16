"use client";

import { useState } from "react";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [currentERP, setCurrentERP] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    console.log("Form Data:", { fullName, email, phone, company, industry, currentERP, message });
    
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    console.log("Email Value:", email);
    console.log("Validation Result:", isValidEmail);

    // 1. Validate
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!email.trim() || !isValidEmail) newErrors.email = "Valid Email is required.";
    if (!phone.trim()) newErrors.phone = "Phone Number is required.";
    if (!company.trim()) newErrors.company = "Company Name is required.";
    if (!industry.trim()) newErrors.industry = "Please select an industry.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // 2. Submit
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          industry,
          currentERP,
          message
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError("Message saved but email could not be sent.");
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
          ✓ Message Sent Successfully
        </motion.h3>
        
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[16px] text-[#475569] max-w-[400px] leading-relaxed"
        >
          Thank you for reaching out. <br /> Our team will contact you soon.
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
    <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-slate-50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#0f4c81]">Send Us a Message</h2>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2.5 relative">
            <div className="flex items-center justify-between">
              <label className="text-[13px] font-bold text-[#0f4c81]">Industry *</label>
              {errors.industry && <span className="text-red-500 text-[11px]">{errors.industry}</span>}
            </div>
            <div className="relative">
              <select 
                value={industry}
                onChange={e => {
                  setIndustry(e.target.value);
                  if (errors.industry) setErrors({ ...errors, industry: "" });
                }}
                className={`w-full h-[52px] bg-[#f8fafc] border rounded-[12px] px-4 text-[14px] focus:bg-white focus:outline-none appearance-none shadow-sm transition-colors ${
                  errors.industry ? "border-red-400 focus:border-red-500 text-[#0f172a]" : "border-slate-100 focus:border-[#0f4c81] text-[#0f172a]"
                } ${!industry ? 'text-[#94a3b8]' : ''}`}
              >
                <option value="" disabled>Select Industry</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="distribution">Distribution</option>
                <option value="cannabis">Cannabis</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f4c81] pointer-events-none" />
            </div>
          </div>
          <div className="space-y-2.5">
            <label className="text-[13px] font-bold text-[#0f4c81]">Current ERP System</label>
            <input 
              type="text" 
              placeholder="e.g. Odoo, SAP, NetSuite"
              value={currentERP}
              onChange={e => setCurrentERP(e.target.value)}
              className="w-full h-[52px] bg-[#f8fafc] border border-slate-100 rounded-[12px] px-4 text-[14px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:border-[#0f4c81] outline-none shadow-sm transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-bold text-[#0f4c81]">How can we help? *</label>
            {errors.message && <span className="text-red-500 text-[11px]">{errors.message}</span>}
          </div>
          <div className="relative">
            <textarea 
              placeholder="Tell us about your current ERP challenges..."
              value={message}
              onChange={e => {
                setMessage(e.target.value);
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              className={`w-full h-[140px] bg-[#f8fafc] border rounded-[12px] p-4 text-[14px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:outline-none resize-none shadow-sm transition-colors ${
                errors.message ? "border-red-400 focus:border-red-500" : "border-slate-100 focus:border-[#0f4c81]"
              }`}
            />
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`flex items-center justify-center space-x-2 font-semibold px-8 py-4 rounded-full transition-all shadow-[0_4px_15px_rgb(15,76,129,0.2)] ${
              isSubmitting 
                ? "bg-[#64748b] text-white cursor-not-allowed opacity-80" 
                : "bg-[#0f4c81] text-white hover:bg-[#0a3f80]"
            }`}
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            {!isSubmitting && <Send className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </form>
    </div>
  );
}
