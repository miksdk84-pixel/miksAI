import React, { useState } from 'react';

export default function MiksAI() {
  const [inputText, setInputText] = useState("");
  const [kalender, setKalender] = useState([
    { tid: "08:30", event: "System Check-up", kat: "System" },
    { tid: "17:30", event: "Data Log Opdatering", kat: "Micki" }
  ]);
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'MiksAI Online. Skriv f.eks. "Aftale kl 14:00 Fodbold" for at opdatere kalenderen.' }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const userMsg = inputText.toLowerCase();
    const newLog = [...chatLog, { role: 'user', text: inputText }];
    
    // Logik til at fange kalender-aftaler
    if (userMsg.includes("aftale") || userMsg.includes("kl")) {
      // Simpel logik der leder efter et tidspunkt (f.eks. 12:00)
      const tidMatch = inputText.match(/(\d{2}:\d{2})|(\d{1,2})[ ]?kl/);
      const tid = tidMatch ? tidMatch[0].replace(" kl", ":00") : "??:??";
      const eventNavn = inputText.replace(/aftale|kl|(\d{2}:\d{2})/gi, "").trim();

      const nyAftale = { tid: tid, event: eventNavn || "Ny begivenhed", kat: "Bruger" };
      setKalender(prev => [...prev, nyAftale].sort((a, b) => a.tid.localeCompare(b.tid)));
      
      setChatLog([...newLog, { role: 'ai', text: `Kalender opdateret: ${nyAftale.event} kl. ${nyAftale.tid}.` }]);
    } else {
      setChatLog([...newLog, { role: 'ai', text: 'Data modtaget. Jeg lærer af dine informationer.' }]);
    }
    
    setInputText("");
  };

  return (
    <div style={{ backgroundColor: '#050214', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* BAGGRUND */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.35, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at top left, rgba(255,49,49,0.3) 0%, transparent 60%), radial-gradient(circle at bottom right, rgba(0,210,255,0.3) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px', margin: '0 auto', paddingBottom: '140px' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', borderBottom: '2px solid #ff3131', paddingBottom: '15px' }}>
          <div style={{ width: '45px', height: '45px', background: '#ff3131', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '22px', boxShadow: '0 0 20px rgba(255,49,49,0.6)' }}>M</div>
          <h1 style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '1px' }}>MiksAI</h1>
        </header>

        {/* KALENDER PROTOCOL - Nu med dynamiske aftaler */}
        <section style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(30px)', padding: '25px', borderRadius: '35px', border: '1px solid rgba(0,210,255,0.3)', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: '900', color: '#00d2ff', letterSpacing: '3px', marginBottom: '20px', textTransform: 'uppercase' }}>Calendar Protocol</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {kalender.map((k, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '12px 20px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#00d2ff' }}>{k.tid}</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{k.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CHAT LOG */}
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
              placeholder="SKRIV AFTALE (F.EKS. KL 12:00 MØDE)..." 
              style={{ flex: 1, padding: '22px 30px', background: 'rgba(10, 5, 30, 0.95)', border: '2px solid #ff3131', borderRadius: '50px', color: 'white', fontSize: '14px', fontWeight: 'bold', outline: 'none', boxShadow: '0 0 30px rgba(255,49,49,0.4)', backdropFilter: 'blur(15px)' }}
            />
            <button onClick={handleSend} style={{ width: '65px', height: '65px', background: '#ff3131', borderRadius: '50%', border: 'none', color: 'white', fontWeight: 'black', fontSize: '24px', cursor: 'pointer' }}>↑</button>
          </div>
        </div>

      </div>
    </div>
  );
}
