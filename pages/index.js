import React, { useState } from 'react';

export default function MiksAI() {
  const [inputText, setInputText] = useState("");
  const [madplan, setMadplan] = useState([
    { d: "Man", r: "Pasta Bolognese", c: "#ff4d4d" },
    { d: "Tir", r: "Kylling m. Ris", c: "#ffcc00" },
    { d: "Ons", r: "Hakkebøffer", c: "#c266ff" }
  ]);

  const genererMadplan = () => {
    const retter = ["Tacos", "Laks m. asparges", "Hjemmelavet Pizza", "Wok m. nudler", "Burger", "Lasagne", "Salat bowl"];
    const nyeRetter = madplan.map(m => ({
      ...m,
      r: retter[Math.floor(Math.random() * retter.length)]
    }));
    setMadplan(nyeRetter);
  };

  const superliga = [
    { p: 1, t: "AGF", pt: 56 },
    { p: 2, t: "FCM", pt: 51 },
    { p: 3, t: "FCN", pt: 41 },
    { p: 6, t: "BIF", pt: 35 }
  ];

  return (
    <div style={{ backgroundColor: '#02010a', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, sans-serif' }}>
      
      {/* BACKGROUND EFFECTS */}
      <div style={{ position: 'fixed', inset: 0, opacity: 0.3, backgroundImage: 'url(/backfest.png)', backgroundSize: 'cover' }} />
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER AREA */}
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '200' }}>Miks<span style={{ fontWeight: '800' }}>AI</span></h1>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '24px', fontWeight: '100' }}>14°</div>
            <div style={{ fontSize: '8px', opacity: 0.5, letterSpacing: '2px' }}>BAGSVÆRD</div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          
          {/* LIVE NEWS FEED */}
          <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(255,49,49,0.2)' }}>
            <h3 style={{ fontSize: '10px', color: '#ff3131', letterSpacing: '2px', marginBottom: '15px' }}>LIVE NYHEDER</h3>
            <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '10px', borderLeft: '2px solid #ff3131', paddingLeft: '10px' }}>
                <b>BREAKING:</b> Danskernes streamingforbrug sætter rekord i Q1 2026.
              </div>
              <div style={{ opacity: 0.7 }}>NASA forbereder historisk måneflyvning i aften.</div>
            </div>
          </section>

          {/* SPORTS FEED & BIF */}
          <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(255,222,89,0.2)' }}>
            <h3 style={{ fontSize: '10px', color: '#ffde59', letterSpacing: '2px', marginBottom: '15px' }}>SPORTS CENTER</h3>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '20px', marginBottom: '10px' }}>
              <div style={{ fontSize: '9px', opacity: 0.5 }}>NÆSTE KAMP</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Brøndby IF vs Sønderjyske</div>
              <div style={{ fontSize: '11px', color: '#ffde59' }}>17. April • 19:00</div>
            </div>
            <div style={{ fontSize: '11px' }}>
              {superliga.map(s => (
                <div key={s.t} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>{s.p}. {s.t}</span> <span>{s.pt} PTS</span>
                </div>
              ))}
            </div>
          </section>

          {/* MADPLAN MED GENERATOR */}
          <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(178,102,255,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '10px', color: '#b266ff', letterSpacing: '2px' }}>MADPLAN</h3>
              <button onClick={genererMadplan} style={{ background: '#b266ff', border: 'none', color: 'white', fontSize: '9px', padding: '5px 10px', borderRadius: '10px', cursor: 'pointer' }}>GENERÉR</button>
            </div>
            {madplan.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                <span style={{ opacity: 0.4 }}>{m.d}</span>
                <span style={{ fontWeight: '600' }}>{m.r}</span>
              </div>
            ))}
          </section>

          {/* KALENDER */}
          <section style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(30px)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(0,210,255,0.2)' }}>
            <h3 style={{ fontSize: '10px', color: '#00d2ff', letterSpacing: '2px', marginBottom: '15px' }}>KOMMENDE AFTALER</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '12px', display: 'flex', gap: '15px' }}>
                <span style={{ color: '#00d2ff' }}>18:30</span>
                <span>System Gennemgang</span>
              </div>
              <div style={{ fontSize: '12px', display: 'flex', gap: '15px', opacity: 0.5 }}>
                <span>I morgen</span>
                <span>TikTok Strategi Møde</span>
              </div>
            </div>
          </section>

        </div>

        {/* FLOATING COMMAND INPUT */}
        <div style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '500px' }}>
          <input 
            type="text" 
            placeholder="Skriv kommando..." 
            style={{ width: '100%', padding: '20px 30px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: 'white', outline: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          />
        </div>

      </div>
    </div>
  );
}
