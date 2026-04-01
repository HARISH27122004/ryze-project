import { useState } from 'react';
import '../css/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert('Message sent!'); };

  return (
    <section className="contact" id="contact" data-theme="light">
      <h2 className="contact__headline">
        Happy to See You On Board<br />
        Lets Scale You Up to the Stars
      </h2>
      <div className="contact__divider" />

      <div className="contact__body">
        <div className="contact__form-wrap">
          <h3 className="contact__form-title">Send a Message</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label>Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label>Message</label>
              <input
                name="message"
                placeholder="Talk Us Your Requirements"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="contact__btn">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>

        <div className="contact__info">
          <h3 className="contact__info-title">Contact Information</h3>
          <div className="contact__info-items">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="contact__info-label">Call Us</p>
                <a href="tel:+919150446985" className="contact__info-value">+91 91504 46985</a>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="contact__info-label">Email Us</p>
                <a href="mailto:hello@ryzeworks.com" className="contact__info-value">hello@ryzeworks.com</a>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="contact__info-label">Visit Us</p>
                <a href="#" className="contact__info-value">Bazaar Road, Mylapore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}