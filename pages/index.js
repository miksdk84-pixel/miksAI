import React, { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'System genoprettet. Velkommen, MICKI. Dark mode er låst.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setChatLog([...chatLog, { role: 'user', text: inputText }, { role: 'ai', text: 'Systemet behandler din anmodning...' }]);
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
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', position: 'relative' }}>
      
      {/* BAGGRUNDSBILLEDE (backfest.png) */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.1, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none', zIndex: 0 }} />
      
      {/* M_LOGO VANDMÆRKE */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.05, backgroundImage: 'url(/M_logo.png)', backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto' }}>
        
        {/* HEADER med miksai.png */}
        <header style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
          <img src="/miksai.png" alt="MIKSAI HEADER" style={{ maxWidth: '200px', marginBottom: '15px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#ff0000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '22px', boxShadow: '0 0 20px rgba(255,0,0,0.5)' }}>M</div>
            <h1 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>Micki_Control</h1>
          </div>
        </header>

        {/* SPOTIFY PLAYER */}
        <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', padding: '15px', borderRadius: '28px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <iframe style={{ borderRadius: '18px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGvYBM31?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>

        {/* UDVIDET MADPLAN */}
        <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', padding: '25px', borderRadius: '35px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.5, marginBottom: '20px', textAlign: 'center' }}>Weekly Protocol _ Uge 16</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {madplan.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 15px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#888' }}>{m.d}</span>
                <span style={{ fontSize: '11px', fontWeight: '900', color: m.c, textTransform: 'uppercase', italic: 'true' }}>{m.r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CHAT LOG */}
        <div style={{ marginBottom: '120px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {chatLog.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{ padding: '12px 18px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', background: msg.role === 'user' ? 'rgba(255,0,0,0.15)' : 'rgba(0,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* FIXED INPUT BOX */}
        <div style={{ position: 'fixed', bottom: '25px', left: '20px', right: '20px', maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Skriv kommando..." 
            style={{ flex: 1, padding: '18px 25px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', fontSize: '13px', outline: 'none', backdropFilter: 'blur(10px)' }}
          />
          <button onClick={handleSend} style={{ width: '55px', height: '55px', backgroundColor: '#ff0000', borderRadius: '50%', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 15px rgba(255,0,0,0.3)' }}>↑</button>
        </div>

      </div>
    </div>
  );
}
