"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Wrench,
  MessageCircle,
  FileText,
  Check,
  Copy,
  Flame,
  User,
  PlayCircle,
  Star,
  Zap,
  Moon,
  Sun,
  ArrowLeft,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  const [showPricing, setShowPricing] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [followerCount, setFollowerCount] = useState("144K");

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (data.followers) {
          const formatted = (data.followers / 1000).toFixed(0) + "K";
          setFollowerCount(formatted);
        }
      })
      .catch((err) => console.error("Error loading follower count:", err));
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex flex-col relative transition-colors duration-300 ${isDark ? "bg-[#0f0f11] text-gray-200" : "bg-gray-50 text-gray-800"}`}
    >
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 backdrop-blur-md ${isDark ? "bg-[#0f0f11]/80" : "bg-gray-50/80"}`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`font-black font-heading text-[16px] sm:text-[22px] tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Ruang Ngonten
          </span>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-medium text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>{" "}
            <span className="text-emerald-500 font-bold uppercase tracking-wide">
              LIVE
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />{" "}
            <span
              className={`font-bold transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {followerCount}
            </span>{" "}
            Follower
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />{" "}
            <span
              className={`font-bold transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
            >
              700+
            </span>{" "}
            Member
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-gray-400 hover:text-rn-accent transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      {!showPricing ? (
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-5xl mx-auto w-full py-20">
          <button
            onClick={() => setShowPricing(true)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-8 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] ${isDark ? "border border-rn-accent/30 bg-rn-accent/5 hover:bg-rn-accent/10 text-rn-accent" : "border border-rn-accent bg-rn-accent/20 hover:bg-rn-accent/30 text-gray-900"}`}
          >
            <Flame
              className="w-4 h-4 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,1)] animate-pulse"
              fill="currentColor"
            />
            PROMO hingga 95%{" "}
            <span className="ml-1 text-lg leading-none">&rsaquo;</span>
          </button>

          <h1
            className={`text-3xl md:text-4xl font-black font-heading mb-8 md:mb-10 tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Mau belajar apa hari ini?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* EBOOK CARD */}
            <Link
              href="/ebook"
              className={`group relative flex flex-col justify-start rounded-xl border-2 p-6 text-left transition-all duration-300 hover:shadow-xl cursor-pointer z-0 overflow-hidden ${isDark ? "bg-[#18181b] border-white/5 hover:border-rn-orange/50 shadow-black/50" : "bg-white border-gray-200 hover:border-rn-orange shadow-gray-200"}`}
            >
              <span className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-rn-orange shadow-sm z-10">
                Terlaris
              </span>
              <div className="relative w-full overflow-hidden aspect-[344/145] lg:aspect-[4/3] rounded-lg">
                <div
                  className="iso-stage pointer-events-none absolute aspect-[1642/1200] max-w-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-[1.05] text-rn-orange"
                  style={{ top: "50%", left: "50%", width: "290%" }}
                >
                  <svg viewBox="0 0 1642 1200" className="w-full h-full" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <style>{`
                          @keyframes atm-rise {
                              0% { opacity: 0; transform: translateY(20px); }
                              40%, 100% { opacity: 1; transform: translateY(0); }
                          }
                          @keyframes atm-pop {
                              0% { opacity: 0; transform: scale(0.9); }
                              40%, 100% { opacity: 1; transform: scale(1); }
                          }
                          @keyframes atm-draw {
                              0% { stroke-dashoffset: 1; }
                              40%, 100% { stroke-dashoffset: 0; }
                          }
                          @keyframes atm-turn-a {
                              0% { transform: perspective(800px) rotateY(15deg); }
                              40%, 100% { transform: perspective(800px) rotateY(0deg); }
                          }
                          @keyframes atm-turn-b {
                              0% { transform: perspective(800px) rotateY(-15deg); }
                              40%, 100% { transform: perspective(800px) rotateY(0deg); }
                          }
                          @keyframes atm-ring {
                              0% { opacity: 0; transform: scale(0.9); }
                              40%, 100% { opacity: 1; transform: scale(1); }
                          }
                          @keyframes atm-scroll {
                              0% { transform: translateY(0); }
                              20%, 100% { transform: translateY(-40px); }
                          }
                          @keyframes atm-bar {
                              0% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
                              40%, 100% { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
                          }
                      `}</style>
    {/* Grid Background */}
    <g strokeOpacity="0.18" strokeWidth="3" strokeDasharray="3 14">
      {Array.from({ length: 21 }).map((_, i) => (
        <line key={`v-${i}`} x1={21 + i * 80} y1="0" x2={21 + i * 80} y2="1200" />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={40 + i * 80} x2="1642" y2={40 + i * 80} />
      ))}
    </g>
    <g transform="translate(821 600)">
      <g transform="translate(-12 0)">
        {/* Logo / Lightbulb */}
        <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "0.1s" }}>
          <circle cx="-200" cy="-22" r="30" fill="currentColor" fillOpacity="0.06" strokeOpacity="0.75" strokeWidth="5"></circle>
          {/* Lightbulb Icon */}
          <path d="M-200 -42 C-208 -42 -212 -34 -212 -26 C-212 -20 -206 -16 -206 -10 L-194 -10 C-194 -16 -188 -20 -188 -26 C-188 -34 -192 -42 -200 -42 Z" strokeWidth="4" strokeOpacity="0.8" style={{ animation: "atm-draw 8s infinite both", animationDelay: "0.5s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></path>
          <line x1="-204" y1="-5" x2="-196" y2="-5" strokeWidth="4" strokeOpacity="0.8" />
          <line x1="-202" y1="0" x2="-198" y2="0" strokeWidth="4" strokeOpacity="0.8" />
          {/* Sparkles */}
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "0.9s" }}><path d="M-200 -52 L-200 -60" strokeWidth="4" strokeOpacity="0.7"></path></g>
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.05s" }}><path d="M-216 -40 L-222 -46" strokeWidth="4" strokeOpacity="0.7"></path></g>
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.2s" }}><path d="M-184 -40 L-178 -46" strokeWidth="4" strokeOpacity="0.7"></path></g>
        </g>
        
        {/* Flow Arrows */}
        <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "1.5s" }}>
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.5s" }} transform="translate(-160 -10)">
            <path d="M0 -12 L11 0 L0 12" strokeWidth="7" strokeOpacity="0.8"></path>
          </g>
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.62s" }} transform="translate(-144 -10)">
            <path d="M0 -12 L11 0 L0 12" strokeWidth="7" strokeOpacity="0.8"></path>
          </g>
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.74s" }} transform="translate(-128 -10)">
            <path d="M0 -12 L11 0 L0 12" strokeWidth="7" strokeOpacity="0.8"></path>
          </g>
        </g>

        {/* Card 1: Faceless Strategy */}
        <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "1.8s" }}>
          <rect x="-95" y="-100" width="210" height="190" rx="16" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.7" strokeWidth="5"></rect>
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "2.1s" }}>
            <text x="-70" y="-70" fontSize="30" fontWeight="700" fill="currentColor" fillOpacity="0.85" stroke="none" dominantBaseline="central" letterSpacing="0.6">FACELESS</text>
          </g>
          <line x1="100" y1="-70" x2="150" y2="-70" strokeWidth="11" strokeOpacity="0.3" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.3s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
          
          <line x1="-70" y1="-30" x2="60" y2="-30" strokeWidth="10" strokeOpacity="0.6" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.5s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
          <line x1="-70" y1="0" x2="80" y2="0" strokeWidth="10" strokeOpacity="0.6" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.8s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
          <line x1="-70" y1="30" x2="40" y2="30" strokeWidth="10" strokeOpacity="0.6" style={{ animation: "atm-draw 8s infinite both", animationDelay: "3.05s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
        </g>

        {/* Card 2: Cuan (Results) */}
        <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "3.6s" }}>
          <rect x="75" y="-50" width="190" height="150" rx="16" fill="var(--card)" stroke="oklch(0.75 0.13 150)" strokeOpacity="0.8" strokeWidth="5"></rect>
          <rect x="69" y="-56" width="12" height="12" fill="oklch(0.75 0.13 150)" stroke="none" opacity="0.85"></rect>
          <rect x="259" y="-56" width="12" height="12" fill="oklch(0.75 0.13 150)" stroke="none" opacity="0.85"></rect>
          <rect x="259" y="94" width="12" height="12" fill="oklch(0.75 0.13 150)" stroke="none" opacity="0.85"></rect>
          <rect x="69" y="94" width="12" height="12" fill="oklch(0.75 0.13 150)" stroke="none" opacity="0.85"></rect>
          
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3.9s" }}>
            <text x="95" y="-24" fontSize="28" fontWeight="700" fill="oklch(0.75 0.13 150)" fillOpacity="0.9" stroke="none" dominantBaseline="central" letterSpacing="0.56">CUAN</text>
          </g>
          
          <g>
            <line x1="128" y1="14" x2="210" y2="14" strokeWidth="10" strokeOpacity="0.65" style={{ animation: "atm-draw 8s infinite both", animationDelay: "3.95s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
            <g transform="translate(107 14)">
              <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.1s" }}><rect x="-11" y="-11" width="22" height="22" rx="6" strokeOpacity="0.55" strokeWidth="4"></rect></g>
              <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.9s" }}>
                <rect x="-11" y="-11" width="22" height="22" rx="6" fill="oklch(0.75 0.13 150)" fillOpacity="0.18" stroke="oklch(0.75 0.13 150)" strokeOpacity="0.95" strokeWidth="4"></rect>
                <path d="M-6 0 L-2 4 L7 -5" stroke="oklch(0.75 0.13 150)" strokeWidth="5"></path>
              </g>
            </g>
          </g>
          <g>
            <line x1="128" y1="44" x2="230" y2="44" strokeWidth="10" strokeOpacity="0.65" style={{ animation: "atm-draw 8s infinite both", animationDelay: "4.15s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
            <g transform="translate(107 44)">
              <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.3s" }}><rect x="-11" y="-11" width="22" height="22" rx="6" strokeOpacity="0.55" strokeWidth="4"></rect></g>
              <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "5.3s" }}>
                <rect x="-11" y="-11" width="22" height="22" rx="6" fill="oklch(0.75 0.13 150)" fillOpacity="0.18" stroke="oklch(0.75 0.13 150)" strokeOpacity="0.95" strokeWidth="4"></rect>
                <path d="M-6 0 L-2 4 L7 -5" stroke="oklch(0.75 0.13 150)" strokeWidth="5"></path>
              </g>
            </g>
          </g>
          <g>
            <line x1="128" y1="74" x2="188" y2="74" strokeWidth="10" strokeOpacity="0.65" style={{ animation: "atm-draw 8s infinite both", animationDelay: "4.35s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
            <g transform="translate(107 74)">
              <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.5s" }}><rect x="-11" y="-11" width="22" height="22" rx="6" strokeOpacity="0.55" strokeWidth="4"></rect></g>
              <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "5.7s" }}>
                <rect x="-11" y="-11" width="22" height="22" rx="6" fill="oklch(0.75 0.13 150)" fillOpacity="0.18" stroke="oklch(0.75 0.13 150)" strokeOpacity="0.95" strokeWidth="4"></rect>
                <path d="M-6 0 L-2 4 L7 -5" stroke="oklch(0.75 0.13 150)" strokeWidth="5"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
                </div>
              </div>
              <div className="relative mt-4 space-y-1">
                <h2
                  className={`font-heading text-lg font-bold leading-snug transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Ebook Ngonten
                </h2>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Panduan strategi faceless creator untuk hasilkan cuan jangka
                  panjang tanpa harus nunjukin wajah.
                </p>
              </div>
            </Link>

            {/* TOOLS CARD */}
            <Link
              href="/tools"
              className={`group relative flex flex-col justify-start rounded-xl border-2 p-6 text-left transition-all duration-300 hover:shadow-xl cursor-pointer z-0 overflow-hidden ${isDark ? "bg-[#18181b] border-white/5 hover:border-rn-accent/50 shadow-black/50" : "bg-white border-gray-200 hover:border-rn-accent shadow-gray-200"}`}
            >
              <span className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-500 shadow-sm z-10">
                New Product
              </span>
              <div className="relative w-full overflow-hidden aspect-[344/145] lg:aspect-[4/3] rounded-lg">
                <div
                  className="iso-stage pointer-events-none absolute aspect-[1642/1200] max-w-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-[1.05] text-rn-accent"
                  style={{ top: "50%", left: "50%", width: "270%" }}
                >
                  <svg viewBox="0 0 1642 1200" className="w-full h-full" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Grid Background */}
    <g strokeOpacity="0.18" strokeWidth="3" strokeDasharray="3 14">
      {Array.from({ length: 21 }).map((_, i) => (
        <line key={`v-${i}`} x1={21 + i * 80} y1="0" x2={21 + i * 80} y2="1200" />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={40 + i * 80} x2="1642" y2={40 + i * 80} />
      ))}
    </g>
    <g transform="translate(821 600)">
      {/* Background Central Engine Box */}
      <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "0.2s" }}>
        <rect x="-180" y="-120" width="360" height="240" rx="24" fill="currentColor" fillOpacity="0.03" strokeOpacity="0.15" strokeWidth="4"></rect>
      </g>
      
      {/* 8 AI Systems Nodes */}
      {/* We'll arrange them in a semi-circle or a flow going into the center */}
      {/* Nodes: Niche, Profile IG, Ide, Script, ATM, Carousel, Ebook, Penjadwalan */}
      
      <g className="nodes">
        {/* Node 1: Niche */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "0.5s" }} transform="translate(-250 -150)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <path d="M-8 -4 L0 -10 L8 -4 M0 -10 L0 10" strokeWidth="4" />
        </g>
        {/* Node 2: Profile IG */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "0.8s" }} transform="translate(-100 -200)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <circle cx="0" cy="-4" r="6" strokeWidth="4" />
          <path d="M-10 12 C-10 6 10 6 10 12" strokeWidth="4" />
        </g>
        {/* Node 3: Ide */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.1s" }} transform="translate(100 -200)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <path d="M-6 -2 C-6 -8 6 -8 6 -2 C6 2 0 4 0 8 M0 14 L0 14" strokeWidth="4" />
        </g>
        {/* Node 4: Script */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.4s" }} transform="translate(250 -150)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <path d="M-8 -8 L8 -8 M-8 0 L8 0 M-8 8 L0 8" strokeWidth="4" />
        </g>
        {/* Node 5: ATM */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.7s" }} transform="translate(250 150)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <rect x="-8" y="-8" width="16" height="16" rx="3" strokeWidth="4" />
        </g>
        {/* Node 6: Carousel */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "2.0s" }} transform="translate(100 200)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <rect x="-12" y="-10" width="18" height="18" rx="2" strokeWidth="4" />
          <path d="M-8 -14 L12 -14 L12 6" strokeWidth="4" />
        </g>
        {/* Node 7: Ebook */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "2.3s" }} transform="translate(-100 200)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <path d="M-8 -10 L8 -10 L8 10 L-8 10 Z M-4 -4 L4 -4 M-4 2 L4 2" strokeWidth="4" />
        </g>
        {/* Node 8: Penjadwalan */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "2.6s" }} transform="translate(-250 150)">
          <circle cx="0" cy="0" r="24" fill="var(--card)" stroke="currentColor" strokeWidth="6" strokeOpacity="0.9"></circle>
          <circle cx="0" cy="0" r="8" strokeWidth="4" />
          <path d="M0 -8 L0 0 L4 4" strokeWidth="4" />
        </g>
      </g>

      {/* Connecting Flow Lines to Center */}
      <g>
        <line x1="-226" y1="-135" x2="-60" y2="-36" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "0.6s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        <line x1="-100" y1="-176" x2="-40" y2="-48" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "0.9s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        <line x1="100" y1="-176" x2="40" y2="-48" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "1.2s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        <line x1="226" y1="-135" x2="60" y2="-36" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "1.5s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        
        <line x1="226" y1="135" x2="60" y2="36" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "1.8s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        <line x1="100" y1="176" x2="40" y2="48" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.1s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        <line x1="-100" y1="176" x2="-40" y2="48" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.4s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
        <line x1="-226" y1="135" x2="-60" y2="36" strokeWidth="6" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.7s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      </g>

      {/* Central "8 Sistem AI" Process Box */}
      <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "3.2s" }}>
        <rect x="-90" y="-60" width="180" height="120" rx="20" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.9" strokeWidth="6"></rect>
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3.5s" }}>
          <text x="0" y="-12" fontSize="36" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle" dominantBaseline="central">8 SISTEM</text>
          <text x="0" y="24" fontSize="24" fontWeight="600" fill="currentColor" fillOpacity="0.8" stroke="none" textAnchor="middle" dominantBaseline="central">EKSEKUSI</text>
        </g>
      </g>
      
      {/* Ghost Boxes to the left and right like Andal AI */}
      <g>
        {/* Dashed Ghost left */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3.8s" }}>
          <rect x="-310" y="-40" width="80" height="80" rx="12" fill="none" strokeOpacity="0.4" strokeWidth="4" strokeDasharray="8 6"></rect>
          <circle cx="-270" cy="0" r="12" fill="none" strokeWidth="4" strokeOpacity="0.4"></circle>
        </g>
        {/* Dashed Ghost right */}
        <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.0s" }}>
          <rect x="230" y="-40" width="80" height="80" rx="12" fill="none" strokeOpacity="0.4" strokeWidth="4" strokeDasharray="8 6"></rect>
          <rect x="255" y="-15" width="30" height="30" rx="6" fill="none" strokeWidth="4" strokeOpacity="0.4"></rect>
        </g>
      </g>
      
    </g>
  </svg>
                </div>
              </div>
              <div className="relative mt-4 space-y-1">
                <h2
                  className={`font-heading text-lg font-bold leading-snug transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Sistem Tools
                </h2>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  8 sistem AI untuk bantu kamu mulai ngonten dari bingung cari
                  ide sampai eksekusi jadi lebih mudah.
                </p>
              </div>
            </Link>

            {/* E-LEARNING CARD */}
            <div
              className={`group relative flex flex-col justify-start rounded-xl border-2 p-6 text-left transition-all duration-300 hover:shadow-xl cursor-default z-0 overflow-hidden ${isDark ? "bg-[#18181b] border-white/5 shadow-black/50 hover:border-purple-500/50" : "bg-white border-gray-200 shadow-gray-200 hover:border-purple-400"}`}
            >
              <span className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-gray-600 shadow-sm z-10">
                Coming Soon
              </span>
              <div className="relative w-full overflow-hidden aspect-[344/145] lg:aspect-[4/3] rounded-lg">
                <div
                  className="iso-stage pointer-events-none absolute aspect-[1642/1200] max-w-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-[1.05] text-purple-400"
                  style={{ top: "50%", left: "50%", width: "300%" }}
                >
                  <svg viewBox="0 0 1642 1200" className="w-full h-full" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Grid Background */}
    <g strokeOpacity="0.18" strokeWidth="3" strokeDasharray="3 14">
      {Array.from({ length: 21 }).map((_, i) => (
        <line key={`v-${i}`} x1={21 + i * 80} y1="0" x2={21 + i * 80} y2="1200" />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={40 + i * 80} x2="1642" y2={40 + i * 80} />
      ))}
    </g>
    <g transform="translate(821 600)">
      {/* 3D Turned Elements (Konsultasi style) */}
      
      {/* Element A: Learning Module (left) */}
      <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "0.5s" }} transform="translate(-180, 20)">
        <g style={{ animation: "atm-turn-a 8s infinite both", animationDelay: "1.2s", transformOrigin: "center" }}>
          {/* Card Backing */}
          <rect x="-100" y="-120" width="200" height="240" rx="20" fill="currentColor" fillOpacity="0.04" strokeOpacity="0.8" strokeWidth="6"></rect>
          {/* Screen / Video Player */}
          <rect x="-70" y="-90" width="140" height="100" rx="12" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.6" strokeWidth="4"></rect>
          {/* Play Button */}
          <path d="M-15 -60 L15 -40 L-15 -20 Z" fill="currentColor" fillOpacity="0.8" stroke="none"></path>
          
          {/* Progress Bars (atm-bar style) */}
          <g transform="translate(-70 40)">
            <rect x="0" y="0" width="40" height="8" rx="4" fill="currentColor" fillOpacity="0.3"></rect>
            <rect x="0" y="0" width="140" height="8" rx="4" fill="currentColor" fillOpacity="0.8" style={{ animation: "atm-bar 8s infinite both", animationDelay: "1.5s" }}></rect>
          </g>
          <g transform="translate(-70 65)">
            <rect x="0" y="0" width="40" height="8" rx="4" fill="currentColor" fillOpacity="0.3"></rect>
            <rect x="0" y="0" width="100" height="8" rx="4" fill="currentColor" fillOpacity="0.8" style={{ animation: "atm-bar 8s infinite both", animationDelay: "1.8s" }}></rect>
          </g>
          <g transform="translate(-70 90)">
            <rect x="0" y="0" width="40" height="8" rx="4" fill="currentColor" fillOpacity="0.3"></rect>
            <rect x="0" y="0" width="120" height="8" rx="4" fill="currentColor" fillOpacity="0.8" style={{ animation: "atm-bar 8s infinite both", animationDelay: "2.1s" }}></rect>
          </g>
        </g>
      </g>

      {/* Connecting Flow (Center) */}
      <g>
        <line x1="-30" y1="0" x2="90" y2="-60" strokeWidth="8" strokeOpacity="0.4" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.5s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
        <circle cx="30" cy="-30" r="10" fill="var(--card)" strokeOpacity="0.9" strokeWidth="4" style={{ animation: "atm-pop 8s infinite both", animationDelay: "2.8s" }}></circle>
      </g>

      {/* Element B: Level Up (right) */}
      <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "1.5s" }} transform="translate(180, -60)">
        <g style={{ animation: "atm-turn-b 8s infinite both", animationDelay: "2.5s", transformOrigin: "center" }}>
          {/* Card Backing */}
          <rect x="-110" y="-140" width="220" height="200" rx="20" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.9" strokeWidth="6"></rect>
          
          {/* Trophy / Star Icon */}
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3.2s" }} transform="translate(0 -50)">
            <path d="M0 -30 L8 -10 L30 -10 L12 5 L20 25 L0 12 L-20 25 L-12 5 L-30 -10 L-8 -10 Z" fill="currentColor" fillOpacity="0.8" stroke="none"></path>
          </g>
          
          {/* LEVEL UP Text */}
          <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3.5s" }}>
            <text x="0" y="20" fontSize="28" fontWeight="800" fill="currentColor" stroke="none" textAnchor="middle">LEVEL UP</text>
          </g>
        </g>
      </g>

      {/* Floating Sparkles (like in Konsultasi) */}
      <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.0s" }} transform="translate(40 -150)">
        <circle cx="0" cy="0" r="12" fill="currentColor" fillOpacity="0.8" stroke="none"></circle>
        <path d="M-20 0 L20 0 M0 -20 L0 20" strokeWidth="4" strokeOpacity="0.5"></path>
      </g>
      <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.3s" }} transform="translate(260 80)">
        <circle cx="0" cy="0" r="8" fill="currentColor" fillOpacity="0.8" stroke="none"></circle>
        <path d="M-12 0 L12 0 M0 -12 L0 12" strokeWidth="4" strokeOpacity="0.5"></path>
      </g>
    </g>
  </svg>
                </div>
              </div>
              <div className="relative mt-4 space-y-1">
                <h2
                  className={`font-heading text-lg font-bold leading-snug transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  E-Learning
                </h2>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Platform belajar eksklusif dari Ruang Ngonten yang asik dan
                  menyenangkan hanya dalam 1 platform.
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
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-4 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] ${isDark ? "border border-rn-accent/30 bg-rn-accent/5 hover:bg-rn-accent/10 text-rn-accent" : "border border-rn-accent bg-rn-accent/20 hover:bg-rn-accent/30 text-gray-900"}`}
          >
            <span className="mr-1 text-lg leading-none">&lsaquo;</span> PROMO
            hingga 95%{" "}
            <Flame
              className="w-4 h-4 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,1)] animate-pulse"
              fill="currentColor"
            />
          </button>

          <h1
            className={`text-2xl md:text-4xl font-black font-heading mb-2 tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Pilih paket kamu
          </h1>
          <p
            className={`text-xs md:text-sm mb-6 md:mb-8 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Ambil kesempatan mumpung lagi diskon besar-besaran. Sekali bayar!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full text-left">
            {/* PAKET EBOOK BASIC */}
            <div
              className={`border rounded-2xl p-5 md:p-6 flex flex-col transition-colors duration-300 ${isDark ? "bg-[#18181b] border-white/5" : "bg-white border-gray-200"}`}
            >
              <h3
                className={`font-bold text-lg md:text-xl font-heading mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Paket Basic (Ebook)
              </h3>
              <p
                className={`text-xs md:text-sm mb-4 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Cocok buat yang mau fokus belajar teori faceless creator.
              </p>

              <div className="flex items-end gap-2 mb-2">
                <span
                  className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Rp 99k
                </span>
              </div>
              <div
                className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                Total <span className="line-through">Rp 2.419.000</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4">
                95% OFF
              </div>

              <div className="flex-1">
                <ul
                  className={`space-y-2 md:space-y-3 text-xs md:text-sm transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Ebook Ruang Ngonten (Personal Use)
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Ebook 30 Day Creator Challenge (Personal Use)
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Bimbingan Private 1-on-1 WhatsApp (6 Bulan)
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    6+ Bonus Strategi & Template Lainnya
                  </li>
                </ul>
              </div>

              <a
                href="http://lynk.id/ruangcreativemuslim/2124pkdew4ee/checkout"
                target="_blank"
                className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${isDark ? "bg-[#27272a] hover:bg-rn-accent hover:text-black text-white" : "bg-gray-900 hover:bg-rn-accent hover:text-black text-white"}`}
              >
                Pilih Paket Basic
              </a>
            </div>

            {/* PAKET TOOLS */}
            <div
              className={`border rounded-2xl p-5 md:p-6 flex flex-col transition-colors duration-300 ${isDark ? "bg-[#18181b] border-white/5" : "bg-white border-gray-200"}`}
            >
              <h3
                className={`font-bold text-lg md:text-xl font-heading mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Paket Sistem Tools
              </h3>
              <p
                className={`text-xs md:text-sm mb-4 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Cocok buat yang butuh bantuan AI untuk eksekusi ngonten.
              </p>

              <div className="flex items-end gap-2 mb-2">
                <span
                  className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Rp 99k
                </span>
              </div>
              <div
                className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                Total <span className="line-through">Rp 666.000</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4">
                85% OFF
              </div>

              <div className="flex-1">
                <ul
                  className={`space-y-2 md:space-y-3 text-xs md:text-sm transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Akses 8 Sistem AI Ruang Ngonten
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Ebook Ruang Ngonten (Included)
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Bonus 4 Resource Ekstra (Footage, Hook, Tools)
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Sekali Bayar, Akses Selamanya
                  </li>
                </ul>
              </div>

              <a
                href="http://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout"
                target="_blank"
                className={`mt-6 block text-center font-bold py-3 rounded-xl transition-all ${isDark ? "bg-[#27272a] hover:bg-rn-accent hover:text-black text-white" : "bg-gray-900 hover:bg-rn-accent hover:text-black text-white"}`}
              >
                Pilih Sistem Tools
              </a>
            </div>

            {/* PAKET EBOOK LENGKAP */}
            <div
              className={`border-2 border-rn-accent rounded-2xl p-5 md:p-6 flex flex-col relative transform lg:-translate-y-4 transition-colors duration-300 ${isDark ? "bg-[#18181b]" : "bg-white"}`}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rn-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Paling Worth
              </div>

              <h3
                className={`font-bold text-lg md:text-xl font-heading mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Paket Lengkap (Ebook)
              </h3>
              <p
                className={`text-xs md:text-sm mb-4 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Bonus terbanyak, akses jualan (PLR) dan Lifetime support.
              </p>

              <div className="flex items-end gap-2 mb-2">
                <span
                  className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Rp 149k
                </span>
              </div>
              <div
                className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                Total <span className="line-through">Rp 2.419.000</span>
              </div>
              <div className="inline-block bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4">
                94% OFF
              </div>

              <div className="flex-1">
                <ul
                  className={`space-y-2 md:space-y-3 text-xs md:text-sm transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  <li
                    className={`flex gap-2 items-start font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Semua isi Paket Basic
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Hak Jual Ulang (PLR) untuk berbagai materi
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Bimbingan Private 1-on-1 (Lifetime)
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Tools Text to Voice Over
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-rn-accent shrink-0 mt-0.5" />{" "}
                    Video Footage Siap Pakai
                  </li>
                </ul>
              </div>

              <a
                href="http://lynk.id/ruangcreativemuslim/w3pwykdq8j60/checkout"
                target="_blank"
                className="mt-6 block text-center bg-rn-accent text-black font-black py-3 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(208,226,6,0.2)]"
              >
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
            className={`font-bold flex items-center gap-1.5 hover:text-rn-accent transition-colors ml-1 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>{" "}
            ruangcreativemuslim
          </a>
        </div>
      </footer>
    </div>
  );
}
