
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Wrench, MessageCircle, FileText, Check, Copy, Flame, User, PlayCircle, Star, Zap, Moon, Sun, ArrowLeft, GraduationCap } from "lucide-react";

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [followerCount, setFollowerCount] = useState("144K");

  useEffect(() => {
    fetch('/api/instagram')
      .then(res => res.json())
      .then(data => {
        if (data.followers) {
          const formatted = (data.followers / 1000).toFixed(0) + 'K';
          setFollowerCount(formatted);
        }
      })
      .catch(err => console.error('Error loading follower count:', err));
  }, []);

  return (
    <div className={`w-full min-h-screen flex flex-col relative transition-colors duration-300 ${isDark ? 'bg-[#0f0f11] text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      
      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 backdrop-blur-md ${isDark ? 'bg-[#0f0f11]/80' : 'bg-gray-50/80'}`}>
        <div className="flex items-center gap-2">
          <span className={`font-black font-heading text-[16px] sm:text-[22px] tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ruang Ngonten</span>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-medium text-gray-400">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> <span className="text-emerald-500 font-bold uppercase tracking-wide">LIVE</span></div>
          <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> <span className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{followerCount}</span> Follower</div>
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
              className={`border p-6 rounded-2xl text-left group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-end min-h-[300px] ${isDark ? 'bg-[#18181b] border-white/5 hover:border-rn-orange/50 shadow-black/50' : 'bg-white border-gray-200 hover:border-rn-orange shadow-gray-200'}`}
            >
              {/* SVG Background */}
              <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.05] opacity-80 z-0 flex items-start justify-center pt-4">
                <svg viewBox="0 0 400 300" className="w-[150%] h-[150%] max-w-none text-rn-orange" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <g strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4">
                    <line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="100" x2="400" y2="100" /><line x1="0" y1="150" x2="400" y2="150" /><line x1="0" y1="200" x2="400" y2="200" /><line x1="0" y1="250" x2="400" y2="250" />
                    <line x1="100" y1="0" x2="100" y2="300" /><line x1="200" y1="0" x2="200" y2="300" /><line x1="300" y1="0" x2="300" y2="300" />
                  </g>
                  <g className="sc-pop" transform="translate(200, 90)">
                    <path d="M-50,60 L-50,10 L-10,0 L50,10 L50,60 L-10,50 Z" fill="currentColor" fillOpacity="0.1" strokeWidth="3" />
                    <path d="M-10,50 L-10,0" strokeWidth="3" />
                    <g className="sc-rise" style={{ animationDelay: '0.1s' }}>
                      <rect x="-40" y="20" width="20" height="4" rx="2" fill="currentColor" />
                    </g>
                    <g className="sc-rise" style={{ animationDelay: '0.2s' }}>
                      <rect x="0" y="20" width="30" height="4" rx="2" fill="currentColor" />
                      <rect x="0" y="30" width="20" height="4" rx="2" fill="currentColor" />
                    </g>
                  </g>
                  <g className="sc-draw" strokeDasharray="1" strokeDashoffset="1" pathLength="1" strokeWidth="4" strokeOpacity="0.8">
                    <path d="M100,200 L160,140 L200,160 L290,70" />
                    <polyline points="260,70 290,70 290,100" />
                  </g>
                </svg>
              </div>

              <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10 shadow-sm">
                Terlaris
              </div>
              <div className="relative z-10 mt-auto pt-24">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${isDark ? 'bg-zinc-800/80 backdrop-blur-md group-hover:bg-rn-orange/20' : 'bg-white/80 backdrop-blur-md group-hover:bg-rn-orange/20 shadow-sm'}`}>
                  <BookOpen className="w-6 h-6 text-rn-orange group-hover:text-rn-darkorange transition-colors" />
                </div>
                <h2 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ebook Ngonten</h2>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Panduan strategi faceless creator untuk hasilkan cuan jangka panjang tanpa harus nunjukin wajah.
                </p>
              </div>
            </Link>

            {/* TOOLS CARD */}
            <Link 
              href="/tools"
              className={`border p-6 rounded-2xl text-left group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-end min-h-[300px] ${isDark ? 'bg-[#18181b] border-white/5 hover:border-rn-accent/50 shadow-black/50' : 'bg-white border-gray-200 hover:border-rn-accent shadow-gray-200'}`}
            >
              {/* SVG Background */}
              <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.05] opacity-80 z-0 flex items-start justify-center pt-4">
                <svg viewBox="0 0 400 300" className="w-[150%] h-[150%] max-w-none text-rn-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <g strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4">
                    <line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="100" x2="400" y2="100" /><line x1="0" y1="150" x2="400" y2="150" /><line x1="0" y1="200" x2="400" y2="200" /><line x1="0" y1="250" x2="400" y2="250" />
                    <line x1="100" y1="0" x2="100" y2="300" /><line x1="200" y1="0" x2="200" y2="300" /><line x1="300" y1="0" x2="300" y2="300" />
                  </g>
                  <g className="sc-flow" style={{ animationDelay: '0s' }} transform="translate(130, 110)">
                    <circle cx="0" cy="0" r="20" fill="currentColor" fillOpacity="0.1" strokeWidth="3" />
                    <circle cx="0" cy="0" r="6" fill="currentColor" />
                  </g>
                  <g className="sc-flow" style={{ animationDelay: '0.3s' }} transform="translate(230, 60)">
                    <circle cx="0" cy="0" r="25" fill="currentColor" fillOpacity="0.1" strokeWidth="3" />
                    <circle cx="0" cy="0" r="8" fill="currentColor" />
                    <path d="M-12,-12 L12,12 M-12,12 L12,-12" strokeWidth="2" opacity="0.5" />
                  </g>
                  <g className="sc-flow" style={{ animationDelay: '0.6s' }} transform="translate(300, 150)">
                    <circle cx="0" cy="0" r="15" fill="currentColor" fillOpacity="0.1" strokeWidth="3" />
                    <circle cx="0" cy="0" r="5" fill="currentColor" />
                  </g>
                  <g className="sc-draw" strokeDasharray="1" strokeDashoffset="1" pathLength="1" strokeWidth="3" strokeOpacity="0.7">
                    <path d="M145,100 L210,70" />
                    <path d="M250,75 L290,140" />
                    <path d="M120,130 L120,190 L290,190 L290,165" />
                  </g>
                  <g className="sc-rise" style={{ animationDelay: '0.4s' }}>
                    <rect x="170" y="70" width="8" height="8" rx="2" fill="currentColor" />
                  </g>
                  <g className="sc-rise" style={{ animationDelay: '0.8s' }}>
                    <rect x="260" y="100" width="8" height="8" rx="2" fill="currentColor" />
                  </g>
                </svg>
              </div>

              <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10 shadow-sm">
                New Product
              </div>
              <div className="relative z-10 mt-auto pt-24">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${isDark ? 'bg-zinc-800/80 backdrop-blur-md group-hover:bg-rn-accent/20' : 'bg-white/80 backdrop-blur-md group-hover:bg-rn-accent/20 shadow-sm'}`}>
                  <Wrench className="w-6 h-6 text-rn-accent group-hover:text-rn-yellow transition-colors" />
                </div>
                <h2 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sistem Tools</h2>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  8 sistem AI untuk bantu kamu mulai ngonten dari bingung cari ide sampai eksekusi jadi lebih mudah.
                </p>
              </div>
            </Link>

            {/* E-LEARNING CARD */}
            <div 
              className={`border p-6 rounded-2xl text-left group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-end min-h-[300px] ${isDark ? 'bg-[#18181b] border-white/5 shadow-black/50 hover:border-purple-500/50' : 'bg-white border-gray-200 shadow-gray-200 hover:border-purple-400'} cursor-default`}
            >
              {/* SVG Background */}
              <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.05] opacity-80 z-0 flex items-start justify-center pt-4">
                <svg viewBox="0 0 400 300" className="w-[150%] h-[150%] max-w-none text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <g strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4">
                    <line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="100" x2="400" y2="100" /><line x1="0" y1="150" x2="400" y2="150" /><line x1="0" y1="200" x2="400" y2="200" /><line x1="0" y1="250" x2="400" y2="250" />
                    <line x1="100" y1="0" x2="100" y2="300" /><line x1="200" y1="0" x2="200" y2="300" /><line x1="300" y1="0" x2="300" y2="300" />
                  </g>
                  <g transform="translate(200, 100)">
                    <circle cx="0" cy="0" r="60" strokeWidth="6" strokeOpacity="0.1" />
                    <circle cx="0" cy="0" r="60" strokeWidth="6" stroke="currentColor" strokeDasharray="1" strokeDashoffset="1" pathLength="1" className="sc-draw" />
                  </g>
                  <g className="sc-pop" transform="translate(200, 100)">
                    <rect x="-35" y="-25" width="70" height="50" rx="8" fill="currentColor" fillOpacity="0.1" strokeWidth="3" />
                    <polygon points="-5,-10 15,0 -5,10" fill="currentColor" />
                  </g>
                  <g className="sc-rise" style={{ animationDelay: '0.2s' }}>
                    <path d="M120,40 L125,55 L140,60 L125,65 L120,80 L115,65 L100,60 L115,55 Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
                  </g>
                  <g className="sc-rise" style={{ animationDelay: '0.5s' }}>
                    <path d="M280,30 L283,40 L293,43 L283,46 L280,56 L277,46 L267,43 L277,40 Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
                  </g>
                  <g className="sc-draw" strokeDasharray="1" strokeDashoffset="1" pathLength="1" strokeWidth="2" strokeOpacity="0.5">
                    <path d="M140,60 L155,75" />
                    <path d="M260,140 L280,160 L320,160" />
                  </g>
                </svg>
              </div>

              <div className="absolute top-4 right-4 bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider z-10 shadow-sm">
                Coming Soon
              </div>
              <div className="relative z-10 mt-auto pt-24">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${isDark ? 'bg-zinc-800/80 backdrop-blur-md group-hover:bg-purple-500/20' : 'bg-gray-100/80 backdrop-blur-md group-hover:bg-purple-400/20 shadow-sm'}`}>
                  <GraduationCap className="w-6 h-6 text-purple-400 group-hover:text-purple-500 transition-colors" />
                </div>
                <h2 className={`text-xl font-bold mb-2 font-heading transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>E-Learning</h2>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Platform belajar eksklusif dari Ruang Ngonten yang asik dan menyenangkan hanya dalam 1 platform.
                </p>
              </div>
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

              <a href="http://lynk.id/ruangcreativemuslim/2124pkdew4ee/checkout" target="_blank" className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${isDark ? 'bg-[#27272a] hover:bg-rn-accent hover:text-black text-white' : 'bg-gray-900 hover:bg-rn-accent hover:text-black text-white'}`}>
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

              <a href="http://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout" target="_blank" className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${isDark ? 'bg-[#27272a] hover:bg-rn-accent hover:text-black text-white' : 'bg-gray-900 hover:bg-rn-accent hover:text-black text-white'}`}>
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

              <a href="http://lynk.id/ruangcreativemuslim/w3pwykdq8j60/checkout" target="_blank" className="mt-6 block text-center bg-rn-accent text-black font-black py-3 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(208,226,6,0.2)]">
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
