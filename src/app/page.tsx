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
                      <g transform="translate(0 0) scale(2.0)">
                        <style>{`
                          @keyframes e-orbit { 0% { stroke-dashoffset: 60; } 100% { stroke-dashoffset: -60; } }
                          @keyframes e-pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; } }
                          @keyframes e-dot1 { 0%, 10% { opacity: 0; transform: translateX(-40px); } 20%, 80% { opacity: 1; transform: translateX(0); } 90%, 100% { opacity: 0; transform: translateX(0); } }
                          @keyframes e-dot2 { 0%, 30% { opacity: 0; transform: translateX(0); } 40%, 80% { opacity: 1; transform: translateX(40px); } 90%, 100% { opacity: 0; transform: translateX(40px); } }
                          @keyframes e-success { 0%, 50% { opacity: 0; transform: scale(0.5) translate(40px, 0); } 60%, 80% { opacity: 1; transform: scale(1) translate(40px, 0); } 90%, 100% { opacity: 0; transform: scale(0.5) translate(40px, 0); } }
                        `}</style>

                        {/* Connecting Lines */}
                        <path
                          d="M-40 0 L0 0 L40 0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeOpacity="0.15"
                          vectorEffect="non-scaling-stroke"
                        ></path>

                        {/* Node 1: Product */}
                        <g transform="translate(-40, 0)">
                          <rect
                            x="-12"
                            y="-14"
                            width="24"
                            height="28"
                            rx="3"
                            fill="var(--card)"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.4"
                            vectorEffect="non-scaling-stroke"
                          ></rect>
                          <circle
                            cx="0"
                            cy="-2"
                            r="4"
                            fill="currentColor"
                            fillOpacity="0.2"
                          ></circle>
                          <line
                            x1="-5"
                            y1="6"
                            x2="5"
                            y2="6"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            vectorEffect="non-scaling-stroke"
                          ></line>
                          <text
                            x="0"
                            y="24"
                            fontSize="7"
                            fontWeight="400"
                            fill="currentColor"
                            opacity="0.7"
                            textAnchor="middle"
                          >
                            Produk
                          </text>
                        </g>

                        {/* Node 2: Faceless (Phone) */}
                        <g transform="translate(0, 0)">
                          <rect
                            x="-14"
                            y="-20"
                            width="28"
                            height="40"
                            rx="4"
                            fill="var(--card)"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.4"
                            vectorEffect="non-scaling-stroke"
                          ></rect>
                          <circle
                            cx="0"
                            cy="0"
                            r="6"
                            fill="currentColor"
                            fillOpacity="0.1"
                          ></circle>
                          <path
                            d="M-8 0 Q0 -5 8 0 M-8 0 Q0 5 8 0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.5"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                          <path
                            d="M-6 12 Q0 8 6 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                          <text
                            x="0"
                            y="32"
                            fontSize="7"
                            fontWeight="400"
                            fill="currentColor"
                            opacity="0.7"
                            textAnchor="middle"
                          >
                            Faceless
                          </text>
                        </g>

                        {/* Node 3: Cuan (Empty state) */}
                        <g transform="translate(40, 0)">
                          <circle
                            cx="0"
                            cy="0"
                            r="14"
                            fill="var(--card)"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.2"
                            vectorEffect="non-scaling-stroke"
                            strokeDasharray="2 2"
                          ></circle>
                          <text
                            x="0"
                            y="26"
                            fontSize="7"
                            fontWeight="400"
                            fill="currentColor"
                            opacity="0.7"
                            textAnchor="middle"
                          >
                            Cuan
                          </text>
                        </g>

                        {/* Flow Animation */}
                        <circle
                          cx="-40"
                          cy="0"
                          r="2"
                          fill="var(--rn-accent)"
                          style={{ animation: "e-dot1 6s infinite" }}
                        ></circle>
                        <circle
                          cx="0"
                          cy="0"
                          r="2"
                          fill="#10B981"
                          style={{ animation: "e-dot2 6s infinite" }}
                        ></circle>

                        {/* Success State on Node 3 */}
                        <g
                          style={{
                            animation: "e-success 6s infinite",
                            transformOrigin: "center",
                          }}
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r="15"
                            fill="#10B981"
                            fillOpacity="0.1"
                            stroke="#10B981"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                          ></circle>
                          <text
                            x="0"
                            y="4"
                            fontSize="12"
                            fontWeight="600"
                            fill="#10B981"
                            textAnchor="middle"
                          >
                            $
                          </text>
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
                      <g transform="translate(0 0) scale(2.0)">
                        <style>{`
                          @keyframes t-path { 0%, 20% { stroke-dashoffset: 200; } 80%, 100% { stroke-dashoffset: 0; } }
                          @keyframes t-dot { 0%, 10% { opacity: 0; transform: scale(0); } 15%, 85% { opacity: 1; transform: scale(1); } 90%, 100% { opacity: 0; transform: scale(0); } }
                        `}</style>

                        {/* Background Path (Dimmed) */}
                        <path
                          d="M-60 -15 L60 -15 A 15 15 0 0 1 75 0 A 15 15 0 0 1 60 15 L-60 15"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeOpacity="0.1"
                          vectorEffect="non-scaling-stroke"
                        ></path>

                        {/* Active Progress Path (Green) */}
                        <path
                          d="M-60 -15 L60 -15 A 15 15 0 0 1 75 0 A 15 15 0 0 1 60 15 L-60 15"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="1.5"
                          vectorEffect="non-scaling-stroke"
                          strokeDasharray="200"
                          strokeDashoffset="200"
                          style={{ animation: "t-path 8s infinite" }}
                        ></path>

                        {/* The 8 Nodes */}
                        <g>
                          {/* Top Row: Niche, Bio, Ide, Script */}
                          <g transform="translate(-60, -15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "1.2s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="-10"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Niche
                            </text>
                          </g>

                          <g transform="translate(-20, -15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "2.0s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="-10"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Bio
                            </text>
                          </g>

                          <g transform="translate(20, -15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "2.8s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="-10"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Ide
                            </text>
                          </g>

                          <g transform="translate(60, -15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "3.6s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="-10"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Script
                            </text>
                          </g>

                          {/* Bottom Row: Jadwal (Left) <- Buku <- Slide <- ATM (Right) */}
                          <g transform="translate(60, 15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "4.8s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="12"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              ATM
                            </text>
                          </g>

                          <g transform="translate(20, 15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "5.6s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="12"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Slide
                            </text>
                          </g>

                          <g transform="translate(-20, 15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "6.4s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="12"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Buku
                            </text>
                          </g>

                          <g transform="translate(-60, 15)">
                            <circle
                              cx="0"
                              cy="0"
                              r="4"
                              fill="var(--card)"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              vectorEffect="non-scaling-stroke"
                            ></circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="2"
                              fill="#10B981"
                              style={{
                                animation: "t-dot 8s infinite",
                                animationDelay: "7.2s",
                              }}
                            ></circle>
                            <text
                              x="0"
                              y="12"
                              fontSize="6"
                              fontWeight="400"
                              fill="currentColor"
                              opacity="0.7"
                              textAnchor="middle"
                            >
                              Jadwal
                            </text>
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
                      <g transform="translate(0 0) scale(2.0)">
                        <style>{`
                          @keyframes l-step1 { 0%, 90%, 100% { opacity: 0; transform: scale(0.9); } 10%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step2 { 0%, 25%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 35%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                          @keyframes l-step3 { 0%, 50%, 90%, 100% { opacity: 0; transform: scale(0.5); } 60%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step4 { 0%, 65%, 90%, 100% { opacity: 0; transform: scale(0.5); } 75%, 85% { opacity: 1; transform: scale(1.2); } }
                          @keyframes l-stair { 0%, 25%, 90%, 100% { opacity: 0; transform: translateY(5px); } 35%, 80% { opacity: 1; transform: translateY(0); } }
                        `}</style>

                        {/* Step 2: Mentor & Student */}
                        <g
                          style={{
                            animation: "l-step1 8s infinite",
                            transformOrigin: "center",
                          }}
                        >
                          {/* Mentor (Left) */}
                          <g transform="translate(-40, 20)">
                            <circle
                              cx="0"
                              cy="-12"
                              r="6"
                              fill="var(--rn-accent)"
                              fillOpacity="0.8"
                            ></circle>
                            <path
                              d="M-10 8 Q0 -2 10 8 Z"
                              fill="var(--rn-accent)"
                              fillOpacity="0.5"
                            ></path>
                            <text
                              x="0"
                              y="18"
                              fontSize="7"
                              fontWeight="400"
                              fill="currentColor"
                              textAnchor="middle"
                            >
                              Mentor
                            </text>
                          </g>

                          {/* Student (Right) */}
                          <g transform="translate(40, 20)">
                            <circle
                              cx="0"
                              cy="-12"
                              r="6"
                              fill="currentColor"
                              fillOpacity="0.5"
                            ></circle>
                            <path
                              d="M-10 8 Q0 -2 10 8 Z"
                              fill="currentColor"
                              fillOpacity="0.2"
                            ></path>
                            <text
                              x="0"
                              y="18"
                              fontSize="7"
                              fontWeight="400"
                              fill="currentColor"
                              textAnchor="middle"
                            >
                              Member
                            </text>
                          </g>

                          {/* Guidance Line */}
                          <path
                            d="M-20 0 Q0 -10 20 0"
                            fill="none"
                            stroke="var(--rn-accent)"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                          <polygon
                            points="16,-5 20,0 15,3"
                            fill="var(--rn-accent)"
                          ></polygon>
                        </g>

                        {/* Step 3: Learning Path (Stairs) */}
                        <g>
                          <path
                            d="M-20 20 L-20 10 L0 10 L0 0 L20 0 L20 -10 L40 -10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.2"
                            strokeDasharray="2 2"
                            vectorEffect="non-scaling-stroke"
                            pathLength="1"
                            style={{ animation: "l-step2 8s infinite" }}
                          ></path>

                          <circle
                            cx="-20"
                            cy="20"
                            r="2"
                            fill="var(--rn-accent)"
                            style={{ animation: "l-stair 8s infinite" }}
                          ></circle>
                          <circle
                            cx="0"
                            cy="10"
                            r="2"
                            fill="var(--rn-accent)"
                            style={{
                              animation: "l-stair 8s infinite",
                              animationDelay: "0.2s",
                            }}
                          ></circle>
                          <circle
                            cx="20"
                            cy="0"
                            r="2"
                            fill="var(--rn-accent)"
                            style={{
                              animation: "l-stair 8s infinite",
                              animationDelay: "0.4s",
                            }}
                          ></circle>
                        </g>

                        {/* Step 4: Gamification / Reward */}
                        <g
                          style={{
                            animation: "l-step3 8s infinite",
                            transformOrigin: "40px -15px",
                          }}
                        >
                          <circle
                            cx="40"
                            cy="-15"
                            r="10"
                            fill="#FACE68"
                            fillOpacity="0.2"
                          ></circle>
                          <path
                            d="M37 -20 L43 -20 L41 -10 Q40 -5 39 -10 Z"
                            fill="#FACE68"
                          ></path>
                        </g>

                        <g
                          style={{
                            animation: "l-step4 8s infinite",
                            transformOrigin: "40px -25px",
                          }}
                        >
                          {/* Confetti / Stars */}
                          <circle
                            cx="33"
                            cy="-30"
                            r="1.5"
                            fill="#10B981"
                          ></circle>
                          <circle
                            cx="47"
                            cy="-25"
                            r="2"
                            fill="#FACE68"
                          ></circle>
                          <circle
                            cx="36"
                            cy="-35"
                            r="1.5"
                            fill="var(--rn-accent)"
                          ></circle>
                          <text
                            x="40"
                            y="-40"
                            fontSize="8"
                            fontWeight="600"
                            fill="#FACE68"
                            textAnchor="middle"
                          >
                            LEVEL UP
                          </text>
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
