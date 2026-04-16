import React, { useState, useEffect } from 'react';

export default function MiksAI() {
  const [inputText, setInputText] = useState("");
  const [icalLink, setIcalLink] = useState("");
  const [kalender, setKalender] = useState([
    { tid: "11:00", event: "Samtale m. Dorte L", src: "Google" },
    { tid: "08:00 (Fre)", event: "Behandling m. Nina H", src: "MinSP" },
    { tid: "19:00", event: "BIF vs Sønderjyske", src: "Sport" }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    // Hvis du paster dit Google iCal link
    if (inputText.includes("google.com/calendar/ical")) {
      setIcalLink(inputText);
      alert("SYSTEM SYNC: Google Kalender er nu tilkoblet MiksAI.");
    } else {
      // Almindelig besked/aftale input
      const tidMatch = inputText.match(/(\d{2}:\d{2})/);
      const tid = tidMatch ? tidMatch[0] : "??:??";
      const event = inputText.replace(/aftale|kl|(\d{2}:\d{2})/gi, "").trim();
      setKalender(prev => [...prev, { tid, event: event || inputText, src: "User" }].sort((a,b) => a.tid.localeCompare(b.tid)));
    }
    setInputText("");
  };

  return (
    <div style={{ backgroundColor: '#02010a', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, sans-serif' }}>
      <div style={{ position: 'fixed', inset: 0, opacity: 0.3, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at bottom right, rgba(66,133,244,0.15) 0%, transparent 50%), radial-gradient(circle at top left, rgba(57,255,20,0.1) 0%, transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto', paddingBottom: '140px' }}>
        
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '35px' }}>
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: '100', margin: 0, letterSpacing: '-2px' }}>Miks<span style={{ fontWeight: '900' }}>AI</span></h1>
            <div style={{ fontSize: '9px', color: icalLink ? '#39ff14' : '#4285F4', fontWeight: 'bold' }}>
              {icalLink ? '● SYNC_ACTIVE' : '○ WAITING_FOR_LINK'}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', fontWeight: 'bold' }}>16. APR 2026</div>
            <div style={{ fontSize: '10px', opacity: 0.5 }}>BAGSVÆRD</div>
          </div>
        </header>

        {/* LIVE KALENDER BOX */}
        <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(35px)', padding: '25px', borderRadius: '35px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <h3 style={{ fontSize: '10px', color: '#4285F4', letterSpacing: '2px', marginBottom: '20px', fontWeight: '900' }}>DAILY_PROTOCOL</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {kalender.map((k, i) => (
              <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', borderLeft: k.src === "Google" ? '4px solid #4285F4' : '4px solid #39ff14', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{k.event}</div>
                  <div style={{ fontSize: '9px', opacity: 0.4, marginTop: '2px' }}>{k.src.toUpperCase()} SOURCE</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '900', color: k.src === "Google" ? '#4285F4' : '#39ff14' }}>{k.tid}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SPORT & STATUS QUICK-VIEW */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '25px', border: '1px solid rgba(255,222,89,0.2)' }}>
            <div style={{ fontSize: '8px', color: '#ffde59', fontWeight: 'bold', marginBottom: '5px' }}>BIF_STATUS</div>
            <div style={{ fontSize: '12px', fontWeight: '900' }}>6. PLADS</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '25px', border: '1px solid rgba(178,102,255,0.2)' }}>
            <div style={{ fontSize: '8px', color: '#b266ff', fontWeight: 'bold', marginBottom: '5px' }}>SYSTEM_HEALTH</div>
            <div style={{ fontSize: '12px', fontWeight: '900' }}>OPTIMAL</div>
          </div>
        </div>

        {/* FLOATING COMMAND INPUT */}
        <div style={{ position: 'fixed', bottom: '30px', left: '20px', right: '20px', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={icalLink ? "Indtast aftale..." : "Sæt dit Google iCal link her..."}
              style={{ width: '100%', padding: '22px 30px', background: 'rgba(5, 5, 20, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: 'white', fontSize: '13px', outline: 'none', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
            />
            <button onClick={handleSend} style={{ position: 'absolute', right: '10px', top: '10px', width: '45px', height: '45px', borderRadius: '50%', border: 'none', background: icalLink ? '#39ff14' : '#4285F4', color: 'black', fontWeight: 'bold', cursor: 'pointer' }}>↑</button>
          </div>
        </div>

      </div>
    </div>
  );
}
