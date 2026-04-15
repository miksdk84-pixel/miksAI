import React, { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'MICKI System Recovery komplet. Dark mode tvunget.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setChatLog([...chatLog, { role: 'user', text: inputText }, { role: 'ai', text: 'Modtaget.' }]);
    setInputText("");
  };

  const madplan = [
    { d: "Man", r: "Pasta m. kødsovs", c: "#ff4d4d" },
    { d: "Tir", r: "Kylling m. ris", c: "#ffcc00" },
    { d: "Ons", r: "Hakkebøffer", c: "#c266ff" },
    { d: "Tor", r: "Rester / Rugbrød", c: "#999999" },
    { d: "Fre", r: "Hjemmelavet Pizza", c: "#33ff77" },
    { d: "Lør", r: "Burger Night", c: "#ff9933" },
    { d: "Søn", r: "Lasagne", c: "#3399ff" }
  ];

  return (
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Vi dropper Tailwind CDN et øjeblik for at sikre, at den ikke bliver hvid */}
      
      {/* Logo Baggrund */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.1, backgroundImage: 'url(/M_logo.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: '#ff0000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontWeight: 'bold', fontSize: '24px', fontStyle: 'italic', boxShadow: '0 0 20px rgba(255,0,0,0.4)' }}>
            <span style={{ marginLeft: '12px' }}>M</span>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-1px' }}>Micki_Control</h1>
        </header>

        {/* Spotify (Forenklet så den ikke fejler) */}
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '25px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <iframe style={{ borderRadius: '15px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGvPBcmU?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>

        {/* Madplan */}
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '35px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5, marginBottom: '15px' }}>Weekly Protocol</h3>
          {madplan.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '12px', color: '#666' }}>{m.d}</span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: m.c, textTransform: 'uppercase' }}>{m.r}</span>
            </div>
          ))}
        </div>

        {/* Chat Log */}
        <div style={{ marginBottom: '100px' }}>
          {chatLog.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
              <div style={{ padding: '12px 20px', borderRadius: '20px', fontSize: '12px', background: msg.role === 'user' ? 'rgba(255,0,0,0.1)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div style={{ position: 'fixed', bottom: '30px', left: '20px', right: '20px', maxWidth: '500px', margin: '0 auto' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="SYSTEM KOMMANDO..." 
            style={{ width: '100%', padding: '20px 30px', background: '#111', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', fontSize: '14px', outline: 'none' }}
          />
        </div>

      </div>
    </div>
  );
}
