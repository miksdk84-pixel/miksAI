import React, { useState } from 'react';

export default function MickiDashboard() {
  const [inputText, setInputText] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'System V4.0 Online. Jeg er klar til at modtage din data, MICKI.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    setChatLog(newLog);
    
    // AI svarer og bekræfter datamodtagelse
    setTimeout(() => {
      setChatLog([...newLog, { role: 'ai', text: `Data registreret: "${inputText}". Systemet lærer din profil at kende.` }]);
    }, 500);
    
    setInputText("");
  };

  const nyheder = [
    { kilde: "DR NYHEDER", titel: "Orbán under pres: Massive demonstrationer i Budapest", tid: "Lige nu" },
    { kilde: "TV2 NEWS", titel: "Dansk økonomi i vækst: Rekordhøj beskæftigelse", tid: "15 min siden" },
    { kilde: "B.T. SPORT", titel: "BIF melder klar til guldstrid: Truppen er skadesfri", tid: "1 time siden" }
  ];

  const kalender = [
    { tid: "08:30", event: "System Check-up", kat: "System" },
    { tid: "12:00", event: "Middagsaftale", kat: "Social" },
    { tid: "17:30", event: "Data Log Opdatering", kat: "Micki" }
  ];

  return (
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* BAGGRUNDSFYLD (backfest.png) */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        opacity: 0.35, 
        backgroundImage: 'url(/backfest.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        zIndex: 0 
      }} />

      {/* NEON GLOW KANTER */}
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at top left, rgba(255,49,49,0.3) 0%, transparent 60%), radial-gradient(circle at bottom right, rgba(0,210,255,0.3) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto', paddingBottom: '140px' }}>
        
        {/* HEADER - Nu med MiksAI */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', borderBottom: '2px solid #ff3131', paddingBottom: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '45px', height: '45px', background: '#ff3131', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '22px', boxShadow: '0 0 20px rgba(255,49,49,0.6)' }}>M</div>
            <h1 style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '1px', italic: 'true' }}>MiksAI</h1>
          </div>
          <div style={{ fontSize: '10px', color: '#00d2ff', fontWeight: 'bold', border: '1px solid #00d2ff', padding: '4px 8px', borderRadius: '5px' }}>DATA_FEED: ACTIVE</div>
        </header>

        {/* INTELLIGENCE FEED */}
        <section style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(30px)', padding: '25px', borderRadius: '35px', border: '1px solid rgba(255,49,49,0.3)', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: '900', color: '#ff3131', letterSpacing: '3px', marginBottom: '20px', textTransform: 'uppercase' }}>Intelligence Feed</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {nyheder.map((n, i) => (
              <div key={i} style={{ borderLeft: '3px solid #ff3131', paddingLeft: '15px' }}>
                <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#00d2ff', marginBottom: '4px' }}>{n.kilde} • {n.tid}</div>
                <div style={{ fontSize: '16px', fontWeight: '900', lineHeight: '1.2' }}>{n.titel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CALENDAR PROTOCOL */}
        <section style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(30px)', padding: '25px', borderRadius: '35px', border: '1px solid rgba(0,210,255,0.3)', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: '900', color: '#00d2ff', letterSpacing: '3px', marginBottom: '20px', textTransform: 'uppercase' }}>Calendar Protocol</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {kalender.map((k, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '12px 20px', borderRadius: '18px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#00d2ff' }}>{k.tid}</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{k.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DATA LOG / CHAT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 10px', marginBottom: '20px' }}>
          {chatLog.slice(-3).map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '90%' }}>
              <div style={{ padding: '15px 20px', borderRadius: '22px', fontSize: '12px', fontWeight: 'bold', background: msg.role === 'user' ? 'rgba(255,49,49,0.25)' : 'rgba(0,210,255,0.15)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT UNIT */}
        <div style={{ position: 'fixed', bottom: '30px', left: '20px', right: '20px', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="FODR SYSTEMET MED DATA..." 
              style={{ flex: 1, padding: '22px 30px', background: 'rgba(10, 5, 30, 0.95)', border: '2px solid #ff3131', borderRadius: '50px', color: 'white', fontSize: '14px', fontWeight: 'bold', outline: 'none', boxShadow: '0 0 30px rgba(255,49,49,0.4)', backdropFilter: 'blur(15px)' }}
            />
            <button onClick={handleSend} style={{ width: '65px', height: '65px', background: '#ff3131', borderRadius: '50%', border: 'none', color: 'white', fontWeight: 'black', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↑</button>
          </div>
        </div>

      </div>
    </div>
  );
}
