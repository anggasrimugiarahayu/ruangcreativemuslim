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
                  <svg
                    viewBox="0 0 1642 1200"
                    className="w-full h-full"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      strokeOpacity="0.18"
                      strokeWidth="3"
                      strokeDasharray="3 14"
                    >
                      <line x1="21" y1="0" x2="21" y2="1200"></line>
                      <line x1="101" y1="0" x2="101" y2="1200"></line>
                      <line x1="181" y1="0" x2="181" y2="1200"></line>
                      <line x1="261" y1="0" x2="261" y2="1200"></line>
                      <line x1="341" y1="0" x2="341" y2="1200"></line>
                      <line x1="421" y1="0" x2="421" y2="1200"></line>
                      <line x1="501" y1="0" x2="501" y2="1200"></line>
                      <line x1="581" y1="0" x2="581" y2="1200"></line>
                      <line x1="661" y1="0" x2="661" y2="1200"></line>
                      <line x1="741" y1="0" x2="741" y2="1200"></line>
                      <line x1="821" y1="0" x2="821" y2="1200"></line>
                      <line x1="901" y1="0" x2="901" y2="1200"></line>
                      <line x1="981" y1="0" x2="981" y2="1200"></line>
                      <line x1="1061" y1="0" x2="1061" y2="1200"></line>
                      <line x1="1141" y1="0" x2="1141" y2="1200"></line>
                      <line x1="1221" y1="0" x2="1221" y2="1200"></line>
                      <line x1="1301" y1="0" x2="1301" y2="1200"></line>
                      <line x1="1381" y1="0" x2="1381" y2="1200"></line>
                      <line x1="1461" y1="0" x2="1461" y2="1200"></line>
                      <line x1="1541" y1="0" x2="1541" y2="1200"></line>
                      <line x1="1621" y1="0" x2="1621" y2="1200"></line>
                      <line x1="0" y1="40" x2="1642" y2="40"></line>
                      <line x1="0" y1="120" x2="1642" y2="120"></line>
                      <line x1="0" y1="200" x2="1642" y2="200"></line>
                      <line x1="0" y1="280" x2="1642" y2="280"></line>
                      <line x1="0" y1="360" x2="1642" y2="360"></line>
                      <line x1="0" y1="440" x2="1642" y2="440"></line>
                      <line x1="0" y1="520" x2="1642" y2="520"></line>
                      <line x1="0" y1="600" x2="1642" y2="600"></line>
                      <line x1="0" y1="680" x2="1642" y2="680"></line>
                      <line x1="0" y1="760" x2="1642" y2="760"></line>
                      <line x1="0" y1="840" x2="1642" y2="840"></line>
                      <line x1="0" y1="920" x2="1642" y2="920"></line>
                      <line x1="0" y1="1000" x2="1642" y2="1000"></line>
                      <line x1="0" y1="1080" x2="1642" y2="1080"></line>
                      <line x1="0" y1="1160" x2="1642" y2="1160"></line>
                    </g>
                    <g transform="translate(821 600)">
                      <g transform="translate(-12 0)">
                        <g className="sc-rise" style={{ animationDelay: "1.8s" }}>
                          {/* Tablet/Book Background */}
                          <rect x="-180" y="-140" width="360" height="280" rx="20" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.7" strokeWidth="5"></rect>
                          
                          {/* Faceless Creator Silhouette */}
                          <g className="sc-pop" style={{ animationDelay: "2.1s" }}>
                            {/* Body */}
                            <path d="M-130 100 Q-90 0 -50 100 Z" fill="currentColor" fillOpacity="0.3"></path>
                            {/* Head with no face */}
                            <circle cx="-90" cy="0" r="30" fill="currentColor" fillOpacity="0.4"></circle>
                            {/* Mask / Sunglasses representing faceless */}
                            <rect x="-110" y="-5" width="40" height="10" rx="5" fill="var(--card)"></rect>
                          </g>

                          {/* "No Camera" Symbol */}
                          <g className="sc-pop" style={{ animationDelay: "2.5s" }} transform="translate(-150 -80)">
                            <circle cx="0" cy="0" r="25" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="4"></circle>
                            <rect x="-12" y="-8" width="24" height="16" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="3"></rect>
                            <circle cx="0" cy="0" r="4" fill="currentColor" fillOpacity="0.6"></circle>
                            <line x1="-18" y1="-18" x2="18" y2="18" stroke="currentColor" strokeOpacity="0.6" strokeWidth="4"></line>
                          </g>
                          
                          {/* Rising Cuan/Profit Chart */}
                          <g className="sc-rise" style={{ animationDelay: "3.2s" }}>
                            <polyline points="10,60 50,30 90,50 140,-20" fill="none" stroke="currentColor" strokeOpacity="0.8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="sc-draw" style={{ animationDelay: "3.5s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></polyline>
                            <circle cx="10" cy="60" r="6" fill="currentColor" className="sc-pop" style={{ animationDelay: "3.6s" }}></circle>
                            <circle cx="50" cy="30" r="6" fill="currentColor" className="sc-pop" style={{ animationDelay: "3.7s" }}></circle>
                            <circle cx="90" cy="50" r="6" fill="currentColor" className="sc-pop" style={{ animationDelay: "3.8s" }}></circle>
                            <circle cx="140" cy="-20" r="8" fill="#FACE68" className="sc-pop" style={{ animationDelay: "3.9s" }}></circle>
                            
                            {/* Dollar/Coin icon at the peak */}
                            <g className="sc-pop" style={{ animationDelay: "4.1s" }} transform="translate(140 -50)">
                               <circle cx="0" cy="0" r="16" fill="#FACE68" fillOpacity="0.2" stroke="#FACE68" strokeWidth="3"></circle>
                               <text x="0" y="0" fontSize="18" fontWeight="bold" fill="#FACE68" textAnchor="middle" dominantBaseline="central">$</text>
                            </g>
                          </g>

                          {/* Strategy / Checklist Lines */}
                          <line x1="10" y1="90" x2="120" y2="90" strokeWidth="6" strokeOpacity="0.4" className="sc-draw" style={{ animationDelay: "2.3s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></line>
                          <line x1="10" y1="110" x2="80" y2="110" strokeWidth="6" strokeOpacity="0.4" className="sc-draw" style={{ animationDelay: "2.5s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></line>
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
                  <svg
                    viewBox="0 0 1642 1200"
                    className="w-full h-full"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      strokeOpacity="0.18"
                      strokeWidth="3"
                      strokeDasharray="3 14"
                    >
                      <line x1="21" y1="0" x2="21" y2="1200"></line>
                      <line x1="101" y1="0" x2="101" y2="1200"></line>
                      <line x1="181" y1="0" x2="181" y2="1200"></line>
                      <line x1="261" y1="0" x2="261" y2="1200"></line>
                      <line x1="341" y1="0" x2="341" y2="1200"></line>
                      <line x1="421" y1="0" x2="421" y2="1200"></line>
                      <line x1="501" y1="0" x2="501" y2="1200"></line>
                      <line x1="581" y1="0" x2="581" y2="1200"></line>
                      <line x1="661" y1="0" x2="661" y2="1200"></line>
                      <line x1="741" y1="0" x2="741" y2="1200"></line>
                      <line x1="821" y1="0" x2="821" y2="1200"></line>
                      <line x1="901" y1="0" x2="901" y2="1200"></line>
                      <line x1="981" y1="0" x2="981" y2="1200"></line>
                      <line x1="1061" y1="0" x2="1061" y2="1200"></line>
                      <line x1="1141" y1="0" x2="1141" y2="1200"></line>
                      <line x1="1221" y1="0" x2="1221" y2="1200"></line>
                      <line x1="1301" y1="0" x2="1301" y2="1200"></line>
                      <line x1="1381" y1="0" x2="1381" y2="1200"></line>
                      <line x1="1461" y1="0" x2="1461" y2="1200"></line>
                      <line x1="1541" y1="0" x2="1541" y2="1200"></line>
                      <line x1="1621" y1="0" x2="1621" y2="1200"></line>
                      <line x1="0" y1="40" x2="1642" y2="40"></line>
                      <line x1="0" y1="120" x2="1642" y2="120"></line>
                      <line x1="0" y1="200" x2="1642" y2="200"></line>
                      <line x1="0" y1="280" x2="1642" y2="280"></line>
                      <line x1="0" y1="360" x2="1642" y2="360"></line>
                      <line x1="0" y1="440" x2="1642" y2="440"></line>
                      <line x1="0" y1="520" x2="1642" y2="520"></line>
                      <line x1="0" y1="600" x2="1642" y2="600"></line>
                      <line x1="0" y1="680" x2="1642" y2="680"></line>
                      <line x1="0" y1="760" x2="1642" y2="760"></line>
                      <line x1="0" y1="840" x2="1642" y2="840"></line>
                      <line x1="0" y1="920" x2="1642" y2="920"></line>
                      <line x1="0" y1="1000" x2="1642" y2="1000"></line>
                      <line x1="0" y1="1080" x2="1642" y2="1080"></line>
                      <line x1="0" y1="1160" x2="1642" y2="1160"></line>
                    </g>
                    <g transform="translate(821 600)">
                      <g transform="translate(-12 0)">
                        <g className="sc-rise" style={{ animationDelay: "0.1s" }}>
                          <rect x="-240" y="-120" width="480" height="240" rx="20" fill="currentColor" fillOpacity="0.04" strokeOpacity="0.7" strokeWidth="5"></rect>
                          
                          {/* 8 AI Systems orbiting a central Core */}
                          
                          {/* Central AI Brain/Core */}
                          <g className="sc-pop" style={{ animationDelay: "0.5s" }} transform="translate(0 0)">
                            <rect x="-30" y="-30" width="60" height="60" rx="15" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.9" strokeWidth="4"></rect>
                            <text x="0" y="0" fontSize="24" fontWeight="800" fill="currentColor" textAnchor="middle" dominantBaseline="central">AI</text>
                            {/* Pulsing ring */}
                            <circle cx="0" cy="0" r="45" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" className="sc-ring"></circle>
                          </g>

                          {/* Orbit paths */}
                          <circle cx="0" cy="0" r="90" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="10 10"></circle>
                          
                          {/* 8 System Nodes */}
                          <g className="sc-pop" style={{ animationDelay: "0.8s" }} transform="translate(0 -90)"><circle cx="0" cy="0" r="12" fill="#D0E206" fillOpacity="0.8"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "1.0s" }} transform="translate(63 -63)"><circle cx="0" cy="0" r="10" fill="currentColor" fillOpacity="0.4"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "1.2s" }} transform="translate(90 0)"><circle cx="0" cy="0" r="14" fill="#FACE68" fillOpacity="0.8"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "1.4s" }} transform="translate(63 63)"><circle cx="0" cy="0" r="8" fill="currentColor" fillOpacity="0.4"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "1.6s" }} transform="translate(0 90)"><circle cx="0" cy="0" r="12" fill="#5A9CB5" fillOpacity="0.8"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "1.8s" }} transform="translate(-63 63)"><circle cx="0" cy="0" r="10" fill="currentColor" fillOpacity="0.4"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "2.0s" }} transform="translate(-90 0)"><circle cx="0" cy="0" r="14" fill="currentColor" fillOpacity="0.6"></circle></g>
                          <g className="sc-pop" style={{ animationDelay: "2.2s" }} transform="translate(-63 -63)"><circle cx="0" cy="0" r="8" fill="currentColor" fillOpacity="0.4"></circle></g>

                          {/* "Bingung (messy)" -> "Eksekusi (structured)" Workflow Line */}
                          {/* Messy scribble on left */}
                          <path d="M-200,20 Q-180,60 -170,0 T-150,40 T-130,-10 T-110,20" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="4" className="sc-draw" style={{ animationDelay: "2.5s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></path>
                          
                          {/* Straight execution line on right */}
                          <line x1="120" y1="20" x2="210" y2="20" strokeWidth="6" strokeOpacity="0.8" className="sc-draw" style={{ animationDelay: "3.5s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></line>
                          {/* Checkmark */}
                          <path d="M190,10 L200,25 L220,-5" fill="none" stroke="#D0E206" strokeOpacity="1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="sc-draw" style={{ animationDelay: "4s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></path>
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
                  <svg
                    viewBox="0 0 1642 1200"
                    className="w-full h-full"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      strokeOpacity="0.18"
                      strokeWidth="3"
                      strokeDasharray="3 14"
                    >
                      <line x1="21" y1="0" x2="21" y2="1200"></line>
                      <line x1="101" y1="0" x2="101" y2="1200"></line>
                      <line x1="181" y1="0" x2="181" y2="1200"></line>
                      <line x1="261" y1="0" x2="261" y2="1200"></line>
                      <line x1="341" y1="0" x2="341" y2="1200"></line>
                      <line x1="421" y1="0" x2="421" y2="1200"></line>
                      <line x1="501" y1="0" x2="501" y2="1200"></line>
                      <line x1="581" y1="0" x2="581" y2="1200"></line>
                      <line x1="661" y1="0" x2="661" y2="1200"></line>
                      <line x1="741" y1="0" x2="741" y2="1200"></line>
                      <line x1="821" y1="0" x2="821" y2="1200"></line>
                      <line x1="901" y1="0" x2="901" y2="1200"></line>
                      <line x1="981" y1="0" x2="981" y2="1200"></line>
                      <line x1="1061" y1="0" x2="1061" y2="1200"></line>
                      <line x1="1141" y1="0" x2="1141" y2="1200"></line>
                      <line x1="1221" y1="0" x2="1221" y2="1200"></line>
                      <line x1="1301" y1="0" x2="1301" y2="1200"></line>
                      <line x1="1381" y1="0" x2="1381" y2="1200"></line>
                      <line x1="1461" y1="0" x2="1461" y2="1200"></line>
                      <line x1="1541" y1="0" x2="1541" y2="1200"></line>
                      <line x1="1621" y1="0" x2="1621" y2="1200"></line>
                      <line x1="0" y1="40" x2="1642" y2="40"></line>
                      <line x1="0" y1="120" x2="1642" y2="120"></line>
                      <line x1="0" y1="200" x2="1642" y2="200"></line>
                      <line x1="0" y1="280" x2="1642" y2="280"></line>
                      <line x1="0" y1="360" x2="1642" y2="360"></line>
                      <line x1="0" y1="440" x2="1642" y2="440"></line>
                      <line x1="0" y1="520" x2="1642" y2="520"></line>
                      <line x1="0" y1="600" x2="1642" y2="600"></line>
                      <line x1="0" y1="680" x2="1642" y2="680"></line>
                      <line x1="0" y1="760" x2="1642" y2="760"></line>
                      <line x1="0" y1="840" x2="1642" y2="840"></line>
                      <line x1="0" y1="920" x2="1642" y2="920"></line>
                      <line x1="0" y1="1000" x2="1642" y2="1000"></line>
                      <line x1="0" y1="1080" x2="1642" y2="1080"></line>
                      <line x1="0" y1="1160" x2="1642" y2="1160"></line>
                    </g>
                    <g transform="translate(821 600)">
                      <g transform="translate(-12 0)">
                        <g className="sc-rise" style={{ animationDelay: "0.1s" }}>
                          {/* Platform Canvas */}
                          <rect x="-220" y="-120" width="440" height="240" rx="16" fill="currentColor" fillOpacity="0.04" strokeOpacity="0.7" strokeWidth="5"></rect>
                          
                          {/* Fun Interactive Elements */}
                          {/* Star 1 */}
                          <g className="sc-pop" style={{ animationDelay: "1.5s" }} transform="translate(-180 -80)">
                            <path d="M0 -15 L4 -4 L15 -4 L6 3 L10 14 L0 7 L-10 14 L-6 3 L-15 -4 L-4 -4 Z" fill="#FACE68"></path>
                          </g>
                          {/* Star 2 */}
                          <g className="sc-pop" style={{ animationDelay: "2.2s" }} transform="translate(180 -60) scale(0.8)">
                            <path d="M0 -15 L4 -4 L15 -4 L6 3 L10 14 L0 7 L-10 14 L-6 3 L-15 -4 L-4 -4 Z" fill="#D0E206"></path>
                          </g>

                          {/* Smiling Face / Engagement Badge */}
                          <g className="sc-ghost" style={{ animationDelay: "3s" }} transform="translate(-150 50)">
                            <circle cx="0" cy="0" r="30" fill="var(--card)" stroke="currentColor" strokeOpacity="0.6" strokeWidth="4"></circle>
                            <circle cx="-10" cy="-5" r="4" fill="currentColor"></circle>
                            <circle cx="10" cy="-5" r="4" fill="currentColor"></circle>
                            <path d="M-15 10 Q0 25 15 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                          </g>

                          {/* Graduation Cap / Learning Icon */}
                          <g className="sc-ghost" style={{ animationDelay: "2s" }} transform="translate(150 40)">
                             <path d="M-40 0 L0 -20 L40 0 L0 20 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="4"></path>
                             <path d="M-25 12 L-25 30 Q0 45 25 30 L25 12" fill="none" stroke="currentColor" strokeWidth="4"></path>
                             <line x1="35" y1="5" x2="35" y2="25" stroke="currentColor" strokeWidth="4"></line>
                             <circle cx="35" cy="30" r="5" fill="currentColor"></circle>
                          </g>
                        </g>
                        
                        {/* Video Player Center Play Button (Fun & Exclusive) */}
                        <g className="sc-pop" style={{ animationDelay: "0.8s" }}>
                          <circle cx="0" cy="0" r="45" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.9" strokeWidth="5"></circle>
                          <circle cx="0" cy="0" r="60" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" className="sc-ring"></circle>
                          <path d="M-10 -15 L15 0 L-10 15 Z" fill="currentColor" fillOpacity="1" strokeLinejoin="round" strokeWidth="3"></path>
                        </g>

                        {/* Progress Bar (Eksklusif Platform) */}
                        <g className="sc-rise" style={{ animationDelay: "1.2s" }}>
                          <line x1="-100" y1="80" x2="100" y2="80" strokeWidth="8" strokeOpacity="0.2" strokeLinecap="round"></line>
                          <line x1="-100" y1="80" x2="20" y2="80" strokeWidth="8" strokeOpacity="0.9" strokeLinecap="round" className="sc-draw" style={{ animationDelay: "1.5s" }} pathLength={1} strokeDasharray="1" strokeDashoffset="1"></line>
                          <circle cx="20" cy="80" r="8" fill="#D0E206" className="sc-pop" style={{ animationDelay: "1.8s" }}></circle>
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
