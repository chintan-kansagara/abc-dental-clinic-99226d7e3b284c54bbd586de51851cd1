import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Mark({ className = '' }) {
  return <svg className={className} viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M20 7C12 1 3 6 5 17c1 6 5 10 7 19 1 5 4 4 5-1l3-12 3 12c1 5 4 6 5 1 2-9 6-13 7-19C37 6 28 1 20 7Z" stroke="currentColor" strokeWidth="2"/><path d="M14 12c4 2 8 2 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}

function Arrow({ diagonal = false }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function DentalArtwork() {
  return <svg className="dental-art" viewBox="0 0 600 660" fill="none" role="img" aria-labelledby="art-title art-description">
    <title id="art-title">An original sculptural tooth illustration</title>
    <desc id="art-description">An ivory tooth floats within a soft green architectural arch, surrounded by fine circular lines.</desc>
    <defs>
      <linearGradient id="arch" x1="90" y1="80" x2="520" y2="620" gradientUnits="userSpaceOnUse"><stop stopColor="#c4d6bc"/><stop offset="1" stopColor="#8eae97"/></linearGradient>
      <linearGradient id="tooth" x1="194" y1="192" x2="396" y2="463" gradientUnits="userSpaceOnUse"><stop stopColor="#ffffff"/><stop offset=".47" stopColor="#f1f0df"/><stop offset="1" stopColor="#b5c5ae"/></linearGradient>
      <linearGradient id="edge" x1="209" y1="178" x2="419" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#d3ddc8"/><stop offset="1" stopColor="#6e947f"/></linearGradient>
      <radialGradient id="shadow"><stop stopColor="#244d3d" stopOpacity=".28"/><stop offset="1" stopColor="#244d3d" stopOpacity="0"/></radialGradient>
    </defs>
    <path d="M82 601V269a218 218 0 0 1 436 0v332H82Z" fill="url(#arch)"/>
    <path d="M109 601V270a191 191 0 0 1 382 0v331" stroke="#ecf1df" strokeOpacity=".45"/>
    <ellipse cx="300" cy="545" rx="165" ry="43" fill="url(#shadow)"/>
    <circle cx="301" cy="319" r="214" stroke="#f3f3e7" strokeOpacity=".45"/>
    <circle cx="301" cy="319" r="177" stroke="#f3f3e7" strokeOpacity=".35" strokeDasharray="2 9"/>
    <path d="M303 198c-42-35-95-26-110 18-18 55 9 87 22 131 10 34 12 111 35 127 19 14 25-14 30-37l20-87 23 88c6 25 13 51 33 34 24-21 21-89 35-126 17-43 42-84 25-133-13-39-65-45-113-15Z" fill="url(#edge)" transform="translate(9 5)"/>
    <path d="M294 190c-42-35-95-26-110 18-18 55 9 87 22 131 10 34 12 111 35 127 19 14 25-14 30-37l20-87 23 88c6 25 13 51 33 34 24-21 21-89 35-126 17-43 42-84 25-133-13-39-65-45-113-15Z" fill="url(#tooth)"/>
    <path d="M210 216c17-26 41-16 64-7 26 10 47 5 65-2" stroke="white" strokeOpacity=".7" strokeWidth="7" strokeLinecap="round"/>
    <path d="M202 243c-3 29 5 47 13 65" stroke="white" strokeOpacity=".5" strokeWidth="5" strokeLinecap="round"/>
    <path d="M448 156v32m-16-16h32" stroke="#f5f5e8" strokeWidth="1.5"/>
    <path d="M133 410v20m-10-10h20" stroke="#f5f5e8" strokeWidth="1.5"/>
    <circle cx="430" cy="465" r="5" stroke="#f5f5e8"/>
    <path d="M45 602h510" stroke="#173e38" strokeOpacity=".25"/>
  </svg>;
}

function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header">
      <a className="brand" href="#home" aria-label="ABC Dental Clinic home"><span className="brand-icon"><Mark /></span><span>ABC <span className="brand-sub">Dental Clinic</span></span></a>
      <nav aria-label="Main navigation"><a href="#clinic">The clinic</a><a href="#ahmedabad">Ahmedabad <Arrow diagonal /></a></nav>
    </header>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-line" /> DENTAL CLINIC · AHMEDABAD</p>
          <h1 id="hero-title">ABC<br /><span>Dental</span><br />Clinic<span className="title-dot">.</span></h1>
          <p className="hero-description">Dental care.<br />Here in Ahmedabad.</p>
          <a className="button" href="#clinic">Discover the clinic <span><Arrow /></span></a>
          <div className="hero-bottom"><span className="mini-mark">ABC</span><span>A dental clinic<br />in Ahmedabad</span></div>
        </div>
        <div className="hero-visual"><span className="visual-top">FORM / BALANCE / SIMPLICITY</span><DentalArtwork /><div className="visual-bottom"><span>ABC DENTAL CLINIC</span><span>AHMEDABAD, IN</span></div></div>
      </section>
      <section className="clinic-section" id="clinic" aria-labelledby="clinic-title">
        <div className="section-label"><span>01 / THE CLINIC</span><span className="small-line" /></div>
        <div className="clinic-content"><h2 id="clinic-title">A place for<br /><em>dental care.</em></h2><div className="clinic-detail"><Mark className="detail-mark" /><p>ABC Dental Clinic is a dental clinic in Ahmedabad.</p><a className="text-link" href="#ahmedabad">Our city <Arrow diagonal /></a></div></div>
      </section>
      <section className="location-section" id="ahmedabad" aria-labelledby="location-title">
        <div className="location-copy"><p className="eyebrow">02 / OUR CITY</p><h2 id="location-title">Ahmedabad<span>.</span></h2><p>Home to ABC Dental Clinic.</p><div className="location-signature"><span className="location-dot" /> Ahmedabad <span>Gujarat, India</span></div></div>
        <div className="city-art" aria-hidden="true"><svg viewBox="0 0 420 270" fill="none"><circle cx="291" cy="92" r="49" fill="#baccac"/><path d="M25 237h370M63 236V127h91v109M69 127l39-37 40 37M181 236V99h83v137M174 99h97M190 99V81h65v18M295 236V150h69v86M286 150h87M307 150v-26h45v26" stroke="currentColor" strokeWidth="1.5"/><path d="M87 236v-48a21 21 0 0 1 42 0v48M201 236v-62a22 22 0 0 1 44 0v62M316 236v-39a14 14 0 0 1 28 0v39M84 143h13m21 0h13M205 121h12m14 0h12M205 140h12m14 0h12M314 169h9m12 0h9" stroke="currentColor" strokeWidth="1.5"/><path d="M38 236v-48m0 15c-22-3-24-25-14-35 2-23 29-24 32-1 15 12 5 35-18 36M385 236v-48m0 15c-22-3-24-25-14-35 2-23 29-24 32-1 15 12 5 35-18 36" stroke="currentColor" strokeWidth="1.5"/><path d="M119 58h43m-21-11h40M44 76h25" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5"/></svg><span>AN ABSTRACT CITYSCAPE</span></div>
      </section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><Mark /><span>ABC <span className="brand-sub">Dental Clinic</span></span></a><p>Dental clinic · Ahmedabad</p><a className="back-top" href="#home">Back to top <Arrow diagonal /></a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
