import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import '../css/OurProjects.css';

export default function OurProjects() {
  const [selected, setSelected] = useState(0);
  const [dropOpen, setDropOpen] = useState(false);

  const current = services[selected];

  return (
    <section className="projects" id="projects">
      <motion.h2 
        className="projects__heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span id='for-our'>Our</span> Projects
      </motion.h2>

      {/* Dropdown */}
      <div className="projects__dropdown-wrap">
        <button
          className="projects__dropdown-btn"
          onClick={() => setDropOpen(!dropOpen)}
        >
          <span>• {current.title}</span>
          <span className="projects__arrow">▼</span>
        </button>

        <AnimatePresence>
          {dropOpen && (
            <motion.div
              className="projects__dropdown-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {services.map((s, i) => (
                <button
                  key={s.id}
                  className={`projects__dropdown-item ${i === selected ? 'projects__dropdown-item--active' : ''}`}
                  onClick={() => {
                    setSelected(i);
                    setDropOpen(false);
                  }}
                >
                  {s.title}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          className="projects__card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
        >
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
          <motion.div 
            className="wwd__card wwd__card--active"
            id='projects__testimonial'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h4 className="projects__test-title">Client Testimonial</h4>
            <p className="projects__test-quote">
              "{current.testimonial.quote}"
            </p>

            <div className="projects__test-client">
              <div className="projects__test-avatar">
                {current.testimonial.client.charAt(0)}
              </div>
              <span id='testimonial-display'>{current.testimonial.client}</span>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}