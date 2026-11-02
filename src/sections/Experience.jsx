
import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
    Code2,
    Database,
    Monitor
} from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="experience-header">
                   <h2 className="section-title">
                        Pengalaman<span>.</span>
                    </h2>

                    <p className="experience-subtitle">
                        Pengalaman profesional dalam pengembangan
                        aplikasi dan website.
                    </p>
                </div>

                <div className="experience-list">
                    <div className="experience-card">
                        <div className="experience-top">
                            <div className="experience-logo">
                                <img src="/images/seveninc.png" alt="Logo Seveninc" />
                            </div>

                            <div className="experience-heading">
                                <h3>Seveninc</h3>
                                <p>Fullstack Developer Intern</p>
                                <span className="experience-company">
                                    Yogyakarta, Indonesia
                                </span>
                            </div>

                            <span className="experience-period">
                                Feb – Jun 2026
                            </span>
                        </div>

                        <p className="experience-description">
                            Berkontribusi dalam pengembangan aplikasi
                            web Manajemen Inventory dan Titipsini sebagai Fullstack Developer, mulai dari
                            membangun antarmuka pengguna hingga
                            mengembangkan sisi backend dan integrasi
                            database.
                        </p>

                        <div className="experience-details">
                            <div className="experience-detail">
                                <CalendarDays size={16} />
                                <span>Februari – Juni 2026 · 4 Bulan</span>
                            </div>

                            <div className="experience-detail">
                                <MapPin size={16} />
                                <span>Yogyakarta, Indonesia</span>
                            </div>

                            <div className="experience-detail">
                                <Code2 size={16} />
                                <span>Frontend & Backend Development</span>
                            </div>

                            <div className="experience-detail">
                                <Database size={16} />
                                <span>Database Integration</span>
                            </div>
                        </div>

                        <div className="experience-tags">
                            <span>Fullstack Development</span>
                            <span>Web Development</span>
                            <span>Database Management</span>
                            <span>API Integration</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
