import LiquidEther from './LiquidEither';
import '../css/Hero.css';
import TextSlider from '../components/TextSlider.jsx'

export default function Hero() {
  return (
    <div className="hero-wrapper">

      {/* BACKGROUND */}
      <div className="hero-bg">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          resolution={0.5}
          autoDemo = {true}
          autoSpeed={1.2}
          autoIntensity={3.5}
        />
      </div>

      {/* CONTENT */}
      <section className="hero" id="home" data-theme="dark">
        <div className="hero__content">
          <p className='oswald-hero'>DESIGN</p>
          <p className='oswald-hero'>DEVELOP & DELIVER</p>
        </div>

        <div className="hero__tagline">
          <TextSlider/>
        </div>
      </section>

    </div>
  );
}