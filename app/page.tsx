"use client";
import React from 'react';
import { MapPin, Calendar, Newspaper, Send } from "lucide-react";

export default function MiksAI() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0520] text-white font-sans">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#FF1744] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#00E5FF] rounded-full blur-[120px] opacity-20"></div>
      </div>
      
      <div className="relative z-10 p-6 max-w-2xl mx-auto pb-32">
        <header className="mb-8 pt-4 flex items-center gap-6 border-b border-[#00E5FF]/20 pb-6">
          <img 
            src="/M_logo.png" 
            alt="Logo" 
            className="w-20 h-20 rounded-2xl border-2 border-[#B721FF] shadow-[0_0_20px_rgba(183,33,255,0.5)] object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div>
            <h1 className="text-5xl font-bold tracking-tighter italic shadow-sm">MIKS<span className="text-[#00E5FF]">_</span>AI</h1>
            <p className="text-[#00E5FF] text-[10px] tracking-[0.3em] font-bold opacity-80 uppercase">DIN PERSONLIGE MORGEN-HUB</p>
          </div>
        </header>

        <section className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-[#FF1744]/30 shadow-lg text-center">
          <div className="flex justify-center items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF1744] mb-2">
            <MapPin size={16} /> Lokation
          </div>
          <div className="text-4xl font-bold italic uppercase">HJORTESPRING</div>
          <p className="text-sm text-gray-400 mt-2 uppercase font-bold tracking-tighter">Vejr-data indlæses...</p>
        </section>

        <section className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-[#B721FF]/30">
          <h2 className="flex items-center gap-2 text-sm font-bold mb-4 text-[#B721FF] uppercase tracking-wider font-bold">
            <Calendar size={18} /> DAGENS PROGRAM
          </h2>
          <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-[#B721FF]/20 transition-all uppercase">
            Log ind med Outlook
          </button>
        </section>

        <section className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-[#00E5FF]/30">
          <h2 className="flex items-center gap-2 text-sm font-bold mb-4 text-[#00E5FF] uppercase tracking-wider font-bold">
            <Newspaper size={18} /> SENESTE NYHEDER
          </h2>
          <div className="text-xs text-gray-400 italic">Forbinder til nyheds-feed...</div>
        </section>

        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="SKRIV TIL MIKSAI..." 
              className="w-full bg-black/80 backdrop-blur-2xl border border-[#B721FF]/50 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-[#00E5FF] shadow-[0_0_30px_rgba(183,33,255,0.2)]"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[#00E5FF]">
              <Send size={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
