import React from "react";
import { ShieldCheck, ArrowUp } from "lucide-react";

interface FooterProps {
  logoSrc: string;
}

export default function Footer({ logoSrc }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-brand-purple">
                <img
                  src={logoSrc}
                  alt="Elvin Store Footer Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-lg tracking-wider bg-gradient-to-r from-brand-purple to-brand-yellow bg-clip-text text-transparent">
                ELVIN STORE
              </span>
            </div>
            
            <p className="text-xs text-slate-500 font-normal max-w-sm leading-relaxed">
              Platform portofolio terpercaya untuk transaksi jual beli akun Free Fire. Dikelola langsung oleh Mas Elvin, pelajar SMK gamingpreneur berintegritas tinggi.
            </p>

            <div className="flex items-center space-x-2 text-brand-purple text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% GARANSI AMAN & PROSES CEPAT</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold text-slate-950 uppercase tracking-widest">PETA NAVIGASI</h4>
            <div className="flex flex-col space-y-2 text-xs text-slate-500 font-normal">
              <button onClick={() => handleScrollTo("home")} className="hover:text-brand-purple text-left transition">Beranda</button>
              <button onClick={() => handleScrollTo("about")} className="hover:text-brand-purple text-left transition">Tentang Kami</button>
              <button onClick={() => handleScrollTo("faq")} className="hover:text-brand-purple text-left transition">FAQ</button>
              <button onClick={() => handleScrollTo("contact")} className="hover:text-brand-purple text-left transition">Hubungi</button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs text-slate-500 font-normal">
            <h4 className="text-xs font-display font-bold text-slate-950 uppercase tracking-widest">KONTAK SELLER</h4>
            <div className="space-y-2">
              <p>📱 <span className="text-slate-800 font-semibold">WhatsApp:</span> 082319557375</p>
              <p>📸 <span className="text-slate-800 font-semibold">Instagram:</span> @elvin.libra</p>
              <p>👥 <span className="text-slate-800 font-semibold">Facebook:</span> Daily life Elvin</p>
              <p>📍 <span className="text-slate-800 font-semibold">Lokasi:</span> Indonesia (Siswa SMK)</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Scroll Up */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center sm:text-left">
            <p className="text-[10px] text-slate-500">
              © {new Date().getFullYear()} Elvin Store. Hak Cipta Dilindungi. Dibuat dengan penuh dedikasi oleh Pelajar SMK Gamingpreneur.
            </p>
            <p className="text-[9px] text-slate-400 max-w-2xl leading-relaxed font-normal">
              Disclaimer: Elvin Store adalah toko portofolio independen yang dikelola secara pribadi. Kami tidak berafiliasi secara langsung, disponsori, atau memiliki hubungan formal dengan Garena Online, Garena Free Fire, maupun merek dagang terkait lainnya. Seluruh logo dan aset Free Fire adalah hak cipta dari pemilik masing-masing.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-purple text-slate-400 hover:text-brand-purple rounded-full transition duration-300 shadow-sm shrink-0 group"
            title="Scroll ke Atas"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
