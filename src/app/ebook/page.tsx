
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Rocket, Star, ChevronLeft, ChevronRight, Lock, Zap, Smartphone, HelpCircle, Key, Check, BookOpen, Lightbulb, Map, User, Search, PlayCircle, DollarSign, PenTool, LayoutDashboard, Copy, UserCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  
  useEffect(() => {
    // SLIDER LOGIC
    let currentSlide = 0;
    const totalSlides = 7; 
    
    ;window.updateSlider = function() {
        const slider = document.getElementById('hero-slider');
        const dots = document.querySelectorAll('.slide-dot');
        if(!slider) return;
        
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            if(index === currentSlide) {
                dot.classList.remove('bg-gray-600', 'w-1.5');
                dot.classList.add('bg-rn-accent', 'w-4');
            } else {
                dot.classList.remove('bg-rn-accent', 'w-4');
                dot.classList.add('bg-gray-600', 'w-1.5');
            }
        });
    }
    
    ;window.nextSlide = function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        window.updateSlider?.();
    }
    
    ;window.prevSlide = function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        window.updateSlider?.();
    }

    // FEATURE ACCORDION LOGIC
    ;window.toggleFeature = function(index: number) {
        const content = document.getElementById('feat-content-' + index);
        const icon = document.getElementById('feat-icon-' + index);
        if(!content) return;
        
        if (content.classList.contains('hidden')) {
            for(let i=1; i<=8; i++) {
                const c = document.getElementById('feat-content-' + i);
                const ic = document.getElementById('feat-icon-' + i);
                if(c && !c.classList.contains('hidden')) {
                    c.classList.add('hidden');
                    if(ic) ic.style.transform = 'rotate(0deg)';
                }
            }
            content.classList.remove('hidden');
            if(icon) icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            if(icon) icon.style.transform = 'rotate(0deg)';
        }
    }

    // FAQ ACCORDION LOGIC
    ;window.toggleFaq = function(index: number) {
        const content = document.getElementById('faq-content-' + index);
        const icon = document.getElementById('faq-icon-' + index);
        if(!content) return;
        
        if (content.classList.contains('hidden')) {
            for(let i=1; i<=9; i++) {
                const c = document.getElementById('faq-content-' + i);
                const ic = document.getElementById('faq-icon-' + i);
                if(c && !c.classList.contains('hidden')) {
                    c.classList.add('hidden');
                    if (ic) ic.style.transform = 'rotate(0deg)';
                }
            }
            content.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
        }
    }

    // TIMER LOGIC
    let time = 25 * 60 + 26;
    const minEl = document.getElementById('timer-min');
    const secEl = document.getElementById('timer-sec');
    
    const interval = setInterval(() => {
        if(time > 0) time--;
        const m = Math.floor(time / 60);
        const s = time % 60;
        if(minEl) minEl.innerText = m.toString().padStart(2, '0');
        if(secEl) secEl.innerText = s.toString().padStart(2, '0');
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div>
  {/* App-like Container for Desktop (Centered, max-width, no side borders) */}
  <div className="w-full max-w-[720px] mx-auto bg-rn-dark-bg min-h-screen relative shadow-2xl">
    {/* HEADER (tanpa border bawah) */}
    <header className="px-4 sm:px-5 py-3 flex justify-between items-center sticky top-0 bg-rn-dark-bg/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2">
        <span className="font-black font-heading text-[16px] sm:text-[22px] tracking-tight text-white">Ruang Ngonten</span>
      </div>
      <a href="#paket-harga-basic" style={{textDecoration: 'none !important'}} className="bg-white !text-black px-4 py-2 rounded-full font-bold text-[10px] sm:text-[12px] border-2 border-white hover:bg-rn-accent hover:border-rn-accent hover:!text-black active:bg-rn-accent active:border-rn-accent active:!text-black transition-all duration-200 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] whitespace-nowrap flex items-center justify-center select-none">
        BELI EBOOK
      </a>
    </header>
    {/* MAIN CONTENT AREA */}
    <main className="px-4 sm:px-5 py-8 space-y-10">
      {/* SECTION 1: HERO & PROBLEM AWARENESS */}
      <section className="flex flex-col items-start text-left w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="rocket" className="w-3.5 h-3.5 text-rn-accent" />
          STRATEGI FACELESS CREATOR
        </div>
        {/* Headline */}
        <h1 className="text-[32px] sm:text-[42px] md:text-[48px] font-black font-heading leading-[1.1] tracking-tight mb-3 text-white w-full">
          Mau Hasilin <span className="text-white">1–2 Digit</span> dari Sosmed? <span className="text-rn-accent italic">Nggak Harus Nunjukin Wajah. Nggak Harus Resign.</span>
        </h1>
        {/* Subheadline */}
        <div className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full mb-6 leading-[1.6]">
          <p>
            Cukup 1-2 jam sehari, mulai bangun akun faceless yang pelan-pelan jadi <span className="text-rn-accent font-bold italic">sumber cuan jangka panjang.</span>
          </p>
        </div>
        {/* Main CTA Button */}
        <div className="mb-6 w-full sm:w-auto flex justify-start">
          <a href="#paket-harga-basic" style={{textDecoration: 'none !important'}} className="w-full sm:w-auto bg-white !text-black px-4 py-2 rounded-full font-bold text-[10px] sm:text-[12px] border-2 border-white hover:bg-rn-accent hover:border-rn-accent hover:!text-black active:bg-rn-accent active:border-rn-accent active:!text-black transition-all duration-200 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] whitespace-nowrap flex items-center justify-center select-none">
            SAYA MAU MULAI NGONTEN
          </a>
        </div>
        {/* Social Proof */}
        <div className="flex items-center justify-start gap-3 mb-6">
          <div className="flex -space-x-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-rn-accent to-[#a3b300] border-2 border-[#0f0f11] flex items-center justify-center text-black font-black text-[9px] sm:text-[10px] relative z-40">AR</div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 border-2 border-[#0f0f11] flex items-center justify-center text-black font-black text-[9px] sm:text-[10px] relative z-30">DK</div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-900 border-2 border-[#0f0f11] flex items-center justify-center text-white font-black text-[9px] sm:text-[10px] relative z-20">SM</div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-bl from-rn-accent to-yellow-500 border-2 border-[#0f0f11] flex items-center justify-center text-black font-black text-[9px] sm:text-[10px] relative z-10">FN</div>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex gap-1 text-rn-accent mb-0.5">
              <i data-lucide="star" className="w-3.5 h-3.5 fill-current text-rn-accent" />
              <i data-lucide="star" className="w-3.5 h-3.5 fill-current text-rn-accent" />
              <i data-lucide="star" className="w-3.5 h-3.5 fill-current text-rn-accent" />
              <i data-lucide="star" className="w-3.5 h-3.5 fill-current text-rn-accent" />
              <i data-lucide="star" className="w-3.5 h-3.5 fill-current text-rn-accent" />
            </div>
            <span className="text-[12px] sm:text-[13px] text-gray-300 font-medium">
              <strong className="font-bold text-white tracking-wide">700+ orang</strong> sudah baca
            </span>
          </div>
        </div>
        {/* Media Mockup SLIDER (Polosan + Navigation) */}
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#18181b] flex flex-col border border-[#27272a]/50 shadow-lg text-left mb-4 group">
          {/* Slider Container */}
          <div id="hero-slider" className="flex w-full transition-transform duration-500 ease-out" style={{transform: 'translateX(0%)'}}>
            {/* Slide 1: Hero Image */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image priority width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594516/Frame_90_siuhne.png" alt="Hero Image" className="w-full h-full object-cover" />
            </div>
            {/* Slide 2: Feb */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594192/Frame_87_ramlga.png" alt="Screenshot Februari" className="w-full h-full object-cover" />
            </div>
            {/* Slide 3: Mar */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594192/Frame_86_mqz5pa.png" alt="Screenshot Maret" className="w-full h-full object-cover" />
            </div>
            {/* Slide 4: Apr */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594192/Frame_85_r93b9z.png" alt="Screenshot April" className="w-full h-full object-cover" />
            </div>
            {/* Slide 5: Mei */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594191/Frame_84_ddf2ev.png" alt="Screenshot Mei" className="w-full h-full object-cover" />
            </div>
            {/* Slide 6: Jun */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594192/Frame_89_zlhea8.png" alt="Screenshot Juni" className="w-full h-full object-cover" />
            </div>
            {/* Slide 7: Jul */}
            <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center shrink-0">
              <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786594192/Frame_88_xxwua5.png" alt="Screenshot Juli" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Navigation Buttons */}
          <button onClick={() => { if (typeof window !== 'undefined' && window.prevSlide) window.prevSlide(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center text-white border border-white/10 backdrop-blur-sm transition-all z-10">
            <i data-lucide="chevron-left" className="w-5 h-5" />
          </button>
          <button onClick={() => { if (typeof window !== 'undefined' && window.nextSlide) window.nextSlide(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center text-white border border-white/10 backdrop-blur-sm transition-all z-10">
            <i data-lucide="chevron-right" className="w-5 h-5" />
          </button>
          {/* Indicators (7 Dots) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            <div className="w-4 h-1.5 rounded-full bg-rn-accent slide-dot transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 slide-dot transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 slide-dot transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 slide-dot transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 slide-dot transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 slide-dot transition-all duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 slide-dot transition-all duration-300" />
          </div>
        </div>
        {/* Trust Badges rata tengah */}
        <div className="flex flex-wrap items-center justify-center w-full text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest font-heading gap-4 sm:gap-6 mt-2">
          <div className="flex items-center justify-center gap-1.5"><i data-lucide="lock" className="w-3.5 h-3.5 text-rn-accent" /><span>Pembayaran aman</span></div>
          <div className="flex items-center justify-center gap-1.5"><i data-lucide="zap" className="w-3.5 h-3.5 text-rn-accent" /><span>Akses langsung</span></div>
          <div className="flex items-center justify-center gap-1.5"><i data-lucide="smartphone" className="w-3.5 h-3.5 text-rn-accent" /><span>Tanpa install</span></div>
        </div>
      </section>
      {/* TIMER SECTION */}
      <section className="text-center flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center mb-3">
          <span className="text-white text-[13px] sm:text-[15px] font-bold tracking-wide font-heading">Harga Early Access: Diskon 93% (Kuota terbatas!)</span>
        </div>
        <div className="flex items-baseline justify-center gap-2 sm:gap-4 font-heading tracking-tighter">
          <div className="flex flex-col items-center">
            <span className="text-[50px] sm:text-[70px] md:text-[80px] font-black text-white leading-none" id="timer-min">25</span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">Menit</span>
          </div>
          <span className="text-[36px] sm:text-[50px] md:text-[60px] font-black text-white pb-4 sm:pb-5">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[50px] sm:text-[70px] md:text-[80px] font-black text-white leading-none" id="timer-sec">26</span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">Detik</span>
          </div>
        </div>
      </section>
      {/* MASALAH SECTION */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="help-circle" className="w-3.5 h-3.5 text-rn-accent" />
          APAKAH INI YANG KAMU RASAKAN?
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight mb-5 text-white w-full">
          Dan Ya, Saya Tahu Persis <span className="text-rn-accent italic">Masalah Kamu Hadapi Saat Ini!</span>
        </h2>
        <div className="space-y-2 w-full">
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">🙈</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Mau cuan dari sosmed,</strong> <span className="text-gray-400">tapi nggak nyaman tampil di depan kamera.</span>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">😵‍💫</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Sudah lihat banyak tutorial,</strong> <span className="text-gray-400">tapi tetap bingung harus mulai dari mana.</span>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">⏳</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Mau mulai ngonten,</strong> <span className="text-gray-400">tapi merasa nggak punya banyak waktu.</span>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">😩</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Takut sudah capek bikin konten,</strong> <span className="text-gray-400">tapi hasilnya cuma jadi pengalaman.</span>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">🫣</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Takut dicengin</strong> <span className="text-gray-400">saat mulai mencoba sesuatu yang baru.</span>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">📦</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Takut salah pilih produk digital,</strong> <span className="text-gray-400">sudah dibuat susah payah tapi nggak laku.</span>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-start sm:items-center gap-4 border border-[#27272a]/50">
            <div className="text-2xl sm:text-3xl leading-none shrink-0 sm:mt-0 mt-0.5">📉</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px]">
              <strong className="font-bold text-gray-200">Sudah promosi ke sana-sini,</strong> <span className="text-gray-400">tapi belum ada penjualan.</span>
            </div>
          </div>
        </div>
        {/* Conclusion Box */}
        <div className="mt-5 w-full bg-[#18181b] p-5 rounded-2xl flex flex-col items-start gap-4 border border-[#27272a]/50 text-left">
          <p className="text-white text-[14px] sm:text-[15px] font-medium leading-[1.8]">
            Jujur aja ya, kebanyakan orang bakal berhenti bukan karena gak mampu, tapi karena gak punya arah dan bimbingan...
          </p>
          <p className="text-white text-[14px] sm:text-[15px] font-medium leading-[1.8]">
            Dan kamu beruntung banget kalau baca ini, karena saya bakal bimbing kamu dari <span className="text-rn-accent font-bold italic">0 banget sampe dapet puluhan ribu follower dan hasilin 1-2 digit dari sosmed...</span>
          </p>
        </div>
      </section>
      {/* SOLUSI SECTION */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="key" className="w-3.5 h-3.5 text-rn-accent" />
          SOLUSI
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight mb-3 text-white w-full">
          Memperkenalkan <span className="text-rn-accent italic">Ruang Ngonten Faceless!</span>
        </h2>
        <p className="text-[14px] sm:text-[15px] text-gray-300 font-medium w-full mb-6 leading-[1.6]">
          RUANG NGONTEN dibuat untuk membantu kamu membangun akun faceless dengan lebih terarah.
        </p>
        {/* Media Mockup Cover Ebook */}
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#18181b] flex flex-col border border-[#27272a]/50 shadow-lg text-left mb-8">
          <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center">
            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786599040/Frame_91_sifujb.png" alt="Cover Ebook Ruang Ngonten" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* APA ITU RUANG NGONTEN FACELESS? */}
        <div className="mb-8 w-full">
          <h3 className="text-[20px] sm:text-[24px] font-black font-heading text-white mb-2">Apa itu Ruang Ngonten Faceless?</h3>
          <p className="text-[14px] sm:text-[15px] text-gray-300 font-medium mb-4">Ruang Ngonten Faceless adalah panduan ngonten untuk:</p>
          <div className="space-y-2 mb-5">
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Bangun Akun Sosmed dari Nol</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Tanpa Harus Nunjukin Wajah</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Tanpa Stok Barang</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Tanpa Ribet Mulai dari Mana</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Dan Punya Peluang Menghasilkan dari Konten</div>
            </div>
          </div>
          {/* Intinya Box */}
          <div className="bg-[#18181b] p-5 rounded-2xl flex flex-col items-start gap-3 border border-[#27272a]/50">
            <p className="text-white text-[14px] sm:text-[15px] font-medium leading-[1.6]">
              Intinya, semua dijelasin <span className="text-rn-accent font-bold italic">step by step, praktikal, dan bisa langsung dipraktekin.</span>
            </p>
          </div>
        </div>
        {/* APA AJA YANG KAMU DAPATKAN? */}
        <div className="mb-8 w-full">
          <h3 className="text-[20px] sm:text-[24px] font-black font-heading text-white mb-4">Apa Aja Yang Kamu Dapatkan?</h3>
          <div className="space-y-2">
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Dibimbing mulai dari nol memahami bisnis produk digital.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Dibimbing membangun akun Instagram dengan lebih terarah.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Dibimbing menemukan dan membuat konten yang menarik.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Dibimbing memahami cara mendistribusikan produk digital.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Dibimbing menemukan cara monetisasi tanpa harus punya produk sendiri.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Akses 8 juta+ produk digital yang siap dijual kembali.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Ebook lengkap dengan video tutorial.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Bonus ebook untuk personal use.</div>
            </div>
          </div>
        </div>
        {/* APA KEUNGGULAN KELAS INI? */}
        <div className="w-full">
          <h3 className="text-[20px] sm:text-[24px] font-black font-heading text-white mb-4">Apa Keunggulan Kelas Ini?</h3>
          <div className="space-y-2">
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Praktek 100% bisa pake hp doang.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Roadmap harian 30 hari.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Template Hook Konten (Ebook).</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Akses materi lifetime, bisa diakses dimana saja.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Free update materi seumur hidup tidak perlu bayar lagi.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-7 h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-200 font-medium">Konsultasi 1 on 1 langsung via WhatsApp personal.</div>
            </div>
          </div>
        </div>
      </section>
      {/* CARA KERJANYA */}
      {/* STREAMING_CHUNK:Setting up the how it works section... */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="settings" className="w-3.5 h-3.5 text-rn-accent animate-[spin_3s_linear_infinite]" />
          CARA KERJANYA
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight mb-5 text-white w-full">
          3 Langkah. <span className="text-rn-accent italic">Dari Bingung Jadi Mulai.</span>
        </h2>
        <div className="space-y-2 mb-5 w-full">
          <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/50">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg font-black font-heading text-[15px] sm:text-[16px]">1</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] font-medium text-gray-300">
              <strong className="font-bold text-white">Beli &amp; Akses:</strong> Dapatkan RUANG NGONTEN beserta bonusnya.
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/50">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg font-black font-heading text-[15px] sm:text-[16px]">2</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] font-medium text-gray-300">
              <strong className="font-bold text-white">Baca &amp; Ikuti:</strong> Pelajari RUANG NGONTEN, lalu praktikkan melalui <span className="text-rn-accent font-bold italic">30 Day Creator Challenge</span>.
            </div>
          </div>
          <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/50">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg font-black font-heading text-[15px] sm:text-[16px]">3</div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] font-medium text-gray-300">
              <strong className="font-bold text-white">Praktikkan:</strong> Mulai ngonten, evaluasi, dan kembangkan akunmu bertahap.
            </div>
          </div>
        </div>
        {/* Conclusion Box */}
        <div className="bg-[#18181b] p-5 rounded-2xl flex flex-col items-start gap-3 border border-[#27272a]/50 w-full">
          <p className="text-white text-[14px] sm:text-[15px] font-medium leading-[1.6]">
            Kunci utama dari semua ini cuma tiga: <span className="text-rn-accent font-bold italic">Baca. Praktikkan. Konsisten.</span>
          </p>
        </div>
      </section>
      {/* ISI RUANG NGONTEN */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="book-open" className="w-3.5 h-3.5 text-rn-accent" />
          ISI RUANG NGONTEN
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight mb-3 text-white w-full">
          7 Fase untuk Membantu Kamu <span className="text-rn-accent italic">Mulai Ngonten dari Nol.</span>
        </h2>
        <p className="text-[14px] sm:text-[15px] text-gray-300 font-medium w-full mb-6 leading-[1.6]">
          Mulai dari mindset, menentukan arah, membangun akun, mencari bahan konten, produksi, monetisasi, hingga analisa dan evaluasi.
        </p>
        {/* Media Mockup 7 Fase */}
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#18181b] flex flex-col border border-[#27272a]/50 shadow-lg text-left mb-6">
          <div className="relative w-full aspect-video bg-[#18181b] flex items-center justify-center">
            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786600798/Frame_92_asjwai.png" alt="Visual 7 Fase Ngonten" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="space-y-2 w-full" id="features-container">
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(1); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="lightbulb" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Mindset Kreator Muslim</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-1" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-1" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Sebelum mikirin konten, kamu perlu benahi satu hal yang lebih penting dari semua strategi niat dan kesadaran. Di fase ini kamu akan paham kenapa ngonten sebagai Muslim itu bukan sekadar cari views, tapi soal tanggung jawab yang jauh lebih besar dari angka di dashboard.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(2); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="map" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 1: Nentuin Arah Langkah</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-2" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-2" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Banyak kreator capek di tengah jalan bukan karena nggak berbakat tapi karena dari awal nggak tahu mau ke mana. Di fase ini kamu akan nemuin niche yang pas, kenali siapa audiensmu, dan pahami masalah yang bisa kamu selesaikan lewat konten. Fondasi yang kuat dimulai dari sini.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(3); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="user" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 2: Bangun Akun Unikmu</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-3" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-3" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Profil itu kesan pertama. Sebelum kontenmu dilihat, akunmu udah dinilai duluan. Di fase ini kamu akan belajar setup akun yang bikin orang mau stay dari username, bio, foto profil, sampai cara &quot;panasin&quot; algoritma sebelum mulai posting.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(4); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="search" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 3: Riset Bahan Konten</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-4" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-4" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Nggak ada kreator yang otaknya selalu penuh ide yang ada kreator yang tahu cara ngisinya. Di fase ini kamu akan belajar cara nemuin ide konten yang nggak ada habisnya, bikin sistem penyimpanan ide, dan rencanain konten biar nggak panik tiap hari mau posting apa.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(5); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="play-circle" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 4: Ayok Gas Ngonten</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-5" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-5" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Teori udah cukup sekarang waktunya eksekusi. Di fase ini kamu akan belajar struktur konten yang terbukti works, cara bikin hook yang bikin orang berhenti scroll, storytelling yang bikin orang betah, sampai teknis dasar yang bikin kontenmu layak ditonton sampai akhir.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(6); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="dollar-sign" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 5: Prodigi dan Monetisasi</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-6" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-6" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Ngonten yang menghasilkan bukan keberuntungan itu sistem. Di fase ini kamu akan belajar bikin produk digital pertamamu, setup toko online, dan cara jualan yang nggak terasa maksa. Karena kontenmu bisa jadi lebih dari sekadar hiburan bisa jadi mesin penghasilan.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(7); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="bar-chart-2" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 6: Analisa dan Evaluasi</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-7" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-7" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Yang bikin kreator stuck bukan kurang konten tapi kurang tahu mana yang sebenarnya works. Di fase ini kamu akan belajar baca data yang penting, nemuin pola dari kontenmu sendiri, dan jadikan insight sebagai kompas buat tumbuh lebih terarah.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/50 hover:border-white/10 rounded-xl overflow-hidden group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFeature) window.toggleFeature(8); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading flex items-center justify-between text-white">
              <div className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                <i data-lucide="trending-up" className="w-4 h-4 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                <span className="text-[14px] sm:text-[15px] tracking-wide">Fase 7: Tumbuh dan Terus Belajar</span>
              </div>
              <i data-lucide="chevron-down" id="feat-icon-8" className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 shrink-0" />
            </button>
            <div id="feat-content-8" className="hidden px-5 pb-5 text-[13px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Finish line itu nggak ada yang ada cuma level berikutnya. Di fase terakhir ini kamu akan belajar cara upgrade skill secara konsisten, jaga mindset di fase-fase sepi, dan terus tumbuh tanpa kehilangan arah maupun prinsip sebagai kreator Muslim.
            </div>
          </div>
        </div>
      </section>
      {/* TARGET AUDIENS */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="users" className="w-3.5 h-3.5 text-rn-accent" />
          TARGET AUDIENS
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight mb-8 text-white w-full">
          Ebook Ini Cocok Buat Siapa?
        </h2>
        <div className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <i data-lucide="check-circle-2" className="w-4 h-4 sm:w-5 sm:h-5 text-rn-accent" />
            <h3 className="text-[14px] sm:text-[15px] font-bold font-heading text-rn-accent tracking-wider uppercase">Cocok Buat Kamu</h3>
          </div>
          <div className="space-y-2 mb-8">
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Baru mau mulai ngonten tapi nggak tahu harus mulai dari mana.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Sering kehabisan ide dan tiap mau posting harus mulai mikir dari nol.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Mau dapat cuan dari sosmed, tapi 100% nggak nyaman tampil di depan kamera.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Karyawan yang ingin membangun sumber side income tanpa harus resign.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Orang sibuk yang cuma punya waktu luang 1-2 jam sehari tapi ingin produktif.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Merasa gaptek, nggak jago desain, dan belum punya skill editing sama sekali.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-lg"><i data-lucide="check" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Masih ragu mau mulai karena takut salah langkah, ditipu, dan buang waktu.</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <i data-lucide="x-circle" className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <h3 className="text-[14px] sm:text-[15px] font-bold font-heading text-red-500 tracking-wider uppercase">Belum Cocok Kalau</h3>
          </div>
          <div className="space-y-2">
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-lg"><i data-lucide="x" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Kamu sudah punya puluhan ribu followers dan sistem yang stabil.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-lg"><i data-lucide="x" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Mencari &quot;cara cepat kaya&quot; atau cuan instan dalam semalam.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-lg"><i data-lucide="x" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Cuma mau beli ebooknya saja tanpa ada niat praktik konsisten.</div>
            </div>
            <div className="bg-[#18181b] rounded-xl p-4 flex items-center gap-4 border border-[#27272a]/30">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-lg"><i data-lucide="x" className="w-4 h-4" /></div>
              <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-300 font-medium">Merasa sudah tahu segalanya dan tertutup dengan hal baru.</div>
            </div>
          </div>
        </div>
      </section>
      {/* KATA MEREKA HEADER */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="w-full">
          <div className="inline-flex items-center justify-start gap-1.5 border border-[#27272a] bg-[#18181b] px-3 py-1 rounded-full text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mb-2.5 cursor-default">
            <i data-lucide="message-square" className="w-3 h-3 text-rn-accent" /> KATA MEREKA
          </div>
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight text-white w-full">
            700+ Creator <span className="text-rn-accent italic">Udah Buktiin Sendiri</span>
          </h2>
        </div>
      </section>
      {/* FULL BLEED MARQUEE WRAPPER */}
      <div className="relative w-[calc(100%+2rem)] -ml-4 sm:w-[calc(100%+2.5rem)] sm:-ml-5 overflow-hidden flex flex-col gap-4 sm:gap-5 mb-6">
        {/* BARIS 1: Bergerak Ke Kiri */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] transition-all" style={{animationDuration: '120s'}}>
          {/* GROUP 1 */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
            {/* Card 1 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Alhamdulillah dari awalnya ragu, dengan bimbingan kakak saya berani memulai. Sekarang sudah ada yang beli produknya!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SY</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Syaeful</span><span className="text-gray-500 text-[11px] font-medium">Creator Parenting</span></div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sangat terbantu dengan layanan Ruang Creative Muslim, mulai dari hal mendasar sampai bimbingannya. Terima kasih!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">RG</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Raga</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Jujur awalnya skeptis, tapi isinya daging semua! Penjelasan step by step, bikin paham ritme ngonten. Must read!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SN</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Sans</span><span className="text-gray-500 text-[11px] font-medium">Programmer Creator</span></div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ebook ini powerful! Gokil parah, sampai saya bisa buat ilustrasi animasi dan dikembangkan jadi animasi bergerak.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AZ</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Aziz</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Isinya sangat to the point dan cukup jelas. Gampang banget dipahami pemula.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">RQ</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Rizqi</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Alhamdulillah setelah mempraktekkan isi ebook ini, konten saya jadi viral. Terima kasih bimbingannya coach!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">CH</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Chandranurtri</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ebooknya jelas dan mudah dimengerti. Bismillah semoga dimudahkan dalam proses prakteknya.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AI</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Aai</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">The best banget untuk panduannya beserta bonusnya, mantapss! Langsung siap gas ngonten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">DM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Damora</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 9 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">MasyaAllah isinya ngena banget. Pikiran jadi terbuka dan semangat untuk berusaha lebih maksimal lagi.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AW</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Awal</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 10 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sangat memotivasi! Ebook ini jadi bahan bakar awal saya buat semangat memulai ngonten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">RC</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Rizca</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
          </div>
          {/* GROUP 1 CLONE (Untuk Looping) */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Alhamdulillah dari awalnya ragu, dengan bimbingan kakak saya berani memulai. Sekarang sudah ada yang beli produknya!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SY</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Syaeful</span><span className="text-gray-500 text-[11px] font-medium">Creator Parenting</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sangat terbantu dengan layanan Ruang Creative Muslim, mulai dari hal mendasar sampai bimbingannya. Terima kasih!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">RG</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Raga</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Jujur awalnya skeptis, tapi isinya daging semua! Penjelasan step by step, bikin paham ritme ngonten. Must read!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SN</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Sans</span><span className="text-gray-500 text-[11px] font-medium">Programmer Creator</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ebook ini powerful! Gokil parah, sampai saya bisa buat ilustrasi animasi dan dikembangkan jadi animasi bergerak.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AZ</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Aziz</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Isinya sangat to the point dan cukup jelas. Gampang banget dipahami pemula.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">RQ</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Rizqi</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Alhamdulillah setelah mempraktekkan isi ebook ini, konten saya jadi viral. Terima kasih bimbingannya coach!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">CH</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Chandranurtri</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ebooknya jelas dan mudah dimengerti. Bismillah semoga dimudahkan dalam proses prakteknya.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AI</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Aai</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">The best banget untuk panduannya beserta bonusnya, mantapss! Langsung siap gas ngonten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">DM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Damora</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">MasyaAllah isinya ngena banget. Pikiran jadi terbuka dan semangat untuk berusaha lebih maksimal lagi.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AW</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Awal</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sangat memotivasi! Ebook ini jadi bahan bakar awal saya buat semangat memulai ngonten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">RC</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Rizca</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* BARIS 2: Bergerak Ke Kanan */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] transition-all mt-1" style={{animationDuration: '120s'}}>
          {/* GROUP 2 */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
            {/* Card 1 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ebooknya mengubah mindset saya jadi lebih baik, penjelasannya mudah dipahami. Rekomendasi pokoknya!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">FL</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Fail</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">MasyaAllah sangat membantu dan memotivasi diri ini untuk mulai kembali setelah pernah jatuh.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">DM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Dimas</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sangat bermanfaat! Yang awalnya IG cuma buat scroll, kini udah ada gambaran biar IG bisa cuan.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SF</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Sufa</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Materinya powerful tapi ringan dibaca. Mudah dipahami dan bikin saya semangat untuk mulai ngonten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SD</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Saefudin</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Tutorial dan penjelasannya jelas. Tinggal pelan-pelan praktek step by step sesuai arahan.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">WH</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Wahyu</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ilmunya mendetail. Sangat bersyukur diingatkan menjaga adab &amp; syariat Islam dalam bikin konten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Amir</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Storytelling dan bahasanya bagus, sangat mudah dimengerti buat yang masih awam.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">BR</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Beri</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sudah sering beli produk serupa, tapi kali ini saya akan terapkan step by step sesuai arahan di sini.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">HM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Hamar</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            {/* Card 9 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Materi sangat lengkap dan bantu saya ketahui pondasi penting dalam ngonten. Semoga segera ada hasilnya.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">NJ</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Najihah</span><span className="text-gray-500 text-[11px] font-medium">Business Owner</span></div>
              </div>
            </div>
            {/* Card 10 */}
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Dari beberapa eBook yang saya beli, ini yang paling mudah dipahami dan lengkap tutorialnya.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">LG</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Langgah</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
          </div>
          {/* GROUP 2 CLONE (Untuk Looping) */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ebooknya mengubah mindset saya jadi lebih baik, penjelasannya mudah dipahami. Rekomendasi pokoknya!</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">FL</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Fail</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">MasyaAllah sangat membantu dan memotivasi diri ini untuk mulai kembali setelah pernah jatuh.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">DM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Dimas</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sangat bermanfaat! Yang awalnya IG cuma buat scroll, kini udah ada gambaran biar IG bisa cuan.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SF</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Sufa</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Materinya powerful tapi ringan dibaca. Mudah dipahami dan bikin saya semangat untuk mulai ngonten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">SD</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Saefudin</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Tutorial dan penjelasannya jelas. Tinggal pelan-pelan praktek step by step sesuai arahan.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">WH</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Wahyu</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Ilmunya mendetail. Sangat bersyukur diingatkan menjaga adab &amp; syariat Islam dalam bikin konten.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">AM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Amir</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Storytelling dan bahasanya bagus, sangat mudah dimengerti buat yang masih awam.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">BR</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Beri</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Sudah sering beli produk serupa, tapi kali ini saya akan terapkan step by step sesuai arahan di sini.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">HM</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Hamar</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Materi sangat lengkap dan bantu saya ketahui pondasi penting dalam ngonten. Semoga segera ada hasilnya.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">NJ</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Najihah</span><span className="text-gray-500 text-[11px] font-medium">Business Owner</span></div>
              </div>
            </div>
            <div className="w-[260px] bg-[#18181b] rounded-2xl p-4 shrink-0 flex flex-col gap-3">
              <div className="flex gap-1 text-rn-accent"><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /><i data-lucide="star" className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-[13px] text-gray-300 font-medium leading-[1.6] italic line-clamp-3">Dari beberapa eBook yang saya beli, ini yang paling mudah dipahami dan lengkap tutorialnya.</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-8 h-8 rounded-full bg-rn-accent flex items-center justify-center text-black font-black font-heading text-[10px] shrink-0">LG</div>
                <div className="flex flex-col"><span className="font-bold text-white text-[13px] leading-tight font-heading">Kak Langgah</span><span className="text-gray-500 text-[11px] font-medium">Creator Digital</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MARQUEE */}
      {/* BONUS EKSKLUSIF SECTION */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="gift" className="w-3.5 h-3.5 text-rn-accent" /> BONUS EKSKLUSIF
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-black font-heading leading-[1.1] tracking-tight mb-3 text-white w-full">
          Bonus Gratis Khusus <span className="text-rn-accent italic">Pembelian Sekarang</span>
        </h2>
        <p className="text-[14px] sm:text-[15px] text-gray-300 font-medium mb-6">
          Selain RUANG NGONTEN, kamu juga mendapatkan 13 bonus untuk membantu kamu mulai, praktik, dan terus berkembang sebagai kreator.
        </p>
        <div className="space-y-2 mb-8 w-full">
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="message-circle" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Bimbingan Private 1-on-1:</strong> Diskusi, tanya jawab, feedback konten, dan review akun via WhatsApp.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="zap" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Teknik Cepat Bikin Konten:</strong> Panduan praktis membuat konten cepat dengan bantuan AI.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="trending-up" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Rahasia Ngonten 10K+ Views:</strong> Cara buat konten menarik untuk naikkan peluang dapat banyak views.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="sliders" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Rekomendasi Aplikasi Editing:</strong> Rekomendasi aplikasi alternatif untuk mengedit konten di HP.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="magnet" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Hook Bikin Viral:</strong> Panduan menyusun hook menarik agar audiens berhenti scroll.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="image" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Tutorial Foto Jadi Kartun:</strong> Panduan menyulap foto jadi karakter kartun menggunakan AI.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="layout-template" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Template Design Produk:</strong> Template siap pakai untuk desain produk digital yang estetik.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="package-open" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">8 Juta+ Produk Digital:</strong> Akses jutaan produk digital untuk kamu gunakan atau jual kembali.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="target" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">30 Day Creator Challenge:</strong> Panduan praktik harian 30 hari untuk mulai bangun akun bertahap.
            </div>
          </div>
          <div className="pt-4 pb-1 text-left w-full">
            <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest cursor-default">
              <i data-lucide="sparkles" className="w-3.5 h-3.5 text-rn-accent" /> BONUS SPESIAL
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="user-x" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Faceless Style Master:</strong> Cara buat variasi konten faceless dari satu referensi AI.
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="mic" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Tools Text to Voice Over:</strong> Tools praktis pengubah teks menjadi suara (voice over).
            </div>
          </div>
          <div className="bg-[#18181b] border border-[#27272a]/70 rounded-xl p-4 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-[#27272a] text-rn-accent flex items-center justify-center rounded-lg"><i data-lucide="video" className="w-4 h-4" /></div>
            <div className="leading-[1.5] text-[13px] sm:text-[14px] text-gray-400">
              <strong className="text-white font-bold">Video Footage Siap Pakai:</strong> Kumpulan B-roll yang bisa kamu manfaatkan untuk bahan konten.
            </div>
          </div>
        </div>
        {/* VALUE BREAKDOWN CARD */}
        <div className="bg-[#18181b] border border-[#27272a]/70 rounded-[24px] p-5 sm:p-7 w-full shadow-lg">
          <h3 className="text-[16px] sm:text-[18px] font-black font-heading text-white mb-6">Kalau Semua Bonus Ini Dibeli Terpisah...</h3>
          <div className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-gray-400 font-medium font-body mb-6">
            <div className="flex justify-between items-center">
              <span>Bimbingan Private 1-on-1</span>
              <span className="line-through">Rp 499.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Teknik Cepat Bikin Konten</span>
              <span className="line-through">Rp 69.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Rahasia Ngonten 10K+ Views</span>
              <span className="line-through">Rp 89.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Rekomendasi Aplikasi Editing</span>
              <span className="line-through">Rp 69.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Hook Bikin Viral</span>
              <span className="line-through">Rp 69.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tutorial Bikin Foto Jadi Kartun</span>
              <span className="line-through">Rp 100.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Template Design Produk</span>
              <span className="line-through">Rp 147.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>8 Juta+ Produk Digital</span>
              <span className="line-through">Rp 600.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>30 Day Creator Challenge</span>
              <span className="line-through">Rp 200.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Faceless Style Master</span>
              <span className="line-through">Rp 49.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tools Text to Voice Over</span>
              <span className="line-through">Rp 179.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Video Footage Siap Pakai</span>
              <span className="line-through">Rp 49.000</span>
            </div>
          </div>
          <hr className="border-[#27272a] border-t-[1.5px] w-full my-4" />
          <div className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-gray-300 font-bold font-body mb-4">
            <div className="flex justify-between items-center">
              <span>TOTAL BONUS</span>
              <span className="line-through">Rp 2.119.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Ebook Ruang Ngonten</span>
              <span className="line-through">Rp 300.000</span>
            </div>
          </div>
          <hr className="border-[#27272a] border-t-[1.5px] w-full my-4" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col text-left">
              <span className="text-[15px] sm:text-[18px] text-white font-black font-heading leading-tight tracking-tight">Total Value</span>
            </div>
            <div className="text-right shrink-0 pl-3">
              <span className="text-[22px] sm:text-[28px] text-rn-accent font-black font-heading leading-none tracking-tight">Rp 2.419.000,-</span>
            </div>
          </div>
        </div>
      </section>
      {/* HARGA SPESIAL (WHITE CARD ONLY) PAKET BASIC */}
      <section id="paket-harga-basic" className="scroll-mt-24 max-w-[480px] mx-auto w-full pt-4">
        <div className="bg-white rounded-[24px] p-6 sm:p-10 relative shadow-2xl overflow-hidden w-full">
          <div className="absolute top-0 right-0 bg-[#18181b] text-rn-accent px-4 py-2 sm:px-5 sm:py-2.5 rounded-bl-[20px] rounded-tr-[24px] font-black text-[12px] sm:text-[14px] tracking-wide font-heading z-10">
            Save 95%
          </div>
          {/* Header dengan Medali Sejajar Kiri */}
          <div className="flex items-center justify-start gap-3 sm:gap-4 mb-5 mt-2">
            <div className="shrink-0 relative">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#18181b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={8} r={7} />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                <polygon points="12 5 13.5 7 16 7 14 9 15 11 12 10 9 11 10 9 8 7 10.5 7 12 5" />
              </svg>
              <i data-lucide="sparkles" className="w-5 h-5 text-[#18181b] absolute -top-1 -left-2" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-black font-heading text-[#18181b] text-[18px] sm:text-[22px] leading-tight tracking-tight">Paket Bonus Basic</h3>
              <p className="text-gray-600 font-bold text-[12px] sm:text-[13px] mt-0.5 tracking-wide">(Terlaris)</p>
            </div>
          </div>
          {/* Harga Asli Dicoret */}
          <div className="text-center w-full px-2 mb-2 overflow-hidden">
            <span className="text-[#e11d48] font-black font-heading text-[24px] min-[360px]:text-[28px] sm:text-[34px] line-through decoration-[4px] decoration-[#e11d48] tracking-tight block w-full whitespace-nowrap">
              RP. 2.419.000,-
            </span>
          </div>
          <hr className="border-[#e5e7eb] border-t-[1.5px] w-[85%] mx-auto my-3" />
          {/* Harga Promo 3D Terpadat */}
          <div className="text-center w-full mb-8 overflow-hidden flex justify-center py-2 relative">
            <span className="text-rn-accent font-black font-heading text-[11vw] sm:text-[68px] leading-none tracking-tighter block whitespace-nowrap" style={{textShadow: '-1px -1px 0 #18181b, 0px -1px 0 #18181b, 1px -1px 0 #18181b, -1px 0px 0 #18181b, 1px 0px 0 #18181b, -1px 1px 0 #18181b, 0px 1px 0 #18181b, 1px 1px 0 #18181b, 2px 2px 0 #18181b, 3px 3px 0 #18181b, 4px 4px 0 #18181b, 5px 5px 0 #18181b, 6px 6px 0 #18181b, 7px 7px 0 #18181b, 8px 8px 0 #18181b, 9px 9px 0 #18181b'}}>
              99.000,-
            </span>
          </div>
          {/* List Fitur Polos Hitam Terpusat Kiri-Kanan & 1 Baris */}
          <ul className="space-y-2.5 mb-10 w-fit mx-auto text-[#18181b] font-medium text-[9px] min-[360px]:text-[10px] min-[390px]:text-[11px] sm:text-[14px] tracking-tight sm:tracking-normal list-disc pl-4 pr-4 sm:pl-6 sm:pr-6 marker:text-[#18181b] leading-[1.4]">
            <li className="whitespace-nowrap">Ebook Ruang Ngonten <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Ebook 30 Day Creator Challenge <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Update materi gratis selamanya</li>
            <li className="whitespace-nowrap">Bimbingan Private 1-on-1 via WhatsApp <span className="text-blue-600 font-bold">(6 bulan)</span></li>
            <li className="whitespace-nowrap">Teknik Cepat Bikin Konten <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Rahasia Ngonten 10K+ Views <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Rekomendasi Aplikasi Editing <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Hook Bikin Viral <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Tutorial Bikin Foto Jadi Kartun <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Template Design Produk <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Akses 8 Juta+ Produk Digital <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Sekali bayar untuk akses selamanya</li>
          </ul>
          {/* Button & Security Badges */}
          <div className="mt-6 flex flex-col items-center text-center w-full">
            <a href="http://lynk.id/ruangcreativemuslim/2124pkdew4ee/checkout" target="_blank" style={{textDecoration: 'none !important'}} className="w-full bg-rn-accent !text-black py-3.5 sm:py-4 rounded-full font-bold text-[13px] sm:text-[15px] border-2 border-black transition-all duration-200 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#000000] hover:bg-black hover:!text-white hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:bg-black active:!text-white active:shadow-none active:translate-x-[3px] active:translate-y-[3px] flex items-center justify-center mb-5 select-none">
              AMBIL HARGA PROMO
            </a>
            <div className="flex flex-row flex-nowrap items-center justify-center w-full text-[9px] sm:text-[11px] font-bold text-gray-500 font-body px-1 gap-2.5 sm:gap-3 whitespace-nowrap overflow-hidden">
              <div className="flex items-center gap-1.5 shrink-0"><i data-lucide="lock" className="w-3 h-3 text-gray-500 shrink-0" /><span>Pembayaran aman</span></div>
              <div className="flex items-center gap-1.5 shrink-0"><i data-lucide="zap" className="w-3 h-3 text-gray-500 shrink-0" /><span>Akses langsung</span></div>
              <div className="flex items-center gap-1.5 shrink-0"><i data-lucide="infinity" className="w-3 h-3 text-gray-500 shrink-0" /><span>Seumur hidup</span></div>
            </div>
          </div>
        </div>
      </section>
      {/* HARGA SPESIAL (WHITE CARD ONLY) PAKET LENGKAP */}
      <section id="paket-harga-lengkap" className="scroll-mt-24 max-w-[480px] mx-auto w-full pt-4">
        <div className="bg-white rounded-[24px] p-6 sm:p-10 relative shadow-2xl overflow-hidden w-full">
          <div className="absolute top-0 right-0 bg-[#18181b] text-rn-accent px-4 py-2 sm:px-5 sm:py-2.5 rounded-bl-[20px] rounded-tr-[24px] font-black text-[12px] sm:text-[14px] tracking-wide font-heading z-10">
            Save 94%
          </div>
          {/* Header dengan Medali Sejajar Kiri */}
          <div className="flex items-center justify-start gap-3 sm:gap-4 mb-5 mt-2">
            <div className="shrink-0 relative">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#18181b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={8} r={7} />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                <polygon points="12 5 13.5 7 16 7 14 9 15 11 12 10 9 11 10 9 8 7 10.5 7 12 5" />
              </svg>
              <i data-lucide="sparkles" className="w-5 h-5 text-[#18181b] absolute -top-1 -left-2" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-black font-heading text-[#18181b] text-[18px] sm:text-[22px] leading-tight tracking-tight">Paket Bonus Lengkap</h3>
              <p className="text-gray-600 font-bold text-[12px] sm:text-[13px] mt-0.5 tracking-wide">(Recommended)</p>
            </div>
          </div>
          {/* Harga Asli Dicoret */}
          <div className="text-center w-full px-2 mb-2 overflow-hidden">
            <span className="text-[#e11d48] font-black font-heading text-[24px] min-[360px]:text-[28px] sm:text-[34px] line-through decoration-[4px] decoration-[#e11d48] tracking-tight block w-full whitespace-nowrap">
              RP. 2.419.000,-
            </span>
          </div>
          <hr className="border-[#e5e7eb] border-t-[1.5px] w-[85%] mx-auto my-3" />
          {/* Harga Promo 3D Terpadat */}
          <div className="text-center w-full mb-8 overflow-hidden flex justify-center py-2 relative">
            <span className="text-rn-accent font-black font-heading text-[11vw] sm:text-[68px] leading-none tracking-tighter block whitespace-nowrap" style={{textShadow: '-1px -1px 0 #18181b, 0px -1px 0 #18181b, 1px -1px 0 #18181b, -1px 0px 0 #18181b, 1px 0px 0 #18181b, -1px 1px 0 #18181b, 0px 1px 0 #18181b, 1px 1px 0 #18181b, 2px 2px 0 #18181b, 3px 3px 0 #18181b, 4px 4px 0 #18181b, 5px 5px 0 #18181b, 6px 6px 0 #18181b, 7px 7px 0 #18181b, 8px 8px 0 #18181b, 9px 9px 0 #18181b'}}>
              149.000,-
            </span>
          </div>
          {/* List Fitur Polos Hitam Terpusat Kiri-Kanan & 1 Baris */}
          <ul className="space-y-2.5 mb-10 w-fit mx-auto text-[#18181b] font-medium text-[9px] min-[360px]:text-[10px] min-[390px]:text-[11px] sm:text-[14px] tracking-tight sm:tracking-normal list-disc pl-4 pr-4 sm:pl-6 sm:pr-6 marker:text-[#18181b] leading-[1.4]">
            <li className="whitespace-nowrap">Ebook Ruang Ngonten <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Ebook 30 Day Creator Challenge <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Update materi gratis selamanya</li>
            <li className="whitespace-nowrap">Bimbingan Private 1-on-1 via WhatsApp <span className="text-blue-600 font-bold">(Lifetime)</span></li>
            <li className="whitespace-nowrap">Teknik Cepat Bikin Konten <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Rahasia Ngonten 10K+ Views <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Rekomendasi Aplikasi Editing <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Hook Bikin Viral <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Tutorial Bikin Foto Jadi Kartun <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Faceless Style Master <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Tools Text to Voice Over <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Video Footage Siap Pakai <span className="text-red-600 font-bold">(Personal Use)</span></li>
            <li className="whitespace-nowrap">Template Design Produk <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Akses 8 Juta+ Produk Digital <span className="text-blue-600 font-bold">(Bisa Kamu Jual Lagi)</span></li>
            <li className="whitespace-nowrap">Sekali bayar untuk akses selamanya</li>
          </ul>
          {/* Button & Security Badges */}
          <div className="mt-6 flex flex-col items-center text-center w-full">
            <a href="http://lynk.id/ruangcreativemuslim/w3pwykdq8j60/checkout" target="_blank" style={{textDecoration: 'none !important'}} className="w-full bg-rn-accent !text-black py-3.5 sm:py-4 rounded-full font-bold text-[13px] sm:text-[15px] border-2 border-black transition-all duration-200 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#000000] hover:bg-black hover:!text-white hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:bg-black active:!text-white active:shadow-none active:translate-x-[3px] active:translate-y-[3px] flex items-center justify-center mb-5 select-none animate-heartbeat relative overflow-hidden group">
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full z-10 animate-shimmer pointer-events-none" />
              <span className="relative z-20">AMBIL HARGA PROMO</span>
            </a>
            <div className="flex flex-row flex-nowrap items-center justify-center w-full text-[9px] sm:text-[11px] font-bold text-gray-500 font-body px-1 gap-2.5 sm:gap-3 whitespace-nowrap overflow-hidden">
              <div className="flex items-center gap-1.5 shrink-0"><i data-lucide="lock" className="w-3 h-3 text-gray-500 shrink-0" /><span>Pembayaran aman</span></div>
              <div className="flex items-center gap-1.5 shrink-0"><i data-lucide="zap" className="w-3 h-3 text-gray-500 shrink-0" /><span>Akses langsung</span></div>
              <div className="flex items-center gap-1.5 shrink-0"><i data-lucide="infinity" className="w-3 h-3 text-gray-500 shrink-0" /><span>Seumur hidup</span></div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="w-full flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#18181b] px-3.5 py-1.5 rounded-full text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-3 cursor-default">
          <i data-lucide="help-circle" className="w-3.5 h-3.5 text-rn-accent" />
          FAQ
        </div>
        <h2 className="text-[24px] sm:text-[28px] font-black font-heading mb-5 text-white w-full">Yang Sering Ditanyain (FAQ)</h2>
        <div className="space-y-2 w-full" id="faq-container">
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(1); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Ini kelas online atau Ebook?
              <i data-lucide="chevron-down" id="faq-icon-1" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-1" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Ini adalah Ebook panduan strategi komprehensif yang di dalamnya juga dilengkapi dengan link Video Tutorial untuk memudahkan kamu mempraktikkannya.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(2); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Ini cocok untuk pemula?
              <i data-lucide="chevron-down" id="faq-icon-2" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-2" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Cocok. RUANG NGONTEN dibuat untuk membantu kamu mulai dari nol dengan langkah yang lebih terarah.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(3); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Harus tampil di depan kamera?
              <i data-lucide="chevron-down" id="faq-icon-3" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-3" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Nggak harus. Kamu bisa memulai dengan konsep faceless content.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(4); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Harus punya kamera atau laptop mahal?
              <i data-lucide="chevron-down" id="faq-icon-4" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-4" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Nggak. HP yang kamu punya sekarang sudah cukup untuk mulai.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(5); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Kalau belum tahu niche dan mau mulai dari mana?
              <i data-lucide="chevron-down" id="faq-icon-5" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-5" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Tenang. Kamu akan dipandu mulai dari menentukan arah, niche, audiens, sampai mulai membuat konten.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(6); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Apakah langsung bisa menghasilkan uang?
              <i data-lucide="chevron-down" id="faq-icon-6" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-6" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              RUANG NGONTEN bukan janji penghasilan instan. Kamu akan belajar berbagai cara monetisasi yang bisa dikembangkan sesuai kondisi dan prosesmu.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(7); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Kalau masih bingung setelah belajar?
              <i data-lucide="chevron-down" id="faq-icon-7" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-7" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Ada bimbingan private 1-on-1 via WhatsApp untuk membantu menjawab pertanyaan dan memberikan feedback.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(8); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Apa yang saya dapatkan setelah membeli?
              <i data-lucide="chevron-down" id="faq-icon-8" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-8" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Kamu mendapatkan Ebook RUANG NGONTEN + bonus lengkap, termasuk 30 Day Creator Challenge dan berbagai ebook, template, tools, serta bonus lainnya.
            </div>
          </div>
          <div className="border border-white/5 hover:border-white/10 rounded-xl overflow-hidden bg-[#18181b] group cursor-pointer transition-colors" onClick={() => { if (typeof window !== 'undefined' && window.toggleFaq) window.toggleFaq(9); }}>
            <button className="w-full px-5 py-4 text-left font-black font-heading text-[13px] sm:text-[14px] flex items-center justify-between text-gray-200">
              Apakah materi akan diupdate?
              <i data-lucide="chevron-down" id="faq-icon-9" className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0" />
            </button>
            <div id="faq-content-9" className="hidden px-5 pb-5 text-[13px] sm:text-[14px] text-gray-400 font-medium leading-[1.6] border-t border-white/5 mt-1 pt-4">
              Iya! Kalau ada perubahan algoritma atau ada penambahan strategi baru, materi akan kami update dan kamu bisa akses gratis tanpa perlu bayar lagi (Lifetime Update).
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      {/* STREAMING_CHUNK:Final call to action and footer... */}
      <section className="w-full text-center flex flex-col items-center pb-0">
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-black font-heading leading-[1.1] tracking-tight mb-3 text-white w-full">
          Sistem Ngonten <span className="text-rn-accent italic">Kamu Sudah Siap.</span>
        </h2>
        <p className="text-[14px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[500px] mb-6 leading-[1.6]">
          Kamu sudah tahu ingin mulai ngonten. Yang tersisa cuma satu langkah: berhenti mulai dari nol dan mulai pakai sistem yang membantu kamu tahu harus bikin apa.
        </p>
        <div className="flex w-full sm:w-auto px-0 sm:px-4 justify-center">
          <a href="http://lynk.id/ruangcreativemuslim/w3pwykdq8j60/checkout" target="_blank" style={{textDecoration: 'none !important'}} className="w-full sm:w-auto bg-rn-accent !text-black px-8 py-3.5 sm:py-4 rounded-full font-bold text-[13px] sm:text-[15px] border-2 border-black hover:bg-black hover:border-black hover:!text-white active:bg-black active:border-black active:!text-white transition-all duration-200 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#000000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] whitespace-nowrap flex items-center justify-center select-none animate-heartbeat relative overflow-hidden group">
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full z-10 animate-shimmer pointer-events-none" />
            <span className="relative z-20">MULAI NGONTEN SEKARANG</span>
          </a>
        </div>
      </section>
    </main>
    {/* FOOTER (tanpa border atas) */}
    <footer className="px-6 pt-2 pb-10 text-center">
      <div className="flex items-center justify-center mb-2">
        <span className="font-black font-heading text-[18px] sm:text-[22px] tracking-tight text-white">Ruang Ngonten</span>
      </div>
      <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-widest font-heading">
        © 2026 Ruang Ngonten. Semua hak dilindungi.
      </p>
    </footer>
  </div>
  {/* FLOATING MOBILE CTA */}
  <div className="sm:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full p-4 bg-rn-dark-bg/95 backdrop-blur-md border-t border-white/5 z-[60] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] flex gap-3">
    <a href="http://lynk.id/ruangcreativemuslim/2124pkdew4ee/checkout" target="_blank" style={{textDecoration: 'none !important'}} className="w-1/2 bg-white !text-black px-1 py-2.5 rounded-[20px] font-bold text-[9px] min-[360px]:text-[10px] font-heading uppercase tracking-widest border-2 border-white hover:bg-rn-accent hover:border-rn-accent hover:!text-black active:bg-rn-accent active:border-rn-accent active:!text-black transition-all shadow-[3px_3px_0px_0px_#ffffff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex flex-col items-center justify-center text-center leading-tight select-none">
      <span>PAKET BASIC</span>
      <span>RP.99K</span>
    </a>
    <a href="http://lynk.id/ruangcreativemuslim/w3pwykdq8j60/checkout" target="_blank" style={{textDecoration: 'none !important'}} className="w-1/2 bg-rn-accent !text-black px-1 py-2.5 rounded-[20px] font-bold text-[9px] min-[360px]:text-[10px] font-heading uppercase tracking-widest border-2 border-black hover:bg-black hover:border-black hover:!text-white active:bg-black active:border-black active:!text-white transition-all shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex flex-col items-center justify-center text-center leading-tight select-none animate-heartbeat relative overflow-hidden group">
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full z-10 animate-shimmer pointer-events-none" />
      <span className="relative z-20">PAKET LENGKAP</span>
      <span className="relative z-20">RP.149K</span>
    </a>
  </div>
  {/* Scripts */}
</div>

    </>
  );
}
