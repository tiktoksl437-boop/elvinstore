import React from "react";
import { MessageCircle, Facebook, Instagram, ShieldAlert, ArrowRight, Sparkles, Check } from "lucide-react";

export default function ContactSection() {
  const socials = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      handle: "Daily life Elvin",
      url: "https://www.facebook.com/search/top?q=Daily%20life%20Elvin",
      color: "bg-blue-600 hover:bg-blue-700 text-white"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      handle: "@elvin.libra",
      url: "https://instagram.com/elvin.libra",
      color: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:brightness-110 text-white"
    },
    {
      name: "WhatsApp Chat",
      icon: <MessageCircle className="w-5 h-5" />,
      handle: "0823-1955-7375",
      url: "https://wa.me/6282319557375",
      color: "bg-emerald-600 hover:bg-emerald-700 text-white"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-100 bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-black text-brand-purple bg-brand-purple/10 px-3 py-1.5 rounded-full tracking-widest uppercase">KONTAK UTAMA</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">Hubungi Mas Elvin & Komunitas</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-yellow mx-auto rounded"></div>
          <p className="text-slate-500 text-sm font-normal">
            Butuh konsultasi akun, mau menawarkan akun Anda, atau sekadar tanya-tanya? Silakan kunjungi media sosial kami atau gabung ke WhatsApp Group komunitas resmi Elvin Store.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Social Links & Info Column (Left) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-black text-xl text-slate-900 tracking-wide">Pintu Layanan Konsumen</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Kami melayani transaksi setiap hari dari jam <span className="text-brand-purple font-bold">15.00-21.00 WIT</span>. Jika Anda mengirim pesan di luar jam tersebut, kami akan membalas secepatnya begitu online.
              </p>

              {/* Social Channels */}
              <div className="space-y-4">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-brand-purple/20 shadow-sm transition duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${s.color} transition duration-300`}>
                        {s.icon}
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-widest">{s.name}</span>
                        <span className="text-sm font-bold text-slate-800 group-hover:text-brand-purple transition-colors">{s.handle}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono group-hover:text-brand-purple transition-colors flex items-center gap-1">
                      Kunjungi ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Trust highlights */}
            <div className="bg-amber-50/50 border border-brand-yellow/25 p-5 rounded-2xl space-y-3 shadow-sm">
              <h4 className="text-xs font-mono font-bold text-brand-yellow-dark uppercase tracking-widest flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>PENCEGAHAN FRAUD (PENIPUAN)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Pastikan Anda hanya bertransaksi ke nomor WhatsApp resmi <span className="text-slate-900 font-bold">082319557375</span> atau akun Instagram resmi <span className="text-slate-900 font-bold">@elvin.libra</span>. Elvin Store tidak bertanggung jawab atas akun kloningan / palsu yang mengatasnamakan kami di tempat lain. Tetaplah waspada!
              </p>
            </div>
          </div>

          {/* Official WhatsApp Group Card (Right - replacing message builder) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-brand-purple" />
                <span className="text-[10px] font-mono font-black text-brand-purple tracking-widest uppercase">
                  GRUP KOMUNITAS RESMI
                </span>
              </div>
              
              <h3 className="font-display font-black text-2xl text-slate-900 leading-tight">
                Grup WhatsApp Elvin Store
              </h3>
              
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                Mari bergabung bersama ratusan survivors lainnya di grup resmi kami! Di sini Anda mendapatkan update stock akun FF sultan tercepat, berdiskusi, dan dapat melakukan transaksi langsung dengan Mas Elvin secara aman.
              </p>

              {/* Group Benefits */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">100% Admin Amanah & Terpercaya</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">Dapatkan Promo & Diskon Akun Eksklusif</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">Update Stok Akun Sultan Setiap Hari</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://chat.whatsapp.com/JAt2X3K1aAT0lXA0bwi4nL?s=cl&p=a&mlu=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-display font-black tracking-wider text-xs rounded-xl flex items-center justify-center space-x-2 transition shadow-lg glow-purple hover:brightness-110 hover:-translate-y-0.5"
              >
                <span>GABUNG GROUP WHATSAPP SEKARANG</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
