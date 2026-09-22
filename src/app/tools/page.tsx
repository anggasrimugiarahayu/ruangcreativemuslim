
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
    Smartphone, Lock, Zap, CheckCircle2, Check, XCircle, X, Gift, 
    Sliders, Link as LinkIcon, Mic, Video, ChevronDown, LayoutDashboard, 
    UserCircle, Lightbulb, FileText, Copy, Camera, BookOpen, Calendar, Infinity as InfinityIcon
} from 'lucide-react';

export default function ToolsPage() {
    const [openFeature, setOpenFeature] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [time, setTime] = useState(25 * 60 + 26);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const m = Math.floor(time / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');

    const toggleFeature = (index: number) => {
        setOpenFeature(openFeature === index ? null : index);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-rn-dark-bg text-gray-200 font-body selection:bg-rn-accent selection:text-black antialiased pb-24 md:pb-10 relative w-full">
            <style>{`
                .brutalist-shadow {
                    box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 1);
                    transition: all 0.2s ease-in-out;
                }
                .brutalist-shadow:hover {
                    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
                    transform: translate(4px, 4px);
                }
                .brutalist-shadow-sm {
                    box-shadow: 3px 3px 0px 0px rgba(255, 255, 255, 1);
                    transition: all 0.2s ease-in-out;
                }
                .brutalist-shadow-sm:hover {
                    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);
                    transform: translate(3px, 3px);
                }
                ::selection {
                    background-color: #D0E206;
                    color: #000;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                @keyframes scroll-right {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 25s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 25s linear infinite;
                }
                .marquee-container:hover .animate-scroll-left,
                .marquee-container:hover .animate-scroll-right {
                    animation-play-state: paused;
                }
            `}</style>
            

    {/*  CENTERED COLUMN LAYOUT (Fixed for Scalev)  */}
    {/*  Menghapus overflow-x-hidden agar sticky header berfungsi kembali  */}
    <div className="w-full max-w-[720px] mx-auto bg-rn-dark-bg min-h-screen relative shadow-2xl">

        {/*  HEADER (Diubah menjadi sticky dan tanpa border putih)  */}
        <header
            className="px-4 py-3 sm:p-6 flex justify-between items-center sticky top-0 bg-rn-dark-bg/95 backdrop-blur-sm z-50 border-b border-transparent">
            <div className="flex items-center gap-2">
                <span className="font-black font-heading text-[16px] sm:text-[22px] tracking-tight text-white">Ruang
                    Ngonten</span>
            </div>
            <a href="http://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout" target="_blank"
                
                className="inline-flex items-center justify-center bg-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold text-[10px] sm:text-[13px] border-2 border-white hover:bg-rn-yellow hover:border-rn-yellow transition-all duration-300 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] whitespace-nowrap !text-black !no-underline">
                DAPATKAN AKSES
            </a>
        </header>

        {/*  MAIN CONTENT AREA  */}
        <main className="px-4 py-6 sm:px-6 md:px-8 md:py-10">

            {/*  SECTION 1: HERO & PROBLEM AWARENESS  */}
            <section className="text-left mb-8 md:mb-10">

                {/*  Badge  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    SISTEM NGONTEN UNTUK CREATOR
                </div>

                {/*  Headline  */}
                <h1
                    className="text-[32px] sm:text-[40px] md:text-[48px] font-black font-heading leading-[1.1] tracking-tight mb-3 text-white w-full max-w-[650px]">
                    Dari Bingung Mau Ngonten Apa, <span className="text-rn-accent italic">Jadi Tinggal Eksekusi.</span>
                </h1>

                {/*  Subheadline  */}
                <div
                    className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[540px] mb-6 leading-[1.6]">
                    <p>
                        <strong className="font-bold text-white">Sistem ngonten siap pakai</strong> dari niche, ide, script,
                        carausel, bikin ebook, sampai jadwal. Semua dalam satu tempat.
                    </p>
                </div>

                {/*  Main CTA Button  */}
                <div className="mb-8 flex flex-col items-start w-full max-w-[540px]">

                    {/*  Button  */}
                    <a href="#paket-harga" 
                        className="inline-flex items-center justify-center bg-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold text-[10px] sm:text-[13px] border-2 border-white hover:bg-rn-yellow hover:border-rn-yellow transition-all duration-300 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] whitespace-nowrap !text-black !no-underline">
                        MULAI NGONTEN SEKARANG
                    </a>

                </div>

                {/*  Media Mockup Video  */}
                <div
                    className="relative w-full rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden mb-6 bg-[#18181b]">

                    {/*  Inner YouTube Embedded Area  */}
                    <div className="relative w-full aspect-video bg-[#18181b]">
                        <iframe className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/Upu2vUyQVjo?si=Ze6lrYi9FlYRoXut"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                {/*  Trust Badges  */}
                <div
                    className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 mb-2 text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest font-heading">
                    <div className="flex items-center gap-1.5">
                        <Lock  className="w-3.5 h-3.5 text-rn-accent" />
                        <span>Pembayaran aman</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Zap  className="w-3.5 h-3.5 text-rn-accent" />
                        <span>Akses langsung</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Smartphone  className="w-3.5 h-3.5 text-rn-accent" />
                        <span>Tanpa install</span>
                    </div>
                </div>

            </section>

            {/*  TIMER BANNER  */}
            <section className="mb-10 md:mb-14 text-center flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-white text-[14px] sm:text-[17px] font-bold tracking-wide font-heading">Harga Early
                        Access: Diskon 85% (Kuota terbatas!)</span>
                </div>

                {/*  Large Clean Timer  */}
                <div className="flex items-baseline justify-center gap-2 sm:gap-4 font-heading tracking-tighter">
                    <div className="flex flex-col items-center">
                        <span className="text-[60px] sm:text-[80px] md:text-[100px] font-black text-white leading-none">{m}</span>
                        <span
                            className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-1 sm:mt-2">Menit</span>
                    </div>
                    <span className="text-[40px] sm:text-[60px] md:text-[80px] font-black text-white pb-4 sm:pb-6">:</span>
                    <div className="flex flex-col items-center">
                        <span className="text-[60px] sm:text-[80px] md:text-[100px] font-black text-white leading-none">{s}</span>
                        <span
                            className="text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-1 sm:mt-2">Detik</span>
                    </div>
                </div>
            </section>

            {/*  SECTION 2: THE AGITATION  */}
            <section className="mb-12 md:mb-16 max-w-[620px] mx-auto">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    INI BUKAN SALAH KAMU
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-6 sm:mb-8 text-white w-full">
                    Kamu Mau Mulai Ngonten. Tapi <span className="text-rn-accent italic">Bingung Harus Mulai dari
                        Mana.</span>
                </h2>

                {/*  Vertical Cards  */}
                <div className="space-y-2.5 sm:space-y-3">
                    {/*  Item 1  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">😶</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Niche belum jelas, konten jadi random.</strong>
                            <span className="text-gray-400">Nggak tahu mau dikenal sebagai apa atau harus ngomong ke
                                siapa.</span>
                        </div>
                    </div>

                    {/*  Item 2  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">💭</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Besok mau posting apa? Bingung lagi.</strong>
                            <span className="text-gray-400">Ide ada hari ini, besok harus mulai cari dari nol lagi.</span>
                        </div>
                    </div>

                    {/*  Item 3  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">😵‍💫</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Ide sudah ada, bikin kontennya malah ribet.</strong>
                            <span className="text-gray-400">Script, hook, adaptasi konten, sampai carousel harus dipikirkan
                                sendiri.</span>
                        </div>
                    </div>

                    {/*  Item 4  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">🗓️</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Konten sudah jadi, jadwalnya berantakan.</strong>
                            <span className="text-gray-400">Akhirnya banyak yang cuma tersimpan dan nggak pernah
                                diposting.</span>
                        </div>
                    </div>
                </div>

                {/*  Conclusion Box  */}
                <div className="mt-8 sm:mt-10 bg-[#18181b] p-6 sm:p-8 rounded-xl flex items-start gap-3 sm:gap-4">
                    <div
                        className="text-[40px] sm:text-[60px] leading-none text-rn-accent font-heading font-black shrink-0 mt-[-10px] sm:mt-[-15px]">
                        &quot;</div>
                    <p className="text-white text-[16px] sm:text-[20px] font-medium leading-[1.6] italic">
                        Masalahnya bukan kamu nggak bisa bikin konten.<br className="hidden sm:block" /> Kamu cuma belum
                        punya <span className="text-rn-accent font-black not-italic">sistem yang membantu dari arah sampai
                            eksekusi.</span>
                    </p>
                </div>

            </section>

            {/*  SECTION 3: INTRODUCING THE SOLUTION  */}
            <section className="mb-12 md:mb-16">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    SOLUSI
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-4 text-white w-full">
                    Satu Sistem. <span className="text-rn-accent italic">Ngonten Jadi Lebih Terarah.</span>
                </h2>

                {/*  Subheadline  */}
                <p className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[540px] mb-8 leading-[1.6]">
                    Dari niche sampai jadwal posting. Semua yang kamu butuhkan untuk ngonten, dalam satu tempat.
                </p>

                {/*  Image Mockup  */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#18181b]">
                    <Image priority width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786615228/Frame_163_c4qwlu.png"
                        alt="Mockup Ruang Ngonten" className="w-full h-auto object-cover" />
                </div>

            </section>

            {/*  SECTION 4: HOW IT WORKS  */}
            <section className="mb-12 md:mb-16">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    CARA KERJANYA
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-8 sm:mb-10 text-white w-full">
                    Tiga Langkah. <span className="text-rn-accent italic">Langsung Siap Ngonten.</span>
                </h2>

                {/*  Steps Cards  */}
                <div className="space-y-2.5 sm:space-y-3">
                    {/*  Step 1  */}
                    <div
                        className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4 transition-all">
                        <div
                            className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-rn-accent text-black font-black font-heading text-lg sm:text-xl flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            1
                        </div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200 mr-1">Daftar & Akses Ruang Ngonten.</strong>
                            <span className="text-gray-400">Aktifkan akses kamu, lalu langsung masuk ke sistem dan mulai
                                bangun Master Blueprint sesuai niche dan target audiensmu.</span>
                        </div>
                    </div>

                    {/*  Step 2  */}
                    <div
                        className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4 transition-all">
                        <div
                            className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-rn-accent text-black font-black font-heading text-lg sm:text-xl flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            2
                        </div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200 mr-1">Bangun Blueprint & Buat Konten.</strong>
                            <span className="text-gray-400">Tentukan arah kontenmu, temukan ide, buat script, adaptasi
                                konten viral, dan buat carousel yang sesuai dengan blueprint kamu.</span>
                        </div>
                    </div>

                    {/*  Step 3  */}
                    <div
                        className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4 transition-all">
                        <div
                            className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-rn-accent text-black font-black font-heading text-lg sm:text-xl flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            3
                        </div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200 mr-1">Jadwalkan & Mulai Eksekusi.</strong>
                            <span className="text-gray-400">Simpan konten yang sudah dibuat ke Content Calendar, pilih
                                tanggal posting, lalu mulai konsisten ngonten.</span>
                        </div>
                    </div>
                </div>

                {/*  Footer Note  */}
                <div className="mt-8 sm:mt-10 bg-[#18181b] p-6 sm:p-8 rounded-xl text-center">
                    <p className="text-white text-[16px] sm:text-[20px] font-medium leading-[1.6] italic">
                        Setup awal cuma sekitar <span className="text-rn-accent font-black not-italic">15–20 menit.</span>
                    </p>
                </div>

            </section>

            {/*  SECTION 5: ISI RUANG NGONTEN  */}
            <section className="mb-12 md:mb-16">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    ISI RUANG NGONTEN
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-4 text-white w-full">
                    8 Tools untuk Bantu Kamu <span className="text-rn-accent italic">Ngonten dari Nol.</span>
                </h2>

                {/*  Subheadline  */}
                <p className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[580px] mb-8 leading-[1.6]">
                    Bukan sekadar kumpulan AI. Semua fitur saling terhubung untuk membantu kamu dari menentukan arah
                    sampai konten siap dijadwalkan.
                </p>

                {/*  Image Mockup Dashboard  */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-[#18181b] mb-8 sm:mb-10">
                    <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1787134538/Frame_164_fqfjrv.png"
                        alt="Mockup Dashboard Ruang Ngonten" className="w-full h-auto object-cover" />
                </div>

                {/*  Accordion Features  */}
                <div className="space-y-2.5 sm:space-y-3" id="features-container">

                    {/*  Item 1  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(1)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <LayoutDashboard 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Master Blueprint</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 1 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 1 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Tentukan Arah Ngontenmu.</strong>
                            Temukan niche, positioning, target audiens, content pillar, dan strategi konten yang sesuai
                            dengan kamu.
                        </div>
                    </div>

                    {/*  Item 2  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(2)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <UserCircle 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Bio Builder</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 2 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 2 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Bikin Profil yang Punya Arah.</strong>
                            Susun username, profile name, dan bio yang sesuai dengan positioning dan target audiensmu.
                        </div>
                    </div>

                    {/*  Item 3  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(3)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <Lightbulb 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Idea Rooms</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 3 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 3 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Nggak Bingung Cari Ide Lagi.</strong>
                            Temukan ide konten yang relevan berdasarkan niche, audiens, dan blueprint kamu.
                        </div>
                    </div>

                    {/*  Item 4  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(4)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <FileText 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Script Builder</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 4 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 4 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Dari Ide Jadi Script.</strong>
                            Ubah ide menjadi script siap pakai dengan berbagai framework dan angle.
                        </div>
                    </div>

                    {/*  Item 5  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(5)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <Copy 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">ATM Content Builder</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 5 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 5 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Adaptasi Konten yang Terbukti.</strong>
                            Upload script, video, atau image untuk dianalisis dan dibuatkan versi konten yang sesuai
                            dengan kamu.
                        </div>
                    </div>

                    {/*  Item 6  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(6)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <Camera 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Carousel Prompt Builder</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 6 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 6 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Bikin Carousel yang Konsisten.</strong>
                            Dari ide dan naskah menjadi prompt master untuk menghasilkan carousel dengan style visual
                            yang konsisten.
                        </div>
                    </div>

                    {/*  Item 7  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(8)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <BookOpen 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Ebook Prompt Builder</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 8 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 8 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Dari Ide Jadi E-Book.</strong>
                            Bantu cari ide, susun outline, sampai jadi master prompt per bab yang tinggal kamu copy ke
                            ChatGPT atau Gemini.
                        </div>
                    </div>

                    {/*  Item 8  */}
                    <div className="bg-[#18181b] rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => toggleFeature(7)}>
                        <button
                            className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left font-black font-heading flex items-center justify-between text-white">
                            <div
                                className="flex items-center gap-3 sm:gap-4 text-gray-200 group-hover:text-white transition-colors">
                                <Calendar 
                                    className="w-5 h-5 text-gray-400 group-hover:text-rn-accent transition-colors shrink-0" />
                                <span className="text-[14px] sm:text-[16px] tracking-wide">Content Calendar</span>
                            </div>
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFeature === 7 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400 group-hover:text-white  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-[14px] text-gray-400 leading-[1.5] border-t border-white/5 mt-1 pt-3 ${openFeature === 7 ? "block" : "hidden"}`}>
                            <strong className="text-gray-200 font-bold mr-1">Konten Nggak Berantakan Lagi.</strong>
                            Simpan, atur, dan jadwalkan script serta kontenmu agar lebih mudah konsisten posting.
                        </div>
                    </div>

                </div>
            </section>

            {/*  SECTION 5.5: CAROUSEL PROMPT BUILDER HIGHLIGHT  */}
            <section className="mb-12 md:mb-16">
                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    CAROUSEL PROMPT BUILDER
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-4 text-white w-full">
                    Satu Ide. Jadi Carousel. <span className="text-rn-accent italic">Tetap Konsisten.</span>
                </h2>

                {/*  Subheadline  */}
                <p className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[580px] mb-8 leading-[1.6]">
                    Nggak perlu mulai dari kanvas kosong atau bikin prompt satu per satu.<br /><br />
                    Ruang Ngonten membantu kamu menyiapkan naskah, struktur, style, karakter, dan master prompt untuk
                    membuat carousel dengan AI.<br /><br />
                    <span className="text-white font-bold">Pilih ide → pilih style → generate prompt → tinggal
                        eksekusi.</span>
                </p>

                {/*  7 Slide Output Section  */}
                <div className="bg-[#18181b] rounded-2xl border border-white/10 p-5 sm:p-8 mb-8">
                    <h3 className="text-lg sm:text-xl font-black font-heading text-white mb-2">Satu carousel utuh, satu
                        style konsisten.</h3>
                    <p className="text-gray-400 text-[13px] sm:text-[14px] mb-6">Contoh output nyata 7 slide, konsisten dari
                        1 sampai 7, langsung dari AI tanpa edit tambahan.</p>

                    <div
                        className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                        {/*  Slides  */}
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326542/ChatGPT_Image_Aug_10_2026_at_08_43_10_AM_jsx1tb.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                1/7</div>
                        </div>
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326493/ChatGPT_Image_Aug_10_2026_at_08_43_18_AM_oe2wxh.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                2/7</div>
                        </div>
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326435/ChatGPT_Image_Aug_10_2026_at_08_43_23_AM_rv8nwb.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                3/7</div>
                        </div>
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326446/ChatGPT_Image_Aug_10_2026_at_08_43_27_AM_we2bnx.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                4/7</div>
                        </div>
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326446/ChatGPT_Image_Aug_10_2026_at_08_43_33_AM_knil1z.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                5/7</div>
                        </div>
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326437/ChatGPT_Image_Aug_10_2026_at_08_43_42_AM_iu1gth.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                6/7</div>
                        </div>
                        <div
                            className="snap-center shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-[#0f0f11] rounded-xl border border-white/10 overflow-hidden relative">
                            <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326436/ChatGPT_Image_Aug_10_2026_at_08_43_48_AM_qomhxv.png"
                                className="w-full h-full object-cover"  alt="Image" />
                            <div
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold">
                                7/7</div>
                        </div>
                    </div>
                </div>

                {/*  50+ Style Visual Section  */}
                <div className="mb-4 text-center mt-12">
                    <h3 className="text-[24px] sm:text-[32px] font-black font-heading text-white mb-2 leading-[1.1]">50+
                        Style Visual.<br className="sm:hidden" /> Satu Topik, Banyak Kemungkinan.</h3>
                    <p className="text-[15px] sm:text-[16px] text-gray-400">Kamu nggak terbatas satu gaya. Ini beberapa dari
                        50+ style yang bisa kamu pilih.</p>
                </div>

                {/*  Marquee  */}
                <div className="relative -mx-4 sm:-mx-6 md:-mx-8 overflow-hidden pt-6 marquee-container">

                    {/*  Row 1 (Left)  */}
                    <div className="flex overflow-hidden mb-4">
                        <div className="flex shrink-0 animate-scroll-left gap-4 pr-4">
                            {/*  Items  */}
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326542/ChatGPT_Image_Aug_10_2026_at_08_43_10_AM_jsx1tb.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Watercolor Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786329168/ChatGPT_Image_Aug_10_2026_at_09_27_53_AM_s4ufnb.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Watercolor Whimsical Doodle</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786329581/ChatGPT_Image_Aug_10_2026_at_09_38_39_AM_c4s6er.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    3D Textile Storybook Art</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786330912/ChatGPT_Image_Aug_10_2026_at_10_00_13_AM_trj70f.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Colored Pencil Illustration</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786331571/ChatGPT_Image_Aug_10_2026_at_10_11_07_AM_ioyf8e.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Children&apos;s Book Illustration</div>
                            </div>
                        </div>
                        {/*  Duplicate for seamless looping  */}
                        <div className="flex shrink-0 animate-scroll-left gap-4 pr-4">
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786326542/ChatGPT_Image_Aug_10_2026_at_08_43_10_AM_jsx1tb.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Watercolor Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786329168/ChatGPT_Image_Aug_10_2026_at_09_27_53_AM_s4ufnb.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Watercolor Whimsical Doodle</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786329581/ChatGPT_Image_Aug_10_2026_at_09_38_39_AM_c4s6er.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    3D Textile Storybook Art</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786330912/ChatGPT_Image_Aug_10_2026_at_10_00_13_AM_trj70f.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Colored Pencil Illustration</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786331571/ChatGPT_Image_Aug_10_2026_at_10_11_07_AM_ioyf8e.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Children&apos;s Book Illustration</div>
                            </div>
                        </div>
                    </div>

                    {/*  Row 2 (Right)  */}
                    <div className="flex overflow-hidden">
                        <div className="flex shrink-0 animate-scroll-right gap-4 pr-4">
                            {/*  Items  */}
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786332342/ChatGPT_Image_Aug_10_2026_at_10_21_38_AM_vtobjp.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Cozy Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786333623/ChatGPT_Image_Aug_10_2026_at_10_46_22_AM_bn3ds0.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Editorial Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786334169/ChatGPT_Image_Aug_10_2026_at_10_54_37_AM_qmvoyz.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Cottagecore Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786334905/ChatGPT_Image_Aug_10_2026_at_11_07_32_AM_arst0y.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    High-Fidelity Islamic Comic</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786335476/ChatGPT_Image_Aug_10_2026_at_11_17_11_AM_pyp34z.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Vintage Chalkboard</div>
                            </div>
                        </div>
                        {/*  Duplicate  */}
                        <div className="flex shrink-0 animate-scroll-right gap-4 pr-4">
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786332342/ChatGPT_Image_Aug_10_2026_at_10_21_38_AM_vtobjp.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Cozy Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786333623/ChatGPT_Image_Aug_10_2026_at_10_46_22_AM_bn3ds0.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Editorial Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786334169/ChatGPT_Image_Aug_10_2026_at_10_54_37_AM_qmvoyz.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Cottagecore Storybook</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786334905/ChatGPT_Image_Aug_10_2026_at_11_07_32_AM_arst0y.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    High-Fidelity Islamic Comic</div>
                            </div>
                            <div
                                className="w-[160px] sm:w-[200px] shrink-0 aspect-[3/4] bg-[#18181b] rounded-xl border border-white/10 relative overflow-hidden">
                                <Image width={1200} height={800} src="https://res.cloudinary.com/dlevfqbc/image/upload/v1786335476/ChatGPT_Image_Aug_10_2026_at_11_17_11_AM_pyp34z.png"
                                    className="w-full h-full object-cover"  alt="Image" />
                                <div
                                    className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold font-heading">
                                    Vintage Chalkboard</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  SECTION: TARGET AUDIENS (BUAT SIAPA?)  */}
            <section className="mb-12 md:mb-16">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    TARGET AUDIENS
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-8 text-white w-full">
                    Ruang Ngonten Ini <span className="text-rn-accent italic">Buat Siapa?</span>
                </h2>

                <div className="w-full">

                    {/*  TITLE: COCOK BUAT KAMU  */}
                    <div className="flex items-center gap-1.5 mb-3">
                        <CheckCircle2  className="w-4 h-4 text-rn-accent" />
                        <h3
                            className="text-[10px] sm:text-[11px] font-bold font-heading text-rn-accent tracking-widest uppercase">
                            Cocok Buat Kamu</h3>
                    </div>

                    {/*  ITEMS: COCOK  */}
                    <div className="space-y-2 mb-8 sm:mb-10">
                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <Check  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Baru mau mulai ngonten tapi nggak tahu harus mulai dari mana.
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <Check  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Sudah ngonten tapi arahnya masih random dan belum tahu mau dikenal sebagai apa.
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <Check  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Sering kehabisan ide dan tiap mau posting harus mulai mikir dari nol.
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <Check  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Punya ide tapi bingung eksekusinya jadi script, carousel, atau konten siap posting.
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-rn-accent text-black flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <Check  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Ingin ngonten lebih teratur tanpa harus mengurus semuanya sendiri.
                            </div>
                        </div>
                    </div>

                    {/*  TITLE: BELUM COCOK KALAU  */}
                    <div className="flex items-center gap-1.5 mb-3">
                        <XCircle  className="w-4 h-4 text-red-500" />
                        <h3
                            className="text-[10px] sm:text-[11px] font-bold font-heading text-red-500 tracking-widest uppercase">
                            Belum Cocok Kalau</h3>
                    </div>

                    {/*  ITEMS: BELUM COCOK  */}
                    <div className="space-y-2">
                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <X  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Kamu sudah punya sistem ngonten yang berjalan dengan baik dan tidak membutuhkan bantuan
                                tambahan.
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <X  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Kamu ingin semuanya dibuat otomatis tanpa perlu memilih, mengedit, atau mengeksekusi.
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex items-start sm:items-center gap-3 transition-all">
                            <div
                                className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 bg-[#27272a] text-red-500 flex items-center justify-center rounded-md sm:mt-0 mt-0.5">
                                <X  className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <div className="leading-[1.5] text-[12px] sm:text-[13px] text-gray-300 font-medium">
                                Kamu belum punya niat untuk benar-benar ngonten.
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/*  SECTION: YANG KAMU DAPATKAN  */}
            <section className="mb-12 md:mb-16">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-rn-accent animate-pulse"></span>
                    YANG KAMU DAPATKAN
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-4 text-white w-full">
                    Bukan Cuma Tools. Kamu Punya <span className="text-rn-accent italic">Sistem untuk Ngonten.</span>
                </h2>

                {/*  Subheadline  */}
                <p className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[580px] mb-8 leading-[1.6]">
                    Dengan Ruang Ngonten, kamu nggak perlu lagi mulai dari halaman kosong setiap kali mau bikin konten.
                </p>

                {/*  Vertical Cards  */}
                <div className="space-y-2.5 sm:space-y-3">

                    {/*  Card 1  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">🎯</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Arah Lebih Jelas.</strong>
                            <span className="text-gray-400">Tahu niche, target audiens, positioning, dan arah
                                kontenmu.</span>
                        </div>
                    </div>

                    {/*  Card 2  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">💡</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Ide Nggak Mulai dari Nol.</strong>
                            <span className="text-gray-400">Punya sumber ide yang tetap relevan dengan niche dan
                                audiensmu.</span>
                        </div>
                    </div>

                    {/*  Card 3  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">✍️</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Eksekusi Lebih Cepat.</strong>
                            <span className="text-gray-400">Dari ide jadi script, adaptasi konten, sampai carousel lebih
                                mudah.</span>
                        </div>
                    </div>

                    {/*  Card 4  */}
                    <div className="bg-[#18181b] rounded-xl p-3.5 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl leading-none shrink-0 sm:mt-0 mt-0.5">🗓️</div>
                        <div className="leading-[1.5] text-[13px] sm:text-[14px]">
                            <strong className="font-bold text-gray-200">Konten Lebih Teratur.</strong>
                            <span className="text-gray-400">Simpan dan jadwalkan konten supaya nggak cuma dibuat, tapi
                                benar-benar diposting.</span>
                        </div>
                    </div>

                </div>

                {/*  Conclusion  */}
                <div className="mt-8 sm:mt-10 bg-[#18181b] p-6 sm:p-8 rounded-xl flex items-start gap-3 sm:gap-4">
                    <div
                        className="text-[40px] sm:text-[60px] leading-none text-rn-accent font-heading font-black shrink-0 mt-[-10px] sm:mt-[-15px]">
                        &quot;</div>
                    <p className="text-white text-[16px] sm:text-[20px] font-medium leading-[1.6] italic">
                        Tujuannya bukan bikin kamu bergantung pada AI.<br className="hidden sm:block" />
                        Tapi membuat proses ngonten terasa <span className="text-rn-accent font-black not-italic">lebih
                            ringan dan terarah.</span>
                    </p>
                </div>

            </section>

            {/*  SECTION 6: BONUS & VALUE STACK  */}
            <section id="pricing" className="mb-12 md:mb-16">

                {/*  Kicker  */}
                <div
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-gray-300 px-3 py-1.5 rounded-full font-bold text-[9px] sm:text-[11px] uppercase tracking-widest mb-4 sm:mb-6 transition-all cursor-default">
                    <Gift  className="w-3.5 h-3.5 text-rn-accent" />
                    BONUS EKSKLUSIF
                </div>

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[36px] md:text-[40px] font-black font-heading leading-[1.1] tracking-tight mb-4 text-white w-full">
                    Bonus Gratis Khusus <span className="text-rn-accent italic">Pembelian Sekarang</span>
                </h2>

                {/*  Subheadline  */}
                <p className="text-[15px] sm:text-[16px] text-gray-300 font-medium w-full max-w-[580px] mb-8 leading-[1.6]">
                    Selain RUANG NGONTEN, kamu juga mendapatkan 4 bonus eksklusif untuk membantu kamu mulai, praktik,
                    dan terus berkembang sebagai kreator.
                </p>

                {/*  Daftar Bonus Eksklusif (List Vertikal Sesuai Screenshot)  */}
                <div className="space-y-3 mb-10 sm:mb-12">

                    {/*  Item 1  */}
                    <div
                        className="bg-[#18181b] border border-white/5 rounded-xl p-4 sm:p-5 flex items-start sm:items-center gap-4 transition-all hover:border-white/10">
                        <div
                            className="w-10 h-10 shrink-0 bg-[#27272a] flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            <Sliders  className="w-5 h-5 text-rn-accent" />
                        </div>
                        <div className="leading-[1.6] text-[13px] sm:text-[14px]">
                            <strong className="text-white font-bold mr-1">Rekomendasi Aplikasi Editing:</strong>
                            <span className="text-gray-400">Rekomendasi aplikasi alternatif untuk mengedit konten di
                                HP.</span>
                        </div>
                    </div>

                    {/*  Item 2  */}
                    <div
                        className="bg-[#18181b] border border-white/5 rounded-xl p-4 sm:p-5 flex items-start sm:items-center gap-4 transition-all hover:border-white/10">
                        <div
                            className="w-10 h-10 shrink-0 bg-[#27272a] flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            <LinkIcon  className="w-5 h-5 text-rn-accent" />
                        </div>
                        <div className="leading-[1.6] text-[13px] sm:text-[14px]">
                            <strong className="text-white font-bold mr-1">Hook Bikin Viral:</strong>
                            <span className="text-gray-400">Panduan menyusun hook menarik agar audiens berhenti
                                scroll.</span>
                        </div>
                    </div>

                    {/*  Item 3  */}
                    <div
                        className="bg-[#18181b] border border-white/5 rounded-xl p-4 sm:p-5 flex items-start sm:items-center gap-4 transition-all hover:border-white/10">
                        <div
                            className="w-10 h-10 shrink-0 bg-[#27272a] flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            <Mic  className="w-5 h-5 text-rn-accent" />
                        </div>
                        <div className="leading-[1.6] text-[13px] sm:text-[14px]">
                            <strong className="text-white font-bold mr-1">Tools Text to Voice Over:</strong>
                            <span className="text-gray-400">Tools praktis pengubah teks menjadi suara (voice over).</span>
                        </div>
                    </div>

                    {/*  Item 4  */}
                    <div
                        className="bg-[#18181b] border border-white/5 rounded-xl p-4 sm:p-5 flex items-start sm:items-center gap-4 transition-all hover:border-white/10">
                        <div
                            className="w-10 h-10 shrink-0 bg-[#27272a] flex items-center justify-center rounded-lg sm:mt-0 mt-0.5">
                            <Video  className="w-5 h-5 text-rn-accent" />
                        </div>
                        <div className="leading-[1.6] text-[13px] sm:text-[14px]">
                            <strong className="text-white font-bold mr-1">Video Footage Siap Pakai:</strong>
                            <span className="text-gray-400">Kumpulan B-roll yang bisa kamu manfaatkan untuk bahan
                                konten.</span>
                        </div>
                    </div>

                </div>

                {/*  Total Value Box  */}
                <div className="bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-8 mb-12">
                    <h3 className="text-[18px] sm:text-[20px] font-black font-heading text-white mb-6">Kalau Semua Bonus Ini
                        Dibeli Terpisah...</h3>

                    <div className="space-y-3 text-[13px] sm:text-[14px] text-gray-400 font-medium">
                        <div className="flex justify-between items-center gap-4">
                            <span>Rekomendasi Aplikasi Editing</span>
                            <span className="line-through decoration-gray-500 shrink-0">Rp 69.000</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <span>Hook Bikin Viral</span>
                            <span className="line-through decoration-gray-500 shrink-0">Rp 69.000</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <span>Tools Text to Voice Over</span>
                            <span className="line-through decoration-gray-500 shrink-0">Rp 179.000</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <span>Video Footage Siap Pakai</span>
                            <span className="line-through decoration-gray-500 shrink-0">Rp 49.000</span>
                        </div>
                    </div>

                    <hr className="border-white/10 my-5" />

                    <div className="space-y-3 text-[13px] sm:text-[14px] font-bold text-gray-200">
                        <div className="flex justify-between items-center gap-4">
                            <span>TOTAL BONUS</span>
                            <span className="line-through decoration-gray-500 text-gray-400 font-medium shrink-0">Rp
                                366.000</span>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <span>Tools Ruang Ngonten</span>
                            <span className="line-through decoration-gray-500 text-gray-400 font-medium shrink-0">Rp
                                300.000</span>
                        </div>
                    </div>

                    <hr className="border-white/10 my-5" />

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2">
                        <div>
                            <h4 className="text-[20px] sm:text-[24px] font-black font-heading text-white leading-none mb-1">
                                Kamu Bayar Sekarang</h4>
                            <span className="text-gray-500 text-[13px] sm:text-[14px] font-medium">Total value Rp
                                666.000</span>
                        </div>
                        <div className="text-rn-accent font-black font-heading text-[32px] sm:text-[40px] leading-none">
                            Rp 99.000,-
                        </div>
                    </div>
                </div>

                {/*  VALUE STACK RECEIPT BOX (KOTAK HARGA)  */}
                <div id="paket-harga"
                    className="max-w-[440px] mx-auto bg-white border-2 border-gray-200 rounded-[24px] p-6 sm:p-8 relative mt-12 mb-4 shadow-2xl scroll-mt-24">

                    {/*  Save Badge  */}
                    <div
                        className="absolute -top-4 right-4 sm:right-6 bg-[#1a1a1a] text-rn-accent font-black text-[13px] sm:text-[15px] px-4 py-1.5 rounded-xl shadow-lg border border-gray-800 font-heading tracking-wide">
                        Save 85%
                    </div>

                    {/*  Header  */}
                    <div className="flex items-center gap-3.5 mb-3 mt-2">
                        <h3
                            className="font-black font-heading text-gray-900 text-[18px] sm:text-[20px] leading-[1.1] tracking-tight">
                            Paket Bonus Spesial<br />
                            <span
                                className="font-bold text-gray-600 text-[13px] sm:text-[14px] tracking-normal block mt-1">(Recommended)</span>
                        </h3>
                    </div>

                    {/* Harga Asli Dicoret */}
                    <div className="text-center w-full px-2 mb-2 overflow-hidden">
                        <span className="text-[#e11d48] font-black font-heading text-[24px] min-[360px]:text-[28px] sm:text-[34px] line-through decoration-[4px] decoration-[#e11d48] tracking-tight block w-full whitespace-nowrap">
                            RP. 666.000,-
                        </span>
                    </div>

                    <hr className="border-[#e5e7eb] border-t-[1.5px] w-[85%] mx-auto my-3" />

                    {/* Harga Promo 3D Terpadat */}
                    <div className="text-center w-full mb-8 overflow-hidden flex justify-center py-2 relative">
                        <span className="text-rn-accent font-black font-heading text-[11vw] sm:text-[68px] leading-none tracking-tighter block whitespace-nowrap" style={{ textShadow: '-1px -1px 0 #18181b, 0px -1px 0 #18181b, 1px -1px 0 #18181b, -1px 0px 0 #18181b, 1px 0px 0 #18181b, -1px 1px 0 #18181b, 0px 1px 0 #18181b, 1px 1px 0 #18181b, 2px 2px 0 #18181b, 3px 3px 0 #18181b, 4px 4px 0 #18181b, 5px 5px 0 #18181b, 6px 6px 0 #18181b, 7px 7px 0 #18181b, 8px 8px 0 #18181b, 9px 9px 0 #18181b' }}>
                            99.000,-
                        </span>
                    </div>

                    {/* List Fitur Polos Hitam Terpusat Kiri-Kanan & 1 Baris */}
                    <ul className="space-y-2.5 mb-10 w-fit mx-auto text-[#18181b] font-medium text-[9px] min-[360px]:text-[10px] min-[390px]:text-[11px] sm:text-[14px] tracking-tight sm:tracking-normal list-disc pl-4 pr-4 sm:pl-6 sm:pr-6 marker:text-[#18181b] leading-[1.4]">
                        <li className="whitespace-nowrap">Akses Ruang Ngonten V7.0 (Sistem AI)</li>
                        <li className="whitespace-nowrap">Update materi gratis selamanya</li>
                        <li className="whitespace-nowrap">Bonus: Rekomendasi Aplikasi Editing</li>
                        <li className="whitespace-nowrap">Bonus: Panduan Hook Bikin Viral</li>
                        <li className="whitespace-nowrap">Bonus: Tools Text to Voice Over</li>
                        <li className="whitespace-nowrap">Bonus: Video Footage Siap Pakai</li>
                        <li className="whitespace-nowrap">Sekali bayar untuk akses selamanya</li>
                    </ul>

                    {/* Button & Security Badges */}
                    <div className="mt-6 flex flex-col items-center text-center w-full">
                        <a href="http://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout" target="_blank" className="w-full bg-rn-accent !text-black py-3.5 sm:py-4 rounded-full font-bold text-[13px] sm:text-[15px] border-2 border-black transition-all duration-200 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#000000] hover:bg-black hover:!text-white hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:bg-black active:!text-white active:shadow-none active:translate-x-[3px] active:translate-y-[3px] flex items-center justify-center mb-5 select-none animate-heartbeat relative overflow-hidden group" style={{ textDecoration: 'none' }}>
                            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full z-10 animate-shimmer pointer-events-none" />
                            <span className="relative z-20">AMBIL HARGA PROMO</span>
                        </a>
                        <div className="flex flex-row flex-nowrap items-center justify-center w-full text-[9px] sm:text-[11px] font-bold text-gray-500 font-body px-1 gap-2.5 sm:gap-3 whitespace-nowrap overflow-hidden">
                            <div className="flex items-center gap-1.5 shrink-0"><Lock className="w-3 h-3 text-gray-500 shrink-0" /><span>Pembayaran aman</span></div>
                            <div className="flex items-center gap-1.5 shrink-0"><Zap className="w-3 h-3 text-gray-500 shrink-0" /><span>Akses langsung</span></div>
                            <div className="flex items-center gap-1.5 shrink-0"><InfinityIcon className="w-3 h-3 text-gray-500 shrink-0" /><span>Seumur hidup</span></div>
                        </div>
                    </div>

                </div>
            </section>

            {/*  SECTION 5: FAQ  */}
            <section className="mb-12 md:mb-16">
                <h2 className="text-xl sm:text-2xl font-black font-heading mb-5 text-white">Yang Sering Ditanyain (FAQ)</h2>

                <div className="space-y-3" id="faq-container">
                    {/*  FAQ 1  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(1)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between text-gray-200">
                            Ruang Ngonten cocok untuk pemula?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 1 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 1 ? "block" : "hidden"}`}>
                            Cocok banget. Ruang Ngonten memang dibuat untuk creator yang baru mulai maupun yang sudah
                            mulai ngonten tapi masih bingung menentukan arah, mencari ide, membuat konten, dan menjaga
                            konsistensi.
                        </div>
                    </div>

                    {/*  FAQ 2  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(2)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Apa yang saya dapat setelah membeli?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 2 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 2 ? "block" : "hidden"}`}>
                            Kamu mendapatkan akses Ruang Ngonten yang berisi 7 tools utama: Master Blueprint, Bio
                            Builder, Idea Rooms, Script Builder, ATM Content Builder, Carousel Prompt Builder, dan
                            Content Calendar. Kamu juga mendapatkan Ebook Ruang Ngonten + seluruh bonus sesuai paket
                            yang ditawarkan.
                        </div>
                    </div>

                    {/*  FAQ 3  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(3)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Apakah harus sudah punya niche?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 3 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 3 ? "block" : "hidden"}`}>
                            Nggak harus. Justru kamu bisa mulai dari Master Blueprint untuk membantu menemukan niche,
                            menentukan target audiens, dan membangun arah konten yang lebih jelas.
                        </div>
                    </div>

                    {/*  FAQ 4  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(4)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Apakah saya harus jago AI atau bikin prompt sendiri?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 4 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 4 ? "block" : "hidden"}`}>
                            Nggak perlu. Ruang Ngonten sudah membantu menyederhanakan prosesnya. Kamu cukup mengikuti
                            alur dan memasukkan informasi yang diminta. Untuk fitur tertentu, sistem akan membantu
                            menghasilkan output yang siap kamu gunakan atau kembangkan.
                        </div>
                    </div>

                    {/*  FAQ 5  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(5)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Ruang Ngonten bisa digunakan untuk platform apa saja?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 5 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 5 ? "block" : "hidden"}`}>
                            Ruang Ngonten berfokus pada strategi dan proses pembuatan konten, bukan hanya satu platform.
                            Jadi hasilnya bisa kamu sesuaikan untuk Instagram, TikTok, YouTube Shorts, maupun platform
                            lainnya.
                        </div>
                    </div>

                    {/*  FAQ 6  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(6)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Apakah kontennya dibuat otomatis sampai selesai?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 6 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 6 ? "block" : "hidden"}`}>
                            Ruang Ngonten membantu mempercepat dan mempermudah proses, bukan menggantikan kamu
                            sepenuhnya. Kamu tetap menentukan pilihan, melakukan review, menyesuaikan hasil, dan
                            mengeksekusi konten.<br /><br />Tujuannya bukan membuat kamu pasif, tapi membuat proses ngonten
                            jauh lebih ringan.
                        </div>
                    </div>

                    {/*  FAQ 7  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(7)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Bagaimana cara mengakses Ruang Ngonten setelah membeli?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 7 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 7 ? "block" : "hidden"}`}>
                            Setelah pembayaran berhasil dikonfirmasi, kamu akan mendapatkan informasi akses Ruang
                            Ngonten. Kamu bisa langsung masuk dan mulai menggunakan tools yang tersedia tanpa perlu
                            membangun sistemnya sendiri dari nol.
                        </div>
                    </div>

                    {/*  FAQ 8  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(8)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Berapa lama sampai saya bisa mulai ngonten?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 8 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 8 ? "block" : "hidden"}`}>
                            Setup awal sekitar 15–20 menit. Setelah Master Blueprint selesai, kamu sudah bisa mulai
                            menggunakan fitur lainnya untuk mencari ide, membuat script, mengembangkan konten, dan
                            menjadwalkannya.
                        </div>
                    </div>

                    {/*  FAQ 9  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(9)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Apakah ada bantuan kalau saya masih bingung?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 9 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 9 ? "block" : "hidden"}`}>
                            Ada. Kamu mendapatkan bimbingan private 1-on-1 via WhatsApp sebagai salah satu bonus. Kamu
                            bisa menggunakannya untuk berdiskusi, meminta feedback, atau membahas kendala yang kamu
                            temui sesuai ketentuan bimbingan.
                        </div>
                    </div>

                    {/*  FAQ 10  */}
                    <div className="border border-rn-border rounded-xl overflow-hidden bg-rn-card group cursor-pointer"
                        onClick={() => toggleFaq(10)}>
                        <button
                            className="w-full px-5 py-4 text-left font-black font-heading text-sm sm:text-base flex items-center justify-between pr-4 text-gray-200">
                            Apakah Rp99.000 hanya untuk tools-nya?
                            <ChevronDown className={`transition-transform duration-300 shrink-0 ${openFaq === 10 ? "rotate-180" : "rotate-0"} w-4 h-4 text-gray-400  duration-300 shrink-0`} />
                        </button>
                        <div 
                            className={`px-5 pb-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-rn-border mt-1 pt-3 ${openFaq === 10 ? "block" : "hidden"}`}>
                            Nggak. Dengan Rp99.000, kamu mendapatkan akses Tools Ruang Ngonten senilai Rp300.000, dan
                            berbagai bonus eksklusif dengan total value yang telah kita susun.<br /><br />Sekali bayar
                            sesuai paket yang ditawarkan.
                        </div>
                    </div>
                </div>
            </section>

            {/*  SECTION: FINAL CTA  */}
            <section className="mt-8 mb-2 sm:mb-4 text-center flex flex-col items-center justify-center">

                {/*  Headline  */}
                <h2
                    className="text-[28px] sm:text-[32px] md:text-[36px] font-black font-heading leading-[1.2] tracking-tight mb-4 text-white w-full">
                    Sistem Ngonten <span className="text-rn-accent italic">Kamu Sudah Siap.</span>
                </h2>

                {/*  Subheadline  */}
                <p
                    className="text-[14px] sm:text-[16px] text-gray-300 font-medium max-w-[540px] mb-8 leading-[1.6] mx-auto">
                    Kamu sudah tahu ingin mulai ngonten. Yang tersisa cuma satu langkah: berhenti mulai dari nol dan
                    mulai pakai sistem yang membantu kamu tahu harus bikin&nbsp;apa.
                </p>

                {/*  Final Button  */}
                <a href="http://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout" target="_blank"
                    className="w-[90%] sm:w-auto inline-flex items-center justify-center bg-rn-accent px-10 py-4 rounded-full font-semibold text-[13px] sm:text-[14px] border-2 border-black hover:bg-black hover:!text-white hover:border-black active:bg-black active:!text-white active:border-black transition-all duration-300 font-heading uppercase tracking-widest shadow-[3px_3px_0px_0px_#000000] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] whitespace-nowrap !text-black !no-underline animate-heartbeat relative overflow-hidden group select-none">
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full z-10 animate-shimmer pointer-events-none" />
                    <span className="relative z-20">DAPATKAN AKSES SEKARANG</span>
                </a>

            </section>

        </main>

        {/*  FOOTER  */}
        <footer className="px-4 pb-8 pt-2 sm:pt-0 text-center">
            <div className="flex items-center justify-center mb-3">
                <span className="font-black font-heading text-[20px] sm:text-[24px] tracking-tight text-white">Ruang
                    Ngonten</span>
            </div>
            <p
                className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest font-heading mb-12 sm:mb-0">
                &copy; 2026 RUANG NGONTEN. SEMUA HAK DILINDUNGI.
            </p>
        </footer>

    </div>

    {/*  FLOATING MOBILE CTA  */}
    <div
        className="sm:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[720px] p-4 bg-rn-dark-bg/90 backdrop-blur-md border-t border-white/10 z-50 animate-in slide-in-from-bottom-full duration-300">
        <a href="http://lynk.id/ruangcreativemuslim/0elxm3wy387w/checkout" target="_blank"
            className="w-full bg-rn-accent border-2 border-black py-3.5 rounded-full font-semibold text-sm font-heading uppercase tracking-widest hover:bg-black hover:border-black hover:!text-white active:bg-black active:border-black active:!text-white transition-all shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center gap-2 !text-black !no-underline animate-heartbeat relative overflow-hidden group select-none">
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full z-10 animate-shimmer pointer-events-none" />
            <span className="relative z-20">Akses Rp 99.000</span>
        </a>
    </div>

    {/*  Scripts  */}
    

        </div>
    );
}
