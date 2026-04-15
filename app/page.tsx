"use client";

import React from 'react';
import { MapPin, Wind, Droplets, Calendar, Newspaper, Send } from "lucide-react";

export default function MiksAI() {
  return (
    <div className="min-h-screen bg-[#0a0520] text-white font-sans p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-24">
        {/* Header */}
        <header className="flex items-center gap-4 mb-10 border-b border-red-500/20 pb-6">
          <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center border-2 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
             <span className="text-2xl font-bold italic">M</span>
          </div>
          <div>
            <h1 className="text-5xl font-bold tracking-tighter italic drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
              MIKS<span className="text-red-500">_</span>AI
            </h1>
            <p className="text-cyan-400 text-[10px] tracking-widest font-bold uppercase opacity-80">Atmosfærisk Datastream</p>
          </div>
        </header>

        {/* Vejr Sektion */}
        <section className="bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] border border-cyan-500/30 shadow-2xl mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="flex items-center gap-2 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                <MapPin size={12} /> Hjortespring
              </p>
              <h2 className="text-4xl font-black italic tracking-tighter uppercase">Live_Status</h2>
            </div>
            <div className="text-right">
              <div className="text-6xl font-black text-cyan-400">14°</div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Skyfrit</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
              <Wind size={16} className="text-red-500" />
              <span className="text-xs font-bold uppercase tracking-tighter">5 km/h</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
              <Droplets size={16} className="text-red-500" />
              <span className="text-xs font-bold uppercase tracking-tighter">42% fugt</span>
            </div>
          </div>
        </section>

        {/* Kalender / Madplan Sektion */}
        <section className="bg-black/60 backdrop-blur-xl p-6 rounded-[2rem] border border-purple-500/30 mb-6">
          <h3 className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <Calendar size={14} /> Dagens Program
          </h3>
          <div className="space-y-3">
            <button className="w-full py-4 bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/40 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-500/20 transition-all">
              Log ind med Outlook
            </button>
          </div>
        </section>

        {/* Input Felt i bunden */}
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="SKRIV TIL MIKSAI..." 
              className="w-full bg-black/90 border-2 border-purple-500/30 rounded-full py-5 px-8 text-xs font-bold focus:outline-none focus:border-cyan-400 transition-all shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-400">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
