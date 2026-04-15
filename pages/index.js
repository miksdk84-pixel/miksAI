"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin, Wind, Droplets, Eye, Gauge, Cloud, Navigation, Calendar, Newspaper, Trophy, Sparkles, Send
} from "lucide-react";

export default function MiksAI() {
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-[#0a0520] text-white">
      {/* Det originale Cyberpunk Baggrunds-glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF1744] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E5FF] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#B721FF] rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 p-6 max-w-2xl mx-auto pb-32">
        {/* Header med Neon-effekt */}
        <header className="mb-8 pt-4 border-b border-[#FF1744]/30 pb-8 shadow-[0_0_20px_rgba(255,23,68,0.3)]">
          <div className="flex items-center gap-4">
            <img src="/M_logo.png" alt="Logo" className="w-16 h-16 rounded-xl border-2 border-[#FF1744] shadow-[0_0_15px_rgba(255,23,68,0.5)]" />
            <div>
              <h1 className="text-5xl font-bold tracking-tighter italic" style={{ textShadow: "0 0 20px rgba(255,23,68,0.8), 0 0 40px rgba(0,229,255,0.6)" }}>
                MIKS<span className="text-[#FF1744]">_</span>AI
              </h1>
              <p className="text-[#00E5FF] text-[10px] tracking-[0.3em] font-bold opacity-80 uppercase">Real-time Atmosfærisk Datastream</p>
            </div>
          </div>
        </header>

        {/* Vejr Sektion (Det gamle look) */}
        <section className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl mb-6 border border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 text-[#00E5FF] text-xs font-bold uppercase tracking-widest mb-2">
                <MapPin size={14} /> Din Lokation
              </div>
              <h2 className="text-3xl font-bold italic">HJORTESPRING</h2>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold text-[#00E5FF]" style={{ textShadow: "0 0 20px rgba(0,229,255,0.8)" }}>14°</div>
              <div className="text-xs uppercase font-bold text-gray-400 mt-1">Næsten skyfrit</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <Wind size={18} className="text-[#B721FF]" />
              <span className="text-xs font-bold uppercase text-gray-300">5 km/h</span>
            </div>
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <Droplets size={18} className="text-[#B721FF]" />
              <span className="text-xs font-bold uppercase text-gray-300">42% fugt</span>
            </div>
          </div>
        </section>

        {/* Kalender Sektion */}
        <section className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-[#B721FF]/40 shadow-[0_0_20px_rgba(183,33,255,0.2)]">
          <h2 className="flex items-center gap-2 text-sm font-bold mb-4 text-[#B721FF] uppercase tracking-wider">
            <Calendar size={18} /> Dagens Program
          </h2>
          <button className="w-full py-4 bg-gradient-to-r from-[#FF1744]/20 to-[#B721FF]/20 border-2 border-[#FF1744] rounded-2xl text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,23,68,0.5)] transition-all">
            Log ind med Outlook
          </button>
        </section>

        {/* Nyheder */}
        <section className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-[#00E5FF]/40">
          <h2 className="flex items-center gap-2 text-sm font-bold mb-4 text-[#00E5FF] uppercase tracking-wider">
            <Newspaper size={18} /> Morgennyheder
          </h2>
          <div className="space-y-3 opacity-60">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
          </div>
        </section>

        {/* AI Chat Input (Original stil) */}
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto z-50">
          <div className="relative">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="SKRIV TIL MIKSAI..." 
              className="w-full bg-black/80 backdrop-blur-3xl border-2 border-[#B721FF]/50 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-[#00E5FF] shadow-[0_0_40px_rgba(183,33,255,0.3)]"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[#00E5FF]">
              <Send size={24}/>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap');
        body { font-family: 'Rajdhani', sans-serif; background: #0a0520; }
        .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
      `}</style>
    </div>
  );
}
