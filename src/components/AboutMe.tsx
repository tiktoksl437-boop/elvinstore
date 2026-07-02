import React from "react";
import { User, ShieldCheck, Heart, Award, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function AboutMe() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-purple" />,
      title: "100% Anti Tipu-Tipu (Garansi Amanah)",
      description: "Kami mengutamakan kejujuran. Tidak ada tipu-tipu, tidak ada hackback. Keamanan akun Anda adalah tanggung jawab penuh kami."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-yellow-dark" />,
      title: "Karakter & Etos Kerja Pelajar SMK",
      description: "Sebagai siswa SMK yang dididik untuk berintegritas dan siap kerja, kami mempraktikkan etos kerja keras dalam mengembangkan bisnis gamingpreneur yang bersih."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Visi Membantu Sesama Gamers",
      description: "Kami mengerti betapa sedihnya ditipu saat ingin membeli akun impian. Elvin Store lahir untuk memastikan setiap gamers mendapatkan akun idaman secara aman."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-yellow rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              
              {/* Profile Card */}
              <div className="relative bg-white border border-brand-purple/15 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full bg-brand-purple/10 border border-brand-purple flex items-center justify-center text-brand-purple shrink-0">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-slate-900">ELVIN YAWAN</h3>
                    <p className="text-xs text-brand-yellow-dark font-mono tracking-wider uppercase font-bold">FOUNDER ELVIN STORE</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-purple shrink-0" />
                    <span>Siswa SMK Aktif (Bisnis & Gamingpreneur)</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-purple shrink-0" />
                    <span>Bekerja keras & jujur demi masa depan cerah</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-purple shrink-0" />
                    <span>Terpercaya melayani ratusan gamers tanah air</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-violet-50/50 rounded-xl">
                    <span className="block font-display font-black text-xl text-brand-purple">100%</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Kejujuran</span>
                  </div>
                  <div className="text-center p-3 bg-amber-50/50 rounded-xl">
                    <span className="block font-display font-black text-xl text-brand-yellow-dark">10/10</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Kepuasan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Visi */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-black text-brand-purple tracking-widest uppercase">TENTANG SAYA</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Anak SMK Berintegritas, <br />
                Membangun Ekosistem Jual Beli Aman
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-yellow rounded"></div>
            </div>

            <div className="space-y-4 text-slate-600 font-normal text-base leading-relaxed">
              <p>
                Halo! Nama saya <span className="text-slate-900 font-semibold">Elvin</span>. Saya adalah seorang pelajar SMK aktif yang memiliki ketertarikan tinggi di dunia gaming dan wirausaha (gamingpreneur). 
              </p>
              <p>
                Saya memulai <span className="text-slate-900 font-semibold">ELVIN STORE</span> setelah melihat banyaknya kasus penipuan (scam) yang dialami oleh teman-teman sesama player Free Fire saat bertransaksi akun di media sosial. Banyak player kehilangan uang jajan berharga mereka karena ulah oknum tidak bertanggung jawab.
              </p>
              <p>
                Melalui wadah portofolio ini, saya bertekad membuktikan bahwa <span className="text-brand-purple font-bold">pelajar SMK bisa berbisnis dengan jujur, profesional, dan bekerja keras</span> demi kepuasan pembeli. Visi utama saya adalah membantu player mendapatkan akun impian mereka dengan aman tanpa rasa takut sedikitpun.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4 pt-4">
              {values.map((v, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                  <div className="shrink-0 p-3 bg-white rounded-xl h-fit border border-slate-100 shadow-sm">
                    {v.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-slate-900">{v.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
