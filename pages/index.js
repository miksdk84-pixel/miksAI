import React, { useState } from 'react';
import { MapPin, Calendar, Newspaper, Send, Clock, ExternalLink } from "lucide-react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'System online. Velkommen MICKI. Outlook Stream er klar.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setChatLog(prev => [...prev, { role: 'user', text: inputText }]);
    setTimeout(() => {
      setChatLog(prev => [...prev, { role: 'ai', text: `Jeg har modtaget din besked, MICKI. Jeg arbejder på sagen.` }]);
    }, 600);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#0a0520] text-white p-6 font-sans relative overflow-hidden">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MIKS_AI | MICKI</title>
      </head>

      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-44">
        <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4 text-3xl font-black italic tracking-tighter">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">M</div>
            MIKS_AI
          </div>
          <div className="text-right uppercase font-bold text-[8px] text-green-400 animate-pulse">IFTTT_ACTIVE</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Outlook Kalender */}
          <section className="bg-black/60 backdrop-blur-xl p-5 rounded-[2rem] border border-purple-500/30">
            <h3 className="text-purple-400 text-[10px] font-black uppercase mb-4 flex items-center gap-2"><Calendar size={14}/> Outlook Stream</h3>
            <div className="space-y-2">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-[10px]">
                <p className="text-gray-400 font-bold mb-1">TIP:</p>
                <p className="italic">Opret aftaler i din Outlook-app, så dukker de op her via IFTTT.</p>
              </div>
            </div>
          </section>

          {/* Rigtige Nyheder med Links */}
          <section className="bg-black/60 backdrop-blur-xl p-5 rounded-[2rem] border border-blue-500/30">
            <h3 className="text-blue-400 text-[10px] font-black uppercase mb-4 flex items-center gap-2"><Newspaper size={14}/> Global Feed</h3>
            <div className="space-y-3">
              <a href="https://www.dr.dk/nyheder" target="_blank" className="block group">
                <p className="text-[10px] font-bold border-l-2 border-blue-500 pl-2 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  Valget i Ungarn: Orbán presset <ExternalLink size={10}/>
                </p>
              </a>
              <a href="https://www.tv2.dk" target="_blank" className="block group">
                <p className="text-[10px] font-bold border-l-2 border-blue-500 pl-2 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  Streaming-rekord i Danmark <ExternalLink size={10}/>
                </p>
              </a>
            </div>
          </section>
        </div>

        {/* Chat Log */}
        <div className="space-y-4 mb-8 h-48 overflow-y-auto pr-2">
          {chatLog.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-2xl text-[11px] font-bold max-w-[85%] ${msg.role === 'user' ? 'bg-purple-600/30 border border-purple-400/30' : 'bg-cyan-900/40 border border-cyan-400/40'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Skriv til MICKI AI..." 
              className="w-full bg-black/95 border-2 border-purple-500/30 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.2)] text-white"
            />
            <button onClick={handleSend} className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-400">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
