import React, { useState } from 'react';
import { MapPin, Wind, Droplets, Calendar, Newspaper, Trophy, Send, Cloud, Zap } from "lucide-react";

export default function Home() {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      alert("MICKI AI modtog din besked: " + inputText);
      setInputText("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0520] text-white p-6 font-sans relative overflow-hidden">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MIKS_AI Dashboard</title>
      </head>

      {/* Avanceret Neon Baggrund */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-red-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-cyan-400 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-32">
        {/* Header Sektion */}
        <header className="flex items-center gap-5 mb-8 border-b border-red-500/30 pb-8">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] overflow-hidden">
             <img src="/M_logo.png" alt="M" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
          </div>
          <div>
            <h1 className="text-6xl font-black tracking-tighter italic" style={{textShadow: '0 0 15px rgba(239,68,68,0.7)'}}>
              MIKS<span className="text-red-500">_</span>AI
            </h1>
            <p className="text-cyan-400 text-xs tracking-[0.4em] font-black uppercase opacity-90">Morgen Strategi Center</p>
          </div>
        </header>

        {/* Vejr Detaljeret */}
        <section className="bg-black/60 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-cyan-500/30 shadow-2xl mb-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">
                <MapPin size={14} /> Hjortespring, DK
              </p>
              <h2 className="text-4xl font-black italic tracking-tighter uppercase">14° NÆSTEN SKYFRIT</h2>
            </div>
            <Cloud size={48} className="text-cyan-400 animate-bounce" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center transition-all hover:bg-white/10">
              <Wind size={20} className="text-red-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Vind</p>
              <p className="text-sm font-black text-white">5 km/h</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center transition-all hover:bg-white/10">
              <Droplets size={20} className="text-red-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Fugt</p>
              <p className="text-sm font-black text-white">42%</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center transition-all hover:bg-white/10">
              <Zap size={20} className="text-red-500 mx-auto mb-2" />
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">UV</p>
              <p className="text-sm font-black text-white">Lav</p>
            </div>
          </div>
        </section>

        {/* Madplan Uge 16 */}
        <section className="bg-black/60 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-purple-600/30 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-5 border-b border-purple-500/20 pb-4">
            <Calendar size={20} className="text-purple-400" />
            <h3 className="text-purple-400 text-sm font-black uppercase tracking-widest">Madplan _ Uge 16</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs font-bold text-gray-300 tracking-wide">Mandag</span>
              <span className="text-xs font-black text-red-400 uppercase tracking-tighter italic">Pasta m. kødsovs</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border-l-4 border-yellow-400">
              <span className="text-xs font-bold text-gray-300 tracking-wide">Tirsdag</span>
              <span className="text-xs font-black text-red-400 uppercase tracking-tighter italic">Kylling m. ris</span>
            </div>
          </div>
        </section>

        {/* Sport & Nyheder Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <section className="bg-black/60 backdrop-blur-2xl p-5 rounded-3xl border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <div className="flex items-center gap-2 mb-3 text-yellow-400 uppercase text-[10px] font-black tracking-widest">
              <Trophy size={14} /> Sport
            </div>
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Brøndby IF</p>
            <p className="text-xs font-black italic">Næste: Derby</p>
          </section>
          <section className="bg-black/60 backdrop-blur-2xl p-5 rounded-3xl border border-blue-500/30">
            <div className="flex items-center gap-2 mb-3 text-blue-400 uppercase text-[10px] font-black tracking-widest">
              <Newspaper size={14} /> Nyheder
            </div>
            <p className="text-[10px] font-bold text-gray-400 leading-tight">Systemet er nu optimeret til MICKI...</p>
          </section>
        </div>

        {/* AI Chat Input (Nu med funktion!) */}
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto z-50">
          <div className="relative group">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hvad kan jeg hjælpe med, MICKI?" 
              className="w-full bg-black/90 border-2 border-purple-600/40 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all shadow-[0_0_30px_rgba(168,85,247,0.2)] text-white placeholder-gray-500"
            />
            <button 
              onClick={handleSend}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-400 hover:scale-110 transition-transform active:scale-95"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
