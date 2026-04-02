import { services } from '../data/services';
import '../css/WhatWeDo.css'

const iconMap = {
  '💼': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    </svg>
  ),
  '🏪': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  '🎨': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
    </svg>
  ),
  '📸': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  '🎬': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  ),
  '🌐': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  '📣': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/>
    </svg>
  ),
  '⚙️': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  '⭐': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  '🔄': (
    <svg viewBox="0 0 24 24" fill="none" className='wwd-svg' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/>
    </svg>
  ),
};

export default function WhatWeDo() {
   // Brand Identity highlighted by default

  return (
    <section className="wwd" id="services">
      <h2 className="wwd__heading">What We <span>Do</span></h2>
      <div className="wwd__grid">
        {services.map((s, i) => (
          <div
            key={s.id}
            className="wwd__card wwd__card--active"
          >
            <div className="wwd__icon">
              {iconMap[s.icon]}
            </div>
            <h3 className="wwd__title">{s.title}</h3>
            <p className="wwd__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

