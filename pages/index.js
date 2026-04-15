import React, { useState } from 'react';

export default function MickiDashboard() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'System V2.0 Online. Baggrund optimeret. Nyhedsfeed og Kalender synkroniseret.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    setChatLog(newLog);
    setTimeout(() => {
      setChatLog([...newLog, { role: 'ai', text: `Kommando modtaget. Opdaterer datastrømme...` }]);
    }, 600);
    setInputText("");
  };

  const nyheder = [
    { kilde: "DR NYHEDER", titel: "Orbán under pres: Massive demonstrationer i Budapest", tid: "10 min siden" },
    { kilde: "TV2 NEWS", titel: "Dansk økonomi vokser hurtigere end forventet", tid: "25 min siden" },
    { kilde: "B.T.", titel: "BIF melder klar til topopgør: 'Vi går efter guldet'", tid: "1 time siden" }
  ];

  const kalender = [
    { tid: "09:00", event: "Arbejdsmøde: AI Implementering", type: "Work" },
    { tid: "14:30", event: "Træning / Fitness", type: "Personal" },
    { tid: "18:00", event: "Madplan: Pasta m. kødsovs", type: "Home" }
  ];

  return (
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* 1. FULL BACKGROUND FILL (backfest.png) */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        opacity: 0.25, 
        backgroundImage: 'url(/backfest.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        zIndex: 0 
      }} />

      {/* 2. NEON EDGES & LOGO WATERMARK */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top left, rgba(255,49,49,0.2) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(0,210,255,0.2) 0%, transparent 40%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, opacity: 0.05, backgroundImage: 'url(/M_logo.png)', backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto', paddingBottom: '140px' }}>
        
        {/* 3. MINIMALIST HEADER (miksai.png fjernet) */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', background: '#ff3131', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', boxShadow: '0 0 15px rgba(255,49,49,0.5)' }}>M</div>
            <h1 style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '1px' }}>MICKI_CONTROL</h1>
          </div>
          <div style={{ fontSize: '10px', color: '#00d2ff', fontWeight: 'bold' }}>SYSTEM ACTIVE</div>
        </header>

        {/* 4. NYHEDER (Listeform med kilde) */}
        <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(255,49,49,0.2)', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '10px', fontWeight: '900', color: '#ff3131', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>Intelligence Feed</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {nyheder.map((n, i) => (
              <div key={i} style={{ borderLeft: '2px solid #ff3131', paddingLeft: '12px' }}>
                <div style={{ fontSize: '8px', fontWeight: 'bold', color: '#888' }}>{n.kilde} // {n.tid}</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '2px' }}>{n.titel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. KALENDER (Dagens aftaler) */}
        <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(0,210,255,0.2)', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '10px', fontWeight: '900', color: '#00d2ff', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>Calendar Protocol</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {kalender.map((k, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '10px 15px', borderRadius: '15px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#00d2ff' }}>{k.tid}</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{k.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SPOTIFY PLAYER */}
        <div style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(20px)', padding: '10px', borderRadius: '30px', border: '1px solid rgba(57,255,20,0.2)', marginBottom: '15px' }}>
          <iframe style={{ borderRadius: '22px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM3M?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>

        {/* 7. CHAT LOG */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 10px' }}>
          {chatLog.slice(-2).map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', padding: '10px 15px', borderRadius: '18px', fontSize: '10px', background: msg.role === 'user' ? 'rgba(255,49,49,0.1)' : 'rgba(0,210,255,0.1)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* 8. INPUT BOX */}
        <div style={{ position: 'fixed', bottom: '25px', left: '20px', right: '20px', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="COMMAND_MICKI..." 
              style={{ flex: 1, padding: '18px 25px', background: 'rgba(10, 5, 30, 0.9)', border: '1px solid #ff3131', borderRadius: '50px', color: 'white', fontSize: '12px', outline: 'none', boxShadow: '0 0 20px rgba(255,49,49,0.2)' }}
            />
            <button onClick={handleSend} style={{ width: '55px', height: '55px', background: '#ff3131', borderRadius: '50%', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>↑</button>
          </div>
        </div>

      </div>
    </div>
  );
}
