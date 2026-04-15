import React, { useState } from 'react';
import { MapPin, Calendar, Newspaper, Send, Music, ExternalLink, Clock } from "lucide-react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'Brand Integration komplet. Velkommen MICKI.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    setChatLog(newLog);
    
    setTimeout(() => {
      setChatLog([...newLog, { role: 'ai', text: `Forstået, MICKI. Jeg logger din kommando: "${inputText}".` }]);
    }, 600);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#0a0520] text-white p-4 font-sans relative overflow-hidden">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MIKS_AI | MICKI Control</title>
      </head>

      {/* DET STORE NEON-M LOGO SOM BAGGRUND */}
      <div 
        className="fixed inset-0 z-0 opacity-15 pointer-events-none transition-all duration-1000"
        style={{
          backgroundImage: 'url(/M_logo.png)',
          backgroundSize: '80%', // Juster her hvis det skal være større/mindre
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'screen', // Får det til at smelte sammen med neon-gløden
        }}
      />

      {/* Neon Glows (Forbliver) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-44">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black italic shadow-lg">M</div>
            <h1 className="text-2xl font-black italic tracking-tighter">MIKS_AI</h1>
          </div>
          <div className="text-[8px] font-bold text-green-400 border border-green-400/30 px-2 py-1 rounded">BRAND_ACTIVE</div>
        </header>

        {/* DIN SPOTIFY PLAYLIST */}
        <section className="bg-black/40 backdrop-blur-xl p-4 rounded-[2rem] border border-green-500/30 mb-4 shadow-lg">
          <h3 className="text-green-400 text-[10px] font-black uppercase mb-3 flex items-center gap-2"><Music size={14}/> Audio Stream</h3>
          <iframe 
            style={{borderRadius: "12px"}}
            src="http://googleusercontent.com/spotify.com/7" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </section>

        {/* Kalender & Nyheder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <section className="bg-black/40 backdrop-blur-xl p-5 rounded-[2rem] border border-purple-500/30">
            <h3 className="text-purple-400 text-[10px] font-black uppercase mb-3 flex items-center gap-2"><Calendar size={14}/> Outlook Stream</h3>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-[10px]">
              <span className="text-gray-400 font-bold">18:00</span> <span className="text-red-400 italic ml-2">Pasta m. kødsovs</span>
            </div>
          </section>

          <section className="bg-black/40 backdrop-blur-xl p-5 rounded-[2rem] border border-blue-500/30">
            <h3 className="text-blue-400 text-[10px] font-black uppercase mb-3 flex items-center gap-2"><Newspaper size={14}/> Global Feed</h3>
            <div className="space-y-3">
              <a href="https://www.dr.dk/nyheder" target="_blank" className="text-[9px] font-bold flex items-center justify-between hover:text-blue-400 border-l-2 border-blue-500 pl-2">
                DR Nyheder <ExternalLink size={10}/>
              </a>
              <a href="https://tv2.dk" target="_blank" className="text-[9px] font-bold flex items-center justify-between hover:text-blue-400 border-l-2 border-blue-500 pl-2">
                TV2 BREAKING <ExternalLink size={10}/>
              </a>
            </div>
          </section>
        </div>

        {/* Chat Log */}
        <div className="space-y-3 mb-6 h-16 overflow-y-auto pr-2 custom-scrollbar">
          {chatLog.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-2xl text-[10px] font-bold max-w-[85%] ${msg.role === 'user' ? 'bg-purple-600/30 border border-purple-400/30' : 'bg-cyan-900/40 border border-cyan-400/40'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Skriv til MICKI AI..." 
              className="w-full bg-black/95 border-2 border-purple-500/30 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-cyan-400 text-white shadow-2xl"
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
