import '../css/LetsBuild.css';
import BlurText from './BlurText'
import '../css/BlurText.css'

export default function LetsBuild() {
  return (
    <section className="letsbuild">
      <div className="letsbuild__watermark">RYZE</div>
      <BlurText
        text="Let's Build Your Project to Success"
        delay={200}
        animateBy="words"
        direction="top"
        className="BlurText letsbuild__text"
      />
    </section>
  );


}
