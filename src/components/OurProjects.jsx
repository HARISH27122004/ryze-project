import { useState } from 'react';
import { services } from '../data/services';
import '../css/OurProjects.css'

export default function OurProjects() {
  const [selected, setSelected] = useState(0);
  const [dropOpen, setDropOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const current = services[selected];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">Our Projects</h2>

      {/* Dropdown selector */}
      <div className="projects__dropdown-wrap">
        <button
          className="projects__dropdown-btn"
          onClick={() => setDropOpen(!dropOpen)}
        >
          <span>• {current.title}</span>
          <span className="projects__arrow">▼</span>
        </button>
        {dropOpen && (
          <div className="projects__dropdown-menu">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`projects__dropdown-item ${i === selected ? 'projects__dropdown-item--active' : ''}`}
                onClick={() => { setSelected(i); setDropOpen(false); setTestimonialIdx(0); }}
              >
                {s.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project detail card */}
      <div className="projects__card">
        <div className="projects__card-left">
          <h3 className="projects__card-title">{current.title}</h3>
          <p className="projects__card-detail">{current.detail}</p>

          <div className="projects__what">
            <p className="projects__what-label">What We Did:</p>
            <ul className="projects__what-list">
              {current.whatWeDid.map(w => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>

          <div className="projects__industries">
            <p className="projects__industries-label">Industries Served:</p>
            <div className="projects__tags">
              {current.industries.map(ind => (
                <span key={ind} className="projects__tag">{ind}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="projects__testimonial">
          <h4 className="projects__test-title">Client Testimonials</h4>
          <p className="projects__test-quote">"{current.testimonial.quote}"</p>
          <div className="projects__test-client">
            <div className="projects__test-avatar">{current.testimonial.client.charAt(0)}</div>
            <span>{current.testimonial.client}</span>
          </div>
          <div className="projects__dots">
            {[0, 1].map(d => (
              <button
                key={d}
                className={`projects__dot ${testimonialIdx === d ? 'projects__dot--active' : ''}`}
                onClick={() => setTestimonialIdx(d)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}