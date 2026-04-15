import React, { useState } from 'react';

export default function MiksAI() {
  const [inputText, setInputText] = useState("");
  const [kalender, setKalender] = useState([
    { tid: "08:30", event: "System Check-up", kat: "Core" },
    { tid: "17:30", event: "Log Opdatering", kat: "Micki" }
  ]);
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'MiksAI v5.0 ready. Systemet kører i minimalistisk tilstand.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = inputText.toLowerCase();
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    
    if (userMsg.includes("aftale") || userMsg.includes("kl")) {
      const tidMatch = inputText.match(/(\d{2}:\d{2})|(\d{1,2})[ ]?kl/);
      const tid = tidMatch ? (tidMatch[1] || tidMatch[2] + ":00") : "??:??";
      const eventNavn = inputText.replace(/aftale|kl|(\d{2}:\d{2})/gi, "").trim();

      const nyAftale = { tid: tid, event: eventNavn || "Ny event", kat: "User" };
      setKalender(prev => [...prev, nyAftale].sort((a, b) => a.tid.localeCompare(b.tid)));
      setChatLog([...newLog, { role: 'ai', text: `Kalender synkroniseret: ${nyAftale.event}.` }]);
    } else {
      setChatLog([...newLog, { role: 'ai', text: 'Data integreret i hukommelsen.' }]);
    }
    setInputText("");
  };

  const nyheder = [
    { kilde: "DR", titel: "Solen bryder igennem", tid: "Nu" },
    { kilde: "BIF", titel: "Træning intensiveres", tid: "1t" }
  ];

  const madplan = [
    { d: "Man", r: "Pasta", c: "#ff4d4d" },
    { d: "Tir", r: "Kylling", c: "#ffcc00" },
    { d: "Ons", r: "Bøf", c: "#c266ff" }
  ];

  return (
    <div style={{ backgroundColor: '#02010a', color: 'white', minHeight: '100vh', padding: '25px', fontFamily: '-apple-system, system-ui, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* 2026 BACKGROUND ENGINE */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.4, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at 20% 20%, rgba(255,49,49,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,210,255,0.15) 0%, transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '480px', margin: '0 auto', paddingBottom: '160px' }}>
        
        {/* ULTRA-CLEAN HEADER */}
        <header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', paddingTop: '20px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '200', letterSpacing: '-1px', margin: 0 }}>Miks<span style={{ fontWeight: '800' }}>AI</span></h1>
            <div style={{ fontSize: '9px', color: '#ff3131', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '4px' }}>Neural Interface</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '32px', fontWeight: '100', lineHeight: '1' }}>14°</div>
            <div style={{ fontSize: '8px', opacity: 0.4, fontWeight: 'bold', letterSpacing: '1px' }}>H J O R T E S P R I N G</div>
          </div>
        </header>

        {/* INFO CLUSTER */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '15px', marginBottom: '20px' }}>
          <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ fontSize: '10px', fontWeight: '800', color: '#ff3131', marginBottom: '15px', letterSpacing: '1px' }}>NYHEDER</h3>
            {nyheder.map((n, i) => (
              <div key={i} style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', lineHeight: '1.3' }}>{n.titel}</div>
                <div style={{ fontSize: '8px', opacity: 0.4, marginTop: '2px' }}>{n.kilde} • {n.tid}</div>
              </div>
            ))}
          </section>
          
          <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ fontSize: '10px', fontWeight: '800', opacity: 0.3, marginBottom: '15px', letterSpacing: '1px' }}>MENU</h3>
            {madplan.map((m, i) => (
              <div key={i} style={{ fontSize: '11px', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ opacity: 0.4 }}>{m.d}</span>
                <span style={{ fontWeight: '700', color: m.c }}>{m.r}</span>
              </div>
            ))}
          </section>
        </div>

        {/* CALENDAR - THE GLAS CARD */}
        <section style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(40px)', padding: '25px', borderRadius: '40px', border: '1px solid rgba(0,210,255,0.15)', marginBottom: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <h2 style={{ fontSize: '11px', fontWeight: '800', color: '#00d2ff', letterSpacing: '2px', marginBottom: '20px', textAlign: 'center' }}>CALENDAR PROTOCOL</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {kalender.map((k, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '12px', fontWeight: '300', color: '#00d2ff' }}>{k.tid}</span>
                <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '-0.2px' }}>{k.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CHAT LOG - SUBTLE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 10px' }}>
          {chatLog.slice(-2).map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
              <div style={{ padding: '14px 22px', borderRadius: '25px', fontSize: '12px', fontWeight: '500', background: msg.role === 'user' ? 'rgba(255,49,49,0.1)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* THE FLOATING INPUT UNIT */}
        <div style={{ position: 'fixed', bottom: '40px', left: '25px', right: '25px', maxWidth: '480px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Aftale eller kommando..." 
                style={{ width: '100%', padding: '22px 30px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: 'white', fontSize: '14px', fontWeight: '400', outline: 'none', backdropFilter: 'blur(20px)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              />
            </div>
            <button onClick={handleSend} style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', border: 'none', color: 'black', fontWeight: '800', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↑</button>
          </div>
        </div>

      </div>
    </div>
  );
}
