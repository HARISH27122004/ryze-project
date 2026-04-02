// import { useState, useEffect } from 'react';
// import '../css/Navbar.css';

// const links = ['Home', 'Blogs', 'Services', 'Contact'];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [theme, setTheme] = useState("dark");

//   // 🔥 NEW STATES
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Existing logic
//       setScrolled(currentScrollY > 40);

//       // 🔥 Detect section theme
//       const sections = document.querySelectorAll("section");
//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 80 && rect.bottom >= 80) {
//           const currentTheme = section.getAttribute("data-theme");
//           setTheme(currentTheme || "dark");
//         }
//       });

//       // 🔥 Prevent jitter
//       if (Math.abs(currentScrollY - lastScrollY) < 10) return;

//       // 🔥 Scroll direction logic
//       if (currentScrollY < 50) {
//         setShowNavbar(true);
//       } else if (currentScrollY > lastScrollY) {
//         setShowNavbar(false); // scroll down
//       } else {
//         setShowNavbar(true); // scroll up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`navbar 
//         ${scrolled ? 'navbar--scrolled' : ''} 
//         navbar--${theme} 
//         ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}
//       `}
//     >

//       <ul className="navbar__links">
//         {links.map(l => (
//           <li key={l}>
//             <a href={`#${l.toLowerCase()}`} className="navbar__link">{l}</a>
//           </li>
//         ))}
//       </ul>

//       <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
//         <span /><span /><span />
//       </button>

//       {menuOpen && (
//         <div className="navbar__mobile">
//           {links.map(l => (
//             <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
//               {l}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/Navbar.css';

const links = ['Home', 'Blogs', 'Services', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          const currentTheme = section.getAttribute("data-theme");
          setTheme(currentTheme || "dark");
        }
      });

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY < 50) setShowNavbar(true);
      else if (currentScrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
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
      {/* Desktop Links */}
      <ul className="navbar__links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="navbar__link">{l}</a>
          </li>
        ))}
      </ul>

      {/* 🔥 Burger */}
      <div className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      {/* 🔥 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}