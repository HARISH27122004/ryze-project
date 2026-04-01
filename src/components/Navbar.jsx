import { useState, useEffect } from 'react';
import '../css/Navbar.css';

const links = ['Home', 'Blogs', 'Services', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // 🔥 NEW STATES
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Existing logic
      setScrolled(currentScrollY > 40);

      // 🔥 Detect section theme
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          const currentTheme = section.getAttribute("data-theme");
          setTheme(currentTheme || "dark");
        }
      });

      // 🔥 Prevent jitter
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      // 🔥 Scroll direction logic
      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar 
        ${scrolled ? 'navbar--scrolled' : ''} 
        navbar--${theme} 
        ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}
      `}
    >

      <ul className="navbar__links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="navbar__link">{l}</a>
          </li>
        ))}
      </ul>

      <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}