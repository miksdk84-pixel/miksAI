import React, { useState, useEffect } from 'react';
import { MapPin, Wind, Droplets, Calendar, Newspaper, Trophy, Send, Cloud, Zap, Clock } from "lucide-react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'System online. Velkommen tilbage, MICKI. Outlook-forbindelse via IFTTT er aktiv.' }
  ]);

  // Her vil dine rigtige kalenderdata lande fra IFTTT
  const [appointments, setAppointments] = useState([
    { time: '18:00', title: 'Middag: Pasta m. kødsovs', type: 'Madplan' },
    { time: 'I morgen', title: 'Brøndby Træning', type: 'Sport' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = { role: 'user', text: inputText };
    setChatLog(prev => [...prev, userMsg]);

    // AI Svar-logik
    setTimeout(() => {
      let response = `Modtaget, MICKI. Jeg tjekker systemerne for "${inputText}".`;
      if(inputText.toLowerCase().includes("vejr")) response = "Vejret i Hjortespring er pt. 14 grader og skyfrit.";
      if(inputText.toLowerCase().includes("brøndby")) response = "Brøndby IF er altid klar! Næste kamp er i kalenderen.";
      
      const aiMsg = { role: 'ai', text: response };
      setChatLog(prev => [...prev, aiMsg]);
    }, 600);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#0a0520] text-white p-6 font-sans relative overflow-hidden">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>MIKS_AI | MICKI Control</title>
      </head>

      {/* Baggrunds-effekter */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-44">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-black italic shadow-[0_0_15px_rgba(239,68,68,0.5)]">M</div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter italic">MIKS_AI</h1>
              <p className="text-[8px] text-cyan-400 font-bold uppercase tracking-[0.3em]">Operator: MICKI</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-500 uppercase">Status</p>
            <p className="text-[10px] text-green-400 font-bold animate-pulse">CONNECTED_IFTTT</p>
          </div>
        </header>

        {/* Kalender & Nyheder Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Outlook Kalender */}
          <section className="bg-black/60 backdrop-blur-xl p-5 rounded-[2rem] border border-purple-500/30">
            <h3 className="text-purple-400 text-[10px] font-black uppercase mb-4 flex items-center gap-2"><Calendar size={14}/> Outlook Stream</h3>
            <div className="space-y-3">
              {appointments.map((app, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-[10px]">
                    <Clock size={12} className="text-purple-400"/>
                    <span className="text-gray-400">{app.time}</span>
                  </div>
                  <span className="text-[10px] font-bold italic text-red-400 truncate ml-2">{app.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rigtige Nyheder 15. April */}
          <section className="bg-black/60 backdrop-blur-xl p-5 rounded-[2rem] border border-blue-500/30">
            <h3 className="text-blue-400 text-[10px] font-black uppercase mb-4 flex items-center gap-2"><Newspaper size={14}/> Global Feed</h3>
            <div className="space-y-3">
              <p className="text-[9px] font-bold leading-snug border-l-2 border-blue-500 pl-2">Valget i Ungarn: Orbán presset efter historisk nederlag.</p>
              <p className="text-[9px] font-bold leading-snug border-l-2 border-blue-500 pl-2">Dansk streaming sætter rekord i første kvartal 2026.</p>
            </div>
          </section>
        </div>

        {/* Chat Log */}
        <div className="space-y-4 mb-8 h-40 overflow-y-auto pr-2 custom-scrollbar">
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
          <div className="relative group">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Skriv kommando til MICKI AI..." 
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
