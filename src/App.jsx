import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import OurProjects from './components/OurProjects.jsx';
import LetsBuild from './components/LetsBuild.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './css/index.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <OurProjects />
      <LetsBuild />
      <Contact />
      <Footer />
    </div>
  );
}

