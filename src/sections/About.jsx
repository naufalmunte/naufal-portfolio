
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-header">
                    <h2 className="section-title">
                        Mengenal Saya <span>Lebih Dekat.</span>
                    </h2>
                </div>

                <div className="about-grid">
                    {/* Deskripsi */}
                    <div className="about-content">
                        <p className="about-lead">
                            Halo! Saya Naufal Hilmy Munte, lulusan
                            D3 Manajemen Informatika yang memiliki
                            ketertarikan pada pengembangan aplikasi web.
                        </p>

                        <p className="about-description">
                            Saya memiliki pengalaman dalam membangun
                            aplikasi web menggunakan PHP, Laravel,
                            MySQL, dan teknologi pendukung lainnya.
                            Saya senang mempelajari hal baru serta
                            mengembangkan solusi digital yang
                            fungsional dan mudah digunakan.
                        </p>

                        <p className="about-description">
                            Bagi saya, pengembangan web bukan hanya
                            tentang menulis kode, tetapi juga
                            bagaimana menciptakan aplikasi yang dapat
                            memberikan manfaat dan pengalaman yang
                            baik bagi penggunanya.
                        </p>
                    </div>

                   
                    {/* Card Pendidikan */}
                    <div className="education-card">
                        <div className="education-item">
                            <div className="education-top">
                                <div className="education-logo">
                                    <img src="/images/pnp.png" alt="Logo Politeknik Negeri Padang" />
                                </div>

                                <div className="education-heading">
                                    <h3>Politeknik Negeri Padang</h3>
                                    <p>D3 Manajemen Informatika</p>
                                </div>

                                <span className="education-period">2023 – 2026</span>
                            </div>

                            <p className="education-description">
                                Program pendidikan vokasi di bidang manajemen informatika
                                dengan fokus pada pengembangan dan pengelolaan sistem
                                informasi. Memiliki Pengalaman langsung dalam pengembangan aplikasi web,
                                pengelolaan database, serta perancangan sistem informasi menggunakan Laravel, React, dan MySQL.
                            </p>

                            <div className="education-tags">
                                <span>GPA 3.60 / 4.00</span>
                                <span>Web Development</span>
                                <span>REST API & Backend</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
