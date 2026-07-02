import React, { useState } from "react";
import { faqData } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("Q-1");

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Visual background gradient drop */}
      <div className="absolute top-1/2 left-1/3 -z-10 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-black text-brand-purple bg-brand-purple/10 px-3 py-1.5 rounded-full tracking-widest uppercase">FAQ UTAMA</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">Pertanyaan Sering Diajukan</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-yellow mx-auto rounded"></div>
          <p className="text-slate-500 text-sm font-normal max-w-2xl mx-auto mt-2">
            Punya keraguan atau pertanyaan sebelum bertransaksi? Temukan jawaban lengkap seputar keamanan, metode pembayaran, dan proses garansi kami di bawah.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-purple/20 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-800 focus:outline-none hover:bg-slate-50/55 transition-colors"
                >
                  <div className="flex items-center space-x-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-brand-purple" : "text-slate-400"}`} />
                    <span className={isOpen ? "text-brand-purple" : "text-slate-800"}>{item.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-purple shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
