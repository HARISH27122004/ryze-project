import '../css/TextSlider.css'

export default function TextSlider() {
  return (
    <div className="text-container">
      <div className="text-slider">
        <div className="word">ALL IN ONE PLACE</div>
        <div className="word">RYZE</div>
        <div className="word">ALL IN ONE PLACE</div> {/* clone for seamless loop */}
      </div>
    </div>
  );
}