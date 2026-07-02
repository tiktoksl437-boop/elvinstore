import React from "react";
import { Flame, ShieldCheck, Zap, Users, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  logoSrc: string;
}

export default function Hero({ logoSrc }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-violet-50 via-white to-amber-50/20">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 -z-10 w-80 h-80 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6d28d904_1px,transparent_1px),linear-gradient(to_bottom,#6d28d904_1px,transparent_1px)] bg-[size:40px_40px] -z-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero text (Indonesian, highly persuasive) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1.5 rounded-full">
              <Flame className="w-4 h-4 text-brand-purple animate-pulse" />
              <span className="text-xs font-mono font-black text-brand-purple tracking-widest uppercase">
                Free Fire Account Specialist
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
            >
              <span className="text-slate-900 block">ELVIN STORE</span>
              <span className="bg-gradient-to-r from-brand-purple via-violet-700 to-brand-yellow bg-clip-text text-transparent block mt-1 leading-normal">
                Portofolio Jual Beli Akun FF Terpercaya
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Mencari akun Free Fire impian dengan aman tanpa takut tertipu? Elvin Store hadir memberikan layanan jual beli akun FF berspesifikasi tinggi, harga merakyat, <span className="text-brand-purple font-bold">100% amanah, cepat, dan nyaman.</span>
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="https://chat.whatsapp.com/JAt2X3K1aAT0lXA0bwi4nL?s=cl&p=a&mlu=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-display font-black tracking-wider text-sm rounded-xl hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 shadow-lg glow-purple flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>GABUNG GROUP WA SEKARANG</span>
              </a>
              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-dark text-slate-950 font-display font-black tracking-wider text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                HUBUNGI MAS ELVIN
              </button>
            </motion.div>

            {/* Micro stats banner */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-1.5 text-brand-purple">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-display font-bold text-lg text-slate-900">100%</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Sertifikat Amanah</p>
              </div>
              <div className="space-y-1 border-l border-slate-200 pl-4">
                <div className="flex items-center space-x-1.5 text-brand-yellow-dark">
                  <Zap className="w-5 h-5" />
                  <span className="font-display font-bold text-lg text-slate-900">&lt; 5m</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Proses Cepat</p>
              </div>
              <div className="space-y-1 border-l border-slate-200 pl-4">
                <div className="flex items-center space-x-1.5 text-indigo-700">
                  <Users className="w-5 h-5" />
                  <span className="font-display font-bold text-lg text-slate-900">500+</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Pelanggan Puas</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Graphic / Generated Mascot */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-purple to-brand-yellow rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Central Mascot Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white rounded-full overflow-hidden border-4 border-brand-purple p-1 glow-purple">
                <img
                  src={logoSrc}
                  alt="Elvin Store Mascot Logo"
                  className="w-full h-full object-cover rounded-full animate-fadeIn"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 text-center bg-white/95 border border-brand-purple/20 px-4 py-2.5 rounded-xl shadow-lg">
                  <div className="flex justify-center items-center space-x-1.5 text-xs font-display font-bold tracking-widest text-brand-purple">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>ONLINE CHAT</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">Fast Response: Mas Elvin</p>
                </div>
              </div>

              {/* Floating badges for visual decoration */}
              <div className="absolute -top-4 -right-4 bg-brand-purple text-white px-3 py-1 text-xs font-display font-black rounded-lg tracking-widest shadow-lg -rotate-3 hover:rotate-0 transition-transform duration-300">
                PROMO AKUN SULTAN!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-brand-yellow text-slate-900 px-3 py-1 text-xs font-display font-black rounded-lg tracking-widest shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
                SMK GAMING PRENEUR
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
