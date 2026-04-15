import React, { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'MICKI Core System v4.0 Online. Alle neon-kredsløb aktive.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setChatLog([...chatLog, { role: 'user', text: inputText }, { role: 'ai', text: 'Behandler kommando...' }]);
    setInputText("");
  };

  const madplan = [
    { d: "Man", r: "Pasta m. kødsovs", c: "#ff3131" },
    { d: "Tir", r: "Kylling m. ris", c: "#ffde59" },
    { d: "Ons", r: "Hakkebøffer", c: "#b266ff" },
    { d: "Tor", r: "Rester / Rugbrød", c: "#a6a6a6" },
    { d: "Fre", r: "Hjemmelavet Pizza", c: "#39ff14" },
    { d: "Lør", r: "Burger Night", c: "#ff914d" },
    { d: "Søn", r: "Lasagne", c: "#00d2ff" }
  ];

  return (
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '15px', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* BAGGRUND: backfest.png + Neon Glow i kanterne */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.2, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none', zIndex: 0 }} />
      
      {/* LEVENDE NEON FARVER I KANTERNE */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(255,49,49,0.4) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(0,210,255,0.4) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto', paddingBottom: '120px' }}>
        
        {/* TOP BILLEDE / OVERSKRIFT */}
        <header style={{ textAlign: 'center', marginBottom: '25px' }}>
          <img src="/miksai.png" alt="MIKSAI" style={{ width: '100%', maxWidth: '220px', filter: 'drop-shadow(0 0 10px rgba(0,210,255,0.5))' }} />
          <p style={{ color: '#00d2ff', fontSize: '8px', fontWeight: 'bold', trackingSpacing: '4px', textTransform: 'uppercase', marginTop: '5px', opacity: 0.8 }}>Operator: MICKI</p>
        </header>

        {/* VEJR & NYHEDER GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(15px)', padding: '15px', borderRadius: '25px', border: '1px solid rgba(0,210,255,0.2)', textAlign: 'center' }}>
            <p style={{ fontSize: '8px', fontWeight: 'bold', color: '#00d2ff', textTransform: 'uppercase', marginBottom: '5px' }}>Hjortespring</p>
            <p style={{ fontSize: '24px', fontWeight: '900' }}>14°C</p>
            <p style={{ fontSize: '8px', opacity: 0.6 }}>SKYFRIT</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(15px)', padding: '15px', borderRadius: '25px', border: '1px solid rgba(255,49,49,0.2)' }}>
            <p style={{ fontSize: '8px', fontWeight: 'bold', color: '#ff3131', textTransform: 'uppercase', marginBottom: '5px' }}>Nyheder</p>
            <marquee style={{ fontSize: '10px', fontWeight: 'bold' }}>Orbán under pres i Ungarn • Dansk streaming sætter rekord •</marquee>
          </div>
        </div>

        {/* SPOTIFY SECTION */}
        <div style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)', padding: '10px', borderRadius: '30px', marginBottom: '15px', border: '1px solid rgba(57,255,20,0.3)', boxShadow: '0 0 15px rgba(57,255,20,0.1)' }}>
          <iframe style={{ borderRadius: '20px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoPBcmT?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>

        {/* UDVIDET MADPLAN / KALENDER */}
        <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(15px)', padding: '20px', borderRadius: '35px', marginBottom: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', color: '#ff3131', marginBottom: '15px' }}>Uge 16 Protocol</h3>
          {madplan.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', color: '#888', fontWeight: 'bold' }}>{m.d}</span>
              <span style={{ fontSize: '10px', fontWeight: '900', color: m.c, textTransform: 'uppercase' }}>{m.r}</span>
            </div>
          ))}
        </div>

        {/* CHAT LOG */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 10px' }}>
          {chatLog.slice(-3).map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', padding: '10px 15px', borderRadius: '18px', fontSize: '10px', fontWeight: 'bold', background: msg.role === 'user' ? 'rgba(255,49,49,0.1)' : 'rgba(0,210,255,0.1)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* FLOATING NEON INPUT */}
        <div style={{ position: 'fixed', bottom: '25px', left: '20px', right: '20px', maxWidth: '500px', margin: '0 auto', zIndex: 100 }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="COMMAND_MICKI..." 
              style={{ width: '100%', padding: '18px 25px', background: 'rgba(5, 2, 20, 0.9)', border: '2px solid #ff3131', borderRadius: '50px', color: 'white', fontSize: '12px', fontWeight: 'bold', outline: 'none', boxShadow: '0 0 20px rgba(255,49,49,0.3)', backdropFilter: 'blur(10px)' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
