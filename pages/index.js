import React, { useState } from 'react';
import { MapPin, Calendar, Newspaper, Send, Music, ExternalLink, Utensils, Zap } from "lucide-react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'Interface opdateret til V3.0. Velkommen, MICKI.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    setChatLog(newLog);
    setTimeout(() => {
      setChatLog([...newLog, { role: 'ai', text: `Besked modtaget. Systemet optimeres.` }]);
    }, 600);
    setInputText("");
  };

  const madplan = [
    { dag: "Man", ret: "Pasta m. kødsovs", farve: "bg-red-500/20 text-red-300" },
    { dag: "Tir", ret: "Kylling m. ris", farve: "bg-yellow-500/20 text-yellow-300" },
    { dag: "Ons", ret: "Hakkebøffer", farve: "bg-purple-500/20 text-purple-300" },
    { dag: "Tor", ret: "Rester / Rugbrød", farve: "bg-gray-500/20 text-gray-300" },
    { dag: "Fre", ret: "Hjemmelavet Pizza", farve: "bg-green-500/20 text-green-300" },
    { dag: "Lør", ret: "Burger Night", farve: "bg-orange-500/20 text-orange-300" },
    { dag: "Søn", ret: "Lasagne", farve: "bg-blue-500/20 text-blue-300" }
  ];

  return (
    <div className="min-h-screen bg-[#050214] text-white p-5 font-sans relative overflow-hidden">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MIKS_AI | MICKI</title>
      </head>

      {/* M_LOGO BAGGRUND (Vandmærke) */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'url(/M_logo.png)',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Bløde Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto pb-40">
        {/* Header - Mere Clean */}
        <header className="flex justify-between items-center mb-8 pt-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20">
              <span className="text-2xl font-black italic">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight leading-none uppercase">Micki_Control</h1>
              <p className="text-[9px] text-cyan-400 font-bold tracking-[0.3em] mt-1 uppercase opacity-60">Neural Network Active</p>
            </div>
          </div>
          <Zap size={20} className="text-cyan-400 animate-pulse" />
        </header>

        {/* Spotify - Afrundet Glas look */}
        <section className="bg-white/[0.03] backdrop-blur-3xl p-4 rounded-[2.5rem] border border-white/10 mb-6 shadow-2xl">
          <iframe 
            style={{borderRadius: "28px"}}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGvYBM3s" 
            width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
          </iframe>
        </section>

        {/* Udvidet Madplan - Moderne Lister */}
        <section className="bg-white/[0.03] backdrop-blur-3xl p-7 rounded-[3rem] border border-white/10 mb-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Utensils size={18} className="text-red-500" />
            <h3 className="text-xs font-black uppercase tracking-widest opacity-80">Weekly Protocol _ Uge 16</h3>
          </div>
          <div className="space-y-2">
            {madplan.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 px-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all hover:bg-white/[0.05]">
                <span className="text-[10px] font-bold text-gray-500 uppercase">{item.dag}</span>
                <span className={`text-[11px] font-black uppercase tracking-tighter ${item.farve.split(' ')[1]}`}>{item.ret}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Global News - Minimalistisk */}
        <section className="bg-white/[0.03] backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white/10 mb-6">
          <h3 className="text-[10px] font-black uppercase mb-4 tracking-[0.2em] opacity-50 flex items-center gap-2">
            <Newspaper size={14} /> Intelligence Feed
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://dr.dk" target="_blank" className="bg-white/[0.05] p-4 rounded-2xl text-[10px] font-bold text-center border border-white/5 hover:border-cyan-500/50 transition-all">
              DR LIVE
            </a>
            <a href="https://tv2.dk" target="_blank" className="bg-white/[0.05] p-4 rounded-2xl text-[10px] font-bold text-center border border-white/5 hover:border-red-500/50 transition-all">
              TV2 NEWS
            </a>
          </div>
        </section>

        {/* Chat Log - Subtil */}
        <div className="px-4 space-y-3 mb-8">
          {chatLog.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-[1.5rem] text-[11px] font-medium max-w-[80%] ${msg.role === 'user' ? 'bg-red-500/10 text-red-200 border border-red-500/20' : 'bg-white/5 text-cyan-100 border border-white/10'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input - "Floating" look */}
        <div className="fixed bottom-8 left-6 right-6 max-w-xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Spørg MICKI AI..." 
              className="w-full bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[2rem] py-5 px-8 text-sm font-medium focus:outline-none focus:border-red-500/40 transition-all shadow-2xl text-white placeholder-white/20"
            />
            <button onClick={handleSend} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40 hover:scale-105 transition-transform">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
