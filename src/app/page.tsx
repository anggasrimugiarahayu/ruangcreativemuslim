
"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Wrench, MessageCircle, FileText, Check, Copy, Flame, User, PlayCircle, Star, Zap, Moon, Sun, ArrowLeft, GraduationCap } from "lucide-react";

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`w-full min-h-screen flex flex-col relative transition-colors duration-300 ${isDark ? 'bg-[#0f0f11] text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      
      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 backdrop-blur-md ${isDark ? 'bg-[#0f0f11]/80' : 'bg-gray-50/80'}`}>
        <div className="flex items-center gap-2">
          <span className={`font-black font-heading text-[16px] sm:text-[22px] tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ruang Ngonten</span>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-medium text-gray-400">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> <span className="text-emerald-500 font-bold uppercase tracking-wide">LIVE</span></div>
          <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> <span className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>144K</span> Follower</div>
          <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> <span className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>700+</span> Member</div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-gray-400 hover:text-rn-accent transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      {!showPricing ? (
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-5xl mx-auto w-full py-20">
          
          <button 
            onClick={() => setShowPricing(true)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-8 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] ${isDark ? 'border border-rn-accent/30 bg-rn-accent/5 hover:bg-rn-accent/10 text-rn-accent' : 'border border-rn-accent bg-rn-accent/20 hover:bg-rn-accent/30 text-gray-900'}`}
          >
            <Flame className="w-4 h-4 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,1)] animate-pulse" fill="currentColor" />
            PROMO hingga 95% <span className="ml-1 text-lg leading-none">&rsaquo;</span>
          </button>

          <h1 className={`text-3xl md:text-4xl font-black font-heading mb-8 md:mb-10 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mau belajar apa hari ini?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* EBOOK CARD */}
            <Link 
              href="/ebook"
              className={`border p-6 rounded-2xl text-left group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? 'bg-[#18181b] border-white/5 hover:border-rn-accent/50 shadow-black/50' : 'bg-white border-gray-200 hover:border-rn-accent shadow-gray-200'}`}
            >
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                Terlaris
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${isDark ? 'bg-zinc-800 group-hover:bg-rn-accent/20' : 'bg-gray-100 group-hover:bg-rn-accent/20'}`}>
                <BookOpen className="w-6 h-6 text-green-400 group-hover:text-rn-accent transition-colors" />
              </div>
              <h2 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ebook Ngonten</h2>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Panduan strategi faceless creator untuk hasilkan cuan jangka panjang tanpa harus nunjukin wajah.
              </p>
            </Link>

            {/* TOOLS CARD */}
            <Link 
              href="/tools"
              className={`border p-6 rounded-2xl text-left group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? 'bg-[#18181b] border-white/5 hover:border-rn-accent/50 shadow-black/50' : 'bg-white border-gray-200 hover:border-rn-accent shadow-gray-200'}`}
            >
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                New Product
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${isDark ? 'bg-zinc-800 group-hover:bg-rn-accent/20' : 'bg-gray-100 group-hover:bg-rn-accent/20'}`}>
                <Wrench className="w-6 h-6 text-blue-400 group-hover:text-rn-accent transition-colors" />
              </div>
              <h2 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sistem Tools</h2>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                8 sistem AI untuk bantu kamu mulai ngonten dari bingung cari ide sampai eksekusi jadi lebih mudah.
              </p>
            </Link>

            {/* E-LEARNING CARD */}
            <div 
              className={`border p-6 rounded-2xl text-left group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? 'bg-[#18181b] border-white/5 shadow-black/50' : 'bg-white border-gray-200 shadow-gray-200'} cursor-default`}
            >
              <div className="absolute top-4 right-4 bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                Coming Soon
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${isDark ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>E-Learning</h2>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Platform belajar eksklusif dari Ruang Ngonten yang asik dan menyenangkan hanya dalam 1 platform.
              </p>
            </div>
          </div>
        </main>
      ) : (
        /* PRICING MODAL / SECTION */
        <main className="flex-1 flex flex-col items-center p-4 md:p-6 text-center max-w-6xl mx-auto w-full py-6 md:py-8 animate-in fade-in zoom-in duration-300">
          
          <button 
            onClick={() => setShowPricing(false)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-4 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] ${isDark ? 'border border-rn-accent/30 bg-rn-accent/5 hover:bg-rn-accent/10 text-rn-accent' : 'border border-rn-accent bg-rn-accent/20 hover:bg-rn-accent/30 text-gray-900'}`}
          >
            <span className="mr-1 text-lg leading-none">&lsaquo;</span> PROMO hingga 95% <Flame className="w-4 h-4 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,1)] animate-pulse" fill="currentColor" />
          </button>

          <h1 className={`text-2xl md:text-4xl font-black font-heading mb-2 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Pilih paket kamu
          </h1>
          <p className={`text-xs md:text-sm mb-6 md:mb-8 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Ambil kesempatan mumpung lagi diskon besar-besaran. Sekali bayar!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full text-left">
            
            {/* PAKET EBOOK BASIC */}
            <div className={`border rounded-2xl p-5 md:p-6 flex flex-col transition-colors duration-300 ${isDark ? 'bg-[#18181b] border-white/5' : 'bg-white border-gray-200'}`}>
              <h3 className={`font-bold text-lg md:text-xl font-heading mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Paket Basic (Ebook)</h3>
              <p className={`text-xs md:text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cocok buat yang mau fokus belajar teori faceless creator.</p>
              
              <div className="flex items-end gap-2 mb-2">
                <span className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Rp 99k</span>
              </div>
              <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Total <span className="line-through">Rp 2.419.000</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4">
                95% OFF
              </div>

              <div className="flex-1">
                <ul className={`space-y-2 md:space-y-3 text-xs md:text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Ebook Ruang Ngonten (Personal Use)</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Ebook 30 Day Creator Challenge (Personal Use)</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Bimbingan Private 1-on-1 WhatsApp (6 Bulan)</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> 6+ Bonus Strategi & Template Lainnya</li>
                </ul>
              </div>

              <a href="https://lynk.id/ruangcreativemuslim/2124pkdew4ee/checkout" target="_blank" className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${isDark ? 'bg-[#27272a] hover:bg-rn-accent hover:text-black text-white' : 'bg-gray-900 hover:bg-rn-accent hover:text-black text-white'}`}>
                Pilih Paket Basic
              </a>
            </div>

            {/* PAKET TOOLS */}
            <div className={`border rounded-2xl p-5 md:p-6 flex flex-col transition-colors duration-300 ${isDark ? 'bg-[#18181b] border-white/5' : 'bg-white border-gray-200'}`}>
              <h3 className={`font-bold text-lg md:text-xl font-heading mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Paket Sistem Tools</h3>
              <p className={`text-xs md:text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cocok buat yang butuh bantuan AI untuk eksekusi ngonten.</p>
              
              <div className="flex items-end gap-2 mb-2">
                <span className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Rp 99k</span>
              </div>
              <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Total <span className="line-through">Rp 666.000</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4">
                85% OFF
              </div>

              <div className="flex-1">
                <ul className={`space-y-2 md:space-y-3 text-xs md:text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Akses 8 Sistem AI Ruang Ngonten</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Ebook Ruang Ngonten (Included)</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Bonus 4 Resource Ekstra (Footage, Hook, Tools)</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Sekali Bayar, Akses Selamanya</li>
                </ul>
              </div>

              <a href="https://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout" target="_blank" className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${isDark ? 'bg-[#27272a] hover:bg-rn-accent hover:text-black text-white' : 'bg-gray-900 hover:bg-rn-accent hover:text-black text-white'}`}>
                Pilih Sistem Tools
              </a>
            </div>

            {/* PAKET EBOOK LENGKAP */}
            <div className={`border-2 border-rn-accent rounded-2xl p-5 md:p-6 flex flex-col relative transform lg:-translate-y-4 transition-colors duration-300 ${isDark ? 'bg-[#18181b]' : 'bg-white'}`}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rn-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Paling Worth
              </div>
              
              <h3 className={`font-bold text-lg md:text-xl font-heading mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Paket Lengkap (Ebook)</h3>
              <p className={`text-xs md:text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Bonus terbanyak, akses jualan (PLR) dan Lifetime support.</p>
              
              <div className="flex items-end gap-2 mb-2">
                <span className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Rp 149k</span>
              </div>
              <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Total <span className="line-through">Rp 2.419.000</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4">
                94% OFF
              </div>

              <div className="flex-1">
                <ul className={`space-y-2 md:space-y-3 text-xs md:text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className={`flex gap-2 items-start font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Semua isi Paket Basic</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Hak Jual Ulang (PLR) untuk berbagai materi</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Bimbingan Private 1-on-1 (Lifetime)</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Tools Text to Voice Over</li>
                  <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" /> Video Footage Siap Pakai</li>
                </ul>
              </div>

              <a href="https://lynk.id/ruangcreativemuslim/w3pwykdq8j60/checkout" target="_blank" className="mt-6 block text-center bg-rn-accent text-black font-black py-3 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(208,226,6,0.2)]">
                Pilih Paket Lengkap
              </a>
            </div>

          </div>

        </main>
      )}

      {/* FOOTER */}
      <footer className="w-full py-8 flex flex-col items-center justify-center mt-auto">
        <div className="text-gray-500 text-xs flex items-center gap-2">
          Product by 
          <a 
            href="https://www.instagram.com/ruangcreativemuslim/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`font-bold flex items-center gap-1.5 hover:text-rn-accent transition-colors ml-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> ruangcreativemuslim
          </a>
        </div>
      </footer>
    </div>
  );
}
