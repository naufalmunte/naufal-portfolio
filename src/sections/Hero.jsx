import ProfileBadge from '../components/ProfileBadge';
const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-grid">

                {/* Konten Perkenalan */}
                <div className="hero-content">
                    <p className="hero-intro">
                        Halo, saya
                    </p>

                    <h1 className="hero-title">
                        Naufal Hilmy
                        <span>Munte.</span>
                    </h1>

                    <p className="hero-description">
                        Saya seorang Web Developer yang berfokus pada
                        pengembangan aplikasi web modern, fungsional,
                        dan mudah digunakan dengan memperhatikan
                        kualitas kode serta pengalaman pengguna.
                    </p>

                    {/* Tombol Aksi */}
                    <div className="hero-actions">

                       <a
                            href="/CV-NAUFAL HILMY MUNTE 2026.pdf"
                            download="CV-Naufal-Hilmy-Munte-2026.pdf"
                            className="btn-primary"
                        >
                            Unduh CV Saya
                        </a>

                        <a
                            href="#contact"
                            className="btn-secondary"
                        >
                            Hubungi Saya
                        </a>

                    </div>

                </div>

               {/* Visual Profil */}
                <div className="hero-visual">
                    <div className="hero-profile-image">
                        <img
                            src="images/profile.jpeg"
                            alt="Naufal Hilmy Munte"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
