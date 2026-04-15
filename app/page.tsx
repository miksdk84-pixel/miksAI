"use client";
import React from 'react';
import { MapPin, Calendar, Newspaper, Send } from "lucide-react";

export default function MiksAI() {
  return (
    <div className="min-h-screen bg-[#0a0520] text-white p-6 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FF1744] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#00E5FF] rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        <header className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
          <div className="w-16 h-16 bg-[#B721FF] rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20 overflow-hidden">
             <img src="/M_logo.png" alt="M" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tighter italic">MIKS_AI</h1>
            <p className="text-[#00E5FF] text-[10px] tracking-widest font-bold uppercase">Morgen Dashboard</p>
          </div>
        </header>

        <main className="space-y-4">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-[#FF1744]/40 text-center">
            <div className="flex justify-center items-center gap-2 text-[#FF1744] text-xs font-bold uppercase mb-2">
              <MapPin size={14} /> Hjortespring
            </div>
            <div className="text-5xl font-bold tracking-tighter italic">LIVE_MODE</div>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-[#B721FF]/40">
            <div className="flex items-center gap-2 text-[#B721FF] text-xs font-bold uppercase mb-4">
              <Calendar size={14} /> Program
            </div>
            <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-xs font-bold opacity-50 uppercase">
              Forbinder til Outlook...
            </div>
          </div>
        </main>

        <div className="fixed bottom-6 left-6 right-6 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="SKRIV TIL MIKSAI..." 
            className="w-full bg-black/80 border border-[#00E5FF]/30 rounded-full py-4 px-6 text-sm font-bold focus:outline-none focus:border-[#00E5FF] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
