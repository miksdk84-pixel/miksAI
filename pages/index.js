import React, { useState } from 'react';

export default function MiksAI() {
  const [inputText, setInputText] = useState("");
  const [kalender, setKalender] = useState([
    { tid: "08:30", event: "System Check-up", kat: "System" },
    { tid: "17:30", event: "Data Log Opdatering", kat: "Micki" }
  ]);
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'MiksAI Master Interface Online. Jeg overvåger alle systemer.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = inputText.toLowerCase();
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    
    // Kalender-logik (fanger klokkeslæt og tekst)
    if (userMsg.includes("aftale") || userMsg.includes("kl")) {
      const tidMatch = inputText.match(/(\d{2}:\d{2})|(\d{1,2})[ ]?kl/);
      const tid = tidMatch ? (tidMatch[1] || tidMatch[2] + ":00") : "??:??";
      const eventNavn = inputText.replace(/aftale|kl|(\d{2}:\d{2})/gi, "").trim();

      const nyAftale = { tid: tid, event: eventNavn || "Ny begivenhed", kat: "Bruger" };
      setKalender(prev => [...prev, nyAftale].sort((a, b) => a.tid.localeCompare(b.tid)));
      setChatLog([...newLog, { role: 'ai', text: `Kalender opdateret: ${nyAftale.event} kl. ${nyAftale.tid}.` }]);
    } else {
      setChatLog([...newLog, { role: 'ai', text: 'Data modtaget. Informationerne er indlejret i systemet.' }]);
    }
    setInputText("");
  };

  const nyheder = [
    { kilde: "DR", titel: "Solen bryder igennem i dag", tid: "Nu" },
    { kilde: "TV2", titel: "Ny AI teknologi revolutionerer hverdagen", tid: "20m" },
    { kilde: "BIF", titel: "Truppen træner for lukkede døre", tid: "1t" }
  ];

  const madplan = [
    { d: "Man", r: "Pasta Bolognese", c: "#ff3131" },
    { d: "Tir", r: "Kylling m. Ris", c: "#ffde59" },
    { d: "Ons", r: "Hakkebøffer", c: "#b266ff" }
  ];

  return (
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '15px', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* BAGGRUND & NEON */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.3, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at top left, rgba(255,49,49,0.2) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(0,210,255,0.2) 0%, transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto', paddingBottom: '140px' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '2px solid #ff3131', paddingBottom: '10px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '1px', fontStyle: 'italic' }}>MiksAI</h1>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '18px', fontWeight: '900' }}>14°C</div>
            <div style={{ fontSize: '8px', color: '#00d2ff', fontWeight: 'bold' }}>HJORTESPRING</div>
          </div>
        </header>

        {/* TOP GRID: NYHEDER & MADPLAN */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <section style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', padding: '15px', borderRadius: '25px', border: '1px solid rgba(255,49,49,0.2)' }}>
            <h3 style={{ fontSize: '9px', fontWeight: '900', color: '#ff3131', marginBottom: '10px' }}>NEWS</h3>
            {nyheder.map((n, i) => (
              <div key={i} style={{ marginBottom: '8px', borderLeft: '2px solid #ff3131', paddingLeft: '8px' }}>
                <div style={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '1.1' }}>{n.titel}</div>
              </div>
            ))}
          </section>
          <section style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', padding: '15px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '9px', fontWeight: '900', opacity: 0.5, marginBottom: '10px' }}>MENU</h3>
            {madplan.map((m, i) => (
              <div key={i} style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ opacity: 0.5 }}>{m.d}</span>
                <span style={{ fontWeight: 'bold', color: m.c }}>{m.r.split(' ')[0]}</span>
              </div>
            ))}
          </section>
        </div>

        {/* KALENDER PROTOCOL */}
        <section style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(0,210,255,0.3)', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '10px', fontWeight: '900', color: '#00d2ff', letterSpacing: '2px', marginBottom: '15px' }}>CALENDAR PROTOCOL</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {kalender.map((k, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', padding: '10px 15px', borderRadius: '15px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#00d2ff' }}>{k.tid}</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{k.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CHAT LOG */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          {chatLog.slice(-2).map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
              <div style={{ padding: '12px 18px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', background: msg.role === 'user' ? 'rgba(255,49,49,0.2)' : 'rgba(0,210,255,0.1)', border: '1px solid rgba(255,255,255,0.05)' }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT UNIT */}
        <div style={{ position: 'fixed', bottom: '25px', left: '15px', right: '15px', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="KOMMANDO ELLER AFTALE..." 
              style={{ flex: 1, padding: '20px 25px', background: 'rgba(5, 2, 20, 0.9)', border: '2px solid #ff3131', borderRadius: '50px', color: 'white', fontSize: '12px', fontWeight: 'bold', outline: 'none', boxShadow: '0 0 20px rgba(255,49,49,0.3)' }}
            />
            <button onClick={handleSend} style={{ width: '55px', height: '55px', background: '#ff3131', borderRadius: '50%', border: 'none', color: 'white', fontWeight: 'black', fontSize: '22px' }}>↑</button>
          </div>
        </div>

      </div>
    </div>
  );
}
