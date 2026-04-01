import '../css/Footer.css';
import TrueFocus from './TrueFocus';

export default function Footer() {
    return (
        <footer className="footer" id="footer" data-theme="light">
            <div className="footer__body">
                <div className="footer__brand">
                    
                    <TrueFocus
                        sentence="RYZE WORKS"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#5227FF"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                    {/* <p className="footer__tagline">We Create Work that Elevates Your Brand to the Next Level.</p> */}
                </div>
                <div className="footer__col">
                    <h4 className="footer__col-title">Quick Links</h4>
                    <ul className="footer__links">
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4 className="footer__col-title">Follow Us</h4>
                    <ul className="footer__links">
                        <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2025 Ryze. All rights reserved.</p>
            </div>
        </footer>
    );
}