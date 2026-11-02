
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    {/* Kolom Kiri */}
                    <div className="footer-info">
                        <a href="#home" className="footer-brand">
                            
                            Naufal Hilmy Munte
                        </a>

                        <p className="footer-description">
                            Berfokus pada pengembangan website yang modern, fungsional, dan responsif dengan menggabungkan teknologi, kreativitas, serta pengalaman pengguna.
                        </p>
                    </div>

                    {/* Kolom Tengah */}
                    <div className="footer-contact">
                        <h3>Informasi Kontak</h3>

                       <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=naufalhilmymunte@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
>
    <span>Email</span>
    naufalhilmymunte@gmail.com
</a>

                        <a
                            href="https://wa.me/62895602341207"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>WhatsApp</span>
                            0895-6023-41207
                        </a>

                        <div className="footer-location">
                            <span>Lokasi</span>
                            <p>Padang, Sumatera Barat</p>
                        </div>
                    </div>

                    {/* Kolom Kanan */}
                    <div className="footer-connect">
                        <h3>Temukan Saya</h3>

                        <div className="footer-socials">
                            <a
                                href="https://github.com/naufalmunte"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/naufalhilmy.m/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                title="Instagram"
                            >
                                <svg viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor"
                                     strokeWidth="1.8">
                                    <rect x="3" y="3" width="18" height="18" rx="5"/>
                                    <circle cx="12" cy="12" r="4"/>
                                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>

                        <p className="footer-connect-text">
                            Let's connect and create something great.
                        </p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © {currentYear} Naufal Hilmy Munte.
                        All rights reserved.
                    </p>

                    <a href="#home" className="footer-back-top">
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
