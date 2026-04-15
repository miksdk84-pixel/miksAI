import React, { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'Interface V3.0 online. Velkommen tilbage, MICKI.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    setChatLog(newLog);
    setTimeout(() => {
      setChatLog([...newLog, { role: 'ai', text: `Besked modtaget. Systemet optimeres til dine præferencer.` }]);
    }, 600);
    setInputText("");
  };

  const madplan = [
    { dag: "Man", ret: "Pasta m. kødsovs", farve: "#ff4d4d" },
    { dag: "Tir", ret: "Kylling m. ris", farve: "#ffcc00" },
    { dag: "Ons", ret: "Hakkebøffer", farve: "#c266ff" },
    { dag: "Tor", ret: "Rester / Rugbrød", farve: "#999999" },
    { dag: "Fre", ret: "Hjemmelavet Pizza", farve: "#33ff77" },
    { dag: "Lør", ret: "Burger Night", farve: "#ff9933" },
    { dag: "Søn", ret: "Lasagne", farve: "#3399ff" }
  ];

  return (
    <div className="min-h-screen bg-[#050214] text-white p-5 font-sans relative overflow-hidden">
      {/* Tailwind Import via CDN for at sikre det virker */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      
      {/* M_LOGO BAGGRUND */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url(/M_logo.png)',
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-600 opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto pb-40">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 pt-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-2xl font-black italic">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight uppercase">Micki_Control</h1>
              <p className="text-xs text-blue-400 font-bold tracking-widest opacity-60">SYSTEM ACTIVE</p>
            </div>
          </div>
        </header>

        {/* Spotify - Glassmorphism */}
        <section className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-4 rounded-[2.5rem] border border-white border-opacity-10 mb-6 shadow-2xl">
          <iframe 
            style={{borderRadius: "24px"}}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGvYBM3s" 
            width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
          </iframe>
        </section>

        {/* Udvidet Madplan */}
        <section className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-6 rounded-[2.5rem] border border-white border-opacity-10 mb-6 shadow-2xl">
          <h3 className="text-[10px] font-black uppercase mb-4 tracking-widest opacity-50">Weekly Protocol _ Uge 16</h3>
          <div className="space-y-2">
            {madplan.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 px-5 rounded-2xl bg-white bg-opacity-5 border border-white border-opacity-5">
                <span className="text-[10px] font-bold text-gray-500">{item.dag}</span>
                <span className="text-[11px] font-black uppercase tracking-tighter" style={{color: item.farve}}>{item.ret}</span>
              </div>
            ))}
          </div>
        </section>

        {/* News & Links */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a href="https://dr.dk" target="_blank" className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-4 rounded-2xl text-[10px] font-bold text-center border border-white border-opacity-10 hover:bg-opacity-10 transition-all">
            DR LIVE
          </a>
          <a href="https://tv2.dk" target="_blank" className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-4 rounded-2xl text-[10px] font-bold text-center border border-white border-opacity-10 hover:bg-opacity-10 transition-all">
            TV2 NEWS
          </a>
        </div>

        {/* Chat Log */}
        <div className="space-y-3 mb-8 px-2">
          {chatLog.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-[1.5rem] text-[11px] font-bold max-w-[80%] ${msg.role === 'user' ? 'bg-red-600 bg-opacity-20 text-red-200' : 'bg-white bg-opacity-5 text-blue-100'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="fixed bottom-8 left-6 right-6 max-w-xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Systemkommando..." 
              className="w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-full py-5 px-8 text-sm font-bold focus:outline-none focus:border-red-500 shadow-2xl text-white placeholder-white placeholder-opacity-20"
            />
            <button onClick={handleSend} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">↑</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
