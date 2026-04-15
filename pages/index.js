import React from 'react';
import { MapPin, Wind, Droplets, Calendar, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0520] text-white p-6 font-sans relative overflow-hidden">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MIKS_AI Dashboard</title>
      </head>

      {/* Neon Glow Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-400 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-24">
        <header className="flex items-center gap-4 mb-10 border-b border-red-500/20 pb-6">
          <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center border-2 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
             <span className="text-2xl font-bold italic">M</span>
          </div>
          <div>
            <h1 className="text-5xl font-bold tracking-tighter italic" style={{textShadow: '0 0 10px rgba(239,68,68,0.5)'}}>
              MIKS<span className="text-red-500">_</span>AI
            </h1>
            <p className="text-cyan-400 text-[10px] tracking-widest font-bold uppercase opacity-80 uppercase">Morgen Status Stream</p>
          </div>
        </header>

        <section className="bg-black/60 backdrop-blur-xl p-8 rounded-[2rem] border border-cyan-500/30 shadow-2xl mb-6 text-center">
            <p className="flex justify-center items-center gap-2 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              <MapPin size={12} /> Hjortespring
            </p>
            <h2 className="text-4xl font-black italic uppercase">14° LIVE</h2>
        </section>

        <section className="bg-black/60 backdrop-blur-xl p-6 rounded-[2rem] border border-purple-500/30 mb-6">
          <h3 className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4 flex justify-center items-center gap-2">
            <Calendar size={14} /> System Program
          </h3>
          <button className="w-full py-4 bg-red-500/10 border border-red-500/40 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">
            Log ind med Outlook
          </button>
        </section>

        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="SKRIV TIL MIKSAI..." 
            className="w-full bg-black/90 border-2 border-purple-500/30 rounded-full py-5 px-8 text-xs font-bold focus:outline-none focus:border-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.2)] text-white"
          />
        </div>
      </div>
    </div>
  );
}
