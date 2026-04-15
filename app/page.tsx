"use client";

import React, { useState } from "react";
import {
  MapPin, Wind, Droplets, Calendar, Newspaper, Send
} from "lucide-react";

export default function MiksAI() {
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0520] text-white font-sans">
      {/* Cyberpunk Glow Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 p-6 max-w-2xl mx-auto pb-32">
        {/* Header med dit Logo */}
        <header className="mb-8 pt-4 border-b border-red-500/30 pb-8">
          <div className="flex items-center gap-4">
            <img 
              src="/M_logo.png" 
              alt="Logo" 
              className="w-16 h-16 rounded-xl border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div>
              <h1 className="text-5xl font-bold tracking-tighter italic text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                MIKS<span className="text-red-500">_</span>AI
              </h1>
              <p className="text-cyan-400 text-[10px] tracking-[0.3em] font-bold opacity-80 uppercase mt-1">
                Real-time Atmosfærisk Datastream
              </p>
            </div>
          </div>
        </header>

        {/* Vejr Sektion */}
        <section className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl mb-6 border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">
                <MapPin size={14} /> Din Lokation
              </div>
              <h2 className="text-3xl font-bold italic text-white">HJORTESPRING</h2>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">14°</div>
              <div className="text-xs uppercase font-bold text-gray-400 mt-1">Næsten skyfrit</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <Wind size={18} className="text-purple-500" />
              <span className="text-xs font-bold uppercase text-gray-300">5 km/h</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
              <Droplets size={18} className="text-purple-500" />
              <span className="text-xs font-bold uppercase text-gray-300">42% fugt</span>
            </div>
          </div>
        </section>

        {/* Kalender Sektion */}
        <section className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          <h2 className="flex items-center gap-2 text-sm font-bold mb-4 text-purple-400 uppercase tracking-wider">
            <Calendar size={18} /> Dagens Program
          </h2>
          <button className="w-full py-4 bg-gradient-to-r from-red-500/20 to-purple-500/20 border-2 border-red-500 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-red-500/30 transition-all">
            Log ind med Outlook
          </button>
        </section>

        {/* Nyheder */}
        <section className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl mb-6 border border-cyan-500/40">
          <h2 className="flex items-center gap-2 text-sm font-bold mb-4 text-cyan-400 uppercase tracking-wider">
            <Newspaper size={18} /> Morgennyheder
          </h2>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-xs text-gray-400 italic uppercase font-bold">Forbinder til nyheds-feed...</p>
          </div>
        </section>

        {/* AI Chat Input */}
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto z-50">
          <div className="relative">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="SKRIV TIL MIKSAI..." 
              className="w-full bg-black/90 backdrop-blur-3xl border-2 border-purple-500/50 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-white"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-400">
              <Send size={24}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
